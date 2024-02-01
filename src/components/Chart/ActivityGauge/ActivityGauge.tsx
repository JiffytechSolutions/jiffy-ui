import React, { useEffect, useRef, useState } from "react";
import Text from "../../Text/Text";
import getClassNames from "../../../utilities/getClassnames";
import useDelayUnmount from "../../../utilities/useDelayTimeout";
import "./ActivityGauge.css";
export interface ActivityGaugeI {
  chartData: activityGaugeData[];
  size?: "small" | "medium" | "large";
  enableValue?: "number" | "percentage";
  animationDuration?: number;
  customClass?: string;
}

export interface activityGaugeData {
  value: number;
  total: number;
  label: string;
  color: string;
}

const ActivityGauge: React.FC<ActivityGaugeI> = ({
  size = "large",
  chartData,
  customClass = "",
  animationDuration = 1,
  enableValue = "number",
}) => {
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

  const calculateValue: any = (index: number) => {
    if (size === "small") {
      return index === 0 ? 4 : calculateValue(index - 1) + 10; // Small space 2px
    } else if (size === "medium") {
      return index === 0 ? 5 : calculateValue(index - 1) + 15; // Medium space 5px
    } else {
      return index === 0 ? 6 : calculateValue(index - 1) + 15; // Large space 3px
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

  return (
    <div
      className={getClassNames({
        "inte-activityGauge": true,
        "inte-activityGauge--small": size === "small",
        "inte-activityGauge--medium": size === "medium",
        "inte-activityGauge--large": size === "large",
        "inte-activityGauge__hoverAnimation": toggleAnimationClass,
        [customClass]: customClass,
      })}
      // style={{ height: sizeFun(), width: sizeFun() }}
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
          const percentage =
            typeof item.value === "string" && String(item.value).includes("%")
              ? Math.abs(item.value) <= 100
                ? Math.abs(item.value)
                : 100
              : Math.abs(item.value) <= Math.abs(item.total)
              ? (Math.abs(item.value) / Math.abs(item.total)) * 100
              : 100;

          // Animation
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
          }, [percentage]);

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
                  showValue.value === 0
                    ? 1
                    : showValue.value == Math.abs(item.value)
                    ? 1
                    : 0.4
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
                strokeWidth={size == "small" ? 8 : size == "medium" ? 10 : 12}
                stroke={item.color}
                strokeDasharray={`${strokeDashOffset} ,${
                  2 * 3.14159265359 * (sizeFun() / 2 - calculateValue(index))
                }`}
                strokeDashoffset="0"
                strokeLinecap="round"
                opacity={
                  showValue.value === 0
                    ? 1
                    : showValue.value == Math.abs(item.value)
                    ? 1
                    : 0.7
                }
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
                className="inte-activityGauge__circle"
              />
            </g>
          );
        })}
      </svg>
      {animateData && (
        <div
          className={getClassNames({
            "inte-activityGauge__info": true,
            "inte-activityGauge--in": showValue.label !== "",
            "inte-activityGauge--out": showValue.label == "",
          })}
        >
          <div className="inte-activityGauge__label">{showValue.label}</div>
          <div className="inte-activityGauge__value">
            {enableValue === "percentage"
              ? formatValue(showValue.percentage) !== "" &&
                formatValue(showValue.percentage) + "%"
              : formatValue(showValue.value)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityGauge;
