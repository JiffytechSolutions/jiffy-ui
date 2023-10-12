import React, { useEffect, useId, useRef } from "react";
import { ButtonI } from "../Button/Button";
import { Button } from "..";
import { X } from "../../storybook/Foundation/Icons/Icons";
import useDelayUnmount from "../../utilities/useDelayTimeout";
import useMobileDevice from "../../utilities/useMobileDevice";
import getClassNames from "../../utilities/getClassnames";
import PortalComponent from "../../utilities/PoratalComponent";
import handleShadowOnScroll from "../../utilities/handleShadowOnScroll/handleShadowOnScroll";
import useBodyLock from "../../utilities/UseBodyLock";
import useHandleOnDrag from "../../utilities/handelOnDrag/useHandleOnDrag";
import "./Modal.css";
const Modal: React.FC<ModalI> = ({
  id,
  modalSize = "medium",
  heading = "",
  isOverlayClose = true,
  customClass = "",
  isOpen,
  otpFooter,
  isCloseOnEsc = true,
  ...props
}: ModalI) => {
  const parentRef = useRef(null);
  const modalRef = useRef<any>(null);
  const scrollRef = useRef(null);
  const rID = useId();
  const isMobile = useMobileDevice();
  const animateData = useDelayUnmount(isOpen, 100);
  useBodyLock(animateData);
  const checkModalWidth = {
    small: "inte-modal__dialog--small",
    medium: "inte-modal__dialog--medium",
    large: "inte-modal__dialog--large",
    xLarge: "inte-modal__dialog--extraLarge",
  };
  const modalWidth = checkModalWidth[modalSize];
  // Overlay close
  const clickingOutsideModal = (event: any) => {
    if (isOverlayClose) {
      event.target.classList.contains("inte-modal__container") &&
        props.onClose();
    }
  };
  const keyEscHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isOpen) {
      props.onClose();
    }
  };
  useEffect(() => {
    if (!isCloseOnEsc) return;
    window.addEventListener("keydown", keyEscHandler);
    return () => window.removeEventListener("keydown", keyEscHandler);
  }, [isCloseOnEsc, isOpen]);

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useHandleOnDrag(
    modalRef,
    scrollRef,
    isOpen,
    props.onClose
  );
  handleShadowOnScroll(scrollRef, animateData);
  return (
    <>
      {animateData && (
        <PortalComponent>
          <div
            id={id || `inte-modal-${rID}`}
            className={getClassNames({
              "inte-modal": true,
              "inte-modal--hasOtpFooter": otpFooter,
              "inte-modal--in": isOpen,
              "inte-modal--out": !isOpen,
              [customClass]: customClass,
            })}
            role="button"
            onClick={(e) => clickingOutsideModal(e)}
          >
            <div
              ref={parentRef}
              className={getClassNames({
                "inte-modal__container": true,
                "inte-modal__mobileDevice": isMobile,
                "inte-modal__noMobileDevice": !isMobile,
              })}
            >
              <div
                className={getClassNames({
                  "inte-modal__dialog": true,
                  "inte-mobileDevice--in": isMobile && isOpen,
                  "inte-mobileDevice--out": isMobile && !isOpen,
                  [modalWidth]: !isMobile && modalWidth,
                })}
                ref={modalRef}
                aria-modal={isOpen ? "true" : "false"}
                role="dialog"
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onTouchEnd={handleTouchEnd}
              >
                {isMobile && <div className="inte-modal__handleBar"></div>}
                {((heading && isMobile) ||
                  (heading == "" && isMobile) ||
                  (heading && !isMobile)) && (
                  <div className="inte-modal__header">
                    <div
                      className={getClassNames({
                        "inte-modal__headerTitle": true,
                        "inte-modal__headerTitle--hasIcon": props.headingIcon,
                      })}
                    >
                      {props.headingIcon && (
                        <span className="inte-modal__headerIcon">
                          {props.headingIcon}
                        </span>
                      )}
                      <span>{heading}</span>
                    </div>
                    <Button
                      accessibilityLabel="close"
                      size="thin"
                      type="secondary"
                      icon={<X size={24} color="var(--inte-G800)" />}
                      onClick={() => {
                        props.onClose();
                      }}
                    />
                  </div>
                )}

                <div
                  className="inte-modal__body"
                  ref={scrollRef}
                  onTouchStart={(e) => handleTouchStart(e)}
                >
                  {props.children}
                </div>

                <React.Fragment>{renderFooter()}</React.Fragment>
              </div>
              {isMobile && (
                <div className="inte-modal__backDrop" onClick={props.onClose} />
              )}
            </div>
            {!isMobile && (
              <div
                className="inte-modal__backDrop"
                onClick={props.onClose}
              ></div>
            )}
          </div>
        </PortalComponent>
      )}
    </>
  );
  function renderFooter() {
    if (props.primaryAction || props.secondaryAction || props.tertiaryAction) {
      return (
        <div className="inte-modal__footer">
          <div
            className={getClassNames({
              "inte-modal__footerContent": true,
              "inte-modal__footerContent--fill": props.tertiaryAction,
              "inte-modal__footerContent--end": !props.tertiaryAction,
            })}
          >
            {tertiaryAction()}
            {props.primaryAction || props.secondaryAction ? (
              <div className="inte-modal__footerContentActions">
                {secondaryAction()}
                {primaryAction()}
              </div>
            ) : null}
          </div>
        </div>
      );
    } else {
      if (otpFooter) {
        return (
          <div className={"inte-modal__footer"}>
            <div className={"inte-modal__footerContent"}>{otpFooter}</div>
          </div>
        );
      }
    }
  }
  function primaryAction() {
    if (props.primaryAction) {
      const primaryAction = props.primaryAction;
      return (
        <Button
          size="thin"
          content={primaryAction.content ? primaryAction.content : "Submit"}
          {...primaryAction}
          type={primaryAction.type ? primaryAction.type : "primary"}
          {...(isMobile ? { isFullWidth: true, halign: "center" } : {})}
        />
      );
    }
  }
  function secondaryAction() {
    if (props.secondaryAction) {
      const secondaryAction = props.secondaryAction;
      return (
        <Button
          size="thin"
          content={secondaryAction.content ? secondaryAction.content : "Close"}
          {...secondaryAction}
          type={secondaryAction.type ? secondaryAction.type : "outlined"}
          {...(isMobile ? { isFullWidth: true, halign: "center" } : {})}
        />
      );
    }
  }
  function tertiaryAction() {
    if (props.tertiaryAction) {
      const tertiaryAction = props.tertiaryAction;
      return (
        <Button
          size="thin"
          content={tertiaryAction.content ? tertiaryAction.content : "Close"}
          {...tertiaryAction}
          type={"textButton"}
          {...(isMobile ? { isFullWidth: true, halign: "center" } : {})}
        />
      );
    }
  }
};
export interface ModalI {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  heading?: string;
  headingIcon?: React.ReactNode;
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
  tertiaryAction?: ButtonI;
  isCloseOnEsc?: boolean;
  isOverlayClose?: boolean;
  modalSize?: "small" | "medium" | "large" | "xLarge";
  otpFooter?: React.ReactNode;
  customClass?: string;
}
export default Modal;
