import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import './LineChart.css'
export interface dataSetLineChart {
  labels: string[],
  dataSet: { color: string, points: number[] }[],
}

const xPadding = 44;
const yPadding = 50;

const lineWidth = 1;
const lineColor = "#9B9EA5";
const textColor = "#1C2433";

const cutSize = 9
const verticalBlockCount = 10;
const cutGap = 12


const LineChart = ({ labels, dataSet }: dataSetLineChart) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasId = useId()
  const [{ canvasWidth, canvasHeight }, setContainer] = useState({
    canvasHeight: 500,
    canvasWidth: 800
  })

  const maxY = useMemo<number>(() => {
    let maxY = 0;
    dataSet.forEach(i => {
      let currMax = Math.max(...i.points)
      if (currMax > maxY) maxY = currMax
    })
    return (maxY - (maxY%10)) + 10;
  }, [dataSet])

  const scaleLable = (point: { x: number, y: number }, label: string, ctx: CanvasRenderingContext2D, direction: "horizontal" | "vertical", maxWidth: number) => {
    ctx.textBaseline = direction === "horizontal" ? "middle" : "bottom";
    const textMeasure = ctx.measureText(label)
    const textWidth = textMeasure.width;
    const textHeight = textMeasure.fontBoundingBoxAscent + textMeasure.fontBoundingBoxDescent
    ctx.fillStyle = textColor
    let x = 0, y = 0;
    if (direction === "horizontal") {
      y = point.y + cutGap + (textHeight/2);
      x = point.x - (textWidth / 2);
    }
    else {
      y = point.y + (textHeight / 2);
      x = point.x - (textWidth + cutGap);
    }

    ctx.fillText(label, x, y, maxWidth);
  }

  useEffect(() => {
    const canvas = containerRef.current?.getElementsByTagName("canvas")[0];
    const ctx = containerRef.current?.getElementsByTagName("canvas")[0]?.getContext('2d')
    if (!canvas || !ctx) return
    drawScale(ctx, canvas)
    dataSet.forEach(i => {
      drawCurve(canvas,ctx, i)
    })
    

  }, [])

  const getXPoint = (canvas:HTMLCanvasElement , totalPoints:number , currPoint:number , origin : {x:number , y:number}) => {
    const horizontalBlockWidth = (canvas.width - (2 * xPadding)) / totalPoints;
    const currDist = (currPoint + 1) * horizontalBlockWidth;
    const point = (origin.x + currDist - (horizontalBlockWidth / 2)) - (lineWidth / 2);
    return point
  }

  const getYPoint = (canvas:HTMLCanvasElement , totalPoints:number, currPoint:number, origin : {x:number , y:number}) => {
    const verticalBlockWidth = (canvas.height - (2 * yPadding)) / verticalBlockCount;
    const currDist = (currPoint + 1) * verticalBlockWidth;
    const point = (origin.y - (currDist - (verticalBlockWidth / 2))) - (lineWidth / 2);
    return point
  }

  const getYLength = (totalPoints:number, currPoint:number , totalLength:number , origin:number) => {
    const blockDistance = totalLength/totalPoints;
    console.log(blockDistance , "block distance" , totalLength , totalPoints)
    return origin - (currPoint * blockDistance)
  }

  const drawCurve = (canvas:HTMLCanvasElement , ctx:CanvasRenderingContext2D, data:{ color: string, points: number[] }) => {
    const origin = {
      x: xPadding,
      y: canvas.height - yPadding,
    }
    ctx.strokeStyle = data.color

    
    ctx.beginPath();
    ctx.strokeStyle = data.color
    ctx.lineWidth = 1;
    ctx.moveTo(xPadding , canvas.height - yPadding)
    for(let i = 0;i<data.points.length;i++){
      const xPoint = getXPoint(canvas , labels.length , i , origin)
      const yPoint = getYLength(maxY , data.points[i] ,canvas.height - (2 * yPadding) , origin.y)
      ctx.lineTo(xPoint,yPoint )
    }
    ctx.stroke()

  }

  console.log(maxY,"console.log")

  const drawScale = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    const origin = {
      x: xPadding,
      y: canvas.height - yPadding,
    }
    ctx.beginPath()
    ctx.moveTo(xPadding, yPadding)
    ctx.lineTo(origin.x, origin.y);
    ctx.lineTo(canvas.width - xPadding, origin.y)

    for (let i = 0; i < labels.length; i++) {
      const currPoint = getXPoint(canvas , labels.length , i , origin);
      ctx.moveTo(currPoint , origin.y);
      ctx.lineTo(currPoint, origin.y + cutSize);
      scaleLable({x : currPoint, y : origin.y + cutSize} , labels[i] , ctx , "horizontal" , yPadding - (cutGap + cutSize))
    }

    for (let i = 0; i < verticalBlockCount; i++) {
      const currPoint = getYPoint(canvas , verticalBlockCount, i , origin);
      const currLabel = ((i+1) * (maxY/verticalBlockCount)) - ((maxY/verticalBlockCount)/2);
      ctx.moveTo(origin.x, currPoint);
      ctx.lineTo(origin.x - cutSize, currPoint);
      scaleLable({x : origin.x - cutSize, y : currPoint} , `${currLabel}` , ctx , "vertical" , xPadding - (cutSize + cutGap))
    }

    ctx.stroke()
  }

  return (
    <div
      className='inte-LineChart'
      ref={containerRef}
    >
      <canvas className='inte-canvas' id={canvasId} width={canvasWidth} height={canvasHeight}></canvas>
    </div>
  )
}

export default LineChart