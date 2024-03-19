import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ToolTip from "../../ToolTip/ToolTip";
import Badge from "../../Badge/Badge";
import Text from "../../Text/Text";
import getClassNames from "../../../utilities/getClassnames";
import "./BarChart.css";
import useWindowResize from "../../../utilities/useWindowResize";

export interface barChartI {
  barWidth?: number;
  width?: string;
  height?: number;
  type?: "group" | "stack";
  labels: {
    x: string[] | number;
    y: string[] | number;
  };
  dataSet: {
    name: string;
    color: string;
    points: number[];
    animationDuration?: number;
    beginAtOrigin?: boolean;
  }[];

  backgroundGrid?: {
    xLines?: {
      color?: string;
      type?: "dashed" | "solid";
      show?: boolean;
    };
    yLines?: {
      color?: string;
      type?: "dashed" | "solid";
      show?: boolean;
    };
  };
  legend?: { show?: boolean; position?: "top" | "bottom" };
  customClass?: string;
  paddingLeft?: number; // remove this
  paddingBottom?: number; // remove this
}

type Point = { x: number; y: number };

const graphScale = {
  color: "#9B9EA5",
  lineWidth: 1,
  cutGap: 12,
  cutSize: 9,
  cutPosition: "center",
  textColor: "#1C2433",
};

