/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable @typescript-eslint/no-explicit-any /
import React from "react";
import Badge from "../Badge/Badge";
import { ChevronDown, ChevronUp } from "../../storybook/Foundation/Icons/Icons";
import getClassNames from "../../utilities/getClassnames";
import "./Tag.css";
import useDelayUnmount from "../../utilities/useDelayTimeout";
const Tag: React.FC<TagI> = ({
  onDestroy = false, // This function destroy  or remove  cross icon in tag
  isAnimation = false,
  children,
  hasPopover = false,
  count,
  isActive = false,
  isDisabled = false,
  size = "small",
  customClass = "",
  onTogglePopup = () => {},
  isOpen = true,
}: TagI): JSX.Element => {
  const animation =
    onDestroy && isAnimation ? useDelayUnmount(isOpen, 200) : true;
  const checkSize = () => {
    if (size === "small" && (count === undefined || !hasPopover)) {
      return "inte-tag--small";
    } else {
      return "inte-tag--large";
    }
  };
  const sizeValue = checkSize();
  const checkOnDismiss = () => {
    if (onDestroy) {
      return (
        <span
          aria-label="clear"
          role={"button"}
          className="inte-tag__clear"
          onClick={(e) => {
            e.stopPropagation();
            !isDisabled && onDestroy();
          }}
        >
          <svg
            width={size === "small" && count === undefined ? "16" : "20"}
            height={size === "small" && count === undefined ? "16" : "20"}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.67035"
              y="1.66681"
              width="16.666"
              height="16.6667"
              rx="8.33302"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.88212 6.87938C7.16554 6.59595 7.62506 6.59595 7.90848 6.87938L10.0028 8.97375L12.097 6.87938C12.3805 6.59595 12.84 6.59595 13.1234 6.87938C13.4068 7.16281 13.4068 7.62235 13.1234 7.90578L11.0291 10.0001L13.1234 12.0945C13.4068 12.3779 13.4068 12.8375 13.1234 13.1209C12.84 13.4043 12.3805 13.4043 12.097 13.1209L10.0028 11.0265L7.90848 13.1209C7.62506 13.4043 7.16554 13.4043 6.88212 13.1209C6.5987 12.8375 6.5987 12.3779 6.88212 12.0945L8.97641 10.0001L6.88212 7.90578C6.5987 7.62235 6.5987 7.16281 6.88212 6.87938Z"
              fill={isDisabled ? "var(--inte-G50)" : "var(--inte-G800)"}
            />
          </svg>
        </span>
      );
    }
    return null;
  };
  return (
    <React.Fragment>
      {animation && (
        <div
          {...(hasPopover && {
            role: "button",
          })}
          className={getClassNames({
            "inte-tag": true,
            "inte-tag--hasPopover": hasPopover,
            "inte-tagAnimation--in":
              isOpen && !hasPopover && !isActive && onDestroy && isAnimation,
            "inte-tagAnimation--out":
              !isOpen && !hasPopover && !isActive && onDestroy && isAnimation,
            "inte-tag--disabled": isDisabled,
            [sizeValue]: sizeValue,
            [customClass]: customClass,
          })}
          onClick={() => !isDisabled && onTogglePopup()}
          {...(hasPopover ? { tabIndex: 0 } : {})}
          aria-disabled={isDisabled ? "true" : "false"}
        >
          <div className="inte-tag__body">
            <div className="inte-tag__content">
              <span>{children}</span>
            </div>
            {checkOnDismiss()}
            {hasPopover && (
              <div className="inte-tag__popover">
                {count && (
                  <Badge
                    size="small"
                    children={count}
                    customBgColor={
                      isDisabled ? "var(--inte-G90)" : "var(--inte-G800)"
                    }
                  />
                )}
                {isActive ? (
                  <ChevronUp
                    size={20}
                    color={isDisabled ? "var(--inte-G50)" : "var(--inte-G800)"}
                  />
                ) : (
                  <ChevronDown
                    size={20}
                    color={isDisabled ? "var(--inte-G50)" : "var(--inte-G800)"}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export interface TagI {
  children: React.ReactNode | string;
  onTogglePopup?: () => void;
  onDestroy?: any;
  size?: "small" | "large";
  isDisabled?: boolean;
  hasPopover?: boolean;
  count?: string | number;
  isActive?: boolean;
  isOpen?: boolean;
  isAnimation?: boolean;
  customClass?: string;
}

export default Tag;
