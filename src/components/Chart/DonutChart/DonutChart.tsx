import React, { useEffect, useRef, useState } from "react";
import "./DonutChart.css";
import Badge from "../../Badge/Badge";
import Legend from "../Legend/Legend";

export interface DonutChartI {
  chartData: donutChartData[];
  size?: number;
  tooltip?: boolean;
  border?: showBorderI;
  showTotalValue?: boolean;
  customClass?: string;
  animationDuration?: number;
  valueType?: "number" | "percentage";
  legend?: {
    tab?: boolean;
    mobile?: boolean;
    desktop?: boolean;
  };
}

export interface donutChartData {
  value: number;
  label: string;
  color: string;
}

export interface showBorderI {
  show?: boolean;
  width?: number;
  color?: string;
}

const DonutChart: React.FC<DonutChartI> = ({
  chartData,
  border = { show: false, width: 1, color: "#fff" },
  size = 250,
  animationDuration = 2000,
  showTotalValue = false,
  valueType,
  tooltip,
  legend,
}) => {
  const [deviceType, setDeviceType] =
    useState<"desktop" | "tab" | "mobile">("desktop");
  const [handleIndex, setHandleIndex] = useState(-1);
  const chartRef = useRef<SVGSVGElement>(null);
  const [showValue, setShowValue] = useState<{
    label: string;
    value: number;
    percentage: number;
    color: string;
  }>({
    label: "",
    value: 0,
    percentage: 0,
    color: "",
  });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseOver = (
    item: donutChartData,
    event: React.MouseEvent<SVGPathElement>
  ) => {
    setShowValue({
      label: item.label,
      value: item.value,
      percentage: 0,
      color: item.color,
    });
    const pathRect = (event.target as HTMLElement).getBoundingClientRect();
    if (!pathRect) return;
    const left = pathRect.left + pathRect.width / 2;
    const top = pathRect.top + pathRect.height / 2;
    setTooltipPosition({ x: left, y: top });
  };

  const handleMouseLeave = () => {
    setShowValue({ label: "", value: 0, percentage: 0, color: "" });
  };

  // Convert negative values to positive
  const normalizedChartData = chartData.map((data) => ({
    ...data,
    value: Math.abs(data.value),
  }));

  const total = normalizedChartData.reduce(
    (acc, segment) => acc + segment.value,
    0
  );
  const radius = Math.min(size, size) / 2; // min(width, height)

  const newArr = normalizedChartData.map((item) => {
    return {
      percentage: Number(((item.value / total) * 100).toFixed(2)), // this is return point after 2 digits
      value: item.value,
      label: item.label,
      color: item.color,
    };
  });

  const getDonutSegmentPath = (
    startAngle: number,
    endAngle: number,
    innerRadius: number,
    outerRadius: number
  ) => {
    const x1Inner = Math.cos((startAngle * Math.PI) / 180) * innerRadius;
    const y1Inner = Math.sin((startAngle * Math.PI) / 180) * innerRadius;

    const x1Outer = Math.cos((startAngle * Math.PI) / 180) * outerRadius;
    const y1Outer = Math.sin((startAngle * Math.PI) / 180) * outerRadius;

    const x2Inner = Math.cos((endAngle * Math.PI) / 180) * innerRadius;
    const y2Inner = Math.sin((endAngle * Math.PI) / 180) * innerRadius;

    const x2Outer = Math.cos((endAngle * Math.PI) / 180) * outerRadius;
    const y2Outer = Math.sin((endAngle * Math.PI) / 180) * outerRadius;

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return `M ${x1Outer} ${y1Outer} 
            A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2Outer} ${y2Outer} 
            L ${x2Inner} ${y2Inner} 
            A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1Inner} ${y1Inner} Z`;
  };

  let startAngle = -90; // Start angle at the top

  // creating path
  const paths = newArr.map((item, index) => {
    const endAngle = startAngle + (item.percentage * 360) / 100;

    const innerRadius = radius / 2;
    const pathData = getDonutSegmentPath(
      startAngle,
      endAngle,
      innerRadius,
      radius
    );
    startAngle = endAngle;

    return (
      <path
        key={index}
        d={pathData}
        fill={chartData[index].color}
        className="inte-donutChart__path"
        onMouseOver={(e) => {
          handleMouseOver(item, e);
          setHandleIndex(index);
        }}
        onMouseLeave={() => {
          handleMouseLeave();
          setHandleIndex(-1);
        }}
        style={{
          transform: `scale(${handleIndex === index ? 1.04 : 1})`,
        }}
        {...(border.show && {
          stroke: border.color,
          strokeWidth: `${border.width}`,
        })}
      />
    );
  });

  let start: number, previousTimeStamp: number;
  let done = false;

  useEffect(() => {}, [tooltip]);

  const animatePath = (timeStamp: number) => {
    if (start === undefined) {
      start = timeStamp;
    }
    const elapsed = timeStamp - start;

    if (previousTimeStamp !== timeStamp) {
      const paths = Array.from(
        chartRef.current?.querySelectorAll(".inte-donutChart__path") ?? []
      );

      if (paths && paths.length && newArr) {
        const animationCompletePercentage = Math.min(
          Math.ceil((elapsed / animationDuration) * 100),
          100
        );
        let startAngel = -90;
        const innerRadius = radius / 2;
        paths.map((path, index) => {
          const currPathPer =
            (newArr[index]?.percentage * animationCompletePercentage) / 100;
          const endAngle = startAngel + (currPathPer * 360) / 100;
          const currPathD = getDonutSegmentPath(
            startAngel,
            endAngle,
            innerRadius,
            radius
          );
          path.setAttribute("d", currPathD);
          startAngel = endAngle;
        });
      }
      const count = Math.min(elapsed, animationDuration);
      if (count === animationDuration) done = true;
    }

    if (elapsed < animationDuration) {
      previousTimeStamp = timeStamp;
      if (!done) window.requestAnimationFrame(animatePath);
    }
  };

  const checkDeviceType = () => {
    const width = window.innerWidth;
    if (width < 768) setDeviceType("mobile");
    else if (width < 992) setDeviceType("tab");
    else setDeviceType("desktop");
  };

  useEffect(() => {
    window.requestAnimationFrame(animatePath);
  }, [chartData]);

  useEffect(() => {
    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);
    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, [legend]);

  return (
    <div className="inte-donutChart__wrapper">
      <div
        className="inte-donutChart"
        style={{ height: `${size}px`, width: `${size}px` }}
      >
        <svg
          ref={chartRef}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="inte-donutChart__svg"
        >
          <g transform={`translate(${size / 2}, ${size / 2})`}>{paths}</g>
        </svg>
        {showTotalValue && (
          <div className="inte-pieChart__percentage">
            {valueType === "percentage" ? 100 + "%" : total}
          </div>
        )}
      </div>
      {legend && legend[deviceType] !== false ? (
        <Legend
          chartData={chartData}
          renderIndex={(index) => setHandleIndex(index)}
          valueType={valueType ?? "number"}
        />
      ) : null}

      {showValue.label && showValue.value && tooltip && (
        <div
          className="inte-chart__tooltip"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          <Badge size="large" dot customBgColor={showValue.color} />
          {`${showValue.label}:  ${
            valueType === "percentage"
              ? ((showValue.value / total) * 100).toFixed(2) + "%"
              : showValue.value
          }`}
        </div>
      )}
    </div>
  );
};

export default DonutChart;
