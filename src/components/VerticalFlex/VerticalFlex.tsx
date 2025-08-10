import React from "react";
import { classnames } from "../../utilities/globalFunction";

import './verticalFlex.css'
import FlexItem from "../FlexItem/FlexItem";

export interface VerticalFlexI {
  children: React.ReactNode;
  gap?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 36 | 40;
  align?: "start" | "center" | "end" | "baseline" | "stretch";
}
const VerticalFlex = (props: VerticalFlexI) => {
  const { children, gap, align } = props;
  const getAlignClass: any = {
    start: "align-start",
    center: "align-center",
    end: "align-end",
    baseline: "align-baseline",
    stretch: "align-stretch",
  };
  const getAlign = align && getAlignClass[align];

  const childrens: any = React.Children.toArray(children);
  const newChildrens = childrens.map((children: any, index: string) => {
    if (children.props && children.props?.__TYPE === "FlexItem") {
      return children;
    } else {
      return <FlexItem key={index}>{children}</FlexItem>;
    }
  });

  return (
    <div
      className={classnames({
        flex: true,
        'flex-column': true,
        ["f-gap-" + gap]: gap,
        [getAlign]: align,
      })}
    >
      {newChildrens}
    </div>
  );
};

export default VerticalFlex;
