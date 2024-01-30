import React, { useEffect, useRef, useState } from "react";
import Text from "../../Text/Text";
import "./ActivityGauge.css";
import getClassNames from "../../../utilities/getClassnames";
export interface ActivityGaugeI {
  chartData: activityGaugeData[];
  size?: "small" | "medium" | "large";
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
}) => {
  const [showValue, setShowValue] = useState({ label: "", value: "" });
  const calculateValue: any = (index: number) =>
    index === 0 ? 4 : calculateValue(index - 1) + 10;

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

  return (
    <div
      className={getClassNames({
        "inte-activityGauge": true,
        "inte-activityGauge--small": size === "small",
        "inte-activityGauge--medium": size === "medium",
        "inte-activityGauge--large": size === "large",
        [customClass]: customClass,
      })}
      style={{ height: sizeFun(), width: sizeFun() }}
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
                strokeWidth={4}
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
                strokeWidth={8}
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
                onMouseOver={() =>
                  setShowValue({ label: item.label, value: item.value })
                }
                onMouseOut={() => setShowValue({ label: "", value: "" })}
                className="inte-activityGauge__circle"
              />
            </g>
          );
        })}
      </svg>
      {showValue.label !== "" && (
        <div className="inte-activityGauge__info">
          <Text textcolor="secondary">{showValue.label} </Text>
          <Text fontweight="bold" type="T-6">
            {showValue.value}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ActivityGauge;
