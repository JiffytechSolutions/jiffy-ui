import React, { useEffect, useRef, useState } from "react";
import "./ImageMagnifier.css";
import getClassNames from "../../utilities/getClassnames";
import PortalComponent from "../../utilities/PoratalComponent";

export interface ImageMagnifierI {
  src?: string;
  width: number;
  height: number;
  magnifierWidth?: number;
  magnifierHeight?: number;
  zoomLevel?: number;
  inside: boolean;
  position: "top" | "bottom" | "left" | "right" | "auto";
  customClass?: string;
}

const ImageMagnifier = ({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifierWidth = 100,
  zoomLevel = 3,
  inside = false,
  position = "auto",
  customClass,
}: ImageMagnifierI) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);
  const [magnifierDimension, setMagnifierDimension] = useState({
    height: 50,
    width: 50,
  });
  const [magnifierZoomLevel, setMagnifierZoomLevel] = useState(zoomLevel);

  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const handelImageMouseMove = (e: React.MouseEvent) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setXY([x, y]);
  };

  const handelImageMouseEnter = (e: React.MouseEvent) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const handelMouseWheel = (e: WheelEvent) => {
    if (inside) return;
    e.preventDefault();
    if (e.deltaY > 0) {
      setMagnifierZoomLevel((prev) => (prev + 0.5 <= 30 ? prev + 0.5 : 30));
    } else
      setMagnifierZoomLevel((prev) => (prev - 0.5 >= 1.5 ? prev - 0.5 : 1.5));
  };

  const getPosition = (): { top: number; left: number } => {
    let newPosition = { top: 0, left: 0 };
    if (!parentRef.current || !childRef.current) return newPosition;
    const parentDimension = parentRef.current.getBoundingClientRect();
    const positionObj = {
      left: {
        top: parentDimension.top,
        left: parentDimension.left - (parentDimension.width + 10),
      },
      right: { top: parentDimension.top, left: parentDimension.right + 10 },
      top: {
        top: parentDimension.top - (parentDimension.height + 10),
        left: parentDimension.left,
      },
      bottom: { top: parentDimension.bottom + 10, left: parentDimension.left },
    };
    if (position !== "auto") return positionObj[position];
    else {
      if (
        window.innerWidth - (parentDimension.right + 10) >
        parentDimension.width
      )
        return positionObj["right"];
      else if (parentDimension.left > parentDimension.width + 10)
        return positionObj["left"];
      else if (
        window.innerHeight - (parentDimension.bottom + 10) >
        parentDimension.height
      )
        return positionObj["bottom"];
      else return positionObj["top"];
    }
  };

  useEffect(() => {
    if (!showMagnifier || inside)
      window.removeEventListener("wheel", handelMouseWheel);
    else window.addEventListener("wheel", handelMouseWheel, { passive: false });
    return () => window.removeEventListener("wheel", handelMouseWheel);
  }, [showMagnifier, inside]);

  useEffect(() => {
    if (inside) {
      setMagnifierDimension({
        height: magnifierHeight,
        width: magnifierWidth,
      });
    } else
      setMagnifierDimension({
        width: width / magnifierZoomLevel,
        height: height / magnifierZoomLevel,
      });
  }, [inside, magnifierHeight, magnifierWidth, magnifierZoomLevel]);

  const imageMagnifier = (
    <div
      ref={childRef}
      style={{
        position: inside ? "absolute" : "fixed",
        pointerEvents: "none",
        height: `${inside ? magnifierHeight : height}px`,
        width: `${inside ? magnifierWidth : width}px`,
        top: inside ? `${y - magnifierHeight / 2}px` : getPosition().top + "px",
        left: inside
          ? `${x - magnifierWidth / 2}px`
          : getPosition().left + "px",
        border: "1px solid lightgray",
        backgroundColor: "white",
        backgroundImage: `url('${src}')`,
        backgroundRepeat: "no-repeat",

        //calculate zoomed image size
        backgroundSize: `${
          imgWidth * (inside ? zoomLevel : magnifierZoomLevel)
        }px ${imgHeight * (inside ? zoomLevel : magnifierZoomLevel)}px`,

        //calculate position of zoomed image.
        backgroundPositionX: `${
          -x * (inside ? zoomLevel : magnifierZoomLevel) +
          (inside ? magnifierWidth : width) / 2
        }px`,
        backgroundPositionY: `${
          -y * (inside ? zoomLevel : magnifierZoomLevel) +
          (inside ? magnifierHeight : height) / 2
        }px`,
      }}
    />
  );

  return (
    <div
      ref={parentRef}
      className={getClassNames({
        "inte-magnifier": true,
        "inte-magnifier--outside": !inside,
        customClass: customClass,
      })}
      style={{
        height: height,
        width: width,
      }}
    >
      <img
        className="inte-magnifier__image"
        src={src}
        style={{ height: height, width: width }}
        onMouseEnter={handelImageMouseEnter}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        onMouseMove={handelImageMouseMove}
        alt={"img"}
      />
      {showMagnifier ? (
        inside ? (
          imageMagnifier
        ) : (
          <PortalComponent>{imageMagnifier}</PortalComponent>
        )
      ) : null}
      {!inside && (
        <div
          className="inte-magnifier__focusObserver"
          style={{
            display: showMagnifier ? "" : "none",
            height: `${magnifierDimension.height}px`,
            width: `${magnifierDimension.width}px`,
            top: `${y - magnifierDimension.height / 2}px`,
            left: `${x - magnifierDimension.width / 2}px`,
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