const BarChart = ({
  width = "100%",
  height = 350,
  labels,
  dataSet,
  type = "group",
  backgroundGrid,
  paddingLeft = 60,
  paddingBottom = 50,
  barWidth = 15,
  customClass,
  legend = { show: true, position: "bottom" },
}: barChartI) => {
  const windowWidth = useWindowResize().width;
  const [showPoint, setShowPoint] = useState(-1);
  const [currentColor, setCurrentColor] = useState("");
  const [graphScaleLine, setGraphScaleLine] = useState<React.JSX.Element>();
  const [currentHoveredBlock, setCurrentHoveredBlock] =
    useState<Point | undefined>();
  const [toolTipDiv, setToolTipDiv] = useState<React.JSX.Element>();
  const [scaleLabel, setScaleLabel] = useState<React.JSX.Element[]>([]);
  const [disableCurves, setDisableCurves] = useState<number[]>([]);
  const chartRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const labelListRef = useRef<HTMLUListElement>(null);
  const [firstMValue, setFirstMValue] = useState<number>(0);
  const [svgSize, setSvgSize] = useState<{ width: number; height: number }>({
    width: 300,
    height: height,
  });

  const newBarWidth =
    firstMValue > 61 ? barWidth : barWidth - (firstMValue - 61);
  // console.log(newBarWidth);
  const origin = useMemo(() => {
    return {
      x: paddingLeft,
      y: svgSize.height - paddingBottom,
    };
  }, [paddingLeft, svgSize, paddingBottom]);

  const xBlockCount = useMemo(
    () => (typeof labels.x === "number" ? labels.x : labels.x.length),
    [labels]
  );
  const yBlockCount = useMemo(
    () => (typeof labels.y === "number" ? labels.y : labels.y.length),
    [labels]
  );

  const xBlockWidth = useMemo(() => {
    return (svgSize.width - paddingLeft) / xBlockCount;
  }, [svgSize, paddingLeft, xBlockCount]);

  const yBlockWidth = useMemo(() => {
    return (svgSize.height - (paddingBottom + paddingBottom / 2)) / yBlockCount;
  }, [svgSize, paddingBottom, yBlockCount]);

  const maxY = useMemo<number>(() => {
    let maxY = 0;
    dataSet.forEach((i) => {
      let currMax = Math.max(...i.points);
      if (currMax > maxY) maxY = currMax;
    });
    return maxY - (maxY % 10) + 10;
  }, [dataSet]);
  const maxX = useMemo(() => {
    return svgSize.width - paddingLeft;
  }, [svgSize, paddingLeft]);

  const getYPixels = (y: number) => {
    const takesBlock = y / (maxY / yBlockCount);
    return origin.y - takesBlock * yBlockWidth;
  };

  const getPointsFromIndex = (
    index: number,
    line: "horizontal" | "vertical"
  ) => {
    const blockWidth = line === "vertical" ? yBlockWidth : xBlockWidth;
    const currSize =
      blockWidth * (index + 1) -
      (line === "vertical"
        ? 0
        : graphScale.cutPosition === "center"
        ? blockWidth / 2
        : graphScale.cutPosition === "left"
        ? blockWidth
        : 0);
    return line === "vertical" ? origin.y - currSize : origin.x + currSize;
  };

  const makeScaleLabel = (
    point: Point,
    label: string,
    line: "horizontal" | "vertical"
  ) => {
    return (
      <li
        className={`inte-scaleLabel inte-scaleLabel--${line}`}
        style={{
          ["--top" as any]: `${
            line === "horizontal"
              ? -(graphScale.cutSize + graphScale.cutGap)
              : point.y
          }px`,
          ["--left" as any]: `${
            line === "vertical" ? graphScale.cutGap : point.x
          }px`,
          top:
            (line === "horizontal"
              ? point.y + (graphScale.cutGap ?? 0)
              : point.y) + "px",
          left:
            (line === "vertical"
              ? point.x - (graphScale.cutGap ?? 0)
              : point.x) + "px",
          position: "absolute",
        }}
      >
        <div>{label}</div>
      </li>
    );
  };

  const drawScale = () => {
    let xLabelPoints: Point[] = [];
    let yLabelPoints: Point[] = [];
    // show this bottom label
    const cutsInXAxis = Array(xBlockCount)
      .fill(0)
      .map((item, index) => {
        const x1 = getPointsFromIndex(index, "horizontal");
        const x2 = x1;
        const y1 = origin.y;
        const y2 = origin.y + (graphScale?.cutSize ?? 0);
        xLabelPoints.push({
          x: x2,
          y: y2,
        });
        return `M ${x1},${y1} ${x2},${y2}`;
      })
      .join(" ");

    const cutsInYAxis = Array(yBlockCount)
      .fill(0)
      .map((item, index) => {
        const x1 = paddingLeft;
        const x2 = paddingLeft - (graphScale?.cutSize ?? 0);
        const y1 = getPointsFromIndex(index, "vertical");
        const y2 = y1;
        yLabelPoints.push({
          x: x2,
          y: y2,
        });
        return `M ${x1},${y1} ${x2},${y2}`;
      })
      .join(" ");

    const getYLabel = (index: number, tot: number) => {
      const blockWidth = maxY / tot;
      const currValue = blockWidth * (index + 1);
      return currValue;
    };
    const xLabels = xLabelPoints.map((item, index) =>
      makeScaleLabel(
        item,
        typeof labels.x === "number"
          ? `${paddingLeft + item.x}`
          : labels.x[index],
        "horizontal"
      )
    );

    const yLabels = yLabelPoints.map((item, index) =>
      makeScaleLabel(
        item,
        typeof labels.y === "number"
          ? `${getYLabel(index, labels.y)}`
          : labels.y[index],
        "vertical"
      )
    );

    setScaleLabel([...xLabels, ...yLabels]);

    return (
      <path
        d={`M ${paddingLeft},0 ${origin.x},${origin.y} ${svgSize.width},${
          svgSize.height - paddingBottom
        }`}
        strokeWidth={graphScale.lineWidth}
        stroke={graphScale.color}
        fill="none"
      />
    );
  };

  const handelMouseOver = (e: MouseEvent) => {
    const currPoint = {
      x: e.clientX - (chartRef.current?.getBoundingClientRect().left ?? 0),
      y: e.clientY - (chartRef.current?.getBoundingClientRect().top ?? 0),
    };
    if (
      currPoint.x < paddingLeft ||
      currPoint.y < 0 ||
      currPoint.x > svgSize.width ||
      currPoint.y > svgSize.height - paddingBottom
    ) {
      setCurrentHoveredBlock(undefined);
    } else {
      setCurrentHoveredBlock({
        x: Math.floor((currPoint.x - origin.x) / xBlockWidth),
        y: Math.floor((origin.y - currPoint.y) / yBlockWidth),
      });
    }
  };

  const drawGraph = () => {
    setGraphScaleLine(drawScale());
  };

  const setSvgGraphSize = () => {
    if (!containerRef.current) return;
    setSvgSize({
      height: containerRef.current.clientHeight,
      width: containerRef.current.clientWidth,
    });
    handelGraphLabelSize();
  };

  const handelCurvePointHover = (
    x: number,
    y: number,
    name: string,
    color: string,
    points: number,
    datasetIndex: number
  ) => {
    if (!currentHoveredBlock) return;
    const hoveredDataSet: any = dataSet[datasetIndex];
    const currentYvalue = hoveredDataSet.points[currentHoveredBlock.x];

    const style: React.CSSProperties = {
      ["--color" as any]: graphScale.color,
      ["--height" as any]: `${
        origin.y - getYPixels(currentYvalue) - graphScale.lineWidth * 6
      }px`,
      ["--lineWidth" as any]: graphScale.lineWidth + "px",
      top: y - 8,
      left: x,
    };

    const label =
      typeof labels.x !== "number"
        ? labels.x[currentHoveredBlock.x]
        : "customLabel";

    const div = (
      <div
        className="inte-barChart__toolTipBox"
        style={style}
        onMouseLeave={() => setToolTipDiv(undefined)}
      >
        <ToolTip
          isOpen={true}
          activator={
            <div
              className="inte-barChart__tooltip-circle"
              style={{
                width: graphScale.lineWidth * 15.334 + "px",
                height: graphScale.lineWidth * 15.334 + "px",
                borderRadius: "50%",
                border: "2px solid #fff",
                backgroundImage: `linear-gradient(to bottom, white 30%, ${color} 100%)`,
              }}
            />
          }
          helpText={
            <div className="inte-barChart__toolTipBody">
              <div className="inte-barChart__toolTipTitle">{label}</div>
              <div className="inte-barChart__tooltip__dataItem">
                <Badge dot customBgColor={color} />
                <span>{name}</span>
                <span>{points}</span>
              </div>
            </div>
          }
        />
      </div>
    );

    setToolTipDiv(div);
  };

  const chartLegend = useMemo(
    () => (
      <ul
        style={{ marginLeft: `${paddingLeft}px` }}
        className={`inte-Legend__list inte-Legend--barChart inte-Legend__list--${legend.position}`}
      >
        {dataSet.map((item, index) => {
          const color = item.color;
          return (
            <li
              key={index}
              className={getClassNames({
                "inte-Legend": true,
                "inte-Legend--disabled": disableCurves.includes(index),
              })}
              onClick={() =>
                setDisableCurves((prev) =>
                  prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index]
                )
              }
            >
              <Badge size="large" dot customBgColor={color} />
              <Text>{item.name}</Text>
            </li>
          );
        })}
      </ul>
    ),
    [legend, disableCurves]
  );

  const handelGraphLabelSize = () => {
    if (!labelListRef.current || !containerRef.current) return;
    const totalWidth = containerRef.current.clientWidth - paddingLeft;
    const widthTaken = Array.from(
      labelListRef.current.getElementsByClassName("inte-scaleLabel--horizontal")
    )
      .map((ele) => ele.clientWidth)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue + 24,
        0
      );
    if (totalWidth <= widthTaken)
      labelListRef.current.classList.add("inte-scaleLabel--small");
    else labelListRef.current.classList.remove("inte-scaleLabel--small");
  };

  useEffect(() => {
    if (!chartRef) return;
    drawGraph();

    window?.addEventListener("resize", setSvgGraphSize);
    window?.addEventListener("mousemove", handelMouseOver);
    return () => {
      window?.removeEventListener("mousemove", handelMouseOver);
      window?.removeEventListener("resize", setSvgGraphSize);
    };
  }, [dataSet, svgSize, paddingLeft, paddingBottom]);

  useEffect(() => {
    if (!containerRef.current) return;
    setSvgGraphSize();
  }, [width, height]);

  useEffect(() => {
    handelGraphLabelSize();
  }, [scaleLabel]);

  const handleMouseOver = (
    item: {
      name?: string;
      color: any;
      points?: number[];
      animationDuration?: number;
    },
    i: number,
    index: number
  ) => {
    setShowPoint(Number(`${i}${index}`));
    setCurrentColor(item.color);
  };

  // new
  const renderPaths = () => {
    const paths: any = [];
    for (
      let i = 0;
      i < (typeof labels.x === "number" ? labels.x : labels.x.length);
      i++
    ) {
      dataSet.map((item, index) => {
        const color = item.color;
        const currValue = item.points[i];
        const x =
          getPointsFromIndex(i, "horizontal") - graphScale.lineWidth / 2;
        const y1 = origin.y;
        const y2 = getYPixels(currValue);
        const stackP = `M${x - barWidth / 2 - 15 / 2},${y1}
        v ${y2 - y1}
        a8 8 0 0 1 8 -8
         h ${barWidth}
        a8 8 0 0 1 8 8
        v ${y1 - y2}
        z`;
        let total = dataSet.length;
        let evenPlus = 0;
        let evenMinus = 15.5 + barWidth;
        // odd
        let oddPlus = barWidth / 2 + 15 / 2 + 1;
        let oddnMinus = barWidth / 2 + barWidth + 45 / 2 + 1;
        // let oddnMinus = barWidth * 2 + 30 / 2 + 1;
        const empty: any = [];
        const newX: any = [];

        if (total > 1) {
          for (let j = 1; j <= total; j++) {
            if (total % 2 == 0) {
              if (total / 2 >= j) {
                // even
                empty.unshift(`M${x - evenMinus},${y1}
                v ${y2 - y1}
                a8 8 0 0 1 8 -8
                 h ${barWidth}
                a8 8 0 0 1 8 8
                v ${y1 - y2}
                z`);
                newX.unshift(x - evenMinus + barWidth / 2 + 15 / 2);
                evenMinus = evenMinus + barWidth + 15.5;
              } else {
                empty.push(`M${x + evenPlus},${y1}
                v ${y2 - y1}
                a8 8 0 0 1 8 -8
                 h ${barWidth}
                a8 8 0 0 1 8 8
                v ${y1 - y2}
                z`);
                newX.push(x + evenPlus + barWidth / 2 + 15 / 2);
                evenPlus = evenPlus + barWidth + 15.5;
              }
            } else {
              // odd left
              if (Math.ceil(total / 2) > j) {
                empty.unshift(`M${x - oddnMinus},${y1}
                v ${y2 - y1}
                a8 8 0 0 1 8 -8
                 h ${barWidth}
                a8 8 0 0 1 8 8
                v ${y1 - y2}
                z`);
                newX.unshift(x - oddnMinus + barWidth / 2 + 15 / 2 + 0.5);
                oddnMinus = oddnMinus + barWidth + 16;
              } else if (Math.ceil(total / 2) === j) {
                // odd center
                empty.push(stackP);
                newX.push(x);
              } else {
                // odd right
                empty.push(`M${x + oddPlus},${y1}
                v ${y2 - y1}
                a8 8 0 0 1 8 -8
                 h ${barWidth}
                a8 8 0 0 1 8 8
                v ${y1 - y2}
                z`);
                newX.push(x + oddPlus + barWidth / 2 + 15 / 2 + 0.5);
                oddPlus = oddPlus + barWidth + 16;
              }
            }
          }
        } else {
          empty.push(stackP);
          newX.push(x);
        }

        type === "group"
          ? paths.push(
              <>
                {!disableCurves.includes(index) && (
                  <path
                    key={index}
                    d={empty[index]}
                    fill={color}
                    className="inte-barChart__dataLine"
                    onMouseOver={() => handleMouseOver(item, i, index)}
                    onMouseOut={() => setShowPoint(-1)}
                    style={{
                      animationDuration: `${
                        dataSet[index].animationDuration ?? 300
                      }ms`,
                    }}
                  />
                )}

                {showPoint == Number(`${i}${index}`) && (
                  <>
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="30%" stopColor="white" />
                        <stop offset="100%" stopColor={currentColor} />
                      </linearGradient>
                    </defs>
                    <circle
                      cx={newX[index]}
                      cy={y2 - 8}
                      r="6.667"
                      stroke="#fff"
                      className="Circle"
                      strokeWidth="2"
                      fill="url(#gradient)"
                      onMouseOver={() => {
                        handelCurvePointHover(
                          newX[index],
                          y2,
                          item.name,
                          item.color,
                          dataSet[index].points[i],
                          index
                        );
                      }}
                    />
                  </>
                )}
              </>
            )
          : paths.push(
              <>
                {!disableCurves.includes(index) && (
                  <path
                    key={index}
                    d={stackP}
                    fill={color}
                    strokeWidth={barWidth}
                    className="inte-barChart__dataLine"
                    onMouseOver={() => handleMouseOver(item, i, index)}
                    onMouseOut={() => setShowPoint(-1)}
                    style={{
                      animationDuration: `${
                        dataSet[index].animationDuration ?? 300
                      }ms`,
                    }}
                  />
                )}
                {showPoint == Number(`${i}${index}`) && (
                  <>
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="30%" stopColor="white" />
                        <stop offset="100%" stopColor={item.color} />
                      </linearGradient>
                    </defs>
                    <circle
                      cx={x}
                      cy={y2 - 8}
                      r="6.667"
                      stroke="#fff"
                      strokeWidth="2"
                      fill="url(#gradient)"
                      onMouseOver={() =>
                        handelCurvePointHover(
                          x,
                          y2,
                          item.name,
                          item.color,
                          dataSet[index].points[i],
                          index
                        )
                      }
                    />
                  </>
                )}
              </>
            );
      });
    }
    return paths;
  };

  useLayoutEffect(() => {
    // Check if the ref has been assigned
    if (chartRef.current) {
      // Access the children of the parent div using the ref
      const children = chartRef.current.children;
      // Check if the fourth child exists
      if (children.length >= 4) {
        // Access the fourth child
        const fourthChild = children[3];
        const dAttributeValue = fourthChild.getAttribute("d");
        const match = dAttributeValue?.match(/M(\S+),(\S+)/);
        if (match && match[1] && match[2]) {
          const firstX = match[1];
          // console.log(Number(firstX));
          setFirstMValue(Number(firstX));
        }
      }
    }
  }, [windowWidth, chartRef.current]);

  return (
    <div
      className={getClassNames({
        "inte-barChart__wrapper": true,
        [customClass as string]: customClass,
      })}
    >
      {legend.position === "top" ? chartLegend : null}
      <div
        className="inte-barChart"
        ref={containerRef}
        style={{
          ["--lineColor" as any]: graphScale.color,
          ["--lineWidth" as any]: graphScale.lineWidth + "px",
          width: width,
          height: height,
        }}
      >
        <svg ref={chartRef} width={svgSize.width} height={svgSize.height}>
          {graphScaleLine}

          {!!backgroundGrid && (
            <>
              <path
                d={`${
                  backgroundGrid.yLines?.show === false
                    ? ""
                    : Array(xBlockCount)
                        .fill(0)
                        .map((_, ind) => {
                          const x =
                            getPointsFromIndex(ind, "horizontal") -
                            graphScale.lineWidth / 2;
                          const y1 = origin.y;
                          const y2 = 0;
                          return `M ${x},${y1} ${x},${y2}`;
                        })
                        .join(" ")
                }`}
                stroke={backgroundGrid.yLines?.color ?? "#E7E1F6"}
                strokeDasharray={
                  backgroundGrid.yLines?.type === "dashed" ? "5" : "0"
                }
                strokeWidth={graphScale.lineWidth}
              />

              <path
                d={`${
                  backgroundGrid.xLines?.show === false
                    ? ""
                    : Array(yBlockCount)
                        .fill(0)
                        .map((_, ind) => {
                          const y =
                            getPointsFromIndex(ind, "vertical") -
                            graphScale.lineWidth / 2;
                          const x1 = origin.x;
                          const x2 = svgSize.width;
                          return `M ${x1},${y} ${x2},${y}`;
                        })
                        .join(" ")
                }`}
                stroke={backgroundGrid.xLines?.color ?? "#E7E1F6"}
                strokeDasharray={
                  backgroundGrid.xLines?.type === "dashed" ? "5" : "0"
                }
                strokeWidth={graphScale.lineWidth}
              />
            </>
          )}
          {renderPaths()}
        </svg>
        <ul ref={labelListRef} className="inte-barChart__labelsList">
          {scaleLabel.map((label, index) => (
            <React.Fragment key={index}>{label}</React.Fragment>
          ))}
        </ul>
        {toolTipDiv && toolTipDiv}
      </div>
      {legend.position === "bottom" ? chartLegend : null}
    </div>
  );
};

export default BarChart;
