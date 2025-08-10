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
}

function BottomSheet(props: BottomSheetI) {
  const { isOpen, onDismiss, children, heading } = props;
  const open = useDelay(isOpen, 600);
  return open || isOpen ? (
    <Portal>
      <div className="bottom-sheet__wrapper">
        <div
          className={`bottom-sheet-overlay  ${isOpen && open ? "open" : "close"}`}
          onClick={onDismiss}
          role="none"
        ></div>
        <div className={`bottom-sheet ${isOpen && open ? "open" : "close"}`}>
          <div className="bottom-sheet-content">
            <div
              className={
                heading ? "bottom-sheet__heading" : "bottom-sheet-header"
              }
            >
              {heading && <h3 className="text-size-16 font-weight-600 line-height-24">{heading}</h3>}
              <button className="close-button" onClick={onDismiss}>
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

export default  BottomSheet ;
