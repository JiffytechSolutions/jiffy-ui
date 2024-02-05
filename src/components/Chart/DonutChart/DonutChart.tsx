import React from "react";
import PieAndDonutChart from "../PieAndDonutChart/PieAndDonutChart";
export interface DonutChartI {
  chartData: donutChartData[];
  size?: number;
  tooltip?: tooltipI;

  totalPercentage?: boolean;
  customClass?: string;
}
export interface donutChartData {
  value: number;
  label: string;
  color: string;
}

export interface tooltipI {
  show?: boolean;
  type?: "percentage" | "value";
}

const DonutChart: React.FC<DonutChartI> = ({
  chartData,
  size = 250,
  totalPercentage = false,
  tooltip = { show: false, type: "value" },
  customClass = "",
}) => {
  return (
    <PieAndDonutChart
      chartData={chartData}
      type="donutchart"
      height={size}
      width={size}
      percentage={totalPercentage}
      tooltip={tooltip}
      customClass={customClass}
    />
  );
};

export default DonutChart;
