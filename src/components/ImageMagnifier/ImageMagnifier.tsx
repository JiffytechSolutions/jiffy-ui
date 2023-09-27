import React, { useState } from 'react'
import './ImageMagnifier.css'
import getClassNames from '../../utilities/getClassnames';

export interface ImageMagnifierI {
  src?: string;
  width: number;
  height: number;
  magnifierWidth?: number;
  magnifierHeight?: number;
  zoomLevel?: number;
  inside:boolean;
}

const ImageMagnifier = ({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifierWidth = 100,
  zoomLevel = 3,
  inside = false
}: ImageMagnifierI) => {

  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);

  const handelImageMouseMove = (e: React.MouseEvent) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setXY([x, y]);
  }

  const handelImageMouseEnter = (e: React.MouseEvent) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  }

  return (
    <div
      className={getClassNames({
        "inte-magnifier" : true,
        "inte-magnifier--outside" : !inside,
      })}
      style={{
        position: "relative",
        height: height,
        width: width
      }}
    >
      <img
        className='inte-magnifier__image'
        src={src}
        style={{ height: height, width: width}}
        onMouseEnter={handelImageMouseEnter}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        onMouseMove={handelImageMouseMove}
        alt={"img"}
      />
      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          pointerEvents: "none",
          height: `${inside ? magnifierHeight : height}px`,
          width: `${inside ? magnifierWidth : width}px`,
          
          top: inside ? `${y - magnifierHeight / 2}px` : "0",
          left: inside ? `${x - magnifierWidth / 2}px`: `${width + 10}px`,
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          //calculate position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + (inside ? magnifierWidth : width) / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + (inside ? magnifierHeight : height) / 2}px`
        }}
      ></div>
      {
        !inside && <div 
        className='inte-magnifier__focusObserver'
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          pointerEvents: "none",
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          border: "1px solid lightgray",
          backgroundColor: "transparent",
        }}
        />
      }
    </div>
  )
}

export default ImageMagnifier