import React, { useEffect, useRef, useState } from "react";
import Text from "../../Text/Text";
import "./ActivityGauge.css";
import getClassNames from "../../../utilities/getClassnames";
import useDelayUnmount from "../../../utilities/useDelayTimeout";
export interface ActivityGaugeI {
  chartData: activityGaugeData[];
  size?: "small" | "medium" | "large";
  enableValue?: "number" | "percentage";
  animationDuration?: number;
  customClass?: string;
}

export interface activityGaugeData {
  value: number | string;
  total: number | string;
  label: string;
  color: string;
}

const ActivityGauge: React.FC<ActivityGaugeI> = ({
  size = "large",
  chartData,
  customClass = "",
  animationDuration = 2,
  enableValue = "number",
}) => {
  const [showValue, setShowValue] = useState({
    label: "",
    value: "",
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
  const formatPercentage = (value: number) => {
    const formattedValue =
      value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
    return value === 0 ? "" : `${formattedValue}%`;
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
      style={{ height: sizeFun(), width: sizeFun() }}
      onMouseEnter={() => setToggleAnimationClass(true)}
      onMouseLeave={() => setToggleAnimationClass(false)}
    >
      <svg
        className="inte-activityGauge__svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {chartData.map((item: any, index: number) => {
          const circleRef = useRef<SVGCircleElement>(null);
          const percentage =
            typeof item.value === "string" && item.value.includes("%")
              ? parseFloat(item.value)
              : (parseFloat(item.value) / parseFloat(item.total)) * 100;

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
                circleRef.current.style.strokeDashoffset = `${
                  ((100 - percentage) / 100) * totalLength
                }`;
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
                  showValue.value === ""
                    ? 1
                    : showValue.value == item.value
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
                  showValue.value === ""
                    ? 1
                    : showValue.value == item.value
                    ? 1
                    : 0.7
                }
                onMouseOver={() => {
                  setShowValue({
                    label: item.label,
                    value: item.value,
                    percentage: percentage,
                  });
                }}
                onMouseOut={() =>
                  setShowValue({ label: "", value: "", percentage: 0 })
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
          <Text textcolor="secondary">{showValue.label} </Text>
          <Text fontweight="bold" type="T-6">
            {enableValue === "percentage"
              ? formatPercentage(showValue.percentage)
              : showValue.value}
          </Text>
        </div>
      )}
      {/* {showValue.label !== "" && (
        <div className="inte-activityGauge__info">
          <Text textcolor="secondary">{showValue.label} </Text>
          <Text fontweight="bold" type="T-6">
            {showValue.value}
          </Text>
        </div>
      )} */}
    </div>
  );
};

export default ActivityGauge;
