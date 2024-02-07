import React, { MouseEvent, useEffect, useRef, useState } from "react";
import PortalComponent from "../../utilities/PoratalComponent";
import {
  elementRect,
  makeRangeArray,
  pointInRangeArr,
  swapArray,
  getClientXY,
  handelAutoScroll,
} from "./SortableUtilityFun";
import useMobileDevice from "../../utilities/useMobileDevice";
import useBodyLock from "../../utilities/UseBodyLock";
import "./Sortable.css";
import getClassNames from "../../utilities/getClassnames";

export type sortableArray = {
  content: React.ReactNode;
  id: number | string;
}[];

type SortableDataI = {
  index: number;
  element: React.ReactNode;
  thresholdCursor: { top: number; left: number };
  dummyIndex: number;
  isMouseMove: boolean;
};

type transitionArr = { top: number, left: number, scaleX: number, scaleY: number }[]

export interface SortableI {
  data: sortableArray;
  onChange: (newAlignedData: sortableArray) => void;
  animationDuration?: number;
  customClass?: string;
}



const NewSortable = ({
  data,
  onChange,
  animationDuration = 300,
  customClass,
}: SortableI) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dummyContainerRef = useRef<HTMLDivElement>(null);
  const fixedElementRef = useRef<HTMLDivElement>(null);

  const [dummyData, setDummyData] = useState<sortableArray>([]);
  const [sortableData, setSortableData] = useState<SortableDataI>();

  const [originalRangeArray, setOriginalRangeArray] = useState<elementRect[]>([]);
  const [dummyRangeArray, setDummyRangeArray] = useState<elementRect[]>([]);

  const [transitionArray, setTransitionArray] = useState<string[]>([]);

  const isMobile = useMobileDevice();
  useBodyLock(isMobile && dummyData.length > 0);

  const timerRef = useRef<NodeJS.Timeout>();

  const handelMouseDown = (
    event: MouseEvent | TouchEvent | any,
    index: number
  ) => {
    if (!containerRef.current || !event.currentTarget) return;

    const { clientX, clientY } = getClientXY(event);

    const eleRect = (event.currentTarget as Element).getBoundingClientRect();

    const thresholdCursor = {
      left: clientX - eleRect.left,
      top: clientY - eleRect.top,
    };

    const fixedEle = (
      <div
        ref={fixedElementRef}
        className="inte-sortable__item inte-sortable__item--dummy"
        style={{
          top: eleRect.top,
          left: eleRect.left,
          width: eleRect.width,
          height: eleRect.height
        }}
      >
        {data[index].content}
      </div>
    );

    setSortableData({
      dummyIndex: index,
      element: fixedEle,
      index: index,
      thresholdCursor: thresholdCursor,
      isMouseMove: false
    });

    setDummyData([...data]);
  };

  const handelMouseMove = (event: MouseEvent | TouchEvent | any) => {
    if (!sortableData || !containerRef.current)
      return;

    const { clientX, clientY } = getClientXY(event);

    const { top, left } = containerRef.current.getBoundingClientRect();

    handelAutoScroll(event, containerRef, timerRef);

    const latestIndex = pointInRangeArr(originalRangeArray, {
      x: clientX + containerRef.current.scrollLeft - left,
      y: clientY + containerRef.current.scrollTop - top,
    });
    if (latestIndex !== -1) {
      let newThresholdCursor = sortableData.thresholdCursor
      if (dummyContainerRef.current && fixedElementRef.current) {

        const fixedElementRect = fixedElementRef.current.getBoundingClientRect();
        const { width, height } = dummyContainerRef.current.children[latestIndex].getBoundingClientRect()

        const widthIncreaseRatio = width / fixedElementRect.width
        const heightIncreaseRatio = height / fixedElementRect.height


        newThresholdCursor = {
          top: sortableData.thresholdCursor.top * heightIncreaseRatio,
          left: sortableData.thresholdCursor.left * widthIncreaseRatio
        }

        fixedElementRef.current.style.width = width + 'px'
        fixedElementRef.current.style.height = height + 'px'
        fixedElementRef.current.style.top = clientY - newThresholdCursor.top + "px";
        fixedElementRef.current.style.left = clientX - newThresholdCursor.left + "px";
      }
      setSortableData((prev) =>
        prev ? { ...prev, dummyIndex: latestIndex, isMouseMove: true, thresholdCursor: newThresholdCursor } : prev
      );
      setDummyData(swapArray(sortableData.index, latestIndex, data))
    }
  };

  const handelMouseUp = () => {
    setSortableData(undefined);
    setDummyData([]);
    setTransitionArray([]);
    if (sortableData) {
      onChange(swapArray(sortableData.index, sortableData.dummyIndex, data));
    }
  };

  const handelResize = () => {
    if (containerRef.current) {
      let rangeArr = makeRangeArray(containerRef.current);
      setOriginalRangeArray([...rangeArr]);
    }
    if (dummyContainerRef.current) {
      let rangeArr = makeRangeArray(dummyContainerRef.current);
      setDummyRangeArray([...rangeArr]);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    window.addEventListener("mousemove", handelMouseMove);
    window.addEventListener("mouseup", handelMouseUp);

    window.addEventListener("touchmove", handelMouseMove);
    window.addEventListener("touchend", handelMouseUp);
    return () => {
      window.removeEventListener("mousemove", handelMouseMove);
      window.removeEventListener("mouseup", handelMouseUp);

      window.removeEventListener("touchmove", handelMouseMove);
      window.removeEventListener("touchend", handelMouseUp);
    };
  }, [sortableData]);

  useEffect(() => {
    let res: transitionArr = []
    if (!dummyContainerRef.current || !containerRef.current) return;

    const t: string[] = data.map((item, index) => {
      const prevPosition = dummyContainerRef.current?.children[index]
      const currentPosition = dummyContainerRef.current?.querySelector(`#d-${item.id}`)

      if (prevPosition && currentPosition) {
        const prevRect = prevPosition.getBoundingClientRect()
        const currRect = currentPosition.getBoundingClientRect()

        const widthIncrease = currRect.width / prevRect.width
        const heightIncrease = currRect.height / prevRect.height

        const xTranslate = currRect.x - prevRect.x
        const yTranslate = currRect.y - prevRect.y

        const newXtranslate = xTranslate / widthIncrease
        const newYtranslate = yTranslate / heightIncrease

        const newTransform = `scale(${widthIncrease} , ${heightIncrease}) translate(${newXtranslate}px , ${newYtranslate}px)`

        return newTransform
      }
      return ""
    })

    setTransitionArray([...t])


  }, [dummyData]);

  useEffect(() => {
    if (!containerRef.current) return;
    let rangeArr = makeRangeArray(containerRef.current);
    setOriginalRangeArray([...rangeArr]);

    window.addEventListener("resize", handelResize);

    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, [data]);

  useEffect(() => {
    if (!dummyContainerRef.current) {
      clearTimeout(timerRef.current);
      return;
    }
    let rangeArr = makeRangeArray(dummyContainerRef.current);
    setDummyRangeArray([...rangeArr]);
  }, [sortableData]);

  return (
    <>
      <div ref={containerRef} className={getClassNames({
        "inte-sortable": true,
        [customClass as string]: customClass
      })}>
        {data.map((ele, ind) => {
          return (
            <div
              key={ele.id}
              className="inte-sortable__item"
              onMouseDown={(event) => handelMouseDown(event, ind)}
              onTouchStart={(event) => handelMouseDown(event, ind)}
              style={{
                opacity: sortableData?.index === ind ? ".2" : "",
                transition: sortableData
                  ? `transform ${animationDuration}ms `
                  : "",
                transform: sortableData ? transitionArray[ind] : '',
                position: sortableData ? "relative" : undefined,
                userSelect: sortableData ? "none" : undefined,
                transformOrigin: sortableData ? 'top left' : ''
              }}
            >
              {ele.content}
            </div>
          );
        })}
      </div>
      {!!dummyData.length && (
        <div
          ref={dummyContainerRef}
          className={getClassNames({
            "inte-sortable inte-sortable--dummy": true,
            "inte-sortable": true,
            [customClass as string]: customClass
          })}
          style={{
            width: containerRef.current?.getBoundingClientRect().width + "px",
          }}
        >
          {dummyData.map((ele) => {
            return (
              <div key={ele.id} id={`d-${ele.id}`} className="inte-sortable__item">
                {ele.content}
              </div>
            );
          })}
        </div>
      )}
      <PortalComponent>{sortableData?.isMouseMove ? sortableData?.element : null}</PortalComponent>
    </>
  );
};

export default NewSortable;
