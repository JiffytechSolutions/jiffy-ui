import { X } from "react-feather";
import useDelay from "../../utilities/useDelay";
import Portal from "../../utilities/Portal";
import "./BottomSheet.css";
import React from "react";
export interface BottomSheetI {
  heading?: string;
  isOpen: boolean;
  onDismiss?: () => void;
  children: string | React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  showDragHandle?: boolean;
  preventBackdropClose?: boolean;
}

function BottomSheet(props: BottomSheetI) {
  const { 
    isOpen, 
    onDismiss, 
    children, 
    heading, 
    size = 'medium',
    showDragHandle = true,
    preventBackdropClose = false
  } = props;
  const open = useDelay(isOpen, 600);
  return open || isOpen ? (
    <Portal>
      <div className="bottom-sheet__wrapper">
        <div
          className={`bottom-sheet-overlay ${isOpen && open ? "open" : "close"}`}
          onClick={preventBackdropClose ? undefined : onDismiss}
          role="none"
        ></div>
        <div className={`bottom-sheet bottom-sheet--${size} ${isOpen && open ? "open" : "close"}`}>
          <div className="bottom-sheet-content">
            {showDragHandle && (
              <div className="bottom-sheet-drag-handle">
                <div className="drag-handle-indicator"></div>
              </div>
            )}
            <div
              className={
                heading ? "bottom-sheet__heading" : "bottom-sheet-header"
              }
            >
              {heading && <h3 className="font-size-16 font-weight-600 line-height-24">{heading}</h3>}
              <button className="bottom-sheet-close-button" onClick={onDismiss} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="bottom-sheet-body">{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
}

export default BottomSheet;
