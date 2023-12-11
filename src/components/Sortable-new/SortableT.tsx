import React, { useEffect, useRef, useState } from "react";
import PortalComponent from "../../utilities/PoratalComponent";
import { CSSProperties } from "styled-components";
export interface SortableI {
  data: SortableDataI[];
  onChange: (newAlignedData: SortableDataI[]) => void;
  animationDuration?:number;
  containerStyle?:CSSProperties
}
export interface SortableDataI {
  id: any;
  content: React.ReactNode;
}
type DraggableDataI = {
  index: number;
  element: React.ReactNode;
  thresholdCursor: { top: number; left: number };
  dummyIndex: number;
};
const swapArray = (from: number, to: number, arr: any[]): any[] => {
  let res = [...arr];
  const delItem = arr[from];
  res.splice(from, 1);
  res.splice(to, 0, delItem);
  return [...res];
};

const pointInRangeArr = (arr: DOMRect[], point: { x: number; y: number }) => {
  const { x, y } = point;
  for (let i = 0; i < arr.length; i++) {
    const currRect = arr[i];
    if (
      currRect.top <= y &&
      currRect.bottom >= y &&
      currRect.left <= x &&
      currRect.right >= x
    )
      return i;
  }
  return -1;
};

const makeRangeArr = (arr: HTMLCollection) => {
  const rectArr = Array.from(arr).map((item) => item.getBoundingClientRect());
  return rectArr;
};

