import { X } from "react-feather";
import useDelay from "../../utilities/useDelay";
import Portal from "../../utilities/Portal";
import "./SideSheet.css";
import TextStyle from "../TextStyle/TextStyle";
import React from "react";

const SideSheet = ({
  isOpen,
  onDismiss,
  children,
  title = "Lorem ipsum",
  footer,
  ...props }: SideSheetI) => {

  const open = useDelay(isOpen, 600);
  return (open || isOpen) ? (
    <Portal>
      <div className={`jf-sideSheet_overlay  ${(isOpen && open) ? "open" : "close"}`}
        onClick={onDismiss}
        role="none"
      ></div>
      <div className={`jf-sideSheet ${(isOpen && open) ? "open" : "close"}`}>
        <div className={`jf-sideSheet_inner`}>
          <div className="jf-sideSheet-content">
            <div className="jf-sideSheet-header">
              {title && (
                <TextStyle as="h4" type="MdHeading" textColor="Dark">{title}</TextStyle>
              )}
              <button className="jf-close-button" onClick={onDismiss}>
                <X size={20} />
              </button>
            </div>
            <div className="jf-sideSheet-body">
              {children}
            </div>
            {footer &&
              <div className="jf-sideSheet_footer">
                {footer}
              </div>
            }
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
};
export interface SideSheetI {
  isOpen: boolean;
  onDismiss: () => void;
  children: string | React.ReactNode;
  title?: string;
  footer: string | React.ReactNode;
}

export default SideSheet;
