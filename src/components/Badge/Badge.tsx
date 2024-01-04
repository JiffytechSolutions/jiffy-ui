import React from "react";
import ToolTip from "../ToolTip/ToolTip";
import getClassNames from "../../utilities/getClassnames";
import "./Badge.css";
const Badge: React.FC<BadgeI> = ({
  type = "primary",
  size = "medium",
  children,
  customBgColor,
  variant = "filled",
  badgeTextColor,
  helpPosition = "bottom",
  ...props
}: BadgeI): JSX.Element => {
  //filled Badge type cases
  const checkBadgeType: { [key: string]: string } = {
    primary: "inte-badge--primary",
    secondary: "inte-badge--seconadary",
    success: "inte-badge--success",
    error: "inte-badge--error",
    warning: "inte-badge--warning",
  };
  //Accentbadge Type Case
  const checkBadgeAccentType: { [key: string]: string } = {
    primary: "inte-accentBadge--primary",
    secondary: "inte-accentBadge--seconadary",
    success: "inte-accentBadge--success",
    error: "inte-accentBadge--error",
    warning: "inte-accentBadge--warning",
  };

  //Badge size case
  const checkSize: { [key: string]: string } = {
    large: "inte-badge--large",
    medium: "inte-badge--medium",
    small: "inte-badge--small",
  };
  //dot size case

  const checkDotSize: { [key: string]: string } = {
    large: "inte-badgeDot--large",
    medium: "inte-badgeDot--medium",
    small: "inte-badgeDot--small",
  };

  const typeValue = type && checkBadgeType[type];
  const accenttypeValue = type && checkBadgeAccentType[type];
  const sizeDotsValue = size && checkDotSize[size];
  const sizeValue = size && checkSize[size];
  let icon = <></>;
  const { iconAlign = "left" } = props;

  if (props.icon) {
    iconAlign !== "left" ? { paddingLeft: "1rem" } : { paddingRight: "1rem" };
    icon = <span className={`inte-badge__icon`}>{props.icon}</span>;
  }

  return (
    <div
      style={{ backgroundColor: customBgColor, color: badgeTextColor }}
      className={getClassNames({
        "inte-badge__dot": props.dot,
        [sizeDotsValue]: sizeDotsValue && props.dot,
        [typeValue]: typeValue && variant == "filled",
        [props.customClass as string]: props.customClass,
        "inte-badge": !props.dot && variant,
        [sizeValue]: !props.dot,
        [accenttypeValue]: !props.dot && variant == "accent",
        "inte-badge--onlyIcon": children === undefined && !props.dot,
        "inte-badge--hasHelp": props.helpText,
      })}
    >
      {props.dot ? (
        <></>
      ) : (
        variant && (
          <>
            {iconAlign === "left" && icon}
            {children ? (
              <div className="inte-badge__content">
                {!props.helpText ? (
                  <span>{children}</span>
                ) : (
                  <ToolTip
                    isOpen={false}
                    direction={helpPosition}
                    helpText={props.helpText}
                    activator={<span>{children}</span>}
                  />
                )}
              </div>
            ) : (
              ""
            )}
            {iconAlign === "right" && icon}
          </>
        )
      )}
    </div>
  );
};
export interface BadgeI {
  children?: React.ReactNode | string;
  variant?: "filled" | "accent";
  type?: "primary" | "secondary" | "success" | "error" | "warning";
  size?: "large" | "medium" | "small";
  customBgColor?: string;
  badgeTextColor?: string;
  customClass?: string;
  icon?: React.ReactNode;
  iconAlign?: "left" | "right";
  dot?: boolean;
  helpText?: string | React.ReactNode;
  helpPosition?: "left" | "right" | "top" | "bottom";
}

export default Badge;
