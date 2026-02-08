import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useId,
} from "react";
import getClassNames from "../../utilities/getClassnames";
import useDelay from "../../utilities/useDelay";
import Portal from "../../utilities/Portal";
import "./Tooltip.css";
import useWindowResize from "../../utilities/useWindowResize";
export interface ToolTipI {
  children: React.ReactNode;
  content: string | React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  open?: boolean;
  zIndex?: number;
  openInMobileUisngAction: boolean;
}

const Tooltip = ({
  children,
  content,
  open = false,
  placement = "top",
  zIndex,
  openInMobileUisngAction,
}: ToolTipI): JSX.Element => {
  const [openState, setOpenState] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const animateData = useDelay(openState, 100);
  const parentRef: any = useRef();
  const tooltipRef: any = useRef();
  const pointerRef: any = useRef();
  const rId = useId();
  useEffect(() => {
    // setOpenState(open);
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      // setOpenState(false);
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
        const positionObject = parentRef.current.getBoundingClientRect();
        const tooltip = tooltipRef.current.getBoundingClientRect();
        const remainingBottomheight =
          window.innerHeight - positionObject.bottom;
        const windowWidth = window.innerWidth;

        const topLeftCenterRight = () => {
          tooltipRef.current.classList.add("jf-toolTip--top");
          if (
            (tooltip.width - positionObject.width) / 2 >=
            positionObject.left
          ) {
            // Open top left
            pointerRef.current.classList.add("jf-toolTip--topLeft");
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
            pointerRef?.current?.classList.add("jf-toolTip--topCenter");
            tooltipRef.current.style.left =
              positionObject.left +
              positionObject.width / 2 -
              tooltip.width / 2 +
              "px";
            tooltipRef.current.style.top =
              positionObject.top - tooltip.height - 7 + "px";
          } else {
            // Open top right
            pointerRef.current.classList.add("jf-toolTip--topRight");
            pointerRef.current.style.right =
              positionObject.width / 2 - 3 + "px";
            tooltipRef.current.style.left =
              positionObject.left + positionObject.width - tooltip.width + "px";
            tooltipRef.current.style.top =
              positionObject.top - tooltip.height - 7 + "px";
          }
        };
        const rightTopCenterBottom = () => {
          tooltipRef.current.classList.add("jf-toolTip--right");
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

            pointerRef.current.classList.add("jf-toolTip--rightCenter");
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
          tooltipRef.current.classList.add("jf-toolTip--bottom");
          if (
            (tooltip.width - positionObject.width) / 2 >=
            positionObject.left
          ) {
            // Bottom left
            pointerRef.current.classList.add("jf-toolTip--bottomLeft");
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
            pointerRef.current.classList.add("jf-toolTip--center");
            tooltipRef.current.style.left =
              positionObject.left +
              positionObject.width / 2 -
              tooltip.width / 2 +
              "px";
            tooltipRef.current.style.top =
              positionObject.top + positionObject.height + "px";
          } else {
            // Bottom Right
            pointerRef.current.classList.add("jf-toolTip--bottomRight");
            pointerRef.current.style.right =
              positionObject.width / 2 - 3 + "px";
            tooltipRef.current.style.left =
              positionObject.left + positionObject.width - tooltip.width + "px";
            tooltipRef.current.style.top =
              positionObject.top + positionObject.height + "px";
          }
        };
        const leftTopCenterBottom = () => {
          tooltipRef.current.classList.add("jf-toolTip--left");
          if (
            0 >=
            positionObject.top -
            (tooltip.height - positionObject.height) / 2 ||
            tooltip.height / 2 >= positionObject.top + positionObject.height / 2
          ) {
            // Left Bottom
            pointerRef.current.classList.add("jf-toolTip--leftBottom");
            pointerRef.current.style.top = positionObject.height / 2 - 6 + "px";
            tooltipRef.current.style.left =
              positionObject.left - tooltip.width - 7 + "px";
            tooltipRef.current.style.top = positionObject.top + "px";
          } else if (
            window.innerHeight >=
            positionObject.bottom + (tooltip.height - positionObject.height) / 2
          ) {
            // Left Center
            pointerRef.current.classList.add("jf-toolTip--leftCenter");
            tooltipRef.current.style.left =
              positionObject.left - tooltip.width - 7 + "px";
            tooltipRef.current.style.top =
              positionObject.top -
              (tooltip.height - positionObject.height) / 2 +
              "px";
          } else {
            // Left Top
            pointerRef.current.classList.add("jf-toolTip--leftTop");
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

        if (placement == "top") {
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
        } else if (placement == "right") {
          if (
            windowWidth >= positionObject.right + tooltip.width + 8 &&
            remainingBottomheight >= 0
          ) {
            rightTopCenterBottom();
          } else if (positionObject.top > tooltip.height + 8) {
            tooltipRef.current.classList.add("jf-toolTip--top");
            if (
              windowWidth >=
              positionObject.right + (tooltip.width - positionObject.width) / 2
            ) {
              // Top center
              pointerRef.current.classList.add("jf-toolTip--topCenter");
              tooltipRef.current.style.left =
                positionObject.left +
                positionObject.width / 2 -
                tooltip.width / 2 +
                "px";
              tooltipRef.current.style.top =
                positionObject.top - tooltip.height - 7 + "px";
            } else {
              //top-right
              pointerRef.current.classList.add("jf-toolTip--topRight");
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
            tooltipRef.current.classList.add("jf-toolTip--bottom");
            if (
              windowWidth >=
              positionObject.right + (tooltip.width - positionObject.width) / 2
            ) {
              // bottom center
              pointerRef.current.classList.add("jf-toolTip--center");
              tooltipRef.current.style.left =
                positionObject.left +
                positionObject.width / 2 -
                tooltip.width / 2 +
                "px";
              tooltipRef.current.style.top =
                positionObject.top + positionObject.height + "px";
            } else {
              // bottom right
              pointerRef.current.classList.add("jf-toolTip--bottomRight");
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
        } else if (placement == "bottom") {
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
  
  const windowWidth = useWindowResize()
  const desktopCondition = windowWidth > 767 && openInMobileUisngAction;
  const mobileCondition = windowWidth < 767 && openInMobileUisngAction;

  return (
    <span
      role="none"
      ref={parentRef}
      className="jf-toolTip"
      onMouseOver={() => {
        desktopCondition &&
          setOpenState(true);
      }}
      onMouseLeave={() => {
        desktopCondition &&
          setOpenState(false);
      }}
      onClick={() => {
        console.log("get abcd")
        mobileCondition &&
          setOpenState(true);
      }}
    >
      {children}
      {animateData && (
        <Portal>
          <div
            id={"jf-toolTip" + rId}
            role="tooltip"
            ref={tooltipRef}
            style={{
              position: "fixed",
              zIndex: zIndex,
            }}
            className={getClassNames({
              "jf-toolTip__wrapper": true,
              "jf-toolTip--in": openState,
              "jf-toolTip--out": !openState,
            })}
          >
            <span ref={pointerRef} className="jf-toolTip__pointer">
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
            <div className="jf-toolTip__message">
              {content}
              <div className="jf-toolTip__footer">
                <div className="jf-toolTip__cancel" onClick={(e) => { e.stopPropagation(); setOpenState(false) }}>Ok</div>
              </div>
            </div>
          </div>
          <div className="jf-toolTip__overlay"></div>
        </Portal>
      )}
    </span >
  );
};

export default Tooltip;
