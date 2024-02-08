import React, { MouseEvent, useEffect, useRef, useState } from "react";
import PortalComponent from "../../utilities/PoratalComponent";
import {
  elementRect,
  makeRangeArray,
  pointInRangeArr,
  swapArray,
  getClientXY,
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

export interface SortableI {
  data: sortableArray;
  onChange: (newAlignedData: sortableArray) => void;
  animationDuration?: number;
  containerStyle?: React.CSSProperties;
  customClass?: string;
}

const Sortable = ({
  data,
  onChange,
  animationDuration = 300,
  containerStyle,
  customClass = "",
}: SortableI) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dummyContainerRef = useRef<HTMLDivElement>(null);
  const fixedElementRef = useRef<HTMLDivElement>(null);

  const [dummyData, setDummyData] = useState<sortableArray>([]);
  const [sortableData, setSortableData] = useState<SortableDataI>();

  const [originalRangeArray, setOriginalRangeArray] = useState<elementRect[]>(
    []
  );
  const [dummyRangeArray, setDummyRangeArray] = useState<elementRect[]>([]);
  const [transitionArray, setTransitionArray] = useState<
    { top: number; left: number }[]
  >([]);

  const isMobile = useMobileDevice();
  useBodyLock(isMobile && dummyData.length > 0);

  const timerRef = useRef<NodeJS.Timeout>();

  const handelAutoScroll = (event: MouseEvent | TouchEvent) => {
    const edgeSize = 50;
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = getClientXY(event);

    const viewportX = clientX;
    const viewportY = clientY;
    const viewportWidth = containerRef.current.clientWidth;
    const viewportHeight = containerRef.current.clientHeight;

    const edgeTop = edgeSize + containerRect.top;
    const edgeLeft = edgeSize + containerRect.left;
    const edgeBottom = viewportHeight + containerRect.top - edgeSize;
    const edgeRight = viewportWidth + containerRect.left - edgeSize;

    const isInLeftEdge = viewportX < edgeLeft;
    const isInRightEdge = viewportX > edgeRight;
    const isInTopEdge = viewportY < edgeTop;
    const isInBottomEdge = viewportY > edgeBottom;

    if (!(isInLeftEdge || isInRightEdge || isInTopEdge || isInBottomEdge)) {
      clearTimeout(timerRef.current);
      return;
    }

    const containerWidth = Math.max(
      containerRef.current.scrollWidth,
      containerRef.current.offsetWidth,
      containerRef.current.clientWidth
    );

    const containerHeight = Math.max(
      containerRef.current.scrollHeight,
      containerRef.current.offsetHeight,
      containerRef.current.clientHeight
    );

    const maxScrollX = containerWidth - viewportWidth;
    const maxScrollY = containerHeight - viewportHeight;

    function adjustWindowScroll() {
      if (!containerRef.current) return false;

      const currentScrollX = containerRef.current.scrollLeft;
      const currentScrollY = containerRef.current.scrollTop;

      const canScrollUp = currentScrollY > 0;
      const canScrollDown = currentScrollY < maxScrollY;
      const canScrollLeft = currentScrollX > 0;
      const canScrollRight = currentScrollX < maxScrollX;

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
        const intensity = (edgeLeft - viewportX) / edgeSize;
        nextScrollX = nextScrollX - maxStep * intensity;

        // Should we scroll right?
      } else if (isInRightEdge && canScrollRight) {
        const intensity = (viewportX - edgeRight) / edgeSize;
        nextScrollX = nextScrollX + maxStep * intensity;
      }
      // Should we scroll up?
      if (isInTopEdge && canScrollUp) {
        const intensity = (edgeTop - viewportY) / edgeSize;
        nextScrollY = nextScrollY - maxStep * intensity;

        // Should we scroll down?
      } else if (isInBottomEdge && canScrollDown) {
        const intensity = (viewportY - edgeBottom) / edgeSize;
        nextScrollY = nextScrollY + maxStep * intensity;
      }

      // Sanitize invalid maximums. An invalid scroll offset won't break the
      // subsequent .scrollTo() call; however, it will make it harder to
      // determine if the .scrollTo() method should have been called in the
      // first place.
      nextScrollX = Math.max(0, Math.min(maxScrollX, nextScrollX));
      nextScrollY = Math.max(0, Math.min(maxScrollY, nextScrollY));

      if (nextScrollX !== currentScrollX || nextScrollY !== currentScrollY) {
        containerRef.current.scrollTo(nextScrollX, nextScrollY);
        return true;
      } else return false;
    }

    (function checkForWindowScroll() {
      clearTimeout(timerRef.current);

      if (adjustWindowScroll()) {
        timerRef.current = setTimeout(checkForWindowScroll, 30);
      }
    })();
  };

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
      isMouseMove: false,
    });

    setDummyData([...data]);
  };

  const handelMouseMove = (event: MouseEvent | TouchEvent | any) => {
    if (!sortableData || !containerRef.current) return;

    const { clientX, clientY } = getClientXY(event);

    if (fixedElementRef.current) {
      fixedElementRef.current.style.top =
        clientY - sortableData.thresholdCursor.top + "px";
      fixedElementRef.current.style.left =
        clientX - sortableData.thresholdCursor.left + "px";
    }

    const { top, left } = containerRef.current.getBoundingClientRect();

    handelAutoScroll(event);

    const latestIndex = pointInRangeArr(originalRangeArray, {
      x: clientX + containerRef.current.scrollLeft - left,
      y: clientY + containerRef.current.scrollTop - top,
    });

    if (latestIndex !== -1) {
      setSortableData((prev) =>
        prev ? { ...prev, dummyIndex: latestIndex, isMouseMove: true } : prev
      );
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
    if (
      !originalRangeArray.length ||
      !dummyRangeArray.length ||
      !sortableData ||
      !containerRef.current
    )
      return;

    const dArr = Array(containerRef.current.children.length)
      .fill(0)
      .map((item, ind) => ind);

    const originalIndexOfDummy = swapArray(
      sortableData.dummyIndex,
      sortableData.index,
      dArr
    );

    const res = originalRangeArray.map((item, i) => {
      const currIndexInDummy = originalIndexOfDummy[i];
      const currTransition = {
        top: dummyRangeArray[currIndexInDummy].top - originalRangeArray[i].top,
        left:
          dummyRangeArray[currIndexInDummy].left - originalRangeArray[i].left,
      };
      return currTransition;
    });

    setTransitionArray([...res]);
  }, [originalRangeArray, dummyRangeArray, sortableData]);

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
      <div
        ref={containerRef}
        style={containerStyle}
        className={getClassNames({
          "inte-sortable": true,
          [customClass]: customClass,
        })}
      >
        {data.map((ele, ind) => {
          const currentTransition = transitionArray[ind]
            ? `${transitionArray[ind].left ?? 0}px,${
                transitionArray[ind].top ?? 0
              }px,0`
            : "(0 0  0)";
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
                transform: sortableData
                  ? `translate3d(${currentTransition})`
                  : "",
                position: sortableData ? "relative" : undefined,
                userSelect: sortableData ? "none" : undefined,
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
          className="inte-sortable inte-sortable--dummy"
          style={{
            ...containerStyle,
            width: containerRef.current?.getBoundingClientRect().width + "px",
          }}
        >
          {dummyData.map((ele) => {
            return (
              <div key={ele.id} className="inte-sortable__item">
                {ele.content}
              </div>
            );
          })}
        </div>
      )}
      <PortalComponent>
        {sortableData?.isMouseMove ? sortableData?.element : null}
      </PortalComponent>
    </>
  );
};

export default Sortable;
