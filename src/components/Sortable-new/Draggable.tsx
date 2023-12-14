import React, { MouseEvent, useEffect, useRef, useState } from 'react'

import "./SortableNew.css"
import PortalComponent from '../../utilities/PoratalComponent';

export type dragableArray = {
  content: React.ReactNode;
  id: number | string;
}[]

type draggableDataI = {
  index: number;
  element: React.ReactNode;
  thresholdCursor: { top: number; left: number };
  dummyIndex: number;
};

export interface DraggableI {
  data: dragableArray
  onChange: (newAlignedData: dragableArray) => void;
  animationDuration?: number;
  containerStyle?: React.CSSProperties
}

type elementRect = {
  top: number,
  left: number,
  width: number,
  height: number,
  bottom: number,
  right: number,
}

const swapArray = (from: number, to: number, arr: any[]): any[] => {
  let res = [...arr];
  const delItem = arr[from];
  res.splice(from, 1);
  res.splice(to, 0, delItem);
  return [...res];
};

const makeRangeArray = (container: HTMLElement) => {
  const containerRect = container.getBoundingClientRect();
  const res = Array.from(container.children).map(item => {
    const currRect = item.getBoundingClientRect();
    const currRange = {
      top: currRect.top + container.scrollTop - containerRect.top,
      bottom: currRect.bottom + container.scrollTop - containerRect.top,
      left: currRect.left + container.scrollLeft - containerRect.left,
      right: currRect.right + container.scrollLeft - containerRect.left,
      width: currRect.width,
      height: currRect.height
    }
    return currRange;
  })
  return res;
}

const pointInRangeArr = (arr: elementRect[], point: { x: number; y: number }) => {
  const { x, y } = point;
  for (let i = 0; i < arr.length; i++) {
    const currRect = arr[i]
    if (
      currRect.top <= y &&
      currRect.bottom >= y &&
      currRect.left <= x &&
      currRect.right >= x
    )
      return i;
  }

  return -1
};

