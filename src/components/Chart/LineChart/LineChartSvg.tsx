import React, { useEffect, useMemo, useRef, useState } from 'react'
import { cubicSplineInterpolation } from './Curve'
import './LineChart.css'
import ToolTip from '../../ToolTip/ToolTip'

export interface LineChartI {
  width?: number,
  height?: number,
  lineType?: 'straight' | 'curved'
  labels: {
    x: string[] | number,
    y: string[] | number
  },
  dataSet: {
    color: string,
    points: number[]
  }[],
  xPadding?: number,
  yPadding?: number

}

type Point = { x: number, y: number }

const graphScale = {
  color: "#9B9EA5",
  lineWidth: 1,
  cutGap: 12,
  cutSize: 9,
  cutPosition: "center",
  textColor: "#1C2433"
}

const LineChartSvg = ({
  width = 600,
  height = 450,
  labels,
  dataSet,
  lineType = "curved",
  xPadding = 60,
  yPadding = 50,
}: LineChartI) => {

  const [curveLines, setCurveLines] = useState<React.JSX.Element[]>([])
  const [graphScaleLine, setGraphScaleLine] = useState<React.JSX.Element>()
  const [currentHoveredBlock, setCurrentHoveredBlock] = useState<Point | undefined>()
  const [toolTipDiv, setToolTipDiv] = useState<React.JSX.Element>()
  const chartRef = useRef<SVGSVGElement>(null)

  const origin = {
    x: xPadding,
    y: height - yPadding,
  }

  const xBlockCount = typeof labels.x === "number" ? labels.x : labels.x.length;
  const yBlockCount = typeof labels.y === "number" ? labels.y : labels.y.length;

  const xBlockWidth = (width - (2 * xPadding)) / xBlockCount;
  const yBlockWidth = (height - (2 * yPadding)) / yBlockCount;

  const maxY = useMemo<number>(() => {
    let maxY = 0;
    dataSet.forEach(i => {
      let currMax = Math.max(...i.points)
      if (currMax > maxY) maxY = currMax
    })
    return (maxY - (maxY % 10)) + 10;
  }, [dataSet])

  const maxX = width - (2 * xPadding)

  const getYPixels = (y: number) => {
    const takesBlock = y / (maxY / yBlockCount)
    return origin.y - (takesBlock * yBlockWidth)
  }

  const getXPixels = (x: number) => {
    const takesBlock = x / (maxX / xBlockCount)
    return origin.x + (takesBlock * xBlockWidth)
  }



  const getPointsFromIndex = (index: number, line: "horizontal" | "vertical") => {
    const blockWidth = line === "vertical" ? yBlockWidth : xBlockWidth;
    const currSize = (blockWidth * (index + 1)) - (graphScale.cutPosition === "center" ? blockWidth / 2 : graphScale.cutPosition === "left" ? blockWidth : 0);
    return line === "vertical" ? origin.y - currSize : origin.x + currSize
  }

  const drawScale = () => {
    let xLabelPoints: Point[] = []
    let yLabelPoints: Point[] = []

    const makeScaleLabel = (point: Point, label: string, line: "horizontal" | "vertical") => {
      return (
        <text
          className={`inte-scaleLabel inte-scaleLabel--${line}`}
          x={line === 'vertical' ? point.x - (graphScale.cutGap ?? 0) : point.x}
          y={line === 'horizontal' ? point.y + (graphScale.cutGap ?? 0) : point.y}
          stroke={graphScale.textColor}
          strokeWidth={graphScale.lineWidth / 4}
        >
          {label}
        </text>
      )
    }

    const cutsInXAxis = Array(xBlockCount).fill(0).map((item, index) => {
      const x1 = getPointsFromIndex(index, "horizontal")
      const x2 = x1;
      const y1 = origin.y
      const y2 = origin.y + (graphScale?.cutSize ?? 0);
      xLabelPoints.push({
        x: x2, y: y2
      })
      return `M ${x1},${y1} ${x2},${y2}`
    }).join(" ")

    const cutsInYAxis = Array(yBlockCount).fill(0).map((item, index) => {
      const x1 = xPadding;
      const x2 = xPadding - (graphScale?.cutSize ?? 0);
      const y1 = getPointsFromIndex(index, "vertical")
      const y2 = y1;
      yLabelPoints.push({
        x: x2, y: y2
      })
      return `M ${x1},${y1} ${x2},${y2}`
    }).join(" ")

    const getYLabel = (index: number, tot: number) => {
      const blockWidth = maxY / tot
      const currValue = blockWidth * (index + 1)
      return graphScale.cutPosition === "center" ? currValue - (blockWidth / 2) : graphScale.cutPosition === "left" ? currValue + blockWidth : currValue
    }
    const xLabels = xLabelPoints.map((item, index) => makeScaleLabel(item, typeof labels.x === "number" ? `${xPadding + item.x}` : labels.x[index], "horizontal"))

    const ylabels = yLabelPoints.map((item, index) => makeScaleLabel(item, typeof labels.y === "number" ? `${getYLabel(index, labels.y)}` : labels.y[index], "vertical"))

    return (
      <>
        <path
          d={`M ${xPadding},${yPadding} ${origin.x},${origin.y} ${width - xPadding},${height - yPadding} ${cutsInXAxis} ${cutsInYAxis}`}
          strokeWidth={graphScale.lineWidth}
          stroke={graphScale.color}
          fill='none'
        />
        {
          xLabels.map((label, ind) => <React.Fragment key={ind}>{label}</React.Fragment>)
        }
        {
          ylabels.map((label, ind) => <React.Fragment key={ind}>{label}</React.Fragment>)
        }
      </>
    )
  }

  const drawCurve = () => {
    const xPoints = Array(xBlockCount).fill(0).map((item, index) => getPointsFromIndex(index, "horizontal"))
    const curvesEquations = dataSet.map((item, index) => {
      const currPoints = xPoints.map((x, index) => {
        return ({
          x: x,
          y: getYPixels(item.points[index])
        })
      })
      return cubicSplineInterpolation(
        currPoints,
        xPadding,
        yPadding,
        width - xPadding,
        height - yPadding
      )
    })

    const curvesPoint = lineType === "curved" ? curvesEquations.map((equation, index) => {
      const points: Point[] = []
      for (let i = xPadding; i < width - xPadding; i++) {
        points.push({
          x: i,
          y: equation(i)
        })
      }
      return points
    }) : dataSet.map((item, index) => {
      const points: Point[] = [];
      for (let i = 0; i < xPoints.length; i++) {
        points.push({
          x: xPoints[i],
          y: getYPixels(item.points[i])
        })
      }
      return points
    })

    const curveLines = curvesPoint.map((item, index) => {
      let path = ''
      item.forEach(p => path += `${p.x},${p.y} `)
      return (
        <path
          className='inte-LineChart__dataLine'
          d={`M ${path}`}
          strokeWidth={graphScale.lineWidth * 3}
          stroke={dataSet[index].color}
          fill="none"
        />
      )
    })

    return curveLines
  }

  const handelMouseOver = (e: MouseEvent) => {
    const currPoint = {
      x: e.clientX - (chartRef.current?.getBoundingClientRect().left ?? 0),
      y: e.clientY - (chartRef.current?.getBoundingClientRect().top ?? 0)
    }
    if (currPoint.x < xPadding || currPoint.y < yPadding || currPoint.x > width - xPadding || currPoint.y > height - yPadding) {
      setCurrentHoveredBlock(undefined)
    }
    else {
      setCurrentHoveredBlock({
        x: Math.floor((currPoint.x - origin.x) / xBlockWidth),
        y: Math.floor((origin.y - currPoint.y) / yBlockWidth),
      })
    }
  }

  useEffect(() => {
    if (!chartRef) return
    setCurveLines(drawCurve())
    setGraphScaleLine(drawScale())
    chartRef.current?.addEventListener('mousemove', handelMouseOver)
    return () => {
      chartRef.current?.removeEventListener('mousemove', handelMouseOver)
    }
  }, [dataSet , lineType])

  const handelCurvePointHover = (datasetIndex: number) => {
    if (!currentHoveredBlock) return
    const hoveredDataSet = dataSet[datasetIndex]
    const currentYvalue = hoveredDataSet.points[currentHoveredBlock.x]
    const currentHoveredPoints = dataSet.filter(item => currentYvalue === item.points[currentHoveredBlock.x])

    const style: React.CSSProperties = {
      ['--color' as any] : graphScale.color,
      ["--height" as any]: `${origin.y  - getYPixels(currentYvalue) - (graphScale.lineWidth * 6)}px`,
      ["--lineWidth" as any] :2 * graphScale.lineWidth + "px",
      top: getYPixels(currentYvalue) + "px",
      left: getXPixels(currentHoveredBlock.x * xBlockWidth) + (graphScale.cutPosition === "center" ? xBlockWidth / 2 : graphScale.cutPosition === "right" ? xBlockWidth : 0) + "px",
    }

    const div = (
      <div
        className='inte-LineChart__toolTipBox'
        style={style}
        onMouseLeave={() => setToolTipDiv(undefined)}
      >
        {
          currentHoveredPoints.map((item, index) => {
            const label = typeof labels.x !== "number" ? labels.x[currentHoveredBlock.x] : "customLabel"
            return (
              <ToolTip
                activator={<div
                  key={index}
                  className='inte-LineChart__tooltip-circle'
                  style={{
                    width: graphScale.lineWidth * 12 + "px",
                    height: graphScale.lineWidth * 12 + "px",
                    borderRadius: "50%",
                    border: "1px solid #ffffff",
                    backgroundColor: item.color,
                  }}
                />}
                helpText={
                  <div className='inte-LineChart__toolTipData'>
                    <span>{label}</span>
                    <span>{typeof labels.y !== "number" ? labels.y[currentHoveredBlock.y] : currentYvalue}</span>
                  </div>
                }
              />
            )
          })
        }
      </div>
    )

    setToolTipDiv(div)
  }

  return (
    <div className='inte-LineChart' >
      <svg
        ref={chartRef}
        width={width}
        height={height}
      >
        {
          graphScaleLine
        }
        {
          curveLines.map((line, ind) => <React.Fragment key={ind}>{line}</React.Fragment>)
        }
        {
          (!!currentHoveredBlock && !toolTipDiv) && (
            dataSet.map((item, ind) => (
              <circle
                className='inte-lineChart__circle'
                key={ind}
                cx={getXPixels(currentHoveredBlock.x * xBlockWidth) + (graphScale.cutPosition === "center" ? xBlockWidth / 2 : graphScale.cutPosition === "right" ? xBlockWidth : 0)}
                cy={getYPixels(item.points[currentHoveredBlock.x])}
                fill={item.color}
                strokeWidth={graphScale.lineWidth * 2}
                stroke='#ffffff'
                r={graphScale.lineWidth * 6}
                style={{
                  cursor: 'pointer'
                }}
                onMouseOver={() => handelCurvePointHover(ind)}
              />
            ))
          )
        }
      </svg>
      {
        toolTipDiv && toolTipDiv
      }
    </div>
  )
}

export default LineChartSvg