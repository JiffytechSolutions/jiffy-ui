import React from "react";
import PieAndDonutChart from "../PieAndDonutChart/PieAndDonutChart";
export interface PieChartI {
  chartData: PieChartData[];
  size?: number;
  tooltip?: tooltipI;
  border?: showBorderI;
  totalItems?: tooltipI;
  customClass?: string;
}
export interface PieChartData {
  value: number;
  label: string;
  color: string;
}

export interface tooltipI {
  show: boolean;
  type?: "number" | "percentage";
}
export interface showBorderI {
  show?: boolean;
  width?: number;
  color?: string;
}

const PieChart: React.FC<PieChartI> = ({
  chartData,
  size = 250,
  totalItems = { show: false, type: "number" },
  tooltip = { show: false, type: "number" },
  border = { show: false, width: 1, color: "#fff" },
  customClass = "",
}) => {
  return (
    <PieAndDonutChart
      chartData={chartData}
      height={size}
      width={size}
      totalItems={totalItems}
      tooltip={tooltip}
      customClass={customClass}
      border={border}
    />
  );
};

export default PieChart;
