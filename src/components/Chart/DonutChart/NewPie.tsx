import React from "react";

interface DonutChartProps {
  segments: { data: number; color: string; label: string }[];
  width: number;
  height: number;
}

export const NewPieChart: React.FC<DonutChartProps> = ({
  segments,
  width,
  height,
}) => {
  const total = segments.reduce((acc, segment) => acc + segment.data, 0);
  const radius = Math.min(width, height) / 2;

  // Calculate cumulative percentages
  const percentages = segments.map((segment) => (segment.data / total) * 100);

  // Function to generate path data for a segment
  const getSegmentPath = (startAngle: number, endAngle: number) => {
    const x1 = Math.cos((startAngle * Math.PI) / 180) * radius;
    const y1 = Math.sin((startAngle * Math.PI) / 180) * radius;

    const x2 = Math.cos((endAngle * Math.PI) / 180) * radius;
    const y2 = Math.sin((endAngle * Math.PI) / 180) * radius;

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L 0 0 Z`;
  };

  // Generate path elements for each segment
  let startAngle = 0;
  const paths = percentages.map((percentage, index) => {
    const endAngle = startAngle + (percentage * 360) / 100;
    const pathData = getSegmentPath(startAngle, endAngle);
    startAngle = endAngle;
    return <path key={index} d={pathData} fill={segments[index].color} />;
  });

  // Generate label elements for each segment
  const labels = segments.map((segment, index) => {
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
