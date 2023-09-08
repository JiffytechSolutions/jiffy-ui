import React, { FC } from "react";
import getClassNames from "../../utilities/getClassnames";
import "./Spinner.css";
export interface SpinnerI {
  color: "default" | "danger" | "primary" | "info";
  size?: "large" | "medium" | "small";
  customClass?: string;
}

const Spinner: FC<SpinnerI> = ({
  color = "default",
  size = "large",
  customClass = "",
}: SpinnerI) => {
  const getColor = {
    default: "inte-spinner--default",
    danger: "inte-spinner--danger",
    primary: "inte-spinner--primary",
    info: "inte-spinner--info",
  };
  const getSize = {
    large: "inte-spinner--large",
    medium: "inte-spinner--medium",
    small: "inte-spinner--small",
  };
  const colors = getColor[color];
  const sizes = getSize[size];
  return (
    <div
      className={getClassNames({
        "inte-spinner": true,
        [colors]: colors,
        [sizes]: sizes,
        [customClass]: customClass,
      })}
    ></div>
  );
};

export default Spinner;
