import React from "react";
import Badge from "../../Badge/Badge";
import Text from "../../Text/Text";
import "./Legend.css";

export interface legendI {
  chartData?: any;
  enableValue?: { show: boolean; type?: "number" | "percentage" };
  width?: number;
}

const Legend = ({
  chartData,
  enableValue = { show: false, type: "number" },
  width,
}: legendI) => {
  const totalValue = chartData.reduce(
    (sum: any, item: any) => sum + Number(item.value) / 100,
    0
  );
  const formatValue = (value: number) => {
    const formattedValue =
      value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
    return value === 0 ? "" : `${formattedValue}%`;
  };

  return (
    <div
      className="inte-chartLegend__wrapper"
      style={{ minWidth: "50px", maxWidth: width }}
    >
      {chartData.map((item: any) => {
        return (
          <div className="inte-chartLegend">
            <div className="inte-legend__name">
              <Badge
                dot
                size="large"
                type="primary"
                customBgColor={item.color}
              />
              <Text>{item.label}</Text>
            </div>
            <div className="inte-legend__value">
              <Text>
                {enableValue.type === "percentage"
                  ? formatValue(item.value / totalValue)
                  : item.value}
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Legend;
