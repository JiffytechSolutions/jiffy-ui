import React, { useEffect, useMemo, useRef, useState } from 'react'
import "./SortableNew.css";
import getClassNames from "../../utilities/getClassnames";
import PortalComponent from '../../utilities/PoratalComponent';

export interface SortableI {
  data: SortableDataI[]
  onChange: (newAlignedData: SortableDataI[]) => void
}

export interface SortableDataI {
  id: any;
  content: React.ReactNode
}

type DraggableDataI = {
  index: number,
  element: React.ReactNode
  elementRect: DOMRect
  thresholdCursor: { top: number, left: number }
  dummyIndex: number
}

const swapArray = (start : number, end : number , arr:any[]) => {
  let res = arr
  const step = end - start > -1 ? 1 : -1;
  let currInd = start;
  const prev = arr[start];
  while(currInd !== end + step) {
    res[currInd] = arr[currInd + step]
    currInd = currInd + step
  }
  res[end] = prev
  return res
}

const findInRangeArr = (start : number, end : number , arr : number[][]) => {
  for(let i = 0; i < arr.length;i++){
    if(start >= arr[i][0] && start <= arr[i][1]){
      return i
    }
  }
}

const SortableT = ({ data, onChange }: SortableI) => {

  const [draggableData, setDraggableData] = useState<DraggableDataI | undefined>()
  const [transitionItemArray, setTransitionItemArray] = useState<number[]>([])

  const [itemRangeArray, setItemRangeArray] = useState<number[][]>([[]])


  const containerRef = useRef<HTMLDivElement>(null)
  const fixedElementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(!containerRef.current) return
    let rangeArr = Array.from(containerRef.current.children).map(item => {
      const rect = item.getBoundingClientRect()
      return [rect.top , rect.bottom]
    })

    setItemRangeArray(rangeArr)

  },[containerRef.current])


  const handelMouseDown = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const elementRect = event.currentTarget.children[0].getBoundingClientRect()

    const thresholdCursor = {
      left: event.pageX - elementRect.left,
      top: event.pageY - elementRect.top,
    }

    const ele = (
      <div
        ref={fixedElementRef}
        style={{ top: elementRect.top + "px", left: elementRect.left + "px" }}
        className='inte-sortable__item inte-sortable__item--dummy'>
        {
          data[index].content
        }
      </div>
    )

    setDraggableData({
      index: index,
      element: ele,
      elementRect: elementRect,
      thresholdCursor: thresholdCursor,
      dummyIndex: index
    })
  }

  const handelMouseMove = (event: MouseEvent) => {
    if (!fixedElementRef.current || !draggableData) return
    fixedElementRef.current.style.top = event.pageY - draggableData.thresholdCursor.top + "px"
    fixedElementRef.current.style.left = event.pageX - draggableData.thresholdCursor.left + "px"

    // const currentElementsBelowFromCursor = document.elementsFromPoint(event.pageX, event.pageY).filter(e => {
    //   const arr = Array.from(e.classList);
    //   return arr.includes("inte-sortable__item") && !arr.includes("inte-sortable__item--dummy")
    // })[0];

    const latestIndex = findInRangeArr(event.pageY, event.pageY + draggableData.elementRect.height , itemRangeArray)

    console.log(latestIndex)

    if (latestIndex !== undefined) {
      let currLatestIndex = Number(latestIndex);

      let currIndex = draggableData.index;
      const stepper = currLatestIndex - currIndex > 0 ? 1 : -1;
      const tranArr: number[] = []
      while (currIndex !== currLatestIndex + stepper) {
        tranArr[currIndex] = (draggableData.elementRect.height + 10) * (-stepper)
        currIndex += stepper;
      }
      
      console.log(currLatestIndex , "currLatestIndex" , transitionItemArray[currLatestIndex])

      setDraggableData(prev => {
        return prev ? {
          ...prev, dummyIndex: currLatestIndex
        } : undefined
      })
      setTransitionItemArray(tranArr)

    }
  }

  // console.log(draggableData?.dummyIndex , transitionItemArray)

  const handelMouseUp = (event: MouseEvent) => {
    setDraggableData(undefined)
    setTransitionItemArray([])
    if (draggableData) {

      onChange(swapArray(draggableData.index , draggableData.dummyIndex , data))
    }
  }

  

  useEffect(() => {
    if (draggableData?.element) {
      window.addEventListener("mousemove", handelMouseMove)
      window.addEventListener("mouseup", handelMouseUp)
    }
    return () => {
      window.removeEventListener("mousemove", handelMouseMove)
      window.removeEventListener("mouseup", handelMouseUp)
    }
  }, [draggableData])


  return (
    <div
      ref={containerRef}
      className='inte-sortable--container'
    >
      {
        data.map((ele, index) => {
          return (
            <div
              key={ele.id}
              className="inte-sortable__item"
              onMouseDown={(e) => handelMouseDown(e, index)}
              style={{
                visibility: draggableData?.index === index ? "hidden" : "visible",
                transition:draggableData ? "transform 200ms " : "",
                transform: draggableData ? `translate3d(0,${transitionItemArray[index] ?? 0}px,0)` : "",
                position: draggableData ? "relative" : undefined
              }}
            >
              {ele.content}
            </div>)
        })
      }
      <PortalComponent>{draggableData?.element}</PortalComponent>
    </div>
  )
}

export default SortableT