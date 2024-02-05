import React from "react";
import PieAndDonutChart from "../PieAndDonutChart/PieAndDonutChart";
export interface PieChartI {
  chartData: PieChartData[];
  size?: number;
  tooltip?: tooltipI;
  border?: showBorderI;
  totalPercentage?: boolean;
  customClass?: string;
}
export interface PieChartData {
  value: number | number;
  label: string;
  color: string;
}

export interface tooltipI {
  show?: boolean;
  type?: "percentage" | "value";
}
export interface showBorderI {
  show?: boolean;
  width?: number;
  color?: string;
}

const PieChart: React.FC<PieChartI> = ({
  chartData,
  size = 250,
  totalPercentage = false,
  tooltip = { show: false, type: "value" },
  border = { show: false, width: 1, color: "#fff" },
  customClass = "",
}) => {
  return (
    <PieAndDonutChart
      chartData={chartData}
      height={size}
      width={size}
      percentage={totalPercentage}
      tooltip={tooltip}
      customClass={customClass}
      border={border}
    />
  );
};

export default PieChart;
