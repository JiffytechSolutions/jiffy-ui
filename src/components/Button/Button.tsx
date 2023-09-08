import React, { useId } from "react";
import { ChevronDown } from "../../storybook/Foundation/Icons/Icons";
import Badge from "../Badge/Badge";
import Spinner from "../Spinner/Spinner";
import "./Button.css";
import getClassNames from "../../utilities/getClassnames";

const Button = ({
  type = "primary",
  isFullWidth = false,
  size = "large",
  halign,
  isLoading = false,
  disclosure = false,
  isDisable = false,
  isHaptic = false,
  icon,
  id,
  iconAlign = "left",
  customClass = "",
  status,
  hapticTimeout,
  navigatorPattern = [200],
  ...props
}: ButtonI): JSX.Element => {
  const rId: any = useId();
  const checkType: { [key: string]: string } = {
    primary: "inte-btn--primary",
    outlined: "inte-btn--outlined",
    textButton: "inte-btn--textButton",
    danger: "inte-btn--danger",
    dangerOutlined: "inte-btn--dangerOutlined",
    dangerPlain: "inte-btn--dangerPlain",
    secondary: "inte-btn--secondary",
  };

  const getSize: { [key: string]: string } = {
    extraThin: "inte-btn--extraNarrow",
    thin: "inte-btn--narrow",
    large: "inte-btn--large",
  };

  const checkForForHAlign: { [key: string]: string } = {
    equal: "inte-btn--distributionEqualSpacing",
    end: "inte-btn--distributionEnd",
    start: "inte-btn--distributionStart",
    spaceBetween: "inte-btn--distributionBetween",
    center: "inte-btn--distributionCenter",
  };

  const bType = type && checkType[type];
  const sizeCss = size && getSize[size];
  const halignCss = halign && checkForForHAlign[halign];
  const content = props.content ? props.content : props.children;
  const btnIcon = <>{<span className={`inte-btn__icon`}>{icon}</span>}</>;

  const makeRippleAnimation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(button.clientHeight, button.clientWidth);
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.top = `${e.clientY - rect.top - diameter / 2}px`;
    ripple.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    ripple.style.height = `${diameter}px`;
    ripple.style.width = `${diameter}px`;
    button.appendChild(ripple);

    setTimeout(() => {
      button.removeChild(ripple);
    }, 600);
  };

  const renderButton = (
    <button
      id={id}
      disabled={isDisable}
      onClick={(e) => {
        if (!isLoading && !isDisable) {
          makeRippleAnimation(e);
        }
        if (!isLoading && !isDisable && props.onClick) {
          props.onClick();
          isHaptic &&
            setTimeout(() => {
              navigator.vibrate(navigatorPattern);
            }, hapticTimeout);
        }
      }}
      onMouseEnter={() => {
        if (!isLoading && !isDisable && props.onMouseEnter)
          props.onMouseEnter();
      }}
      onBlur={() => {
        if (!isLoading && !isDisable && props.onBlur) props.onBlur();
      }}
      className={getClassNames({
        "inte-btn": true,
        "inte-btn--disable": isDisable,
        "inte-btn--hasDisclosure": true,
        [bType]: bType,
        "inte-btn--hasIcon": true,
        [halignCss as string]: halignCss,
        "inte-btn--fullWidth": isFullWidth,
        [sizeCss]: sizeCss,
        "inte-btn--loading": isLoading,
        "inte-btn--onlyIcon":
          (props.content === undefined && props.children === undefined) ||
          props.content == "" ||
          props.children == "",
        [customClass]: customClass,
      })}
      {...(isLoading || isDisable ? { "aria-disabled": "true" } : {})}
      {...(props.accessibilityLabel
        ? { "aria-label": props.accessibilityLabel }
        : !props.children
          ? { "arai-label": `Button ${rId && rId}` }
          : {})}
      aria-describedby={props.ariaDescribedBy}
      aria-expanded={props.ariaExpanded}
      aria-controls={props.ariaControls}
      aria-owns={props.ariaOwns}
      {...(isLoading ? { "aria-busy": "true" } : {})}
    >
      {/* {ripples} */}
      {isLoading ? (
        <Spinner
          size="medium"
          color={
            type == "primary"
              ? "primary"
              : type == "danger"
                ? "danger"
                : type == "dangerOutlined"
                  ? "danger"
                  : type == "dangerPlain"
                    ? "danger"
                    : type == "outlined"
                      ? "default"
                      : type == "secondary"
                        ? "default"
                        : type == "textButton"
                          ? "info"
                          : "default"
          }
        ></Spinner>
      ) : null}
      {iconAlign == "left" && icon && btnIcon}
      {props.children ? (
        <span className={"inte-btn__text"}>{content}</span>
      ) : (
        ""
      )}
      {props.content ? <span className={"inte-btn__text"}>{content}</span> : ""}
      {iconAlign == "right" && icon && btnIcon}
      {disclosure && (
        <span className="inte-btn__disclosure">
          <ChevronDown size={size == "extraThin" ? "20" : "24"} />
        </span>
      )}
    </button>
  );
  return (
    <>
      {status ? (
        <div
          className={`inte-btn__container ${isFullWidth ? "inte-btn__container--fullWidth" : ""
            }`}
        >
          {renderButton}
          {status && type !== "textButton" && type !== "dangerPlain" && (
            <Badge type={status} dot />
          )}
        </div>
      ) : (
        renderButton
      )}
    </>
  );
};

export interface ButtonI {
  type?:
  | "primary"
  | "danger"
  | "dangerOutlined"
  | "secondary"
  | "outlined"
  | "dangerPlain"
  | "textButton";
  status?: "primary" | "secondary" | "success" | "error" | "warning";
  size?: "extraThin" | "thin" | "large";
  iconAlign?: "left" | "right";
  halign?: "equal" | "end" | "start" | "spaceBetween" | "center";
  isFullWidth?: boolean;
  disclosure?: boolean;
  isLoading?: boolean;
  isHaptic?: boolean;
  hapticTimeout?: number;
  navigatorPattern?: number[];
  isDisable?: boolean;
  ariaExpanded?: boolean;
  icon?: React.ReactNode;
  accessibilityLabel?: string;
  ariaControls?: string;
  ariaDescribedBy?: string;
  ariaOwns?: string;
  id?: string;
  children?: string | React.ReactNode | JSX.Element | any;
  content?: string;
  customClass?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onBlur?: () => void;
}

export default Button;
