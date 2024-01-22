import React, { useEffect, useRef, useState } from 'react';
import './LineChart.css';

export interface LineChartProps {
  datasets: number[][];
}

interface HoveredPoint {
  index: number;
  x: number;
  y: number;
  values: number[];
}

const LineChart: React.FC<LineChartProps> = ({ datasets }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<HoveredPoint | null>(null);

  useEffect(() => {
    if (chartRef.current && datasets) {
      const canvas = chartRef.current;
      const context = canvas.getContext('2d');
      if(!context) return;
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      drawGrid(context, canvas.width, canvas.height, 50);

      // Find the maximum value in the datasets to scale the chart
      const maxDataValue = Math.max(...datasets.flat());

      // Set the line width
      context.lineWidth = 2;

      // Draw each dataset
      datasets.forEach((data, datasetIndex) => {
        const color = getRandomColor(datasetIndex); // Function to generate a random color
        context.strokeStyle = color;
        context.fillStyle = color;

        // Calculate the distance between data points
        const pointDistance = canvas.width / (data.length - 1);

        // Draw the line chart
        context.beginPath();
        data.forEach((value, index) => {
          const x = index * pointDistance;
          const y = (canvas.height / maxDataValue) * (maxDataValue - value);
          // drawRoundedPoint(context, x, y, 5);
          if (index === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        });
        context.stroke();
      });

      // Listen for mousemove event to show hovered point
      canvas.addEventListener('mousemove', handleMouseMove);

      // Cleanup event listener on component unmount
      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [datasets, hoveredPoint]);

  const drawRoundedPoint = (context: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
  };

  const drawGrid = (context: CanvasRenderingContext2D, width: number, height: number, gridSize: number) => {
    context.strokeStyle = '#ccc';
    context.lineWidth = 0.5;

    for (let x = 0; x <= width; x += gridSize) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }

    for (let y = 0; y <= height; y += gridSize) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const canvas = chartRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Find the index corresponding to the mouse position
    const index = Math.round((mouseX / canvas.width) * (datasets[0].length - 1));

    // Update the hovered point information
    setHoveredPoint({
      index: index,
      x: mouseX,
      y: mouseY,
      values: datasets.map((data) => data[index]),
    });
  };

  const getRandomColor = (index:number) => {
    return index === 0 ? "#fcba03" : index === 1 ? "#0509f2" :  "#e0091b"
  };

  return (
    <div>
      <canvas width={1000} height={400} ref={chartRef} className="line-chart" />
      {hoveredPoint !== null && (
        <p style={{ textAlign: 'center' }}>
          Hovered Point: Index {hoveredPoint.index}, X: {hoveredPoint.x.toFixed(2)}, Y: {hoveredPoint.y.toFixed(2)},
          Values: {hoveredPoint.values.map((value, index) => `Dataset ${index + 1}: ${value}`).join(', ')}
        </p>
      )}
    </div>
  );
};

export default LineChart;
