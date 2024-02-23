import React, { useEffect, useRef, useState } from "react";
import getClassNames from "../../../utilities/getClassnames";
import "./PieChart.css";

export interface PieChartI {
  chartData: PieChartData[];
  size?: number;
  animationDuration?: number;
  tooltip?: tooltipI;
  border?: showBorderI;
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
export interface tooltipI {
  show?: boolean;
  type?: "percentage" | "value";
}
export interface showBorderI {
  show?: boolean;
  width?: number;
  color?: string;
}

const getTotalPercentage = (chartData: PieChartData[]) =>
  chartData.reduce((sum, item) => sum + Number(item.value), 0);

const PieChart: React.FC<PieChartI> = ({
  chartData,
  size = 250,
  animationDuration = 1000,
  percentage = false,

  tooltip = { show: false, type: "value" },
  // showBorder,
  customClass = "",
  tooltipValue = "percentage",
  type = "piechart",
  border = { show: false, width: 1, color: "#fff" },
}) => {
  const moveRef = useRef<HTMLDivElement>(null);
  const toolTipRef = useRef<any>(null);
  const totalPercentage = getTotalPercentage(chartData);
  let cumulativePercentage = 0;
  const [tooltipText, setTooltipText] = useState({ label: "", value: 0 });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
  const [tooltipWidth, setTooltipWidth] = useState<number>(130);


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
    const left = event.clientX - (moveRef?.current?.getBoundingClientRect().left ?? 0);
    const top = event.clientY - (moveRef?.current?.getBoundingClientRect().top ?? 0);
    setTooltipPosition({ x: left - tooltipWidth, y: top - 65 });
    setHoveredSlice(index);
  };

  const handleMouseLeave = () => {
    setTooltipText({ label: "", value: 0 });
    setHoveredSlice(null);
  };

  const handleMouseMove = (event: any) => {
    const left = event.clientX - (moveRef?.current?.getBoundingClientRect().left ?? 0);
    const top = event.clientY - (moveRef?.current?.getBoundingClientRect().top ?? 0);
    setTooltipPosition({ x: left - tooltipWidth, y: top - 65 });
  };

  // getting tool tip pisition width
  useEffect(() => {
    if (toolTipRef?.current) {
      const toolTipWidth = toolTipRef.current.getBoundingClientRect();
      setTooltipWidth(toolTipWidth.width / 2);
    }
  }, [tooltip.show, tooltipText.label, tooltipText.value, toolTipRef?.current]);

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



  }, [chartData]);



  // percentage format
  const formatPercentage = (value: number) => {
    const formattedValue =
      value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
    return `${formattedValue}%`;
  };

  const getPathData = (startAngle : number , endAngle : number , value : number ) => {
    return `
    M ${size / 2} ${size / 2}
    L ${size / 2 +
      Math.cos((startAngle - 90) * (Math.PI / 180)) * (size / 2)
      } ${size / 2 +
      Math.sin((startAngle - 90) * (Math.PI / 180)) * (size / 2)
      }
    A ${size / 2} ${size / 2} 0 ${Number(value) / totalPercentage >= 0.5 ? 1 : 0
      } 1
    ${size / 2 +
      Math.cos((endAngle - 90) * (Math.PI / 180)) * (size / 2)
      } ${size / 2 +
      Math.sin((endAngle - 90) * (Math.PI / 180)) * (size / 2)
      }
    Z
  `
  }

  let start:number, previousTimeStamp:number;
  let done = false;

  const pathPercentage = chartData.map(item => (item.value / totalPercentage)*100)

  const animatePath = (timeStamp:number) => {
    if (start === undefined) {
      start = timeStamp;
    }
    const elapsed = timeStamp - start;

    if(previousTimeStamp !== timeStamp){
      const paths = Array.from(moveRef.current?.getElementsByClassName("inte-pieChart__path") ?? [])
      
      if(paths && paths.length){
        const animationCompletePercentage = Math.min(Math.ceil((elapsed / animationDuration) * 100) , 100)
        let startAngel = paths.length < 2 ? 0.001 : 0;
        paths.map((path, index) =>{
          const currPathPer = (pathPercentage[index] * animationCompletePercentage)/100
          const endAngel = Math.min(startAngel + (currPathPer * 360) / 100 , 360)
          const currValue = Number(chartData[index].value) * animationCompletePercentage / 100
          const currPathD = getPathData(startAngel , endAngel , currValue)
          path.setAttribute("d", currPathD)
          startAngel = endAngel
        })
      }

      
      const count = Math.min(elapsed , animationDuration)
      if(count === animationDuration) done = true
    }

    if(elapsed < animationDuration){
      previousTimeStamp = timeStamp
      if(!done) window.requestAnimationFrame(animatePath)
    }
  }

  useEffect(() => {
    window.requestAnimationFrame(animatePath)
 }, []);

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
          className={`inte-${type === "piechart" ? "pieChart" : "donutChart"
            }__svg`}
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
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

          const pathData = getPathData(startAngle, endAngle , item.value)
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
                  transformOrigin: "center",
                }}
                {...(border.show && {
                  stroke: border.color,
                  strokeWidth: `${border.width}`,
                })}
              />
            );
          })}

          {type === "donutchart" && (
            <circle
              cx={size / 2}
              cy={size / 2}
              r={Math.min(size, size) * 0.5 - 50} // Adjust the radius to control the size of the hole
              fill="#fff" // Set the color of the hole
            />
          )}
        </svg>
        {percentage && (
          <div className="inte-pieChart__percentage">
            {formatPercentage(totalP)}
          </div>
        )}
        {tooltipText.label && tooltipText.value && tooltip.show && (
          <div
            className="inte-pieChart__tooltip"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
            }}
            ref={toolTipRef}
          >
            {`${tooltipText.label}:  ${tooltipValue === "percentage"
                ? formatPercentage(tooltipText.value / totalValue)
                : tooltipText.value
              }`}
          </div>
        )}
      </div>
    </>
  );
};

export default PieChart;
