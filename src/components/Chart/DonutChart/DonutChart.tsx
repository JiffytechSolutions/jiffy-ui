import React, { useEffect, useRef, useState } from "react";
import "./DonutChart.css";

export interface DataItem {
  value: number;
  label: string;
  color: string;
}

export interface DonutChartProps {
  chartData: DataItem[];
  size?: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ chartData, size = 250 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tooltip, setTooltip] =
    useState<{ x: number; y: number; content: string } | null>(null);
  const [angles, setAngles] = useState<number[]>([]);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (ctx) {
      const centerX = size / 2;
      const centerY = size / 2;
      const radius = Math.min(size, size) / 2 - 25;
      const lineWidth = 50;

      const totalValue = chartData.reduce(
        (total, item) => total + item.value,
        0
      );
      const newAngles = chartData.map(
        (item) => (item.value / totalValue) * 360
      );
      setAngles(newAngles);

      let startAngle = 0;
      for (let i = 0; i < newAngles.length; i++) {
        const angle = newAngles[i];
        const endAngle = startAngle + angle;

        ctx.beginPath();
        ctx.arc(
          centerX,
          centerY,
          radius,
          (startAngle * Math.PI) / 180,
          (endAngle * Math.PI) / 180
        );
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = chartData[i].color;
        ctx.stroke();

        startAngle = endAngle;
      }
    }
  }, [chartData, size]);

  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      const angle = (Math.atan2(y, x) * 180) / Math.PI;
      const normalizedAngle = (angle + 360) % 360;

      let cumulativeAngle = 0;
      for (let i = 0; i < chartData.length; i++) {
        if (
          normalizedAngle >= cumulativeAngle &&
          normalizedAngle < cumulativeAngle + angles[i]
        ) {
          setTooltip({
            x: e.clientX,
            y: e.clientY,
            content: `${chartData[i].label}: ${chartData[i].value}`,
          });
          return;
        }
        cumulativeAngle += angles[i];
      }
    }
  };

  const handleMouseOut = () => {
    setTooltip(null);
  };

  return (
    <div className="inte-donutChart">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        onMouseMove={(e: MouseEvent | any) => handleMouseMove(e)}
        onMouseOut={handleMouseOut}
      />
      {tooltip && (
        <>
          <div
            className="inte-pieChart__tooltip"
            style={{
              top: tooltip.y - 60,
              left: tooltip.x - 55,
            }}
          >
            {tooltip.content}
          </div>
        </>
      )}
    </div>
  );
};

export default DonutChart;
