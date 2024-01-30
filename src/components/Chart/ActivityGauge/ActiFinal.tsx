import React, { useEffect, useRef, useState } from "react";
import "./ActivityGauge.css";
import Text from "../../Text/Text";

export interface ActivityGaugeI {
  chartData: SegmentData[];
  size?: number;
}

export interface SegmentData {
  value: number | string;
  total: number | string;
  label: string;
  color: string;
}

const ActivityGauge: React.FC<ActivityGaugeI> = ({ size = 200, chartData }) => {
  const [showTooltip, setShowValue] = useState({ label: "", value: "" });
  const calculateValue: any = (index: number) =>
    index === 0 ? 4 : calculateValue(index - 1) + 10;

  const calculateStrokeDashOffset = (r: number, percentage: number) => {
    const circumference = 2 * Math.PI * r;
    const desiredLength = (percentage / 100) * circumference;
    return circumference - desiredLength;
  };
  return (
    <div className="inte-activityGauge" style={{ height: size, width: size }}>
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

                circleRef.current.style.transition =
                  "stroke-dashoffset 2s linear";
                circleRef.current.style.strokeDashoffset = `${
                  ((100 - percentage) / 100) * totalLength
                }`;
              }
            };

            animateCircle();
          }, [percentage]);

          const strokeDashOffset = calculateStrokeDashOffset(
            size / 2 - calculateValue(index),
            percentage
          );
          console.log(strokeDashOffset);
          return (
            <g key={index} className="inte-activityGauge__path">
              <circle
                cx={size / 2}
                cy={size / 2}
                r={size / 2 - calculateValue(index)}
                strokeWidth={4}
                fill="none"
                style={{
                  stroke: "var(--inte-G40)",
                }}
                className="inte-activityGauge__background"
              />
              <circle
                ref={circleRef}
                cx={size / 2}
                cy={size / 2}
                r={size / 2 - calculateValue(index)}
                fill="none"
                strokeWidth={8}
                stroke={item.color}
                strokeDasharray={`${strokeDashOffset} ,${
                  2 * 3.14159265359 * (size / 2 - calculateValue(index))
                }`}
                strokeDashoffset="0"
                strokeLinecap="round"
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
      {showTooltip.label !== "" && (
        <div className="inte-activityGauge__info">
          <Text textcolor="secondary">{showTooltip.label} </Text>
          <Text fontweight="bold" type="T-6">
            {showTooltip.value}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ActivityGauge;
