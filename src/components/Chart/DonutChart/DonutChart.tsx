import React from "react";
import PieAndDonutChart from "../PieAndDonutChart/PieAndDonutChart";
export interface DonutChartI {
  chartData: donutChartData[];
  size?: number;
  tooltip?: tooltipI;
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

const DonutChart: React.FC<DonutChartI> = ({
  chartData,
  size = 250,
  totalItems = { show: false, type: "number" },
  tooltip = { show: false, type: "number" },
  customClass = "",
}) => {
  return (
    <PieAndDonutChart
      chartData={chartData}
      type="donutchart"
      height={size}
      width={size}
      totalItems={totalItems}
      tooltip={tooltip}
      customClass={customClass}
    />
  );
};

export default DonutChart;