const Draggable = ({ data, onChange, animationDuration = 300, containerStyle }: DraggableI) => {

  const containerRef = useRef<HTMLDivElement>(null)
  const dummyContainerRef = useRef<HTMLDivElement>(null)
  const fixedElementRef = useRef<HTMLDivElement>(null)

  const [dummyData, setDummyData] = useState<dragableArray>([])
  const [draggableData, setDraggableData] = useState<draggableDataI>()

  const [originalRangeArray, setOriginalRangeArray] = useState<elementRect[]>([])
  const [dummyRangeArray, setDummyRangeArray] = useState<elementRect[]>([])
  const [transitionArray, setTransitionArray] = useState<{ top: number, left: number }[]>([])

  const timerRef = useRef<NodeJS.Timeout>()

  const handelAutoScroll = (event: MouseEvent) => {
    const edgeSize = 50
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect();

    const viewportX = event.clientX;
    const viewportY = event.clientY;
    const viewportWidth = containerRef.current.clientWidth;
    const viewportHeight = containerRef.current.clientHeight;

    const edgeTop = edgeSize + containerRect.top;
    const edgeLeft = edgeSize + containerRect.left;
    const edgeBottom = (viewportHeight + containerRect.top - edgeSize);
    const edgeRight = (viewportWidth + containerRect.left - edgeSize);

    const isInLeftEdge = (viewportX < edgeLeft);
    const isInRightEdge = (viewportX > edgeRight);
    const isInTopEdge = (viewportY < edgeTop);
    const isInBottomEdge = (viewportY > edgeBottom);

    if (!(isInLeftEdge || isInRightEdge || isInTopEdge || isInBottomEdge)) {
      clearTimeout(timerRef.current);
      return;
    }

    const containerWidth = Math.max(
      containerRef.current.scrollWidth,
      containerRef.current.offsetWidth,
      containerRef.current.clientWidth,
    );

    const containerHeight = Math.max(
      containerRef.current.scrollHeight,
      containerRef.current.offsetHeight,
      containerRef.current.clientHeight
    );

    const maxScrollX = (containerWidth - viewportWidth);
    const maxScrollY = (containerHeight - viewportHeight);

    function adjustWindowScroll() {
      if (!containerRef.current) return false

      const currentScrollX = containerRef.current.scrollLeft;
      const currentScrollY = containerRef.current.scrollTop;

      const canScrollUp = (currentScrollY > 0);
      const canScrollDown = (currentScrollY < maxScrollY);
      const canScrollLeft = (currentScrollX > 0);
      const canScrollRight = (currentScrollX < maxScrollX);

      // Since we can potentially scroll in two directions at the same time,
      // let's keep track of the next scroll, starting with the current scroll.
      // Each of these values can then be adjusted independently in the logic
      // below.
      let nextScrollX = currentScrollX;
      let nextScrollY = currentScrollY;

      // As we examine the mouse position within the edge, we want to make the
      // incremental scroll changes more "intense" the closer that the user
      // gets the viewport edge. As such, we'll calculate the percentage that
      // the user has made it "through the edge" when calculating the delta.
      // Then, that use that percentage to back-off from the "max" step value.
      const maxStep = 50;

      // Should we scroll left?
      if (isInLeftEdge && canScrollLeft) {
        const intensity = ((edgeLeft - viewportX) / edgeSize);
        nextScrollX = (nextScrollX - (maxStep * intensity));

        // Should we scroll right?
      } else if (isInRightEdge && canScrollRight) {
        const intensity = ((viewportX - edgeRight) / edgeSize);
        nextScrollX = (nextScrollX + (maxStep * intensity));
      }
      // Should we scroll up?
      if (isInTopEdge && canScrollUp) {
        const intensity = ((edgeTop - viewportY) / edgeSize);
        nextScrollY = (nextScrollY - (maxStep * intensity));
        
        // Should we scroll down?
      } else if (isInBottomEdge && canScrollDown) {
        const intensity = ((viewportY - edgeBottom) / edgeSize);
        nextScrollY = (nextScrollY + (maxStep * intensity));
      }

      // Sanitize invalid maximums. An invalid scroll offset won't break the
      // subsequent .scrollTo() call; however, it will make it harder to
      // determine if the .scrollTo() method should have been called in the
      // first place.
      nextScrollX = Math.max(0, Math.min(maxScrollX, nextScrollX));
      nextScrollY = Math.max(0, Math.min(maxScrollY, nextScrollY));

      if ((nextScrollX !== currentScrollX) || (nextScrollY !== currentScrollY)) {
        containerRef.current.scrollTo(nextScrollX, nextScrollY);
        return (true);
      } else return (false);

    }

    (function checkForWindowScroll() {

      clearTimeout(timerRef.current);

      if (adjustWindowScroll()) {

        timerRef.current = setTimeout(checkForWindowScroll, 30);

      }

    })();

  }

  const handelMouseDown = (event: MouseEvent, index: number) => {
    if (!containerRef.current) return
    const eleRect = event.currentTarget.getBoundingClientRect()

    const thresholdCursor = {
      left: event.clientX - eleRect.left,
      top: event.clientY - eleRect.top,
    }

    const fixedEle = (
      <div
        ref={fixedElementRef}
        className='inte-draggable__item inte-draggable__item--dummy'
        style={{
          top: eleRect.top,
          left: eleRect.left,
          width: eleRect.width
        }}
      >
        {
          data[index].content
        }
      </div>
    )

    setDraggableData({
      dummyIndex: index,
      element: fixedEle,
      index: index,
      thresholdCursor: thresholdCursor
    })

    setDummyData([...data])
  }

  const handelMouseMove = (event: any) => {
    if (!draggableData || !containerRef.current || !fixedElementRef.current) return;
    fixedElementRef.current.style.top = event.clientY - draggableData.thresholdCursor.top + 'px';
    fixedElementRef.current.style.left = event.clientX - draggableData.thresholdCursor.left + 'px';

    const { top, left } = containerRef.current.getBoundingClientRect()

    handelAutoScroll(event)

    const latestIndex = pointInRangeArr(
      originalRangeArray,
      {
        x: event.clientX + containerRef.current.scrollLeft - left,
        y: event.clientY + containerRef.current.scrollTop - top
      }
    )

    if (latestIndex !== -1) {
      setDraggableData(prev => prev ? { ...prev, dummyIndex: latestIndex } : prev)
    }

  }

  const handelMouseUp = () => {
    setDraggableData(undefined);
    setDummyData([])
    setTransitionArray([])
    if (draggableData) {
      onChange(swapArray(draggableData.index, draggableData.dummyIndex, data));
    }
  }

  const handelResize = () => {
    if (containerRef.current) {
      let rangeArr = makeRangeArray(containerRef.current);
      setOriginalRangeArray([...rangeArr])
    }
    if (dummyContainerRef.current) {
      let rangeArr = makeRangeArray(dummyContainerRef.current);
      setDummyRangeArray([...rangeArr])
    }
  }

  useEffect(() => {
    if (!containerRef.current) return;
    window.addEventListener("mousemove", handelMouseMove)
    window.addEventListener("mouseup", handelMouseUp);
    return () => {
      window.removeEventListener("mousemove", handelMouseMove)
      window.removeEventListener("mouseup", handelMouseUp);
    }
  }, [draggableData])

  useEffect(() => {
    if (!originalRangeArray.length || !dummyRangeArray.length || !draggableData || !containerRef.current) return;

    const dArr = Array(containerRef.current.children.length).fill(0).map((item, ind) => ind);

    const originalIndexOfDummy = swapArray(
      draggableData.dummyIndex,
      draggableData.index,
      dArr
    );

    const res = originalRangeArray.map((item, i) => {
      const currIndexInDummy = originalIndexOfDummy[i];
      const currTransition = {
        top: dummyRangeArray[currIndexInDummy].top - originalRangeArray[i].top,
        left: dummyRangeArray[currIndexInDummy].left - originalRangeArray[i].left
      }
      return currTransition
    })

    setTransitionArray([...res])

  }, [originalRangeArray, dummyRangeArray, draggableData]);

  useEffect(() => {
    if (!containerRef.current) return;
    let rangeArr = makeRangeArray(containerRef.current);
    setOriginalRangeArray([...rangeArr])

    window.addEventListener("resize", handelResize)

    return () => {
      window.removeEventListener("resize", handelResize)
    }
  }, [data])

  useEffect(() => {
    if (!dummyContainerRef.current) return;
    let rangeArr = makeRangeArray(dummyContainerRef.current);
    setDummyRangeArray([...rangeArr])
  }, [draggableData])

  return (
    <>
      <div
        ref={containerRef}
        className='inte-draggable'
        style={containerStyle}
      >
        {data.map((ele, ind) => {
          const currentTransition = transitionArray[ind]
            ? `${transitionArray[ind].left ?? 0}px,${transitionArray[ind].top ?? 0
            }px,0`
            : "(0 0  0)";
          return (
            <div
              key={ele.id}
              className="inte-draggable__item"
              onMouseDown={(event) => handelMouseDown(event, ind)}
              style={{
                opacity: draggableData?.index === ind ? ".2" : "",
                transition: draggableData ? `transform ${animationDuration}ms ` : "",
                transform: draggableData
                  ? `translate3d(${currentTransition})`
                  : "",
                position: draggableData ? "relative" : undefined,
                userSelect: draggableData ? "none" : undefined
              }}
            >
              {ele.content}
            </div>
          );
        })}
      </div>
      {
        !!dummyData.length && (
          <div
            ref={dummyContainerRef}
            className='inte-draggable inte-draggable--dummy'
            style={{
              ...containerStyle,
              width: containerRef.current?.getBoundingClientRect().width + "px"
            }}
          >
            {
              dummyData.map((ele) => {
                return (
                  <div
                    key={ele.id}
                    className="inte-draggable__item"
                  >
                    {ele.content}
                  </div>
                );
              })
            }
          </div>
        )
      }
      <PortalComponent>{
        draggableData?.element
      }</PortalComponent>
    </>
  )
}

export default Draggable