import React, { useState, useRef, useEffect } from "react";
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
  direction = "top",
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
        const windowHeight = window.innerHeight; // get window inner height
        const remainingBottomheight =
          window.innerHeight - positionObject.bottom; // Remaining Bottom Space When Portal Opens

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

        // tooltip open in top
        const topLeftCenterRight = () => {
          tooltipRef.current.classList.add("inte-toolTip--top");
          if (left - tooltip.width / 2 < 0) {
            // Open top right

            pointerRef?.current?.classList.remove(
              "inte-chartToolTip--topCenter"
            );
            pointerRef.current.classList.remove("inte-toolTip--topLeft");
            pointerRef.current.classList.add("inte-chartToolTip--topRight");

            tooltipRef.current.style.left = left - 4 + "px";
            tooltipRef.current.style.top = top - tooltip.height - 7 + "px";
          } else if (
            left - tooltip.width / 2 > 0 &&
            windowWidth > tooltip.right &&
            windowWidth > left + tooltip.width / 2 + 5
          ) {
            // Open top center
            pointerRef.current.classList.remove("inte-chartToolTip--topRight");
            pointerRef.current.classList.remove("inte-toolTip--topLeft");
            pointerRef?.current?.classList.add("inte-chartToolTip--topCenter");
            tooltipRef.current.style.left = left - tooltip.width / 2 + "px";
            tooltipRef.current.style.top = top - tooltip.height - 7 + "px";
          } else {
            // Open top left

            pointerRef?.current?.classList.remove(
              "inte-chartToolTip--topCenter"
            );
            pointerRef.current.classList.remove("inte-chartToolTip--topRight");
            pointerRef.current.classList.add("inte-toolTip--topLeft");

            tooltipRef.current.style.left = left - tooltip.width + "px";
            tooltipRef.current.style.top = top - tooltip.height - 7 + "px";
          }
        };
        // topLeftCenterRight()

        // tooltip open in right
        const rightTopCenterBottom = () => {
          tooltipRef.current.classList.add("inte-toolTip--right");
          pointerRef.current.style.left = 1 + "px";
          if (0 >= top - tooltip.height / 2 - 10) {
            // right top
            pointerRef.current.style.top = 5 + "px";
            tooltipRef.current.style.left = left + 15 + "px";
            tooltipRef.current.style.top = top - 13 + "px";
          } else if (
            left - tooltip.width / 2 > 0 &&
            windowHeight > top + tooltip.height / 2 - 10
          ) {
            // right center
            pointerRef.current.style.top = tooltip.height / 2 + "px";
            tooltipRef.current.style.left = left + 15 + "px";
            tooltipRef.current.style.top = top - tooltip.height / 2 - 10 + "px";
          } else {
            // right bottom
            pointerRef.current.style.top = tooltip.height - 17 + "px";
            tooltipRef.current.style.left = left + 15 + "px";
            tooltipRef.current.style.top = top - tooltip.height + 6 + "px";
          }
        };
        // rightTopCenterBottom();

        // tooltip open in bottom
        const bottomLeftCenterRight = () => {
          tooltipRef.current.classList.add("inte-toolTip--bottom");
          tooltipRef.current.style.top = top + 25 + "px";
          if (left - tooltip.width / 2 < 0) {
            // Bottom left
            pointerRef.current.style.left = 8 + "px";
            tooltipRef.current.style.left = left - 4 + "px";
          } else if (
            left - tooltip.width / 2 > 0 &&
            windowWidth > tooltip.right &&
            windowWidth > left + tooltip.width / 2 + 5
          ) {
            // Bottom center
            pointerRef.current.style.left = tooltip.width / 2 + "px";
            tooltipRef.current.style.left = left - tooltip.width / 2 + "px";
          } else {
            // Bottom Right
            pointerRef.current.style.left = tooltip.width - 14 + "px";
            tooltipRef.current.style.left = left - tooltip.width + "px";
          }
        };
        // bottomLeftCenterRight();

        // tooltip open in left
        const leftTopCenterBottom = () => {
          tooltipRef.current.classList.add("inte-toolTip--left");
          tooltipRef.current.style.left = left - tooltip.width - 10 + "px";
          if (0 >= top - tooltip.height / 2 - 2) {
            // right top
            pointerRef.current.style.top = 11 + "px";
            tooltipRef.current.style.top = top - 13 + "px";
          } else if (
            left - tooltip.width / 2 > 0 &&
            windowHeight > top + tooltip.height / 2
          ) {
            // right center
            pointerRef.current.style.top = tooltip.height / 2 + "px";
            tooltipRef.current.style.top = top - tooltip.height / 2 - 2 + "px";
          } else {
            // right bottom
            pointerRef.current.style.top = tooltip.height - 17 + "px";
            tooltipRef.current.style.top = top - tooltip.height + 13 + "px";
          }
        };
        // leftTopCenterBottom();

        // checking tooltip direction
        if (direction == "top") {
          if (top > tooltip.height + 7) {
            topLeftCenterRight();
          } else {
            if (windowWidth >= left + tooltip.width + 8) {
              rightTopCenterBottom();
            } else if (remainingBottomheight >= tooltip.height) {
              if (remainingBottomheight >= tooltip.height + 7) {
                bottomLeftCenterRight();
              } else {
                // left
                if (windowWidth >= left + tooltip.width) {
                  tooltipRef.current.style.left = left + "px";
                  tooltipRef.current.style.top = top + "px";
                } else {
                  tooltipRef.current.style.left = left - tooltip.width + "px";
                  tooltipRef.current.style.top = top + "px";
                }
              }
            } else {
              leftTopCenterBottom();
            }
          }
        } else if (direction == "right") {
          if (
            windowWidth >= left + tooltip.width + 8 &&
            remainingBottomheight >= 0
          ) {
            rightTopCenterBottom();
          } else if (top > tooltip.height + 8) {
            tooltipRef.current.classList.add("inte-toolTip--top");
            if (windowWidth >= left + tooltip.width / 2) {
              // Top center
              pointerRef.current.classList.add("inte-toolTip--topCenter");
              tooltipRef.current.style.left = left - tooltip.width / 2 + "px";
              tooltipRef.current.style.top = top - tooltip.height - 7 + "px";
            } else {
              //top-right
              pointerRef.current.classList.add("inte-toolTip--topRight");
              pointerRef.current.style.right = left - 3 + "px";
              tooltipRef.current.style.left = left - tooltip.width + "px";
              tooltipRef.current.style.top = top - tooltip.height - 7 + "px";
            }
          } else if (remainingBottomheight >= tooltip.height + 8) {
            // Tooltip isOpen bottom then case bottom-center and bottom-right
            tooltipRef.current.classList.add("inte-toolTip--bottom");
            if (windowWidth >= left + tooltip.width / 2) {
              // bottom center
              pointerRef.current.classList.add("inte-toolTip--center");
              tooltipRef.current.style.left = left - tooltip.width / 2 + "px";
              tooltipRef.current.style.top = top + "px";
            } else {
              // bottom right
              pointerRef.current.classList.add("inte-toolTip--bottomRight");
              pointerRef.current.style.right = left - 3 + "px";
              tooltipRef.current.style.left = left - tooltip.width + "px";
              tooltipRef.current.style.top = top + "px";
            }
          } else {
            // Tooltip isOpen Left=> Left-center , Left-Top and Left-Bottom
            leftTopCenterBottom();
          }
        } else if (direction == "bottom") {
          if (remainingBottomheight >= tooltip.height + 7) {
            bottomLeftCenterRight();
          } else {
            if (top > tooltip.height + 7) {
              topLeftCenterRight();
            } else if (
              windowWidth >= left + tooltip.width + 7 &&
              remainingBottomheight >= 0
            ) {
              rightTopCenterBottom();
            } else {
              leftTopCenterBottom();
            }
          }
        } else {
          // Default direction isOpen Left
          if (left >= tooltip.width + 7 && remainingBottomheight >= 0) {
            leftTopCenterBottom();
          } else if (top > tooltip.height) {
            topLeftCenterRight();
          } else if (windowWidth >= left + tooltip.width + 7) {
            rightTopCenterBottom();
          } else {
            bottomLeftCenterRight();
          }
        }
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
      {/* <div style={{ position: "fixed", left: activatorP.x, top: activatorP.y }}>
        {activator}
      </div> */}
      {openState && (
        <PortalComponent>
          <div
            id="inte-toolTip"
            role="tooltip"
            ref={tooltipRef}
            style={{ position: "fixed" }}
            className={getClassNames({
              "inte-chartToolTip__wrapper": true,
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
