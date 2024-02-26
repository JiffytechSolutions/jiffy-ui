import React, { useEffect, useRef, useState } from "react";
import getClassNames from "../../../utilities/getClassnames";
import useDelayUnmount from "../../../utilities/useDelayTimeout";
import Badge from "../../Badge/Badge";
import Text from "../../Text/Text";
import useWindowResize from "../../../utilities/useWindowResize";
import "./ActivityGauge.css";
import "../Legend/Legend.css";
export interface ActivityGaugeI {
  chartData: activityGaugeData[];
  size?: "small" | "medium" | "large";
  valueType?: "number" | "percentage";
  animationDuration?: number;
  legend?: legendI;
  customClass?: string;
}

export interface activityGaugeData {
  value: number;
  total: number;
  label: string;
  color: string;
}
export interface legendI {
  desktop?: boolean;
  tab?: boolean;
  mobile?: boolean;
}

const AnimatedCircle: React.FC<{
  percentage: number;
  totalLength: number;
  animationDuration?: number;
  showValue: {
    label: number | string;
    value: number | string;
    percentage: number;
  };
  setShowValue: React.Dispatch<
    React.SetStateAction<{
      label: string;
      value: number;
      percentage: number;
    }>
  >;
  item: any;
  index: number;
  size: string;
  calculateValue: (index: number) => number;
  sizeFun: () => number;
  calculateStrokeDashOffset: (r: number, percentage: number) => number;
}> = ({
  percentage,
  totalLength,
  showValue,
  setShowValue,
  item,
  index,
  size,
  calculateValue,
  sizeFun,

  calculateStrokeDashOffset,
  animationDuration,
}) => {
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const animateCircle = () => {
      if (circleRef.current) {
        const totalLength = circleRef.current.getTotalLength();
        circleRef.current.style.transition = "none";
        circleRef.current.style.strokeDasharray = `${totalLength} ${totalLength}`;
        circleRef.current.style.strokeDashoffset = `${totalLength}`;

        // Trigger reflow
        circleRef.current.getBoundingClientRect();
        circleRef.current.style.transition = `stroke-dashoffset ${animationDuration}s linear`;
        if (((100 - percentage) / 100) * totalLength >= 0) {
          circleRef.current.style.strokeDashoffset = `${
            ((100 - percentage) / 100) * totalLength
          }`;
        } else {
          circleRef.current.style.strokeDashoffset = "0";
        }
      }
    };

    animateCircle();
  }, [percentage, totalLength]);

  const strokeDashOffset = calculateStrokeDashOffset(
    sizeFun() / 2 - calculateValue(index),
    percentage
  );

  return (
    <g key={index} className="inte-activityGauge__path">
      <circle
        cx={sizeFun() / 2}
        cy={sizeFun() / 2}
        r={sizeFun() / 2 - calculateValue(index)}
        strokeWidth={size == "small" ? 4 : size == "medium" ? 6 : 8}
        opacity={
          showValue.value === "" ? 1 : showValue.value == item.value ? 1 : 0.4
        }
        fill="none"
        style={{
          stroke: "var(--inte-G40)",
        }}
        className="inte-activityGauge__background"
      />
      <circle
        ref={circleRef}
        cx={sizeFun() / 2}
        cy={sizeFun() / 2}
        r={sizeFun() / 2 - calculateValue(index)}
        fill="none"
        strokeWidth={size === "small" ? 8 : size === "medium" ? 10 : 12}
        stroke={item.color}
        strokeDasharray={`${strokeDashOffset} ,${
          2 * 3.14159265359 * (sizeFun() / 2 - calculateValue(index))
        }`}
        strokeDashoffset="0"
        strokeLinecap="round"
        opacity={
          showValue.value === "" ? 1 : showValue.value == item.value ? 1 : 0.7
        }
        onMouseOver={() => {
          setShowValue({
            label: item.label,
            value:
              parseFloat(item.value) <= parseFloat(item.total)
                ? item.value
                : item.total,
            percentage: percentage <= 100 ? percentage : 100,
          });
        }}
        onMouseOut={() => setShowValue({ label: "", value: 0, percentage: 0 })}
        className="inte-activityGauge__circle"
      />
    </g>
  );
};

