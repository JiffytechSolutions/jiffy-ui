import React, { useEffect, useId, useRef } from "react";
import changePosition from "../../utilities/changePosition";
import handleClickOutside from "../../utilities/handelClickOutside";
import PortalComponent from "../../utilities/PoratalComponent";
import useDelayUnmount from "../../utilities/useDelayTimeout";
import handleOnDrag from "../../utilities/handelOnDrag/useHandleOnDrag";
import Button from "../Button/Button";
import { X } from "../../storybook/Foundation/Icons/Icons";
import handleShadowOnScroll from "../../utilities/handleShadowOnScroll/handleShadowOnScroll";
import getClassNames from "../../utilities/getClassnames";
import useBodyLock from "../../utilities/UseBodyLock";
import useMobileDevice from "../../utilities/useMobileDevice";
import "./Popover.css";
export interface PopoverI {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  activator: React.ReactNode;
  popoverWidth?: number;
  customClass?: string;
  customRef?: (element: HTMLElement) => void;
  direction?: "left" | "right" | "auto";
  isCloseOnEsc?: boolean;
  heading?: string;
}

const Popover = ({
  isOpen,
  children,
  activator,
  onClose,
  customClass = "",
  popoverWidth,
  customRef = () => {},
  direction = "auto",
  isCloseOnEsc = true,
  heading,
}: PopoverI) => {
  const id = useId();
  const parentRef: any = useRef(null);
  const popoverRef: any = useRef(null);
  const scrollRef = useRef<any>(null);
  const showDiv = useDelayUnmount(isOpen, 100);
  const isMobileDevice = useMobileDevice();
  // handleShadowOnScroll(scrollRef, showDiv);

  const handelPopoverRefEle = (ele: HTMLDivElement | null) => {
    if (!ele) return;
    customRef(ele);
    popoverRef.current = ele;
    changePosition(parentRef, popoverRef, { direction })();
  };

  const keyEscHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isCloseOnEsc && isOpen) {
      onClose();
    }
  };

  useBodyLock(showDiv && isMobileDevice);

  useEffect(() => {
    const clickOutsideFun = handleClickOutside(parentRef, popoverRef, onClose);
    const changePos = changePosition(parentRef, popoverRef, { direction });
    if (parentRef?.current) {
      const addAttr = parentRef?.current?.children[0];
      addAttr?.setAttribute("aria-expanded", isOpen);
      addAttr?.setAttribute("aria-controls", `inte-popover--wrapper${id}`);
      addAttr?.setAttribute("aria-owns", `inte-popover--wrapper${id}`);
    }
    if (showDiv) {
      window.addEventListener("resize", changePos, true);
      document.addEventListener("scroll", changePos, true);
      document.addEventListener("click", clickOutsideFun, true);
      document.addEventListener("keydown", keyEscHandler);
    }
    return () => {
      window.removeEventListener("scroll", changePos, true);
      window.removeEventListener("resize", changePos, true);
      document.removeEventListener("click", clickOutsideFun, true);
      document.removeEventListener("keydown", keyEscHandler);
    };
  }, [showDiv]);

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = handleOnDrag(
    popoverRef,
    scrollRef,
    isOpen,
    onClose
  );

  return (
    <div ref={parentRef} className="inte-popover--wrapper">
      {activator}
      {showDiv && (
        <PortalComponent>
          <div
            role={"dialog"}
            tabIndex={0}
            id={`inte-popover--wrapper${id}`}
            onTouchStart={(e) => handleTouchStart(e)}
            onTouchMove={(e) => handleTouchMove(e)}
            onTouchEnd={handleTouchEnd}
            ref={handelPopoverRefEle}
            style={{
              ...(popoverWidth ? { minWidth: popoverWidth / 10 + "rem" } : {}),
            }}
            className={getClassNames({
              "inte-popover": true,
              "inte-popover__mobileDevice": isMobileDevice,
              "inte-popover--animation": !isMobileDevice && isOpen,
              "inte-popover--animation--reverse": !isMobileDevice && !isOpen,
              "inte-mobileDevice--in": isMobileDevice && isOpen,
              "inte-mobileDevice--out": isMobileDevice && !isOpen,
              [customClass]: customClass,
            })}
          >
            {isMobileDevice && (
              <div className="inte-popover__mobileHeading__wrapper">
                <div className="inte-popover__handelBar"></div>
                <h3 className="inte-popover__mobileHeading">{heading}</h3>
                <Button
                  icon={<X color="#1C2433" />}
                  type="textButton"
                  onClick={onClose}
                />
              </div>
            )}

            {isMobileDevice ? (
              <div
                className="inte-popover__body"
                ref={isMobileDevice ? scrollRef : null}
                onTouchStart={(e) => handleTouchStart(e)}
              >
                {children}
              </div>
            ) : (
              children
            )}
          </div>
          {isMobileDevice && (
            <div onClick={onClose} className="inte-popover__backdrop" />
          )}
        </PortalComponent>
      )}
    </div>
  );
};

export default Popover;
