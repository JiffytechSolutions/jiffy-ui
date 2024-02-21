import React, { useEffect } from "react";
import "./DonutChart.css";

export interface DonutChartI {
  chartData: donutChartData[];
  size?: number;
  tooltip?: tooltipI;
  border?: showBorderI;
  type?: "piechart" | "donutchart";
  totalItems?: tooltipI;
  customClass?: string;
}

export interface donutChartData {
  value: number;
  label: string;
  color: string;
}
export interface tooltipI {
  show: boolean;
  type?: "number" | "percentage";
}
export interface showBorderI {
  show?: boolean;
  width?: number;
  color?: string;
}

export const DonutChart: React.FC<DonutChartI> = ({
  chartData,
  border = { show: false, width: 1, color: "#fff" },
  size = 250,
}) => {
  const animatePath = (
    path: any,
    startAngle: any,
    endAngle: any,
    duration: any
  ) => {
    const startTime = performance.now();

    const animateFrame = (currentTime: any) => {
      const elapsedTime = currentTime - startTime;
      const animationProgress = Math.min(elapsedTime / duration, 1);
      const currentAngle =
        startAngle + (endAngle - startAngle) * animationProgress;

      path.setAttribute(
        "d",
        getDonutSegmentPath(startAngle, currentAngle, radius / 2, radius)
      );

      if (animationProgress < 1) {
        requestAnimationFrame(animateFrame);
      }
    };

    requestAnimationFrame(animateFrame);
  };

  // Convert negative values to positive
  const normalizedChartData = chartData.map((data) => ({
    ...data,
    value: Math.abs(data.value),
  }));

  const total = normalizedChartData.reduce(
    (acc, segment) => acc + segment.value,
    0
  );
  const radius = Math.min(size, size) / 2; // min(width, height)

  const newArr = normalizedChartData.map((item) => {
    return {
      percentage: Number(((item.value / total) * 100).toFixed(2)), // this is return point after 2 digits
      value: item.value,
      label: item.label,
      color: item.color,
    };
  });

  const getDonutSegmentPath = (
    startAngle: number,
    endAngle: number,
    innerRadius: number,
    outerRadius: number
  ) => {
    const x1Inner = Math.cos((startAngle * Math.PI) / 180) * innerRadius;
    const y1Inner = Math.sin((startAngle * Math.PI) / 180) * innerRadius;

    const x1Outer = Math.cos((startAngle * Math.PI) / 180) * outerRadius;
    const y1Outer = Math.sin((startAngle * Math.PI) / 180) * outerRadius;

    const x2Inner = Math.cos((endAngle * Math.PI) / 180) * innerRadius;
    const y2Inner = Math.sin((endAngle * Math.PI) / 180) * innerRadius;

    const x2Outer = Math.cos((endAngle * Math.PI) / 180) * outerRadius;
    const y2Outer = Math.sin((endAngle * Math.PI) / 180) * outerRadius;

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return `M ${x1Outer} ${y1Outer} 
            A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2Outer} ${y2Outer} 
            L ${x2Inner} ${y2Inner} 
            A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1Inner} ${y1Inner} Z`;
  };
  let startAngle = -90; // Start angle at the top
  // getting path value
  let intervals: any = [];
  for (let i = 0; i < newArr.length; i++) {
    const endAngle = startAngle + (newArr[i].percentage * 360) / 100;
    let currentTime = startAngle;
    while (currentTime < endAngle) {
      intervals.push({ value: currentTime, index: i });
      currentTime += 2;
    }
    startAngle = endAngle; // Update start for the next interval
  }

  // creating path
  const paths = newArr.map((item, index) => {
    const endAngle = startAngle + (item.percentage * 360) / 100;

    const innerRadius = radius / 2;
    const pathData = getDonutSegmentPath(
      startAngle,
      endAngle,
      innerRadius,
      radius
    );

    startAngle = endAngle;

    return (
      <path
        key={index}
        d={pathData}
        fill={chartData[index].color}
        // stroke={`${border ? "#000" : "#fff"}`}
        // strokeWidth="1"
        className="inte-newdonutChart__path"
        {...(border.show && {
          stroke: border.color,
          strokeWidth: `${border.width}`,
        })}
      />
    );
  });

  useEffect(() => {
    const paths = document.querySelectorAll(".inte-newdonutChart__path");
    const endAngles: any = []; // Array to store end angles of each path

    paths.forEach((path, index) => {
      const startPercentage = newArr[index]?.percentage;
      const endAngle = startAngle + (startPercentage * 360) / 100;

      // const startAngle = -90; // Starting angle for all paths
      // const endAngle = startAngle + (newArr[index].percentage * 360) / 100;
      endAngles.push(endAngle); // Store the end angle for the current path

      animatePath(path, startAngle, endAngle, 2000); // Animation duration 2000ms (2 seconds)
      // startAngle = endAngle;
    });
  }, []);
  // useEffect(() => {
  //   const paths = document.querySelectorAll(".inte-newdonutChart__path");

  //   paths.forEach((path, index) => {
  //     const startPercentage = newArr[index]?.percentage;
  //     const endAngle = startAngle + (startPercentage * 360) / 100;

  //     animatePath(path, startAngle, endAngle, 200); // Animation duration 2000ms (2 seconds)
  //     startAngle = endAngle;
  //   });
  // }, []);

  return (
    <div className="inte-newdonutChart">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="inte-newdonutChart__svg"
      >
        <g transform={`translate(${size / 2}, ${size / 2})`}>{paths}</g>
      </svg>
    </div>
  );
};
