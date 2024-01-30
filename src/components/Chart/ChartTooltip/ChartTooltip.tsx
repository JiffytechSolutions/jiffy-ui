import React from "react";
import "./ChartTooltip.css";

export interface ChartTooltipI {
  left?: number;
  top?: number;
  label?: string;
  value?: string;
}

const ChartTooltip: React.FC<ChartTooltipI> = ({
  left = 0,
  top = 0,
  label,
  value,
}) => {
  return (
    <div
      className="inte-ChartTooltip"
      style={{
        top: top,
        left: left,
      }}
    >
      <div className="inte-ChartTooltip__label">{label}</div>
      <div className="inte-ChartTooltip__value">{value}</div>
    </div>
  );
};

export default ChartTooltip;
