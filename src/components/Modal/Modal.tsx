import { X } from "react-feather";
import useDelay from "../../utilities/useDelay";
import Portal from "../../utilities/Portal";
import "./modal.css";
import TextStyle from "../TextStyle/TextStyle";
import React, { useEffect, useRef, useCallback } from "react";
import Button, { ButtonI } from "../Button/Button";
import FlexLayout from "../FlexLayout/FlexLayout";
import InlineStack from "../InlineStack/InlineStack";

const Modal = ({
  isOpen,
  onDismiss,
  children,
  title,
  primaryAction,
  secondaryAction,
  footer,
  size = "medium",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  ...props
}: ModalI) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const open = useDelay(isOpen, 300);

  // Handle escape key
  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape" && closeOnEscape) {
      onDismiss();
    }
  }, [onDismiss, closeOnEscape]);

  // Handle focus management
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, [isOpen]);

  // Handle escape key listener
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, handleEscape]);

  // Handle overlay click
  const handleOverlayClick = useCallback((event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onDismiss();
    }
  }, [onDismiss, closeOnOverlayClick]);

  const renderAction = (action: ButtonI | undefined, variant: "Primary" | "Secondary", defaultText: string) => {
    if (!action) return null;

    const {
      color,
      icon,
      isDisabled,
      isLoading,
      alignIcon,
      children,
      onClick,
      ...restProps
    } = action;

    return (
      <Button
        size="Medium"
        variant={variant}
        color={color || "Primary"}
        icon={icon}
        alignIcon={alignIcon}
        isDisabled={isDisabled}
        isLoading={isLoading}
        onClick={onClick}
        {...restProps}
      >
        {children || defaultText}
      </Button>
    );
  };

  if (!open && !isOpen) return null;

  return (
    <Portal>
      <div 
        className={`jf-modal_overlay ${(isOpen && open) ? "open" : "close"}`}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby="modal-content"
      />
      <div 
        ref={modalRef}
        className={`jf-modal jf-modal--${size} ${(isOpen && open) ? "open" : "close"}`}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby="modal-content"
      >
        <div className="jf-modal_inner">
          <div className="jf-modal-content">
            {(title || showCloseButton) && (
              <div className="jf-modal-header">
                {title && (
                  <TextStyle 
                    as="h4" 
                    type="MdHeading" 
                    textColor="Dark"
                    id="modal-title"
                  >
                    {title}
                  </TextStyle>
                )}
                {showCloseButton && (
                  <button 
                    className="jf-close-button" 
                    onClick={onDismiss}
                    aria-label="Close modal"
                    type="button"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            )}
            <div className="jf-modal-body" id="modal-content">
              {children}
            </div>
            {(primaryAction || secondaryAction || footer) && (
              <div className="jf-modal_footer">
                {footer || (
                  <InlineStack gap={3} justifyContent="end">
                    {renderAction(secondaryAction, "Secondary", "Cancel")}
                    {renderAction(primaryAction, "Primary", "Confirm")}
                  </InlineStack>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export interface ModalI {
  isOpen: boolean;
  onDismiss: () => void;
  children: string | React.ReactNode;
  title?: string;
  footer?: string | React.ReactNode;
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
  size?: "small" | "medium" | "large" | "fullscreen";
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
}

export default Modal;
