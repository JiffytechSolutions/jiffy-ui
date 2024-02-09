import React, { useEffect, useRef, useState } from "react";
import getClassNames from "../../../utilities/getClassnames";
import "./PieAndDonutChart.css";

export interface PieChartI {
  chartData: PieChartData[];
  height?: number;
  width?: number;
  showTooltip?: boolean;
  showBorder?: boolean;
  tooltipValue?: "percentage" | "value";
  type?: "piechart" | "donutchart";
  percentage?: boolean;
  customClass?: string;
}

export interface PieChartData {
  value: number | number;
  label: string;
  color: string;
}

const getTotalPercentage = (chartData: PieChartData[]) =>
  chartData.reduce((sum, item) => sum + Number(item.value), 0);

const PieAndDonutChart: React.FC<PieChartI> = ({
  chartData,
  height = 250,
  width = 250,
  percentage = false,
  showTooltip = false,
  showBorder = false,
  customClass = "",
  tooltipValue = "percentage",
  type = "piechart",
}) => {
  const moveRef = useRef<any>(null);
  const toolTipRef = useRef<any>(null);
  const totalPercentage = getTotalPercentage(chartData);
  let cumulativePercentage = 0;
  const [tooltipText, setTooltipText] = useState({ label: "", value: 0 });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
  const [tooltipWidth, setTooltipWidth] = useState<number>(130);
  const [rotateP, setRotateP] = useState<any>([]);

  const totalValue = chartData.reduce(
    (sum, item) => sum + Number(item.value) / 100,
    0
  );

  const result = chartData.map((value: any) => value.value / totalValue); // Divide each element of b by a
  const totalP = result.reduce((sum, value) => sum + value, 0); // Get the sum of the results

  const handleMouseOver = (
    label: any,
    value: any,
    index: number,
    event: any
  ) => {
    setTooltipText({ label: label, value: value });
    const left = event.clientX - moveRef?.current?.getBoundingClientRect().left;
    const top = event.clientY - moveRef?.current?.getBoundingClientRect().top;
    setTooltipPosition({ x: left - tooltipWidth, y: top - 65 });
    setHoveredSlice(index);
  };

  const handleMouseLeave = () => {
    setTooltipText({ label: "", value: 0 });
    setHoveredSlice(null);
  };

  const handleMouseMove = (event: any) => {
    const left = event.clientX - moveRef?.current?.getBoundingClientRect().left;
    const top = event.clientY - moveRef?.current?.getBoundingClientRect().top;
    setTooltipPosition({ x: left - tooltipWidth, y: top - 65 });
  };

  // getting tool tip pisition width
  useEffect(() => {
    if (toolTipRef?.current) {
      const toolTipWidth = toolTipRef.current.getBoundingClientRect();
      setTooltipWidth(toolTipWidth.width / 2);
    }
  }, [showTooltip, tooltipText.label, tooltipText.value, toolTipRef?.current]);

  // Rotation animation effect
  useEffect(() => {
    const paths =
      type === "piechart"
        ? document.querySelectorAll(".inte-pieChart__path")
        : document.querySelectorAll(".inte-donutChart__path");
    const totalPercentage = getTotalPercentage(chartData);
    let currTot = 0;
    const pointArr = Array.from(paths).map((path, index) => {
      const currentSlicePercentage =
        (Number(chartData[index]?.value) / totalPercentage) * 100;

      const degreeOfRotation = (currentSlicePercentage / 100) * 360;
      currTot = currTot + degreeOfRotation;

      return -currTot;
    });

    const newArray = Array.from({ length: chartData.length }, () => 0);
    setRotateP(pointArr);
    setTimeout(() => {
      setRotateP(newArray);
    }, 100);
  }, [chartData]);

  const allNegative = rotateP.every((value: any) => value < 0);

  // percentage format
  const formatPercentage = (value: number) => {
    const formattedValue =
      value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
    return `${formattedValue}%`;
  };

  return (
    <>
      <div
        className={getClassNames({
          "inte-pieChart": type === "piechart",
          "inte-donutChart": type === "donutchart",
          [customClass]: customClass,
        })}
        onMouseMove={handleMouseMove}
        ref={moveRef}
      >
        <svg
          className={`inte-${
            type === "piechart" ? "pieChart" : "donutChart"
          }__svg`}
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          style={{ overflow: "visible" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {chartData.map((item, index: number) => {
            let startAngle = 0;
            // const startAngle = (cumulativePercentage / totalPercentage) * 360;
            const endAngle =
              ((cumulativePercentage + Number(item.value)) / totalPercentage) *
              360;

            if (index > 0) {
              startAngle = (cumulativePercentage / totalPercentage) * 360;
            } else {
              startAngle = 0.001;
            }

            cumulativePercentage += Number(item.value);

            const isHovered = index === hoveredSlice;
            const scaleFactor = isHovered ? 1.03 : 1; // Increase size when hovered

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
              Number(item.value) / totalPercentage >= 0.5 ? 1 : 0
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
                className={getClassNames({
                  "inte-pieChart__path": type === "piechart",
                  "inte-donutChart__path": type === "donutchart",
                })}
                d={pathData}
                fill={item.color || ""}
                onMouseOver={(e) =>
                  handleMouseOver(item.label, item.value, index, e)
                }
                onMouseLeave={handleMouseLeave}
                style={{
                  // animation: index === 1 ? "linear 1s graphAni" : "",
                  opacity: `${allNegative ? 0 : 1}`,
                  transformOrigin: "center",
                  transform: `scale(${scaleFactor}) rotate(${
                    rotateP.length > 0 ? rotateP[index] : 0
                  }deg)`,
                }}
                {...(showBorder && { stroke: "#fff", strokeWidth: "1" })}
              />
            );
          })}

          {type === "donutchart" && (
            <circle
              cx={width / 2}
              cy={height / 2}
              r={Math.min(width, height) * 0.5 - 50} // Adjust the radius to control the size of the hole
              fill="#fff" // Set the color of the hole
            />
          )}
        </svg>
        {percentage && (
          <div className="inte-pieChart__percentage">
            {formatPercentage(totalP)}
          </div>
        )}
        {tooltipText.label && tooltipText.value && showTooltip && (
          <div
            className="inte-pieChart__tooltip"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
            }}
            ref={toolTipRef}
          >
            {`${tooltipText.label}:  ${
              tooltipValue === "percentage"
                ? formatPercentage(tooltipText.value / totalValue)
                : tooltipText.value
            }`}
          </div>
        )}
      </div>
    </>
  );
};

export default PieAndDonutChart;
