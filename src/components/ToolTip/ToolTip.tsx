import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useId,
} from "react";
import PortalComponent from "../../utilities/PoratalComponent";
import useDelayUnmount from "../../utilities/useDelayTimeout";
import getClassNames from "../../utilities/getClassnames";
import "./ToolTip.css";
export interface ToolTipI {
  activator: React.ReactNode;
  helpText: string | React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
  isOpen?: boolean;
  customClass?: string;
}

const ToolTip = ({
  activator,
  helpText,
  isOpen = false,
  customClass = "",
  direction = "top",
}: ToolTipI): JSX.Element => {
  const [openState, setOpenState] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const animateData = useDelayUnmount(openState, 100);
  const parentRef: any = useRef();
  const tooltipRef: any = useRef();
  const pointerRef: any = useRef();
  const rId = useId();
  useEffect(() => {
    setOpenState(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setOpenState(false);
    };
    window.addEventListener("scroll", handleScroll);
    setScrollWidth(window.innerWidth - document.documentElement.clientWidth);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const scrollWindow = () => {
      if (parentRef.current && tooltipRef.current) {
        const positionObject = parentRef.current.getBoundingClientRect(); // Get Element dimensions
        const tooltip = tooltipRef.current.getBoundingClientRect(); // Get Popovers dimensions
        const remainingBottomheight =
          window.innerHeight - positionObject.bottom; // Remaining Bottom Space When Portal Opens
        const windowWidth = window.innerWidth; // get window inner width

        const topLeftCenterRight = () => {
          tooltipRef.current.classList.add("inte-toolTip--top");
          if (
            (tooltip.width - positionObject.width) / 2 >=
            positionObject.left
          ) {
            // Open top left
            pointerRef.current.classList.add("inte-toolTip--topLeft");
            pointerRef.current.style.left = positionObject.width / 2 - 3 + "px";
            tooltipRef.current.style.left = positionObject.left + "px";
            tooltipRef.current.style.top =
              positionObject.top - tooltip.height - 7 + "px";
          } else if (
            windowWidth >=
            positionObject.right +
              (tooltip.width - positionObject.width) / 2 +
              scrollWidth
          ) {
            // Open top center
            pointerRef?.current?.classList.add("inte-toolTip--topCenter");
            tooltipRef.current.style.left =
              positionObject.left +
              positionObject.width / 2 -
              tooltip.width / 2 +
              "px";
            tooltipRef.current.style.top =
              positionObject.top - tooltip.height - 7 + "px";
          } else {
            // Open top right
            pointerRef.current.classList.add("inte-toolTip--topRight");
            pointerRef.current.style.right =
              positionObject.width / 2 - 3 + "px";
            tooltipRef.current.style.left =
              positionObject.left + positionObject.width - tooltip.width + "px";
            tooltipRef.current.style.top =
              positionObject.top - tooltip.height - 7 + "px";
          }
        };
        const rightTopCenterBottom = () => {
          tooltipRef.current.classList.add("inte-toolTip--right");
          if (
            0 >=
            positionObject.top - (tooltip.height - positionObject.height) / 2
          ) {
            // right top
            pointerRef.current.style.top = positionObject.height / 2 - 6 + "px";
            pointerRef.current.style.left = 1 + "px";
            tooltipRef.current.style.left =
              positionObject.left + positionObject.width + "px";
            tooltipRef.current.style.top = positionObject.top + "px";
          } else if (
            window.innerHeight >=
              positionObject.bottom +
                (tooltip.height - positionObject.height) / 2 &&
            window.innerHeight >= tooltip.height
          ) {
            // right center

            pointerRef.current.classList.add("inte-toolTip--rightCenter");
            tooltipRef.current.style.left = positionObject.right + "px";
            tooltipRef.current.style.top =
              positionObject.top -
              (tooltip.height - positionObject.height) / 2 +
              "px";
          } else {
            // right bottom

            pointerRef.current.style.bottom =
              positionObject.height / 2 - 6 + "px";
            pointerRef.current.style.left = 1 + "px";
            tooltipRef.current.style.left = positionObject.right + "px";
            tooltipRef.current.style.top =
              positionObject.top -
              tooltip.height +
              positionObject.height +
              "px";
          }
        };
        const bottomLeftCenterRight = () => {
          tooltipRef.current.classList.add("inte-toolTip--bottom");
          if (
            (tooltip.width - positionObject.width) / 2 >=
            positionObject.left
          ) {
            // Bottom left
            pointerRef.current.classList.add("inte-toolTip--bottomLeft");
            pointerRef.current.style.left = positionObject.width / 2 - 3 + "px";
            tooltipRef.current.style.left = positionObject.left + "px";
            tooltipRef.current.style.top =
              positionObject.top + positionObject.height + "px";
          } else if (
            windowWidth >=
            positionObject.right +
              (tooltip.width - positionObject.width) / 2 +
              scrollWidth
          ) {
            // Bottom center
            pointerRef.current.classList.add("inte-toolTip--center");
            tooltipRef.current.style.left =
              positionObject.left +
              positionObject.width / 2 -
              tooltip.width / 2 +
              "px";
            tooltipRef.current.style.top =
              positionObject.top + positionObject.height + "px";
          } else {
            // Bottom Right
            pointerRef.current.classList.add("inte-toolTip--bottomRight");
            pointerRef.current.style.right =
              positionObject.width / 2 - 3 + "px";
            tooltipRef.current.style.left =
              positionObject.left + positionObject.width - tooltip.width + "px";
            tooltipRef.current.style.top =
              positionObject.top + positionObject.height + "px";
          }
        };
        const leftTopCenterBottom = () => {
          tooltipRef.current.classList.add("inte-toolTip--left");
          if (
            0 >=
              positionObject.top -
                (tooltip.height - positionObject.height) / 2 ||
            tooltip.height / 2 >= positionObject.top + positionObject.height / 2
          ) {
            // Left Bottom
            pointerRef.current.classList.add("inte-toolTip--leftBottom");
            pointerRef.current.style.top = positionObject.height / 2 - 6 + "px";
            tooltipRef.current.style.left =
              positionObject.left - tooltip.width - 7 + "px";
            tooltipRef.current.style.top = positionObject.top + "px";
          } else if (
            window.innerHeight >=
            positionObject.bottom + (tooltip.height - positionObject.height) / 2
          ) {
            // Left Center
            pointerRef.current.classList.add("inte-toolTip--leftCenter");
            tooltipRef.current.style.left =
              positionObject.left - tooltip.width - 7 + "px";
            tooltipRef.current.style.top =
              positionObject.top -
              (tooltip.height - positionObject.height) / 2 +
              "px";
          } else {
            // Left Top
            pointerRef.current.classList.add("inte-toolTip--leftTop");
            pointerRef.current.style.bottom =
              positionObject.height / 2 - 6 + "px";
            tooltipRef.current.style.left =
              positionObject.left - tooltip.width - 7 + "px";
            tooltipRef.current.style.top =
              positionObject.top -
              tooltip.height +
              positionObject.height +
              "px";
          }
        };

        if (direction == "top") {
          if (positionObject.top > tooltip.height + 7) {
            topLeftCenterRight();
          } else {
            if (windowWidth >= positionObject.right + tooltip.width + 8) {
              rightTopCenterBottom();
            } else if (remainingBottomheight >= tooltip.height) {
              if (remainingBottomheight >= tooltip.height + 7) {
                bottomLeftCenterRight();
              } else {
                // left
                if (windowWidth >= positionObject.right + tooltip.width) {
                  tooltipRef.current.style.left =
                    positionObject.left + positionObject.width + "px";
                  tooltipRef.current.style.top =
                    positionObject.top - positionObject.width / 2 + "px";
                } else {
                  tooltipRef.current.style.left =
                    positionObject.left - tooltip.width + "px";
                  tooltipRef.current.style.top =
                    positionObject.top - positionObject.width / 2 + "px";
                }
              }
            } else {
              leftTopCenterBottom();
            }
          }
        } else if (direction == "right") {
          if (
            windowWidth >= positionObject.right + tooltip.width + 8 &&
            remainingBottomheight >= 0
          ) {
            rightTopCenterBottom();
          } else if (positionObject.top > tooltip.height + 8) {
            tooltipRef.current.classList.add("inte-toolTip--top");
            if (
              windowWidth >=
              positionObject.right + (tooltip.width - positionObject.width) / 2
            ) {
              // Top center
              pointerRef.current.classList.add("inte-toolTip--topCenter");
              tooltipRef.current.style.left =
                positionObject.left +
                positionObject.width / 2 -
                tooltip.width / 2 +
                "px";
              tooltipRef.current.style.top =
                positionObject.top - tooltip.height - 7 + "px";
            } else {
              //top-right
              pointerRef.current.classList.add("inte-toolTip--topRight");
              pointerRef.current.style.right =
                positionObject.width / 2 - 3 + "px";
              tooltipRef.current.style.left =
                positionObject.left +
                positionObject.width -
                tooltip.width +
                "px";
              tooltipRef.current.style.top =
                positionObject.top - tooltip.height - 7 + "px";
            }
          } else if (remainingBottomheight >= tooltip.height + 8) {
            // Tooltip isOpen bottom then case bottom-center and bottom-right
            tooltipRef.current.classList.add("inte-toolTip--bottom");
            if (
              windowWidth >=
              positionObject.right + (tooltip.width - positionObject.width) / 2
            ) {
              // bottom center
              pointerRef.current.classList.add("inte-toolTip--center");
              tooltipRef.current.style.left =
                positionObject.left +
                positionObject.width / 2 -
                tooltip.width / 2 +
                "px";
              tooltipRef.current.style.top =
                positionObject.top + positionObject.height + "px";
            } else {
              // bottom right
              pointerRef.current.classList.add("inte-toolTip--bottomRight");
              pointerRef.current.style.right =
                positionObject.width / 2 - 3 + "px";
              tooltipRef.current.style.left =
                positionObject.left +
                positionObject.width -
                tooltip.width +
                "px";
              tooltipRef.current.style.top =
                positionObject.top + positionObject.height + "px";
            }
          } else {
            // Tooltip isOpen Left=> Left-center , Left-Top and Left-Bottom
            leftTopCenterBottom();
          }
        } else if (direction == "bottom") {
          if (remainingBottomheight >= tooltip.height + 7) {
            bottomLeftCenterRight();
          } else {
            if (positionObject.top > tooltip.height + 7) {
              topLeftCenterRight();
            } else if (
              windowWidth >= positionObject.right + tooltip.width + 7 &&
              remainingBottomheight >= 0
            ) {
              rightTopCenterBottom();
            } else {
              leftTopCenterBottom();
            }
          }
        } else {
          // Default direction isOpen Left
          if (
            positionObject.left >= tooltip.width + 7 &&
            remainingBottomheight >= 0
          ) {
            leftTopCenterBottom();
          } else if (positionObject.top > tooltip.height) {
            topLeftCenterRight();
          } else if (windowWidth >= positionObject.right + tooltip.width + 7) {
            rightTopCenterBottom();
          } else {
            bottomLeftCenterRight();
          }
        }
      }
    };

    scrollWindow();
    window.addEventListener("resize", scrollWindow, true);
    window.addEventListener("scroll", scrollWindow, true);
    return () => {
      window.removeEventListener("scroll", scrollWindow, true);
      window.removeEventListener("resize", scrollWindow, true);
    };
  }, [animateData, openState]);
  useEffect(() => {
    if (parentRef.current !== "undefined") {
      const addAttr = parentRef.current.children[0];
      addAttr?.setAttribute("aria-controls", `inte-toolTip${rId}`);
      addAttr?.setAttribute("aria-describedby", `inte-toolTip${rId}`);
    }
  }, [animateData, openState]);

  return (
    <span
      ref={parentRef}
      className="inte-toolTip"
      onMouseOver={() => {
        setOpenState(true);
      }}
      onMouseLeave={() => {
        setOpenState(false);
      }}
    >
      {activator}
      <>
        {animateData && (
          <PortalComponent>
            <div
              id={"inte-toolTip" + rId}
              role="tooltip"
              ref={tooltipRef}
              style={{
                position: "fixed",
              }}
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
      </>
    </span>
  );
};

export default ToolTip;
