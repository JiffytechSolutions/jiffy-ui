import React, { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import { changePosition, classnames } from "../../utilities/globalFunction";
import Portal from "../../utilities/Portal";
import "./Dropdown.css";

export interface DropdownI {
  open: boolean;
  children: React.ReactNode | any;
  zIndex?: 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;
  padding?: 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40;
  onOutsideClick?: (e: any) => void;
  direction?: "left" | "right" | "auto";
  isWidthEqual?: boolean;
  resizeDependency?: any;
}

const Dropdown = forwardRef((props: DropdownI, customRef) => {
  const {
    open,
    children,
    zIndex,
    padding,
    direction,
    isWidthEqual = false,
    resizeDependency = null,
  } = props;
  const dropdownRef: any = useRef(null);

  useLayoutEffect(() => {
    if (open)
      isWidthEqual
        ? changePosition(customRef, dropdownRef, { width: true })
        : changePosition(customRef, dropdownRef, { direction: direction })();
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const container = document.querySelector(".pixel-dropdown");
      if (container && !container.contains(event.target)) {
        props?.onOutsideClick?.(event);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    isWidthEqual && changePosition(customRef, dropdownRef, { width: true })();
    const changePos = isWidthEqual
      ? changePosition(customRef, dropdownRef, { width: true })
      : changePosition(customRef, dropdownRef);
    if (open) {
      window.addEventListener("resize", changePos, true);
      window.addEventListener("scroll", changePos, true);
    }
    return () => {
      window.removeEventListener("scroll", changePos, true);
      window.removeEventListener("resize", changePos, true);
    };
  }, [open, resizeDependency]);

  return open ? (
    <Portal>
      <div
        ref={dropdownRef}
        className={classnames({
          "pixel-dropdown": true,
          "position-fixed": true,
          ["z-index-" + zIndex]: zIndex,
          ["p-" + padding]: padding,
        })}
      >
        {children}
      </div>
    </Portal>
  ) : null;
});

export default Dropdown;