const SortableT = ({ data, onChange,animationDuration = 300 , containerStyle }: SortableI) => {
  const [draggableData, setDraggableData] = useState<DraggableDataI | undefined>();
  const [transitionItemArray, setTransitionItemArray] = useState<number[][]>([]);
  const [dummyData, setDummyData] = useState<SortableDataI[]>([]);
  const [originalRangeArr, setOriginalRangeArr] = useState<DOMRect[]>([]);
  const [dummyRangeArr, setDummyRangeArr] = useState<DOMRect[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const dummyContainerRef = useRef<HTMLDivElement>(null);
  const fixedElementRef = useRef<HTMLDivElement>(null);

  const setFixedELementPosition = (top: number, left: number) => {
    if (!fixedElementRef.current) return;
    fixedElementRef.current.style.top =
      top - (draggableData?.thresholdCursor.top ?? 0) + "px";
    fixedElementRef.current.style.left =
      left - (draggableData?.thresholdCursor.left ?? 0) + "px";
  };
  
  useEffect(() => {
    if (!containerRef.current) return;
    const handelContainerScroll = () => {
      if (!containerRef.current) return;
      setOriginalRangeArr(makeRangeArr(containerRef.current.children));
      fixedElementRef.current?.scrollTo({
        top: containerRef.current.scrollTop,
        left: containerRef.current.scrollLeft,
      });
    };
    setOriginalRangeArr(makeRangeArr(containerRef.current.children));
    containerRef.current.addEventListener("scroll", handelContainerScroll);
    return () => {
      containerRef.current?.removeEventListener(
        "scroll",
        handelContainerScroll
      );
    };
  }, []);
  useEffect(() => {
    if (!dummyContainerRef.current) return;
    const handelContainerScroll = () => {
      if (!dummyContainerRef.current) return;
      setOriginalRangeArr(makeRangeArr(dummyContainerRef.current.children));
    };
    setDummyRangeArr(makeRangeArr(dummyContainerRef.current.children));
    dummyContainerRef.current.addEventListener("scroll", handelContainerScroll);
    return () => {
      dummyContainerRef.current?.removeEventListener(
        "scroll",
        handelContainerScroll
      );
    };
  }, [dummyData]);
  useEffect(() => {
    if (!originalRangeArr.length || !dummyRangeArr.length || !draggableData)
      return;
    let t: number[][] = [];
    const dArr = Array(originalRangeArr.length)
      .fill(0)
      .map((item, ind) => ind);
    const originalIndexOfDummy = swapArray(
      draggableData.dummyIndex,
      draggableData.index,
      dArr
    );
    for (let i = 0; i < originalRangeArr.length; i++) {
      const currIndexInDummy = originalIndexOfDummy[i];
      const recO = originalRangeArr[i];
      const rectD = dummyRangeArr[currIndexInDummy];
      t.push([rectD?.left - recO?.left, rectD?.top - recO?.top]);
    }
    setTransitionItemArray([...t]);
  }, [originalRangeArr, dummyRangeArr, draggableData]);

  const handelMouseDown = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const [x , y] = [originalRangeArr[index].x,originalRangeArr[index].y]
    const thresholdCursor = {
      left: event.pageX - x,
      top: event.pageY - y,
    };

    const ele = (
      <div
        ref={fixedElementRef}
        style={{ top:y + "px", left:  x + "px" }}
        className="inte-sortable__item inte-sortable__item--dummy"
      >
        {data[index].content}
      </div>
    );
    setDraggableData({
      index: index,
      element: ele,
      thresholdCursor: thresholdCursor,
      dummyIndex: index,
    });
    setDummyData([...data]);
  };
  
  const handelMouseMove = (event: MouseEvent) => {
    if (!draggableData) return;
    setFixedELementPosition(event.pageY, event.pageX);
    const latestInd = pointInRangeArr(originalRangeArr, {
      x: event.pageX,
      y: event.pageY,
    });
    if (
      latestInd !== -1 &&
      // latestInd !== draggableData.index &&
      latestInd !== draggableData.dummyIndex
    ) {
      const newDummyData = swapArray(draggableData.index, latestInd, data);
      setDummyData([...newDummyData]);
      setDraggableData((prev) =>
        prev ? { ...prev, dummyIndex: latestInd } : prev
      );
    }
  };
  const handelMouseUp = (event: MouseEvent) => {
    setDraggableData(undefined);
    setTransitionItemArray([]);
    setDummyData([]);
    if (draggableData) {
      onChange(swapArray(draggableData.index, draggableData.dummyIndex, data));
    }
  };
  useEffect(() => {
    if (draggableData?.element) {
      window.addEventListener("mousemove", handelMouseMove);
      window.addEventListener("mouseup", handelMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handelMouseMove);
      window.removeEventListener("mouseup", handelMouseUp);
    };
  }, [draggableData]);

  const handelContainerAutoScroll = (event:MouseEvent) => {
    if(!containerRef.current) return
    const {top , bottom , left , right} = containerRef.current.getBoundingClientRect();
    let scrollTop = 0 , scrollLeft = 0;
    if(event.pageY - top < 10)  scrollTop = -10;
    if(bottom - event.pageY < 10) scrollTop = 10;

    if(event.pageX - left < 10) scrollLeft = -10;
    if(bottom - event.pageX <10) scrollLeft = 10;

    containerRef.current.scrollTo({
      top : containerRef.current.scrollTop + scrollTop,
      left : containerRef.current.scrollLeft + scrollLeft
    })
  }

  useEffect(() => {
    if(!containerRef.current || !draggableData) return;
    window.addEventListener("mousemove", handelContainerAutoScroll);
    return () => {
      window.removeEventListener("mousemove", handelContainerAutoScroll);
    }
  },[containerRef , draggableData])
 
  return (
    <>
      <div
        ref={containerRef}
        className={`inte-sortable--container ${
          draggableData?.index ? "active" : ""
        }`}
        style={containerStyle}
      >
        {data.map((ele, index) => {
          const currentTramsition = transitionItemArray[index]
            ? `${transitionItemArray[index][0] ?? 0}px,${
                transitionItemArray[index][1] ?? 0
              }px,0`
            : "(0 0  0)";
          return (
            <div
              key={ele.id}
              className="inte-sortable__item"
              onMouseDown={(e) => handelMouseDown(e, index)}
              style={{
                opacity: draggableData?.index === index ? ".2" : "",
                transition: draggableData ? `transform ${animationDuration}ms ` : "",
                transform: draggableData
                  ? `translate3d(${currentTramsition})`
                  : "",
                position: draggableData ? "relative" : undefined,
              }}
            >
              {ele.content}
            </div>
          );
        })}
      </div>
      {dummyData.length ? (
        <div
          ref={dummyContainerRef}
          className={`inte-sortable--container`}
          style={{
            position: "fixed",
            top: containerRef.current?.getBoundingClientRect().top + "px",
            left: containerRef.current?.getBoundingClientRect().left + "px",
            zIndex: "-1",
            opacity: "0",
            ...containerStyle
          }}
        >
          {dummyData.map((ele, index) => {
            return (
              <div key={`${ele.id}`} className="inte-sortable__item">
                {ele.content}
              </div>
            );
          })}
        </div>
      ) : null}
      <PortalComponent>{draggableData?.element}</PortalComponent>
    </>
  );
};
export default SortableT;