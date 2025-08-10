import React from "react";
import getClassNames from "../../utilities/getClassnames";
import useWindowResize from "../../utilities/useWindowResize";

type ChildrenI = React.ReactNode;
export interface GridI {
  children: React.ReactElement<ChildrenI>[] | React.ReactElement<ChildrenI>;
  columns:
  | number
  | {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?:
  | string
  | {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: number;
  };
  customClass?: string;
}

const Grid = (props: GridI) => {
  const { columns = 2, gap, children, customClass } = props;
  const width = useWindowResize();

  function getGap() {
    if (!gap || typeof gap === "string") return gap;
    if (width > 991 && gap.xl) {
      return gap.xl;
    } else if (width > 768 && gap.lg) {
      return gap.lg;
    } else if (width > 576 && gap.md) {
      return gap.md;
    } else if (width < 576 && gap.sm) {
      return gap.sm;
    }
  }

  function getColumns() {
    if (!columns || typeof columns === "number") return columns;
    if (width > 991 && columns.xl) {
      return columns.xl;
    } else if (width > 768 && columns.lg) {
      return columns.lg;
    } else if (width > 576 && columns.md) {
      return columns.md;
    } else if (width < 576 && columns.sm) {
      return columns.sm;
    }
  }

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${getColumns()}, 1fr)`,
    gap: getGap(),
  };

  return (
    <div
      className={getClassNames({
        "inte-grid": true,
        [customClass as string]: customClass,
      })}
      style={gridStyle}
    >
      {children}
    </div>
  );
};

export interface ItemI {
  children: React.ReactNode;
}
const Item = (props: ItemI) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

Grid.Item = Item;

export default Grid;
