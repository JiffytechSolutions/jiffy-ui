import React, { useEffect, useRef } from "react";
import "./PieChart.css";

const PieChart = ({ completionPercentages }: any) => {
  const canvasRef = useRef(null);
  const colors = [
    "#F0EDFA",
    "#C5B8EA",
    "#9984DB",
    "#D1E9FF",
    "#B2DDFF",
    "#53B1FD",
  ];

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const context = canvas.getContext("2d");
    let startAngle = 0;

    completionPercentages.forEach((percentage: any, index: any) => {
      const endAngle = startAngle + (percentage / 100) * Math.PI * 2;

      context.beginPath();
      context.moveTo(canvas.width / 2, canvas.height / 2);
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
        startAngle,
        endAngle,
        false
      );
      context.fillStyle = colors[index];
      context.fill();

      startAngle = endAngle;
    });
  }, [completionPercentages]);

  return (
    <div className="inte-chart">
      <canvas ref={canvasRef} width={250} height={250} />
      <div className="inte-chart__precentage">10%</div>
    </div>
  );
};

export default PieChart;
{
  /* <PieChart completionPercentages={[30, 20, 15, 15, 10, 10]} /> */
}
