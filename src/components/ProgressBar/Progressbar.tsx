import React, { useState } from "react";
import getClassNames from "../../utilities/getClassnames";
import "./Progress.css";

function Progressbar({
  percentage = 0,
  count,
  type = "primary",
  progessSize = "thin",
  isAnimating = false,
  customClass,
}: ProgressbarI = {}): JSX.Element {
  const [show, setShow] = useState(false);
  if (percentage > 100) percentage = 100;
  else {
    percentage < 100 ? isAnimating : false;
  }
  const getProgresssize: { [key: string]: string } = {
    thin: "inte__progressbar--thin",
    thick: "inte__progressbar--thick",
  };
  const pthick = progessSize && getProgresssize[progessSize];

  const progressbarType: { [key: string]: string } = {
    primary: "inte-progressbar--primary",
    secondary: "inte-progressbar--seconadary",
    success: "inte-progressbar--success",
    error: "inte-progressbar--error",
    warning: "inte-progressbar--warning",
  };
  const typeValue = type && progressbarType[type];
  return (
    <div
      className={getClassNames({
        "inte-progressbar__wrapper": true,
        [typeValue]: typeValue,
        [customClass as string]: customClass,
      })}
    >
      <div
        className={getClassNames({
          inte__progressbar: true,
          [pthick]: pthick,
        })}
      >
        <div
          onMouseEnter={() => {
            setShow(true);
          }}
          onMouseLeave={() => {
            setShow(false);
          }}
          style={{ width: percentage + "%" }}
          className={getClassNames({
            "inte__progressbar--status": true,
            "inte__progressbar--status-inprogress": isAnimating,
          })}
        ></div>
      </div>
      {show && count == "tooltipCount" && (
        <div
          className="inte-progressbar__toolTip"
          style={{ left: percentage + "%" }}
        >
          {percentage + "%"}
        </div>
      )}
      {count == "linearCount" && (
        <div className="inte-progressbar__text">
          {percentage < 5 ? null : percentage + "%"}
        </div>
      )}
    </div>
  );
}
export interface ProgressbarI {
  percentage?: number;
  type?: "primary" | "secondary" | "success" | "error" | "warning";
  progessSize?: "thin" | "thick";
  count?: "tooltipCount" | "linearCount";
  isAnimating?: boolean;
  customClass?: string;
}
export default Progressbar;
