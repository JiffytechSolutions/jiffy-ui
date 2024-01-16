import React, { useState, useEffect } from "react";
import "./PieChart.css";
const colors = [
  "#F0EDFA",
  "#C5B8EA",
  "#9984DB",
  "#D1E9FF",
  "#B2DDFF",
  "#53B1FD",
];

const percentages = [45, 15, 10, 5, 10, 15];

const getTotalPercentage = () =>
  percentages.reduce((sum, value) => sum + value, 0);

const PieChart = () => {
  const totalPercentage = getTotalPercentage();
  let cumulativePercentage = 0;
  const [tooltipText, setTooltipText] = useState("");

  useEffect(() => {
    // Add animation class after a short delay to trigger the animation on page load
    const timeoutId = setTimeout(() => {
      setTooltipText("");
    }, 1000); // Adjust the delay based on your preference

    // Clear timeout to prevent memory leak
    return () => clearTimeout(timeoutId);
  }, []);

  const handleMouseOver = (percentage: any) => {
    setTooltipText(`${percentage}%`);
  };

  const handleMouseLeave = () => {
    setTooltipText("");
  };

  return (
    <div className="inte-pieChart">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {percentages.map((percentage, index) => {
          const startAngle = (cumulativePercentage / totalPercentage) * 360;
          const endAngle =
            ((cumulativePercentage + percentage) / totalPercentage) * 360;

          cumulativePercentage += percentage;

          const pathData = `
            M 100 100
            L ${100 + Math.cos((startAngle - 90) * (Math.PI / 180)) * 100} ${
            100 + Math.sin((startAngle - 90) * (Math.PI / 180)) * 100
          }
            A 100 100 0 ${percentage / totalPercentage > 0.5 ? 1 : 0} 1
            ${100 + Math.cos((endAngle - 90) * (Math.PI / 180)) * 100} ${
            100 + Math.sin((endAngle - 90) * (Math.PI / 180)) * 100
          }
            Z
          `;

          return (
            <path
              key={index}
              d={pathData}
              fill={colors[index]}
              onMouseOver={() => handleMouseOver(percentage)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </svg>
      {tooltipText && (
        <div className="inte-pieChart__tooltip">Others: {tooltipText}</div>
      )}
    </div>
  );
};

export default PieChart;
