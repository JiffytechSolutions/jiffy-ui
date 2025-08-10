import { forwardRef } from "react";
import "./TextLink.css";
import React from "react";

const TextLink = forwardRef(
  (
    {
      label = "Text link",
      isDisabled = false,
      icon,
      url,
      customClass = "",
      target = "_blank",
      iconAlign = "Right",
      linkType = "Default",
      ...props
    }: TextLinkI,
    ref: any
  ) => {
    const checkColor = (): string => {
      switch (linkType) {
        case "Success":
          return "pixel-textLink--possitive";
        case "Danger":
          return "pixel-textLink--negative";
        case "Warning":
          return "pixel-textLink--waiting";
        case "Default":
          return "pixel-textLink--default";
        default:
          return "";
      }
    };

    const getType = checkColor();
    return (
      <span
        className={`pixel-textLink ${getType} ${isDisabled ? "pixel--textLink--disabled" : ""}`}
      >
        <a
          className="pixel-textLink__label"
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
            {iconAlign === "Left" && icon}
            {label}
            {iconAlign === "Right" && icon}
          </>
        </a>
      </span>
    );
  }
);
export interface TextLinkI {
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void | string | any;
  url?: string;
  customClass?: string;
  isDisabled?: boolean;
  target?: "_self" | "_blank" | "_parent" | "_top";
  iconAlign?: "Left" | "Right";
  linkType?: "Success" | "Danger" | "Warning" | "Default";
}

export default TextLink;
