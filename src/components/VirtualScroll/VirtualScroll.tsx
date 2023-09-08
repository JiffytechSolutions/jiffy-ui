import React, { useEffect, useRef, useState } from "react";
import getClassNames from "../../utilities/getClassnames";
import "./VirtualScroll.css";
export interface VirtualScrollI {
  children: React.ReactNode[];
  itemHeight: number;
  containerHeight: number;
  customClass?: string;
}

const VirtualScroll = ({
  children,
  itemHeight,
  containerHeight,
  customClass = "",
}: VirtualScrollI) => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState<any>([]);
  const [itemIndex, setitemIndex] = useState<any>(
    children.map((_, index) => index)
  );
  useEffect(() => {
    const container: any = containerRef.current;
    const totalItems = children.length;
    const visibleItemCount = Math.ceil(containerHeight / itemHeight);
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const startIndex = Math.floor(scrollTop / itemHeight);
      const endIndex = Math.min(startIndex + visibleItemCount, totalItems);
      const visibleIndices = children
        .slice(startIndex, endIndex + 5)
        .map((_: any, index: any) => startIndex + index);
      setitemIndex(visibleIndices);
      setVisibleItems(children.slice(startIndex, endIndex + 5));
    };
    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [children]);
  const totalContentHeight = children.length * itemHeight;
  return (
    <div
      ref={containerRef}
      className={getClassNames({
        "inte-virtualScroll": true,
        [customClass]: customClass,
      })}
      style={{
        height: `${containerHeight}px`,
      }}
    >
      <div
        className="inte-virtualScroll__container"
        style={{
          height: `${totalContentHeight}px`,
        }}
      >
        {visibleItems.map((option: any, index: number) => {
          return (
            <div
              key={index}
              className="inte-virtualScroll__items"
              style={{
                width: "100%",
                position: "absolute",
                height: `${itemHeight}px`,
                top: `${itemIndex[index] * itemHeight}px`,
              }}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualScroll;