const ActivityGauge: React.FC<ActivityGaugeI> = ({
  size = "large",
  chartData,
  customClass = "",
  animationDuration = 1,
  valueType = "number",
  legend = { desktop: false, tab: false, mobile: true },
}) => {
  const { width } = useWindowResize();

  const [showValue, setShowValue] = useState<{
    label: string;
    value: number;
    percentage: number;
  }>({
    label: "",
    value: 0,
    percentage: 0,
  });
  const [toggleAnimationClass, setToggleAnimationClass] = useState(false);
  const animateData = useDelayUnmount(toggleAnimationClass, 200);

  const totalValue = chartData.reduce(
    (sum, item) => sum + Number(item.value),
    0
  );

  const calculateValue: any = (index: number) => {
    if (size === "small") {
      return index === 0 ? 4 : calculateValue(index - 1) + 10; // Small space 2px
    } else if (size === "medium") {
      return index === 0 ? 5 : calculateValue(index - 1) + 14; // Medium space 4px
    } else {
      return index === 0 ? 6 : calculateValue(index - 1) + 18; // Large space 6px
    }
  };

  const calculateStrokeDashOffset = (r: number, percentage: number) => {
    const circumference = 2 * Math.PI * r;
    const desiredLength = (percentage / 100) * circumference;
    return circumference - desiredLength;
  };

  const sizeFun = () => {
    if (size === "medium") {
      return 200;
    } else if (size == "small") {
      return 150;
    } else {
      return 250;
    }
  };

  const formatValue = (value: number) => {
    const formattedValue =
      value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
    return value === 0 ? "" : formattedValue;
  };

  const calculatePercentage = (item: any) => {
    return typeof item.value === "string" && String(item.value).includes("%")
      ? parseFloat(item.value) <= 100
        ? parseFloat(item.value)
        : 100
      : parseInt(item.value) <= parseInt(item.total)
      ? (parseFloat(item.value) / parseFloat(item.total)) * 100
      : 100;
  };

  const legendValue = ({ chartData }: ActivityGaugeI) => {
    return (
      <div className="inte-chartLegend__wrapper">
        {chartData.map((item, index) => {
          const percentage =
            typeof item.value === "string" && String(item.value).includes("%")
              ? Math.abs(item.value) <= 100
                ? Math.abs(item.value)
                : 100
              : Math.abs(item.value) <= Math.abs(item.total)
              ? (Math.abs(item.value) / Math.abs(item.total)) * 100
              : 100;
          return (
            <div
              key={index}
              className="inte-chartLegend"
              onMouseOver={() => {
                setShowValue({
                  label: item.label,
                  value:
                    Math.abs(item.value) <= Math.abs(item.total)
                      ? Math.abs(item.value)
                      : Math.abs(item.total),
                  percentage: percentage <= 100 ? percentage : 100,
                });
              }}
              onMouseOut={() =>
                setShowValue({ label: "", value: 0, percentage: 0 })
              }
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
                  {showValue.value !== 0 &&
                    valueType === "number" &&
                    formatValue(item.value)}
                  {showValue.percentage !== 0 &&
                    valueType === "percentage" &&
                    formatValue(percentage) + "%"}

                  {showValue.value === 0 &&
                    valueType === "number" &&
                    formatValue(item.value)}
                  {showValue.percentage === 0 &&
                    valueType === "percentage" &&
                    formatValue(percentage) + "%"}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="inte-activityGauge__wrapper">
      <div
        className={getClassNames({
          "inte-activityGauge": true,
          "inte-activityGauge--small": size === "small",
          "inte-activityGauge--medium": size === "medium",
          "inte-activityGauge--large": size === "large",
          "inte-activityGauge__hoverAnimation": toggleAnimationClass,
          [customClass]: customClass,
        })}
        onMouseEnter={() => setToggleAnimationClass(true)}
        onMouseLeave={() => setToggleAnimationClass(false)}
      >
        <svg
          viewBox={`0 0 ${sizeFun()} ${sizeFun()}`}
          height={sizeFun()}
          width={sizeFun()}
          xmlns="http://www.w3.org/2000/svg"
          className="inte-activityGauge__svg"
        >
          {chartData.map((item: any, index: number) => {
            const circleRef = useRef<SVGCircleElement>(null);
            return (
              <AnimatedCircle
                key={index}
                percentage={calculatePercentage(item)}
                totalLength={circleRef.current?.getTotalLength() || 0}
                showValue={showValue}
                setShowValue={setShowValue}
                item={item}
                index={index}
                size={size}
                calculateValue={calculateValue}
                sizeFun={sizeFun}
                calculateStrokeDashOffset={calculateStrokeDashOffset}
                animationDuration={animationDuration}
              />
            );
          })}
        </svg>
        {animateData && width >= 768 && (
          <div
            className={getClassNames({
              "inte-activityGauge__info": true,
              "inte-activityGauge--in": showValue.label !== "",
              "inte-activityGauge--out": showValue.label == "",
            })}
          >
            <div className="inte-activityGauge__label">{showValue.label}</div>
            <div className="inte-activityGauge__value">
              {valueType === "percentage"
                ? formatValue(showValue.percentage) !== "" &&
                  formatValue(showValue.percentage) + "%"
                : formatValue(showValue.value)}
            </div>
          </div>
        )}
      </div>
      {/*show in desktop */}
      {width > 991 &&
        legend.desktop &&
        !legend.mobile &&
        !legend.tab &&
        legendValue({ chartData })}
      {/*show in  tab  */}
      {width < 991 &&
        width > 768 &&
        legend.tab &&
        !legend.desktop &&
        !legend.mobile &&
        legendValue({ chartData })}
      {/*show in  mobile   */}
      {width < 768 &&
        legend.mobile &&
        !legend.desktop &&
        !legend.tab &&
        legendValue({ chartData })}
      {/*show in desktop , tab  */}
      {width > 768 &&
        legend.desktop &&
        legend.tab &&
        !legend.mobile &&
        legendValue({ chartData })}
      {/*show in tab, mobile   */}
      {width < 991 &&
        legend.tab &&
        legend.mobile &&
        !legend.desktop &&
        legendValue({ chartData })}
      {/* show in desktop , mobile  */}
      {legend.desktop &&
        !legend.tab &&
        (width > 991 || width < 768) &&
        legend.mobile &&
        legendValue({ chartData })}
      {/*show in desktop , tab, mobile   */}
      {legend.desktop &&
        legend.tab &&
        legend.mobile &&
        legendValue({ chartData })}
    </div>
  );
};

export default ActivityGauge;
