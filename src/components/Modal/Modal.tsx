import { X } from "react-feather";
import useDelay from "../../utilities/useDelay";
import Portal from "../../utilities/Portal";
import "./modal.css";
import TextStyle from "../TextStyle/TextStyle";
import React from "react";
import Button, { ButtonI } from "../Button/Button";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";

const Modal = ({
  isOpen,
  onDismiss,
  children,
  title = "Lorem ipsum",
  primaryAction,
  secondaryAction,
  footer,
  ...props }: ModalI) => {

  const open = useDelay(isOpen, 600);
  return (open || isOpen) ? (
    <Portal>
      <div className={`jiffyui-modal_overlay  ${(isOpen && open) ? "open" : "close"}`}
        onClick={onDismiss}
        role="none"
      ></div>
      <div className={`jiffyui-modal ${(isOpen && open) ? "open" : "close"}`}>
        <div className={`jiffyui-modal_inner`}>
          <div className="jiffyui-modal-content">
            <div className="jiffyui-modal-header">
              {title && (
                <TextStyle as="h4" type="MdHeading" textColor="Dark">{title}</TextStyle>
              )}
              <button className="jiffyui-close-button" onClick={onDismiss}>
                <X size={20} />
              </button>
            </div>
            <div className="jiffyui-modal-body">
              {children}
            </div>
            {(primaryAction || secondaryAction) &&
              <div className="jiffyui-modal_footer" >
                {/* {footer} */}
                <HorizontalFlex gap={12} align={{ "lg": 'end',"md": 'end', "sm": 'end' }}>
                  {secondaryAction1()}
                  {primaryAction1()}
                </HorizontalFlex>
              </div>
            }
          </div>
        </div>
      </div>
    </Portal>
  ) : null;

  function primaryAction1() {
    if (primaryAction) {
      const {
        color,
        icon,
        isDisabled,
        isLoading,
        alignIcon,
        children,
        onClick,
      } = primaryAction;
      return (
        <Button
          size={"Medium"}
          variant={"Primary"}
          color={color ? color : "Primary"}
          icon={icon && icon}
          alignIcon={alignIcon && alignIcon}
          isDisabled={isDisabled && isDisabled}
          isLoading={isLoading && isLoading}
          children={children ? children : "Got it!"}
          {...primaryAction1}
          onClick={onClick}
        />
      );
    }
  }
  function secondaryAction1() {
    if (secondaryAction) {
      const {
        color,
        icon,
        isDisabled,
        isLoading,
        alignIcon,
        children,
        onClick,
      } = secondaryAction;
      return (
        <Button
          size={"Medium"}
          variant={"Secondry"}
          color={color ? color : "Primary"}
          icon={icon && icon}
          alignIcon={alignIcon && alignIcon}
          isDisabled={isDisabled && isDisabled}
          isLoading={isLoading && isLoading}
          children={children ? children : "Git it!"}
          {...secondaryAction1}
          onClick={onClick}
        />
      );
    }
  }
};

export interface ModalI {
  isOpen: boolean;
  onDismiss: () => void;
  children: string | React.ReactNode;
  title?: string;
  footer?: string | React.ReactNode;
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
}

export default Modal;
