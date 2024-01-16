import React, { useState } from "react";
import "./PieChart.css";
import { Percent } from "../../../icons";
import getClassNames from "../../../utilities/getClassnames";

export interface PieChartI {
  data: PieChartData[];
  height?: number;
  width?: number;
  tooltip?: boolean;
  percentage?: boolean;
  customClass?: string;
}

export interface PieChartData {
  value: number | string;
  label: string;
  color?: string;
}

const getTotalPercentage = (data: PieChartData[]) =>
  data.reduce((sum, item) => sum + Number(item.value), 0);

const PieChart: React.FC<PieChartI> = ({
  data,
  height = 250,
  width = 250,
  percentage = false,
  tooltip = false,
  customClass = "",
}) => {
  const totalPercentage = getTotalPercentage(data);
  let cumulativePercentage = 0;
  const [tooltipText, setTooltipText] = useState({ label: "", value: "" });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseOver = (label: any, value: any, event: any) => {
    setTooltipText({ label: label, value: value });
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setTooltipText({ label: "", value: "" });
  };

  const handleMouseMove = (event: any) => {
    setTooltipPosition({ x: event.clientX - 20, y: event.clientY - 55 });
  };

  return (
    <div
      className={getClassNames({
        "inte-pieChart": true,
        [customClass]: customClass,
      })}
      onMouseMove={handleMouseMove}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {data.map((item, index) => {
          const startAngle = (cumulativePercentage / totalPercentage) * 360;
          const endAngle =
            ((cumulativePercentage + Number(item.value)) / totalPercentage) *
            360;

          cumulativePercentage += Number(item.value);

          const pathData = `
            M ${width / 2} ${height / 2}
            L ${
              width / 2 +
              Math.cos((startAngle - 90) * (Math.PI / 180)) * (width / 2)
            } ${
            height / 2 +
            Math.sin((startAngle - 90) * (Math.PI / 180)) * (height / 2)
          }
            A ${width / 2} ${height / 2} 0 ${
            Number(item.value) / totalPercentage > 0.5 ? 1 : 0
          } 1
            ${
              width / 2 +
              Math.cos((endAngle - 90) * (Math.PI / 180)) * (width / 2)
            } ${
            height / 2 +
            Math.sin((endAngle - 90) * (Math.PI / 180)) * (height / 2)
          }
            Z
          `;

          return (
            <path
              key={index}
              d={pathData}
              fill={item.color || ""}
              onMouseOver={(e) => handleMouseOver(item.label, item.value, e)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </svg>
      {percentage && (
        <div className="inte-pieChart__percentage">{totalPercentage}%</div>
      )}
      {tooltipText.label && tooltipText.value && tooltip && (
        <div
          className="inte-pieChart__tooltip"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          {tooltipText.label}: {tooltipText.value}
        </div>
      )}
    </div>
  );
};

export default PieChart;
