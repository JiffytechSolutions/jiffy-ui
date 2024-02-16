import React from "react";
import "./NewDonutChart.css";

export interface DonutChartProps {
  chartData: { value: number; color: string; label: string }[];
  size?: number;
  border?: boolean;
}

export const NewDonutChart: React.FC<DonutChartProps> = ({
  chartData,
  size = 250,
  border = false,
}) => {
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

  const percentages = normalizedChartData.map(
    (chartData) => (chartData.value / total) * 100
  );

  const newArr = normalizedChartData.map((item) => {
    return {
      percentage: Number(((item.value / total) * 100).toFixed(2)), // this is return point after 2 digits
      value: item.value,
      label: item.label,
      color: item.color,
    };
  });

  console.log(newArr);
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
        stroke={`${border ? "#000" : "#fff"}`}
        strokeWidth="1"
        className="inte-newdonutChart__path"
      />
    );
  });

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
