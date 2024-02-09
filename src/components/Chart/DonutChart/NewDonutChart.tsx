import React from "react";

export interface DonutChartProps {
  chartData: { value: number; color: string; label: string }[];
  width: number;
  height: number;
}

export const NewDonutChart: React.FC<DonutChartProps> = ({
  chartData,
  width,
  height,
}) => {
  const total = chartData.reduce((acc, segment) => acc + segment.value, 0);
  const radius = Math.min(width, height) / 2;

  // Calculate cumulative percentages
  const percentages = chartData.map(
    (chartData) => (chartData.value / total) * 100
  );

  // Function to generate path data for a segment with inner and outer radius
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

    return `M ${x1Inner} ${y1Inner} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${x2Inner} ${y2Inner} L ${x2Outer} ${y2Outer} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 0 ${x1Outer} ${y1Outer} Z`;
  };
  let startAngle = 0;
  // Use getDonutSegmentPath in generating path elements
  const paths = percentages.map((percentage, index) => {
    const endAngle = startAngle + (percentage * 360) / 100;
    const innerRadius = radius / 2; // Adjust the inner radius as needed
    const pathData = getDonutSegmentPath(
      startAngle,
      endAngle,
      innerRadius,
      radius
    );
    startAngle = endAngle;
    return <path key={index} d={pathData} fill={chartData[index].color} />;
  });

  // Generate label elements for each segment
  const labels = chartData.map((segment, index) => {
    const labelAngle = startAngle + (percentages[index] / 2) * (360 / 100);
    const labelX = Math.cos((labelAngle * Math.PI) / 180) * (radius / 1.5);
    const labelY = Math.sin((labelAngle * Math.PI) / 180) * (radius / 1.5);

    return (
      <text key={index} x={labelX} y={labelY} fill="#000" textAnchor="middle">
        {segment.label}
      </text>
    );
  });

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {paths}
        {labels}
      </g>
    </svg>
  );
};
