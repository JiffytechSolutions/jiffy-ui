import React from "react";
import "./Legend.css";
import Badge from "../../Badge/Badge";
import Text from "../../Text/Text";
export interface legendI {
  chartData: any;
  renderIndex: (index: number) => void;
  valueType: "number" | "percentage";
}

const Legend = ({
  chartData,
  valueType,
  renderIndex = () => null,
}: legendI) => {
  const totalPercentage = chartData.reduce(
    (sum: any, item: any) => sum + Number(item.value),
    0
  );

  const formatValue = (value: number) => {
    const formattedValue =
      value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
    return value === 0 ? "" : formattedValue;
  };

  return (
    <div className="inte-chartLegend__wrapper">
      {chartData?.map((item: any, index: any) => {
        let percentage = 0;
        if (item.total) {
          percentage =
            typeof item.value === "string" && String(item.value).includes("%")
              ? Math.abs(item.value) <= 100
                ? Math.abs(item.value)
                : 100
              : Math.abs(item.value) <= Math.abs(item.total)
              ? (Math.abs(item.value) / Math.abs(item.total)) * 100
              : 100;
        } else {
          percentage = (item.value / totalPercentage) * 100;
        }

        return (
          <div
            key={index}
            className="inte-chartLegend"
            onMouseOver={() => renderIndex(index)}
            onMouseOut={() => renderIndex(-1)}
          >
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
                {valueType === "percentage"
                  ? formatValue(percentage) + "%"
                  : formatValue(item.value)}
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Legend;
