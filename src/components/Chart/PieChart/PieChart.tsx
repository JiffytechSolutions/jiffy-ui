import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  percentage = true,
  tooltip = true,
  customClass = "",
}) => {
  const moveRef = useRef<any>(null);
  const toolTipRef = useRef<any>(null);
  const totalPercentage = getTotalPercentage(chartData);
  let cumulativePercentage = 0;
  const [tooltipText, setTooltipText] = useState({ label: "", value: "" });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
  const [tooltipWidth, setTooltipWidth] = useState<number>(130);
  const [initialAnimationPlayed, setInitialAnimationPlayed] = useState(false);

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
    setTooltipText({ label: "", value: "" });
    setHoveredSlice(null);
  };

  const handleMouseMove = (event: any) => {
    const left = event.clientX - moveRef?.current?.getBoundingClientRect().left;
    const top = event.clientY - moveRef?.current?.getBoundingClientRect().top;
    setTooltipPosition({ x: left - tooltipWidth, y: top - 65 });
  };

  useLayoutEffect(() => {
    const toolTipWidth =
      toolTipRef?.current?.getBoundingClientRect()?.width / 2;
    setTooltipWidth(toolTipWidth);
  }, [tooltip, tooltipText, toolTipRef?.current]);

  // animation effect
  const c = chartData.length;
  const [rotateP, setRotateP] = useState([0, 0, 0, 0, 0, 0]);
  useEffect(() => {
    // Trigger the rotation animation when the component mounts
    if (!initialAnimationPlayed) {
      const paths = document.querySelectorAll(".inte-pieChart__path");
      const totalPercentage = getTotalPercentage(chartData);
      let currTot = 0;
      const pointArr = Array.from(paths).map((path: any, index) => {
        //  path.style.animation = `rotateAnimation 0.5s ease-out ${index * 0.1}s`;

        // Calculate the percentage for each path area
        const currentSlicePercentage =
          (Number(chartData[index].value) / totalPercentage) * 100;

        currTot = currTot + currentSlicePercentage;

        return currTot;
      });

      // setRotateP(pointArr);
      const a = pointArr.map((val) => {
        return -((360 * val) / 100);
      });

      setRotateP(a);

      setTimeout(() => {
        setRotateP([0, 0, 0, 0, 0, 0]);
      }, 500);

      const isPageLoading = !document.hidden;

      // Set rotateP based on whether the page is loading or not
      // setRotateP(isPageLoading ? a : [0, 0, 0, 0, 0, 0]);
    }
  }, [initialAnimationPlayed]);
  console.log(rotateP);

  return (
    <>
      <div
        className={getClassNames({
          "inte-pieChart": true,
          [customClass]: customClass,
        })}
        onMouseMove={handleMouseMove}
        ref={moveRef}
      >
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          style={{ overflow: "visible" }}
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
                className="inte-pieChart__path"
                d={pathData}
                fill={item.color || ""}
                onMouseOver={(e) =>
                  handleMouseOver(item.label, item.value, index, e)
                }
                onMouseLeave={handleMouseLeave}
                style={{
                  transition: "transform 0.5s ease, fill 0.5s ease",
                  transformOrigin: "center",
                  transform: `scale(${scaleFactor}) rotate(${
                    rotateP[index - 1]
                  }deg)`,
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
            ref={toolTipRef}
          >
            {tooltipText.label}: {tooltipText.value}
          </div>
        )}
      </div>
    </>
  );
};

export default PieChart;
// added animation
