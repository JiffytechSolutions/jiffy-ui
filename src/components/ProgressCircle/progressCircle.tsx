import React, { useId } from "react";
import "../ProgressBar/Progress.css";

function ProgressCircle({
  percentage = 0,
  fontsize = 7,
  enablePercentage = true,
  size = "large",
  customClass,
}: ProgressCircleI = {}): JSX.Element {
  const checkSize: { [key: string]: string } = {
    large: "inte-progressCircle--large",
    small: "inte-progressCircle--small",
  };
  const sizeValue = size && checkSize[size];
  const rId = useId();
  return (
    <div className={`${customClass} ${sizeValue}`}>
      <svg
        className={`inte-circle-chart `}
        viewBox="0 0 33.83098862 33.83098862"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={"inte-circle-chart__background"}
          stroke="#F0EDFA"
          strokeWidth="3"
          fill="none"
          cx="16.91549431"
          cy="16.91549431"
          r="14.91549431"
        ></circle>
        <circle
          className={"inte-circle-chart__circle"}
          stroke={`${`url(#myGradient-${rId})`}`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          cx="16.91549431"
          cy="16.91549431"
          r="14.91549431"
          strokeDasharray={`${percentage},200`}
        ></circle>
        <linearGradient id={`myGradient-${rId}`} gradientTransform="rotate(90)">
          <stop offset="10%" stopColor="#6E4FCB" />
          <stop offset="100%" stopColor="#6E4FCB" />
        </linearGradient>
        <g className={"inte-circle-chart__info"}>
          {enablePercentage && (
            <text
              style={{ fontSize: fontsize }}
              className={"inte-progressCircle__text"}
              x="16.91549431"
              y="17.5"
              alignmentBaseline="central"
              textAnchor="middle"
              fontWeight="800"
            >
              {percentage > 100 ? 100 + "%" : percentage + "%"}
            </text>
          )}
        </g>
      </svg>
    </div>
  );
}
export interface ProgressCircleI {
  percentage?: number;
  size?: "large" | "small";
  fontsize?: number;
  enablePercentage?: boolean;
  customClass?: string;
}

export default ProgressCircle;
