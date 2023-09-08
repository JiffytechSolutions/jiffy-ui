import React from "react";
import getClassNames from "../../utilities/getClassnames";
import "./TextLink.css";

const TextLink: React.FC<TextLinkI> = ({
  label,
  isDisabled = false,
  icon,
  url,
  customClass = "",
  target = "_blank",
  iconAlign = "right",
  linkType = "default",
  ...props
}: TextLinkI):JSX.Element => {
  const getType: { [key: string]: string } = {
    danger: "inte-textLink--danger",
    warning: "inte-textLink--warning",
    default: "inte-textLink--default",
  };
  const types = linkType && getType[linkType];
  return (
    <span
      className={getClassNames({
        "inte-textLink": true,
        [types]: types,
        "inte--textLink--disabled": isDisabled,
        [customClass]: customClass,
      })}
    >
      <a
        className="inte-textLink__label"
        {...(url ? { href: url } : {})}
        onClick={
          url
            ? () => {
                javascript:;
              }
            : props.onClick
        }
        target={url && target}
      >
        <>
          {iconAlign === "left" && icon}
          {label}
          {iconAlign === "right" && icon}
        </>
      </a>
    </span>
  );
};
export interface TextLinkI {
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void | string | any;
  url?: string;
  customClass?: string;
  isDisabled?: boolean;
  target?: "_self" | "_blank" | "_parent" | "_top";
  iconAlign?: "left" | "right";
  linkType?: "danger" | "warning" | "default";
}

export default TextLink;
