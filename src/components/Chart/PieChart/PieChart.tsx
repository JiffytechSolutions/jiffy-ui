import React from "react";
import PieAndDonutChart from "../PieAndDonutChart/PieAndDonutChart";
export interface PieChartI {
  chartData: PieChartData[];
  size?: number;
  tooltip?: boolean;
  tooltipValue?: "percentage" | "value";
  totalPercentage?: boolean;
  customClass?: string;
}
export interface PieChartData {
  value: number | number;
  label: string;
  color: string;
}

const PieChart: React.FC<PieChartI> = ({
  chartData,
  size = 250,
  totalPercentage = false,
  tooltip = false,
  customClass = "",
  tooltipValue = "percentage",
}) => {
  return (
    <>
      <PieAndDonutChart
        chartData={chartData}
        height={size}
        width={size}
        percentage={totalPercentage}
        tooltip={tooltip}
        tooltipValue={tooltipValue}
        customClass={customClass}
      />
    </>
  );
};

export default PieChart;
