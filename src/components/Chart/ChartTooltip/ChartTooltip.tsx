import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import PortalComponent from "../../../utilities/PoratalComponent";
import useDelayUnmount from "../../../utilities/useDelayTimeout";
import getClassNames from "../../../utilities/getClassnames";
import "./ChartTooltip.css";
export interface ToolTipI {
  activator: React.ReactNode;
  helpText: string | React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
  isOpen?: boolean;
  customClass?: string;
}

const ChartTooltip = ({
  activator,
  helpText,

  customClass = "",
}: ToolTipI): JSX.Element => {
  const [openState, setOpenState] = useState(true); // false
  const animateData = useDelayUnmount(openState, 100);
  const parentRef = useRef<any>(null);
  const tooltipRef = useRef<any>(null);
  const pointerRef = useRef<any>(null);

  const [mouseP, setMouseP] = useState({ x: 0, y: 0 });
  const [activatorP, setActivatorP] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const scrollWindow = (event: any) => {
      if (tooltipRef.current && event) {
        const positionObject = parentRef.current.getBoundingClientRect(); // Get Element dimensions
        const tooltip = tooltipRef.current.getBoundingClientRect(); // Get Popovers dimensions
        const windowWidth = window.innerWidth; // get window inner width
        // Calculate activator position
        const activatorX = activatorP.x;
        const activatorY = activatorP.y;

        // Calculate mouse movement
        const mouseMovementX = event.clientX - mouseP.x;
        const mouseMovementY = event.clientY - mouseP.y;

        // Calculate new tooltip position
        const left = activatorX + mouseMovementX;
        const top = activatorY + mouseMovementY;
        setMouseP({ x: left, y: top });
        // Update tooltip position

        const topLeftCenterRight = () => {
          tooltipRef.current.classList.add("inte-toolTip--top");
          if (
            (tooltip.width - positionObject.width) / 2 >=
            positionObject.left
          ) {
            // Open top left
            pointerRef?.current?.classList.remove(
              "inte-chartToolTip--topCenter"
            );
            pointerRef.current.classList.remove("inte-chartToolTip--topRight");
            pointerRef.current.classList.add("inte-toolTip--topLeft");
            // pointerRef.current.style.left = positionObject.width / 2 - 3 + "px";

            tooltipRef.current.style.left = left - tooltip.width + "px";
            tooltipRef.current.style.top = top - tooltip.height - 7 + "px";

            console.log(tooltip.right, windowWidth, "left");
            return;
          } else if (
            left - tooltip.width / 2 > 0 &&
            windowWidth > tooltip.right + 8
          ) {
            console.log(tooltip.right, windowWidth, "center");
            // Open top center
            pointerRef.current.classList.remove("inte-chartToolTip--topRight");
            pointerRef.current.classList.remove("inte-toolTip--topLeft");
            pointerRef?.current?.classList.add("inte-chartToolTip--topCenter");
            tooltipRef.current.style.left =
              left + positionObject.width / 2 - tooltip.width / 2 + "px";
            tooltipRef.current.style.top = top - tooltip.height - 7 + "px";
          } else {
            // Open top right
            pointerRef?.current?.classList.remove(
              "inte-chartToolTip--topCenter"
            );
            pointerRef.current.classList.remove("inte-toolTip--topLeft");
            pointerRef.current.classList.add("inte-chartToolTip--topRight");
            tooltipRef.current.style.left = left - 4 + "px";
            tooltipRef.current.style.top = top - tooltip.height - 7 + "px";
            console.log(tooltip.right, windowWidth, "right");
          }
        };
        topLeftCenterRight();
      }
    };

    window.addEventListener("mousemove", scrollWindow);
    return () => {
      window.removeEventListener("mousemove", scrollWindow);
    };
  }, [activatorP, mouseP]);

  useEffect(() => {
    setActivatorP({
      x: mouseP.x, // Adjust this value as needed
      y: mouseP.y, // Adjust this value as needed
    });
  }, [mouseP]);

  return (
    <span
      ref={parentRef}
      className="inte-chart__toolTip"
      onMouseOver={() => setOpenState(true)}
      onMouseLeave={() => setOpenState(true)}
    >
      <div style={{ position: "fixed", left: activatorP.x, top: activatorP.y }}>
        {activator}
      </div>
      {openState && (
        <PortalComponent>
          <div
            id="inte-toolTip"
            role="tooltip"
            ref={tooltipRef}
            style={{ position: "fixed" }}
            className={getClassNames({
              "inte-toolTip__wrapper": true,
              "inte-toolTip--in": openState,
              "inte-toolTip--out": !openState,
              [customClass]: customClass,
            })}
          >
            <span ref={pointerRef} className="inte-toolTip__pointer">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 0V12L0 6L6 0Z" fill="#1c2433" />
              </svg>
            </span>
            <div className="inte-toolTip__message">{helpText}</div>
          </div>
        </PortalComponent>
      )}
    </span>
  );
};

export default ChartTooltip;
