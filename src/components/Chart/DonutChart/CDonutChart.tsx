import React, { useState, useEffect } from "react";

interface DonutChartProps {
  segments: { data: number; color: string; label: string }[];
  width: number;
  height: number;
}

export const NewDonutChart: React.FC<DonutChartProps> = ({
  segments,
  width,
  height,
}) => {
  const total = segments.reduce((acc, segment) => acc + segment.data, 0);
  const radius = Math.min(width, height) / 2;

  const [currentSegment, setCurrentSegment] = useState(0);
  const [endAngle, setEndAngle] = useState(0);

  useEffect(() => {
    const animationDuration = 10000;
    const startTime = Date.now();

    const updateEndAngle: any = () => {
      const currentTime = Date.now();
      const progress = (currentTime - startTime) / animationDuration;

      if (progress < 1) {
        // Update end angle and request the next animation frame
        setEndAngle(progress * 360);
        requestAnimationFrame(updateEndAngle);
      } else {
        // Animation complete for the current segment
        setEndAngle(360);

        // Wait for a brief duration before moving to the next segment
        setTimeout(() => {
          setCurrentSegment((prevSegment) => prevSegment + 1);
        }, 500); // Adjust the delay as needed
      }
    };

    // Start the animation for the current segment
    updateEndAngle();

    // Clean up the animation timer on component unmount
    return () => cancelAnimationFrame(updateEndAngle);
  }, []); // Re-run the effect when the current segment changes

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

  // Generate path elements for each segment
  const paths = segments.map((segment, index) => {
    const pathData = getDonutSegmentPath(0, endAngle, radius / 2, radius);
    return <path key={index} d={pathData} fill={segment.color} />;
  });

  // Generate label elements for each segment
  const labels = segments.map((segment, index) => {
    const labelAngle = endAngle / 2;
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
