import React, { useEffect, useRef, useState } from "react";
import "./ActivityGauge.css";

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
    index === 0 ? 5 : calculateValue(index - 1) + 15;

  return (
    <div className="inte-activityGauge">
      <svg height={size} width={size} className="inte-activityGauge__svg">
        {chartData.map((item: any, index: number) => {
          const circleRef = useRef<SVGCircleElement>(null);

          const percentage =
            typeof item.value === "string" && item.value.includes("%")
              ? parseFloat(item.value)
              : (parseFloat(item.value) / parseFloat(item.total)) * 100;
          console.log(percentage);
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

          return (
            <g key={index} className="inte-activityGauge__path">
              <circle
                cx={size / 2}
                cy={size / 2}
                r={size / 2 - calculateValue(index)}
                strokeWidth={10}
                fill="none"
                style={{
                  stroke: "#ededed",
                }}
                className="inte-activityGauge__circle"
              />
              <circle
                ref={circleRef}
                cx={size / 2}
                cy={size / 2}
                r={size / 2 - calculateValue(index)}
                fill="none"
                strokeWidth={15}
                stroke={item.color}
                strokeDasharray="0 100"
                strokeDashoffset="0"
                strokeLinecap="round"
                onMouseOver={() =>
                  setShowValue({ label: item.label, value: item.value })
                }
                onMouseOut={() => setShowValue({ label: "", value: "" })}
              />
            </g>
          );
        })}
      </svg>
      {showTooltip.label !== "" && (
        <div className="inte-activityGauge__labelValue">
          <div>{showTooltip.label}</div>
          <div>{showTooltip.value}</div>
        </div>
      )}
    </div>
  );
};

export default ActivityGauge;
