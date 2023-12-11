/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { X } from "../../storybook/Foundation/Icons/Icons";
import Button, { ButtonI } from "../Button/Button";
import getClassNames from "../../utilities/getClassnames";
import "./Alert.css";

const Alert: React.FC<AlertI> = ({
  type = "default",
  title,
  hasDestroy = false,
  onClose,
  description,
  icon,
  primaryAction,
  seconadaryAction,
  customClass,
}: AlertI) => {
  const checkAlertType: { [key: string]: string } = {
    default: "inte-alert--default",
    warning: "inte-alert--warning",
    danger: "inte-alert--danger",
    success: "inte-alert--success",
    info: "inte-alert--info",
  };

  const typeNotify = type && checkAlertType[type];

  const checkDestroy = () => {
    if (hasDestroy) {
      return (
        <span className="inte-alert--destroy">
          <span
            role={"button"}
            aria-label="inte-alert--destroy"
            style={{
              cursor: "pointer",
              display: "flex",
              padding: "0.5rem",
              borderRadius: "var( --radius-rounded-6)",
            }}
            onClick={onClose}
          >
            <X size={20} color={"var(--inte-G800)"} strokeWidth={3} />
          </span>
        </span>
      );
    }
  };

  useEffect(() => {
    const parentElement = document?.querySelectorAll(".inte-alert");
    for (let i = 0; i < parentElement.length; i++) {
      let addClass = parentElement[i].closest(".inte-animationWrapper");

      if (addClass?.classList.contains("inte-animationWrapper")) {
        addClass?.classList.add("inte-alert__animation");
      }
    }
  }, []);

  return (
    <div
      className={getClassNames({
        "inte-alert": true,
        [typeNotify]: typeNotify,
        "inte-alert__hasDestroy": hasDestroy,
        [customClass as string]: customClass,
      })}
    >
      <div
        className={getClassNames({
          "inte-alert__content": true,
          "inte-alert__withDescription": description,
        })}
      >
        {icon ? <div className="inte-alert__icon">{icon}</div> : ""}
        <div className={"inte-alert__text"}>
          {title && <div className="inte-alert__title">{title}</div>}
          {description && (
            <div className="inte-alert__description">{description}</div>
          )}
          {(primaryAction || seconadaryAction) && (
            <div className="inte-alert__actionsBtn">
              {primaryAction && (
                <Button
                  type="outlined"
                  content={primaryAction.content}
                  icon={primaryAction.icon}
                  iconAlign={primaryAction.iconAlign}
                  onClick={primaryAction.onClick}
                />
              )}
              {seconadaryAction && (
                <Button
                  type="textButton"
                  icon={seconadaryAction.icon}
                  content={seconadaryAction.content}
                  onClick={seconadaryAction.onClick}
                />
              )}
            </div>
          )}
        </div>
      </div>
      {checkDestroy() && checkDestroy()}
    </div>
  );
};

export interface AlertI {
  type: "default" | "warning" | "success" | "danger" | "info";
  title: string | React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
  hasDestroy?: boolean;

  icon?: React.ReactNode;
  primaryAction?: ButtonI;
  seconadaryAction?: ButtonI;
  customClass?: string;
}

export default Alert;
