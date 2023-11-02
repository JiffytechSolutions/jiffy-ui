import React from "react";
import "./Skeleton.css";

const Skeleton: React.FC<SkeletonI> = ({
  line = 1,
  rounded = false,
  type = "line",
  width = "50px",
  height = "50px",
  customClass,
}: SkeletonI) => {
  function renderTypeWise() {
    switch (type) {
      case "custom":
        return (
          <div
            style={{ width: width, height: height }}
            className={`inte__Skeleton--Text ${rounded ? "inte__Skeleton--TextRounded":""}`}
          ></div>
        );
      case "line":
      default:
        return new Array(line)
          .fill(
            <div
              style={{ height: height}}
              className={`inte__Skeleton--Text`}
            ></div>
          )
          .map((line, index) => (
            <React.Fragment key={index}>{line}</React.Fragment>
          ));
    }
  }

  return <div className={`inte__skeletonWrapper ${customClass}`}>{renderTypeWise()}</div>;
};
export interface SkeletonI {
  type?: "line"  | "custom";
  width?: string;
  height?: string;
  line?: number;
  rounded?: boolean;
  customClass?:string;
}

export default Skeleton;
