import React from "react";

import { classnames } from "../../utilities/globalFunction";
type itemWidth =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";
  
type itemOrder = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";

const FlexItem = ({
  itemWidth,
  children,
  order,
  ...props
}: FlexItemI) => {
  const getBlockAlignClass: any = {
    1: "flex-item-1",
    2: "flex-item-2",
    3: "flex-item-3",
    4: "flex-item-4",
    5: "flex-item-5",
    6: "flex-item-6",
    7: "flex-item-7",
    8: "flex-item-8",
    9: "flex-item-9",
    10: "flex-item-10",
    11: "flex-item-11",
    12: "flex-item-12",
  };

  const getItemOrderClass: any = {
    1: "item-order-1",
    2: "item-order-2",
    3: "item-order-3",
    4: "item-order-4",
    5: "item-order-5",
    6: "item-order-6",
    7: "item-order-7",
    8: "item-order-8",
    9: "item-order-9",
    10: "item-order-10",
  };

  const makeItemOrderClass = () => {
    if (!order) return;
    let res = "";
    if (order.lg) {
      res += `${getItemOrderClass[order.lg]}-lg `;
    }
    if (order.md) {
      res += `${getItemOrderClass[order.md]}-md `;
    }
    if (order.sm) {
      res += `${getItemOrderClass[order.sm]}-sm `;
    }
    if (order.xl) {
      res += `${getItemOrderClass[order.xl]}-xl `;
    }
    if (order.xxl) {
      res += `${getItemOrderClass[order.xxl]}-xxl `;
    }
    return res;
  };

  const makeitemWidthClass = () => {
    if (!itemWidth) return;
    let res = "";
    if (itemWidth.lg) {
      res += `${getBlockAlignClass[itemWidth.lg]}-lg `;
    }
    if (itemWidth.md) {
      res += `${getBlockAlignClass[itemWidth.md]}-md `;
    }
    if (itemWidth.sm) {
      res += `${getBlockAlignClass[itemWidth.sm]}-sm `;
    }
    if (itemWidth.xl) {
      res += `${getBlockAlignClass[itemWidth.xl]}-xl `;
    }
    if (itemWidth.xxl) {
      res += `${getBlockAlignClass[itemWidth.xxl]}-xxl `;
    }
    return res;
  };
  return (
    <div
      className={classnames({
        "flex-item": true,
        [makeitemWidthClass() as string]: itemWidth,
        [makeItemOrderClass() as string]: order,
      })}
    >
      {children}
    </div>
  );
};
FlexItem.defaultProps = {
  __TYPE: "FlexItem",
};
export interface FlexItemI {
  itemWidth?: {
    sm?: itemWidth;
    md?: itemWidth;
    lg?: itemWidth;
    xl?: itemWidth;
    xxl?: itemWidth;
  };
  children: string | JSX.Element;
  order?: {
    sm?: itemOrder;
    md?: itemOrder;
    lg?: itemOrder;
    xl?: itemOrder;
    xxl?: itemOrder;
  };
  __TYPE?: any;
}

export default FlexItem
