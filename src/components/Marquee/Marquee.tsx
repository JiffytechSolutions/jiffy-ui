import React, { useState, useEffect, useRef } from "react";
import getClassNames from "../../utilities/getClassnames";
import "./Marquee.css";

export interface MarqueeI {
  content: any;
  speed?: number;
  getFullView?: boolean;
  align?: "start" | "center" | "end" | "fill";
}

const Marquee: React.FC<MarqueeI> = ({
  content,
  speed = 10,
  getFullView = false,
  align = "start",
}) => {
  const [position, setPosition] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const marqueeRef = useRef<HTMLDivElement>(null);
  let interval = useRef<string | number>("-1");

  const changePosition = () => {
    clearInterval(interval.current);
    if (
      (marqueeRef.current?.scrollWidth ?? 0) >
      (marqueeRef.current?.parentElement?.clientWidth ?? 0)
    ) {
      if (!isHovered) {
        interval.current = window.setInterval(() => {
          setPosition((prevPosition: number) => {
            if (
              (marqueeRef.current?.scrollWidth ?? 0) + 10 ===
              Math.abs(prevPosition)
            )
              return 0;
            return prevPosition - 1;
          });
        }, speed);
      }
    } else setPosition(0);
  };

  const changePositionFullView = () => {
    clearInterval(interval.current);
    if (
      (marqueeRef.current?.scrollWidth ?? 0) >
      (marqueeRef.current?.parentElement?.clientWidth ?? 0)
    ) {
      interval.current = window.setInterval(() => {
        setPosition((prevPosition: number) => {
          if (
            (marqueeRef.current?.scrollWidth ?? 0) -
              (marqueeRef.current?.parentElement?.clientWidth ?? 0) ===
            Math.abs(prevPosition)
          )
            return prevPosition;
          return prevPosition - 1;
        });
      }, speed);
    } else setPosition(0);
  };

  useEffect(() => {
    if (!getFullView) {
      changePosition();
      window.addEventListener("resize", changePosition, true);
    } else if (isHovered) {
      changePositionFullView();
      window.addEventListener("resize", changePositionFullView, true);
    } else {
      setPosition(0);
    }
    return () => {
      window.removeEventListener("resize", changePosition, true);
      window.removeEventListener("resize", changePositionFullView, true);
      clearInterval(interval.current);
    };
  }, [speed, isHovered, getFullView]);

  return (
    <div
      className={getClassNames({
        "inte-marquee__container": true,
        "inte-marquee--hasFullView": getFullView,
        "inte-marquee__start": align == "start",
        "inte-marquee__center": align == "center",
        "inte-marquee__end": align == "end",
        "inte-marquee__fill": align === "fill",
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={marqueeRef}
        className="inte-marquee"
        style={{ transform: `translateX(${position}px)` }}
      >
        {content}
      </div>
      {position && !getFullView ? (
        <div
          className="inte-marquee inte-marquee--child"
          style={{ transform: `translateX(${position}px)` }}
        >
          {content}
        </div>
      ) : null}
    </div>
  );
};

export default Marquee;
