import React, { useEffect, useState } from "react";
import { classnames } from "../../utilities/globalFunction";

import "./Table.css";
import Checkbox from "../Input/Checkbox/Checkbox";

export interface TableI {
  headings: { title: string }[];
  children: any;
  selectable?: boolean;
  onRowSelection?: (id: any) => void;
  sortable?: boolean[];
  sortDirection?: "ascending" | "descending";
  sortColumnIndex?: number;
  onSort?: (
    headingIndex: number,
    direction: "ascending" | "descending"
  ) => void;
}

const Table = (props: TableI) => {
  const {
    headings,
    children,
    selectable,
    onRowSelection,
    sortable,
    sortDirection = "descending",
    sortColumnIndex,
    onSort,
  } = props;
  const [selectAll, setSelectAll] = useState<any>(false);

  useEffect(() => {
    if (selectable && children && children.length > 0) {
      const isAllSelected = children.every(
        (child: any) => child.props.selected
      );
      isAllSelected ? setSelectAll(true) : handleIndeterminate();
    }
  }, [children]);

  const handleSelectAll = () => {
    if (onRowSelection) {
      if (selectAll) {
        onRowSelection([]);
      } else {
        const allIds = React.Children.map(
          children,
          (child: any) => child.props.id
        );
        onRowSelection(allIds);
      }
      setSelectAll(!selectAll);
    }
  };

  const handleIndeterminate = () => {
    const isIndermonate = children.some((child: any) => child.props.selected);
    if (isIndermonate) {
      setSelectAll("indeterminate");
    } else {
      setSelectAll(false);
    }
  };

  return (
    <div className="pixel-table__wrapper">
      <table className="pixel-table" role="table">
        <thead>
          <tr>
            {selectable && (
              <td className="pixel-table__heading pixel-table__headingCheckboxCell">
                <Checkbox
                  onChange={handleSelectAll}
                  checked={selectAll}
                />
              </td>
            )}
            {headings.map((ele: any, ind: any) => {
              return (
                <th
                  key={ele.title}
                  className={classnames({
                    "pixel-table__heading": true,
                    "c-pointer": sortable?.[ind],
                  })}
                  onClick={() =>
                    onSort?.(
                      ind,
                      sortDirection === "ascending" ? "descending" : "ascending"
                    )
                  }
                >
                  <div className="flex-row gap-8 justify-between align-center">
                    <span>{ele.title}</span>
                    {sortable?.[ind] && (
                      <span className="flex-row pixel-sortable__icon">
                        <svg width="20" height="20" fill="none">
                          <path
                            fill={
                              sortColumnIndex === ind &&
                              sortDirection === "descending"
                                ? "hsla(227, 100%, 59%, 1)"
                                : "hsla(211, 22%, 56%, 1)"
                            }
                            d="M10.59 2.251a.817.817 0 0 0-1.18 0L5.245 6.537a.875.875 0 0 0 0 1.212.817.817 0 0 0 1.179 0L10 4.069l3.577 3.68a.817.817 0 0 0 1.179 0 .874.874 0 0 0 0-1.212L10.589 2.25Z"
                          ></path>
                          <path
                            fill={
                              sortColumnIndex === ind &&
                              sortDirection === "ascending"
                                ? "hsla(227, 100%, 59%, 1)"
                                : "hsla(211, 22%, 56%, 1)"
                            }
                            d="M9.41 17.749a.817.817 0 0 0 1.18 0l4.166-4.286a.874.874 0 0 0 0-1.212.817.817 0 0 0-1.179 0L10 15.931l-3.577-3.68a.817.817 0 0 0-1.179 0 .874.874 0 0 0 0 1.212l4.167 4.286Z"
                          ></path>
                        </svg>
                      </span>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              selectable,
              onRowSelection,
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

const Row = (props: any) => {
  const { children, selectable, id, onRowSelection, selected } = props;
  return (
    <tr
      className={classnames({
        "pixel-table__row": true,
        "pixel-table__row--selected": selected,
      })}
      id={id}
    >
      {selectable && (
        <td className="pixel-table__cell pixel-table__checkboxCell">
          <Checkbox
            onChange={() => {
              onRowSelection(id);
            }}
            checked={selected}
          />
        </td>
      )}
      {children}
    </tr>
  );
};

const Cell = (props: any) => {
  const { children } = props;
  return <td className="pixel-table__cell">{children}</td>;
};

Table.Row = Row;
Table.Cell = Cell;

export default Table ;
