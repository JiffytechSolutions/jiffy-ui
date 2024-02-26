import React, { useEffect, useRef, useState } from "react";
import getClassNames from "../../../utilities/getClassnames";
import "./PieChart.css";
import Badge from "../../Badge/Badge";
import Text from "../../Text/Text";
import Legend from "../Legend/Legend";

export interface PieChartI {
  chartData: PieChartData[];
  size?: number;
  animationDuration?: number;
  tooltip?: boolean;
  border?: showBorderI;
  valueType?: "percentage" | "number";
  customClass?: string;
  legend?: {
    tab?: boolean
    mobile?: boolean
    desktop?: boolean
  }
}

export interface PieChartData {
  value: number;
  label: string;
  color: string;
}
export interface tooltipI {
  show: boolean;
  type?: "number" | "percentage";
}
export interface showBorderI {
  show?: boolean;
  width?: number;
  color?: string;
}

const getTotalPercentage = (chartData: PieChartData[]) =>
  chartData.reduce((sum, item) => sum + Number(item.value), 0);

const PieChart: React.FC<PieChartI> = ({
  chartData,
  size = 250,
  animationDuration = 1000,
  legend,
  tooltip,
  // showBorder,
  customClass = "",
  valueType="number",
  border = { show: false, width: 1, color: "#fff" },
}) => {
  const [deviceType, setDeviceType] = useState<"desktop" | "tab" | "mobile">("desktop")
  const [handleIndex, setHandleIndex] = useState(-1);
  const moveRef = useRef<HTMLDivElement>(null);
  const totalPercentage = getTotalPercentage(chartData);
  let cumulativePercentage = 0;
  const [showValue, setShowValue] = useState<{
    label: string;
    value: number;
    percentage: number;
    color:string
  }>({
    label: "",
    value: 0,
    percentage: 0,
    color:""
  });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const totalValue = chartData.reduce(
    (sum, item) => sum + Number(item.value) / 100,
    0
  );

  const handleMouseOver = (
    item:PieChartData ,
    event: React.MouseEvent<SVGPathElement>
  ) => {
    setShowValue({ label: item.label, value: item.value , percentage:0 , color:item.color, });
    const pathRect = (event.target as HTMLElement).getBoundingClientRect()
    if(!pathRect) return
    const left = pathRect.left + (pathRect.width / 2)
    const top = pathRect.top + (pathRect.height / 2)
    setTooltipPosition({ x: left, y: top});

  };

  const handleMouseLeave = () => {
    setShowValue({ label: "", value: 0, percentage:0 , color : "" });
  };

  // percentage format
  const formatPercentage = (value: number) => {
    const formattedValue =
      value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
    return `${formattedValue}%`;
  };

  const getPathData = (startAngle : number , endAngle : number , value : number ) => {
    return `
    M ${size / 2} ${size / 2}
    L ${size / 2 +
      Math.cos((startAngle - 90) * (Math.PI / 180)) * (size / 2)
      } ${size / 2 +
      Math.sin((startAngle - 90) * (Math.PI / 180)) * (size / 2)
      }
    A ${size / 2} ${size / 2} 0 ${Number(value) / totalPercentage >= 0.5 ? 1 : 0
      } 1
    ${size / 2 +
      Math.cos((endAngle - 90) * (Math.PI / 180)) * (size / 2)
      } ${size / 2 +
      Math.sin((endAngle - 90) * (Math.PI / 180)) * (size / 2)
      }
    Z
  `
  }

  let start:number, previousTimeStamp:number;
  let done = false;

  const pathPercentage = chartData.map(item => (item.value / totalPercentage)*100)

  const animatePath = (timeStamp:number) => {
    if (start === undefined) {
      start = timeStamp;
    }
    const elapsed = timeStamp - start;

    if(previousTimeStamp !== timeStamp){
      const paths = Array.from(moveRef.current?.getElementsByClassName("inte-pieChart__path") ?? [])
      
      if(paths && paths.length){
        const animationCompletePercentage = Math.min(Math.ceil((elapsed / animationDuration) * 100) , 100)
        let startAngel = paths.length < 2 ? 0.001 : 0;
        paths.map((path, index) =>{
          const currPathPer = (pathPercentage[index] * animationCompletePercentage)/100
          const endAngel = Math.min(startAngel + (currPathPer * 360) / 100 , 360)
          const currValue = Number(chartData[index].value) * animationCompletePercentage / 100
          const currPathD = getPathData(startAngel , endAngel , currValue)
          path.setAttribute("d", currPathD)
          startAngel = endAngel
        })
      }
      const count = Math.min(elapsed , animationDuration)
      if(count === animationDuration) done = true
    }

    if(elapsed < animationDuration){
      previousTimeStamp = timeStamp
      if(!done) window.requestAnimationFrame(animatePath)
    }
  }

  useEffect(() => {
    window.requestAnimationFrame(animatePath)
 }, []);

 const checkDeviceType = () => {
  const width = window.innerWidth
  if (width < 480) setDeviceType("mobile")
  else if (width < 768) setDeviceType("tab")
  else setDeviceType("desktop")
}

 useEffect(() => {
  checkDeviceType()
  window.addEventListener('resize', checkDeviceType)
  return () => {
    window.removeEventListener('resize', checkDeviceType)
  }
}, [legend])


  return (
    <div className="inte-pieChart__wrapper">
      <div
        className={getClassNames({
          "inte-pieChart": true,
     
          [customClass]: customClass,
        })}
        ref={moveRef}
      >
        <svg
          className={`inte-pieChart""
            }__svg`}
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
          style={{ overflow: "visible" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {chartData.map((item, index: number) => {
            let startAngle = 0;
            const endAngle =
              ((cumulativePercentage + Number(item.value)) / totalPercentage) *
              360;

            if (index > 0) {
              startAngle = (cumulativePercentage / totalPercentage) * 360;
            } else {
              startAngle = 0.001;
            }

            cumulativePercentage += Number(item.value);

          const pathData = getPathData(startAngle, endAngle , item.value)
            return (
              <path
                key={index}
                className={getClassNames({
                  "inte-pieChart__path": true,
          
                })}
                d={pathData}
                fill={item.color || ""}
                onMouseOver={(e) => {
                  setHandleIndex(index);
                  handleMouseOver(item, e);
                }}
                onMouseLeave={() => {
                  setHandleIndex(-1);
                  handleMouseLeave();
                }}
                style={{
                  transformOrigin: "center",
                  transform: `scale(${handleIndex === index ? 1.04 : 1})`,
                }}
                {...(border.show && {
                  stroke: border.color,
                  strokeWidth: `${border.width}`,
                })}
              />
            );
          })}

        
        </svg>
        {showValue.label && showValue.value && tooltip && (
          <div
            className="inte-chart__tooltip"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
            }}
          >
            <Badge size="large" dot customBgColor={showValue.color} />
            {`${showValue.label}:  ${valueType === "percentage"
                ? formatPercentage(showValue.value / totalValue)
                : showValue.value
              }`}
          </div>
        )}
       
      </div>
      {
        legend && (legend[deviceType] !== false) ? <Legend chartData={chartData} renderIndex={(index) => setHandleIndex(index)} valueType={valueType ?? "number"} /> : null
      }
    </div>
  );
};

export default PieChart;
