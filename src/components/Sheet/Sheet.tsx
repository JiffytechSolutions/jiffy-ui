import React, { FC, useEffect, useId, useRef } from "react";
import { X } from "../../storybook/Foundation/Icons/Icons";
import useDelayUnmount from "../../utilities/useDelayTimeout";
import PortalComponent from "../../utilities/PoratalComponent";
import { Button, ButtonI } from "../..";
import handleShadowOnScroll from "../../utilities/handleShadowOnScroll/handleShadowOnScroll";
import handleOnDrag from "../../utilities/handelOnDrag/useHandleOnDrag";
import useBodyLock from "../../utilities/UseBodyLock";
import getClassNames from "../../utilities/getClassnames";
import useMobileDevice from "../../utilities/useMobileDevice";
import "./Sheet.css";
export interface SheetI {
  heading: string;
  activator: React.ReactNode;
  isOpen: boolean;
  children: React.ReactNode;
  closeOnEsc?: boolean;
  overlayClose?: boolean;
  onClose: () => void;
  customClass?: string;
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
  id?: string;
}

const Sheet: FC<SheetI> = ({
  heading,
  children,
  activator,
  onClose = () => {
    //
  },
  isOpen = false,
  closeOnEsc = true,
  overlayClose = true,
  primaryAction,
  secondaryAction,
  customClass = "",
  id,
}) => {
  const isMobileDevice = useMobileDevice();
  const rID = useId();
  const animateData = useDelayUnmount(isOpen, 200);
  const parentRef = useRef<HTMLDivElement | any>(null);
  const scrollRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    const keyEscHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (closeOnEsc) window.addEventListener("keydown", keyEscHandler);
    if(isOpen) document.body.classList.add("inte-bodyHasSheetBackdrop")
    return () => {
      window.removeEventListener("keydown", keyEscHandler);
      document.body.classList.remove("inte-bodyHasSheetBackdrop")
    };
  }, [isOpen]);

  handleShadowOnScroll(scrollRef, animateData);

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = handleOnDrag(
    parentRef,
    scrollRef,
    isOpen,
    onClose
  );
  useBodyLock(isOpen);

  return (
    <>
      {activator}
      {animateData && (
        <PortalComponent>
          <div id={id || `inte-sheet-${rID}`}>
            <div
              className={getClassNames({
                "inte-sheet": true,
                "inte-sheet__mobileDevice": isMobileDevice,
                "inte-sheet__noMobile": !isMobileDevice,
                "inte-mobileDevice--in": isMobileDevice && isOpen,
                "inte-mobileDevice--out": isMobileDevice && !isOpen,
                "inte-sheet__withFooter": primaryAction || secondaryAction,
                "inte-sheet__withoutFooter": !primaryAction && !secondaryAction,
                "inte-sheet--activeIn": isOpen,
                "inte-sheet--activeOut": !isOpen,
                [customClass]: customClass,
              })}
              role="dialog"
              aria-modal={isOpen}
              aria-label="Flow action"
              ref={parentRef}
              onTouchStart={(e) => handleTouchStart(e)}
              onTouchMove={(e) => handleTouchMove(e)}
              onTouchEnd={handleTouchEnd}
            >
              <div className="inte-sheet__heading__wrapper">
                <div className="inte-sheet__handleBar"></div>
                <h3 className="inte-sheet__heading">{heading}</h3>
                <Button
                  accessibilityLabel="Close"
                  onClick={onClose}
                  type="textButton"
                  size="thin"
                  icon={<X size={24} color="var(--inte-G800)" />}
                />
              </div>
              <div
                ref={scrollRef}
                className="inte-sheet__body"
                onTouchStart={(e) => handleTouchStart(e)}
              >
                {children}
              </div>

              {(primaryAction || secondaryAction) && (
                <div
                  className={getClassNames({
                    "inte-sheet__footer": true,
                    "inte-sheet__footer--twoAction":
                      primaryAction && secondaryAction,
                    "inte-sheet__footer--oneAction":
                      !primaryAction || !secondaryAction,
                  })}
                >
                  {secondaryAction && (
                    <Button
                      {...secondaryAction}
                      customClass="inte-sheet__secondaryAction"
                    />
                  )}
                  {primaryAction && (
                    <Button
                      {...primaryAction}
                      customClass="inte-sheet__primaryAction"
                    />
                  )}
                </div>
              )}
            </div>
            <div
              className="inte-sheet__backdrop"
              onClick={overlayClose ? onClose : undefined}
            ></div>
          </div>
        </PortalComponent>
      )}
    </>
  );
};

export default Sheet;
