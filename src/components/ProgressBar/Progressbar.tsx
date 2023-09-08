import React, { useState } from "react";
import getClassNames from "../../utilities/getClassnames";
import "./Progress.css";

function Progressbar({
  percentage = 0,
  count,
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

  return (
    <div className="inte-progressbar__wrapper">
      <div
        className={getClassNames({
          inte__progressbar: true,
          [customClass as string]: customClass,
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
  customClass?: string;
  count?: "tooltipCount" | "linearCount";
  progessSize?: "thin" | "thick";
  isAnimating?: boolean;
}
export default Progressbar;
