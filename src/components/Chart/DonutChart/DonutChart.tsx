import React from "react";
import PieAndDonutChart from "../PieAndDonutChart/PieAndDonutChart";
export interface DonutChartI {
  chartData: DonutChartData[];
  size?: number;
  tooltip?: boolean;
  tooltipValue?: "percentage" | "value";
  totalPercentage?: boolean;
  customClass?: string;
}
export interface DonutChartData {
  value: number;
  label: string;
  color: string;
}

const DonutChart: React.FC<DonutChartI> = ({
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
        type="donutchart"
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

export default DonutChart;
