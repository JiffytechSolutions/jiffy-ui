import React, { useCallback, useEffect, useMemo, useRef } from 'react'

const xPadding = 50;
const yPadding = 30;
const cutWidth = 10;

const drawScaleLine = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  context.lineWidth = 2;
  context.strokeStyle = "black";

  context.beginPath();
  context.moveTo(xPadding, 0);
  context.lineTo(xPadding, canvas.height - yPadding);
  context.lineTo(canvas.width, canvas.height - yPadding);
  context.stroke()
}

export interface dataSetLineChart {
  labels: string[],
  dataSet: { color: string, points: number[] }[],
}

const LineChart2 = ({ labels, dataSet }: dataSetLineChart) => {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const maxY = useMemo<number>(() => {
    let maxY = 0;
    dataSet.forEach(i => {
      let currMax = Math.max(...i.points)
      if (currMax > maxY) maxY = currMax
    })
    maxY += 100 - maxY % 100;
    return maxY;
  }, [dataSet])

  const getXPixel = useCallback((val: number, canvas: HTMLCanvasElement) => {
    return ((canvas.width - xPadding) / labels.length) * val + (xPadding);
  }, [labels])

  const getYPixel = useCallback((val: number, canvas: HTMLCanvasElement) => {
    return canvas.height - (((canvas.height - yPadding) / maxY) * val) - yPadding;
  }, [labels, maxY])


  useEffect(() => {
    if (!canvasRef.current) return;
    const context = canvasRef.current.getContext("2d");
    if (!context) return;
    drawScaleLine(context, canvasRef.current)

    for (let i = 0; i < labels.length; i++) {
      const maxWidth = (canvasRef.current.width - xPadding)/labels.length
      const textMeasure = context.measureText(labels[i])
      const textHeight = textMeasure.actualBoundingBoxAscent + textMeasure.actualBoundingBoxDescent
      const textWidth = textMeasure.width
      context.fillText(labels[i], getXPixel(i, canvasRef.current) - (textWidth/2), canvasRef.current.height+ (cutWidth + textHeight + 5) - yPadding , maxWidth);
    }
    for (let i = 0; i < maxY; i += 100) {
      const textMeasure = context.measureText(i.toString())
      const textHeight = textMeasure.actualBoundingBoxAscent + textMeasure.actualBoundingBoxDescent
      const textWidth = textMeasure.width
      context.fillText(i.toString(), xPadding - (cutWidth + textWidth + 5), getYPixel(i, canvasRef.current) + textHeight/2);
    }

    drawCutsOnLine(context , canvasRef.current)

    dataSet.forEach(item => {
      if (canvasRef.current) {
        drawLine(context, canvasRef.current, item.color, item.points)
        drawDots(context, canvasRef.current, item.color, item.points)
      }
    })
  }, [dataSet])

  const drawCutsOnLine = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    context.lineWidth = 2;
    context.strokeStyle = "red";
  
    context.beginPath();
    for(let i = 0;i<labels.length;i++) {
      context.moveTo(getXPixel(i,canvas), canvas.height - yPadding);
      context.lineTo(getXPixel(i,canvas), canvas.height - (yPadding - cutWidth));
    }
    for (let i = 0; i < maxY; i += 100) {
      context.moveTo(xPadding - cutWidth, getYPixel(i,canvas))
      context.lineTo(xPadding, getYPixel(i,canvas))
    }
    context.stroke()
  }

  const drawLine = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, color: string, pointArr: number[]) => {
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(getXPixel(0, canvas), getYPixel(pointArr[0], canvas));

    for (var i = 1; i < pointArr.length; i++) {
      context.lineTo(getXPixel(i, canvas), getYPixel(pointArr[i], canvas));
    }
    context.stroke();
  }

  const drawDots = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, color: string, pointArr: number[]) => {
    context.fillStyle = color;
    for (var i = 0; i < pointArr.length; i++) {
      context.beginPath();
      context.arc(getXPixel(i, canvas), getYPixel(pointArr[i], canvas), 4, 0, Math.PI * 2, true);
      context.fill();
    }
  }

  return (
    <>
      <canvas ref={canvasRef} width="1200" height="400" />
    </>
  )
}

export default LineChart2