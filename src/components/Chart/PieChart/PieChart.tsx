import React, { useState } from "react";
import getClassNames from "../../../utilities/getClassnames";
import "./PieChart.css";

export interface PieChartI {
  chartData: PieChartData[];
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

const getTotalPercentage = (chartData: PieChartData[]) =>
  chartData.reduce((sum, item) => sum + Number(item.value), 0);

const PieChart: React.FC<PieChartI> = ({
  chartData,
  height = 250,
  width = 250,
  percentage = false,
  tooltip = true,
  customClass = "",
}) => {
  const totalPercentage = getTotalPercentage(chartData);
  let cumulativePercentage = 0;
  const [tooltipText, setTooltipText] = useState({ label: "", value: "" });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);

  const handleMouseOver = (
    label: any,
    value: any,
    index: number,
    event: any
  ) => {
    setTooltipText({ label: label, value: value });
    setTooltipPosition({ x: event.clientX - 20, y: event.clientY - 55 });
    setHoveredSlice(index);
  };

  const handleMouseLeave = () => {
    setTooltipText({ label: "", value: "" });
    setHoveredSlice(null);
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
        style={{ overflow: "visible" }}
      >
        {chartData.map((item, index) => {
          const startAngle = (cumulativePercentage / totalPercentage) * 360;
          const endAngle =
            ((cumulativePercentage + Number(item.value)) / totalPercentage) *
            360;

          cumulativePercentage += Number(item.value);

          const isHovered = index === hoveredSlice;
          const scaleFactor = isHovered ? 1.3 : 1; // Increase size when hovered

          const pathData = `
            M ${width / 2} ${height / 2}
            L ${
              width / 2 +
              Math.cos((startAngle - 90) * (Math.PI / 180)) *
                (width / 2) *
                scaleFactor
            } ${
            height / 2 +
            Math.sin((startAngle - 90) * (Math.PI / 180)) *
              (height / 2) *
              scaleFactor
          }
            A ${width / 2} ${height / 2} 0 ${
            Number(item.value) / totalPercentage >= 0.5 ? 1 : 0
          } 1
            ${
              width / 2 +
              Math.cos((endAngle - 90) * (Math.PI / 180)) *
                (width / 2) *
                scaleFactor
            } ${
            height / 2 +
            Math.sin((endAngle - 90) * (Math.PI / 180)) *
              (height / 2) *
              scaleFactor
          }
            Z
          `;

          return (
            <path
              key={index}
              d={pathData}
              fill={item.color || ""}
              onMouseOver={(e) =>
                handleMouseOver(item.label, item.value, index, e)
              }
              onMouseLeave={handleMouseLeave}
              style={{
                transition: "transform 0.3s ease, fill 0.3s ease",
                transformOrigin: "center",
                transform: `scale(${scaleFactor})`,
              }}
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
