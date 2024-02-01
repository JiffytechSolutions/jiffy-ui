import React from "react";
import PieAndDonutChart from "../PieAndDonutChart/PieAndDonutChart";
export interface DonutChartI {
  chartData: donutChartData[];
  size?: number;
  showTooltip?: boolean;
  tooltipValue?: "percentage" | "value";
  totalPercentage?: boolean;
  customClass?: string;
}
export interface donutChartData {
  value: number;
  label: string;
  color: string;
}

const DonutChart: React.FC<DonutChartI> = ({
  chartData,
  size = 250,
  totalPercentage = false,
  showTooltip = false,
  customClass = "",
  tooltipValue = "percentage",
}) => {
  return (
    <PieAndDonutChart
      chartData={chartData}
      type="donutchart"
      height={size}
      width={size}
      percentage={totalPercentage}
      showTooltip={showTooltip}
      tooltipValue={tooltipValue}
      customClass={customClass}
    />
  );
};

export default DonutChart;
