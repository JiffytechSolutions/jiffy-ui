import React, { useState, useEffect } from "react";
import "./PieChart.css";

const PieChart = ({ completionPercentages }: any) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });
  const colors = [
    "#F0EDFA",
    "#C5B8EA",
    "#9984DB",
    "#D1E9FF",
    "#B2DDFF",
    "#53B1FD",
  ];

  const handleMouseHover = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
    percentage: number
  ) => {
    if (percentage !== undefined) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Update tooltip content and position
      setTooltip({
        visible: true,
        content: `${percentage}%`,
        x: x + rect.left,
        y: y + rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    // Hide the tooltip when leaving the chart
    setTooltip({ visible: false, content: "", x: 0, y: 0 });
  };

  useEffect(() => {
    const rotateAnimation = () => {
      const chart = document.getElementById("pie-chart");
      if (chart) {
        chart.style.transition = "transform 1s ease-in-out";
        chart.style.transform = "rotate(360deg)";
      }
    };

    rotateAnimation();
  }, [completionPercentages]);

  return (
    <div className="inte-chart" id="pie-chart">
      <svg width={250} height={250}>
        <g transform={`translate(${250 / 2},${250 / 2})`}>
          <path
            d="M0,-95A95,95,0,0,1,93.557,-16.497L0,0Z"
            fill={colors[0]}
          ></path>
          <path
            d="M93.557,-16.497A95,95,0,0,1,-32.492,89.271L0,0Z"
            fill={colors[2]}
          ></path>

          <path
            d="M-32.492,89.271A95,95,0,0,1,0,-95L0,0Z"
            fill={colors[3]}
          ></path>
          {completionPercentages.map(
            (percentage: number | undefined, index: number) => {
              if (percentage !== undefined) {
                const startAngle =
                  (index / completionPercentages.length) * 2 * Math.PI;
                const endAngle =
                  ((index + 1) / completionPercentages.length) * 2 * Math.PI;

                <path d="M0,-95A95,95,0,0,1,93.557,-16.497L0,0Z"></path>;

                //     return (
                //       <path
                //         key={index}
                //         d={`
                //         M ${Math.cos(startAngle)} ${Math.sin(startAngle)}
                //         A 1 1 0 ${
                //           endAngle - startAngle > Math.PI ? 1 : 0
                //         } 1 ${Math.cos(endAngle)} ${Math.sin(endAngle)}
                //         L 0 0
                //       `}
                //         fill={colors[index]}
                //         onMouseMove={(e) => handleMouseHover(e, percentage)}
                //         onMouseLeave={handleMouseLeave}
                //       />
                //     );
                //   } else {
                //     return null; // Skip rendering if percentage is undefined
              }
            }
          )}
        </g>
      </svg>
      {tooltip.visible && (
        <div className="tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default PieChart;
