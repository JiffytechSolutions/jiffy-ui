import React from "react";
import PieAndDonutChart from "../PieAndDonutChart/PieAndDonutChart";
export interface PieChartI {
  chartData: PieChartData[];
  size?: number;
  showTooltip?: boolean;
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
  showTooltip = false,
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
        showTooltip={showTooltip}
        tooltipValue={tooltipValue}
        customClass={customClass}
      />
    </>
  );
};

export default PieChart;
