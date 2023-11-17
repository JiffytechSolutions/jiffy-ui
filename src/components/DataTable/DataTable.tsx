import React, { useEffect, useRef, useState } from "react";
import Checkbox from "../Form/Checkbox/Checkbox";
import Skeleton from "../Skeleton/Skeleton";
import { Radio } from "../Form";
import getClassNames from "../../utilities/getClassnames";
import "./DataTable.css";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";
export interface columnI {
  title: string | React.ReactNode;
  dataIndex?: string;
  key: string;
  width?: number;
  align?:
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";
  fixed?: string;
  sortable?: {
    onSort?: (clickedColumn: columnI, order: 'asec' | 'desc') => void;
    comparator?: (a: any, b: any, order: any) => number;
  };
  render?: (item: any) => React.ReactNode;
  onCell?: (rowNum: number) => any;
}

export interface DataSourceI {
  key: any,
  [key: string]: any
}

export interface DataTableI {
  columns: columnI[];
  dataSource: DataSourceI[];
  hasFixedHeader?: boolean;
  scrollX?: number;
  scrollY?: number;
  rowSelection?: rowSelectionI;
  expandable?: expandableI;
  pagination?: React.ReactNode;
  hasHeader?: boolean;
  isLoading?: boolean;
  isResizable?: boolean;
  emptyTableUi?: React.ReactNode;
  customClass?: string;
  tableLayout?: "fixed" | "auto"
  bulkEditRow?: bulkEditRowI[];
}

export interface expandableI {
  expandedRowRender: (item: any) => React.ReactNode;
  rowExpandable?: (item: any) => boolean;
}

export interface rowSelectionI {
  multi?: boolean;
  onSelectChange?: (newSelectedRow: { [key: string]: boolean | "indeterminate" }) => void;
  selectedRowKeys?: {};
}

export interface bulkEditRowI {
  editior?: React.ReactNode;
  colSpan?: number;
  key : string
}

const getCellByClassName = (arr: any, className: string) => {
  let t: any = [];
  arr.map((item: any) => {
    item.map((i: any) => {
      if (i.classList.contains(className)) t.push(i);
    });
  });
  return t;
};

const removeClassName = (arr: any, elements: any) => {
  arr.map((item: any) => {
    elements.map((i: any) => {
      item?.classList.remove(i);
    });
  });
};

const giveHeaderCheckboxState = (selChkObj: any) => {
  if (Object.values(selChkObj).every((i) => (i === false) || (i === undefined))) return false;
  else if (Object.values(selChkObj).every((i) => i === true)) return true;
  else return "indeterminate";
};

const DataTable = ({
  columns,
  dataSource,
  hasFixedHeader = false,
  scrollX,
  scrollY,
  rowSelection,
  expandable,
  pagination,
  hasHeader = true,
  isLoading,
  isResizable = false,
  emptyTableUi,
  customClass,
  tableLayout,
  bulkEditRow
}: DataTableI) => {
  const [dataTableKey, setDataTableKey] = useState(1);
  const [data, setData] = useState(dataSource);
  const [selectedCheckbox, setSelectedCheckbox] = useState<any>(
    rowSelection?.selectedRowKeys ? rowSelection.selectedRowKeys : {}
  );
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const GridWrapperRef = useRef<HTMLDivElement>(null);
  const tableCellRefs = useRef<Array<Array<HTMLTableCellElement | null>>>([[]]);
  const [currentResizeTh, setCurrentResizeTh] = useState<any>(null);
  const fixHeaderRef = useRef<HTMLTableColElement>(null);
  const tableColRef = useRef<HTMLTableColElement>(null);

  const handelGridScroll = () => {
    if (!GridWrapperRef.current) return;
    let scrollBarWidth =
      GridWrapperRef.current.scrollLeft +
      GridWrapperRef.current.offsetWidth +
      1;
    let ele = getCellByClassName(
      tableCellRefs.current,
      "inte-dataTable__cell--Fixedleft-last"
    );

    if (hasFixedHeader) {
      let parent = GridWrapperRef.current.parentElement?.children[0];
      if (parent) parent.scrollLeft = GridWrapperRef.current.scrollLeft;
    }

    if (GridWrapperRef.current.scrollLeft) {
      for (let i = 0; i < ele.length; i++) {
        if (!ele[i].classList.contains("shadowedLeft")) {
          ele[i].classList.add("shadowedLeft");
        }
      }
    } else if (GridWrapperRef.current.scrollLeft === 0) {
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.remove("shadowedLeft");
      }
    }
    ele = getCellByClassName(
      tableCellRefs.current,
      "inte-dataTable__cell--Fixedright-last"
    );
    if (scrollBarWidth >= GridWrapperRef.current.scrollWidth) {
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.remove("shadowedRight");
      }
    } else {
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add("shadowedRight");
      }
    }
  };
  const headerCheckboxChangeHandler = (state: any) => {
    let t: any = { ...selectedCheckbox };
    Object.keys(t).map((i) => (t[i] = state));
    if (rowSelection?.onSelectChange) rowSelection.onSelectChange(t);
    else setSelectedCheckbox(t);
  };
  const rowCheckboxChangeHandler = (item: any, state: any) => {
    if (rowSelection?.onSelectChange)
      rowSelection.onSelectChange({ ...selectedCheckbox, [item.key]: state });
    else setSelectedCheckbox({ ...selectedCheckbox, [item.key]: state });
  };
  const sortTheData = (
    key: string | undefined,
    coordinate: number[],
    comparatorFun: any
  ) => {
    let classList =
      tableCellRefs.current[coordinate[0]][coordinate[1]]?.classList;
    if (classList?.contains("inte-dataTable__cell--asec")) {
      removeClassName(tableCellRefs.current[0], [
        "inte-dataTable__cell--asec",
        "inte-dataTable__cell--desc",
      ]);
      classList.add("inte-dataTable__cell--desc");
      data.sort((a: any, b: any) =>
        comparatorFun(key ? a[key] : a, key ? b[key] : b, "asec")
      );
    } else {
      removeClassName(tableCellRefs.current[0], [
        "inte-dataTable__cell--asec",
        "inte-dataTable__cell--desc",
      ]);
      classList?.add("inte-dataTable__cell--asec");
      data.sort((a: any, b: any) =>
        comparatorFun(key ? a[key] : a, key ? b[key] : b, "desc")
      );
    }
    setData([...data]);
  };

  const handelSort = (item: columnI, ind: number, rowNum: number) => {
    if (!item.sortable) return
    if (item.sortable.comparator) {
      sortTheData(
        item.dataIndex,
        [
          rowNum,
          ind + (expandable ? 1 : 0) + (rowSelection ? 1 : 0),
        ],
        item.sortable?.comparator
      )
    }
    else if (item.sortable.onSort && tableCellRefs.current) {
      let classList = tableCellRefs.current[rowNum][ind + (expandable ? 1 : 0) + (rowSelection ? 1 : 0)]?.classList;
      if (classList?.contains("inte-dataTable__cell--asec")) {
        removeClassName(tableCellRefs.current[0], [
          "inte-dataTable__cell--asec",
          "inte-dataTable__cell--desc",
        ]);
        classList.add("inte-dataTable__cell--desc");
        item.sortable.onSort(item, 'desc')
      }
      else {
        removeClassName(tableCellRefs.current[0], [
          "inte-dataTable__cell--asec",
          "inte-dataTable__cell--desc",
        ]);
        classList?.add("inte-dataTable__cell--asec");
        item.sortable.onSort(item, 'asec')
      }
    }
  }

  const expandIconClickHandler = (key: string) => {
    if (expandedRows.includes(key))
      setExpandedRows((prev) => prev.filter((item) => item !== key));
    else setExpandedRows((prev) => [...prev, key]);
  };
  const makeCellRefsArray = (
    row: number,
    column: number,
    item: HTMLTableCellElement | null
  ) => {
    if (item === null || !tableCellRefs) return;
    if (!tableCellRefs.current[row]) tableCellRefs.current[row] = [];
    if (!tableCellRefs.current[row][column])
      tableCellRefs.current[row][column] = null;
    tableCellRefs.current[row][column] = item;
  };
  const givePositionToFixedCells = () => {
    for (let i = 0; i < tableCellRefs.current.length; i++) {
      let t = tableCellRefs.current[i].filter((item) =>
        item?.classList.contains("inte-dataTable__cell--Fixedleft")
      );
      let tR = tableCellRefs.current[i].filter((item) =>
        item?.classList.contains("inte-dataTable__cell--Fixedright")
      );
      for (let j = 0; j < t.length; j++) {
        createFixedCells(t, "left");
      }
      for (let j = 0; j < tR.length; j++) {
        createFixedCells(tR, "right", i === 0 ? true : false);
      }
    }
  };
  const createFixedCells = (
    cells: (HTMLTableCellElement | null)[],
    pos: "left" | "right",
    isHeader = false
  ) => {
    if (!GridWrapperRef.current) return;
    let prev = 0;
    let i = pos === "left" ? 0 : cells.length - 1;
    let comp = pos === "left" ? cells.length : -1;
    for (i; i !== comp; i = pos === "left" ? i + 1 : i - 1) {
      const ele = cells[i];
      if (!ele) continue;
      if (
        isHeader &&
        (GridWrapperRef.current?.scrollHeight ?? 0) >
        (GridWrapperRef.current?.clientHeight ?? 0)
      ) {
        ele.style[pos] =
          prev +
          GridWrapperRef.current?.offsetWidth -
          GridWrapperRef.current?.clientWidth +
          "px";
      } else ele.style[pos] = prev + "px";
      prev = ele.clientWidth + prev;
    }

    if (comp === -1)
      cells[0]?.classList.add("inte-dataTable__cell--Fixedright-last");
    else
      cells[cells.length - 1]?.classList.add(
        "inte-dataTable__cell--Fixedleft-last"
      );
  };
  const handelResize = () => {
    givePositionToFixedCells();
    handelGridScroll();
    setDataTableKey((prev) => prev + 1);
  };

  const handelMouseDownResize = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    colNum: number
  ) => {
    e.stopPropagation();
    tableCellRefs.current[0][colNum]?.classList.add(
      "inte-DataTable__resizeHandler--active"
    );
    setCurrentResizeTh({
      target: hasFixedHeader
        ? [
          fixHeaderRef.current?.children[colNum],
          tableColRef.current?.children[colNum],
          tableCellRefs.current[0][colNum],
        ]
        : [tableCellRefs.current[0][colNum]],
      start: e.pageX,
      startWidth: tableCellRefs.current[0][colNum]?.offsetWidth,
    });
  };

  const handelMouseMoveResize = (e: MouseEvent) => {
    e.stopImmediatePropagation();
    const newMinWidth =
      currentResizeTh.startWidth + (e.pageX - currentResizeTh.start);
    currentResizeTh.target.map((i: any) => {
      i.style.minWidth = newMinWidth + "px";
    });
    chageColGroup();
    handelResize();
  };

  const handelMouseUpResize = (e: MouseEvent) => {
    e.stopImmediatePropagation();
    if (hasFixedHeader)
      currentResizeTh.target[2]?.classList.remove(
        "inte-DataTable__resizeHandler--active"
      );
    else
      currentResizeTh.target[0].classList.remove(
        "inte-DataTable__resizeHandler--active"
      );
    setCurrentResizeTh(null);
  };

  const rowRadioChangeHandler = (item: any) => {
    if (rowSelection?.onSelectChange) rowSelection?.onSelectChange({ [item.key]: true });
  };

  useEffect(() => {
    if (currentResizeTh) {
      document.addEventListener("mousemove", handelMouseMoveResize, true);
      document.addEventListener("mouseup", handelMouseUpResize, true);
    }
    return () => {
      document.removeEventListener("mousemove", handelMouseMoveResize, true);
      document.removeEventListener("mouseup", handelMouseUpResize, true);
    };
  }, [currentResizeTh]);

  useEffect(() => {
    setData(dataSource);
  }, [dataSource]);

  useEffect(() => {
    handelResize();
  }, [data, columns, expandedRows]);

  useEffect(() => {
    if (!rowSelection?.selectedRowKeys) {
      let t: any = {};
      dataSource.map((i: any) => (t[i.key] = false));
      setSelectedCheckbox(t);
    } else setSelectedCheckbox(rowSelection.selectedRowKeys);
  }, [rowSelection?.selectedRowKeys, dataSource]);

  useEffect(() => {
    window.addEventListener("resize", handelResize);
    return () => {
      window?.removeEventListener("resize", handelResize);
    };
  }, []);

  const makeDataTableHeaderRows = (columns: columnI[]) => {
    let columnNum = 0,
      rowNum = 0;
    return (
      <>
        <tr
          className={getClassNames({
            "inte-dataTable__headerRow": true,
            "inte-dataTable__headerRow--scrollY": scrollY
          })}
        >
          {expandable && (
            <th
              ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
              className={getClassNames({
                "inte-dataTable__cell": true,
                "inte-dataTable__cell--expand": true,
                "inte-dataTable__cell--spaced": true,
                "inte-dataTable__cell--Fixedleft": columns[0].fixed
              })}
            ></th>
          )}
          {rowSelection && (
            <th
              ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
              className={getClassNames({
                "inte-dataTable__checkbox": true,
                "inte-dataTable__cell": true,
                "inte-dataTable__cell--Fixedleft": columns[0].fixed
              })}
            >
              {rowSelection.multi !== false && (
                <Checkbox
                  onChange={headerCheckboxChangeHandler}
                  checked={giveHeaderCheckboxState(selectedCheckbox)}
                />
              )}
            </th>
          )}
          {columns.map((item, ind) => {
            return (
              <th
                ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                key={ind}
                style={{
                  width: item.width ? item.width / 10 + "rem" : "auto",
                  textAlign: item.align ? item.align : "left",
                }}
                className={getClassNames({
                  "inte-dataTable__cell": true,
                  [`inte-dataTable__cell--Fixed` + item.fixed?.toLowerCase()]: item.fixed,
                  "inte-dataTable__cell--sortable": item.sortable,
                  "inte-dataTable__cell--lastCell": ind === columns.length - 1
                })}
                onClick={() => handelSort(item, ind, rowNum)}
              >
                {item.sortable ? (
                  <div className="sortedIcon__th">
                    <span className="sortedIcon-title">{item.title}</span>
                    <div className="sortable--icon">
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0007 6.66675L6.00048 1.66651L1.00024 6.66675"
                          strokeWidth="1.66674"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.00024 1.33375L6.00048 6.33398L11.0007 1.33375"
                          strokeWidth="1.66674"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  item.title
                )}
                {isResizable && (
                  <div
                    onMouseDown={(e) =>
                      handelMouseDownResize(
                        e,
                        ind + (expandable ? 1 : 0) + (rowSelection ? 1 : 0)
                      )
                    }
                    className="inte-DataTable__resizeHandler"
                  ></div>
                )}
              </th>
            );
          })}
          {(scrollY ?? 0) > 0 &&
            (GridWrapperRef.current?.scrollHeight ?? 0) >
            (GridWrapperRef.current?.clientHeight ?? 0) && hasFixedHeader ? (
            <th
              className="inte-dataTable__spacedCellScrollBar"
              ref={(cell) =>
                makeCellRefsArray(
                  0,
                  columns.length +
                  (expandable ? 1 : 0) +
                  (rowSelection ? 1 : 0) +
                  1,
                  cell
                )
              }
            ></th>
          ) : null}
        </tr>

        {
          !!bulkEditRow && (
            <tr className="inte-dataTable__bulkEditRow">
              {expandable && (
                <th
                  ref={(cell) => makeCellRefsArray(rowNum+1, columnNum++, cell)}
                  className={getClassNames({
                    "inte-dataTable__cell": true,
                    "inte-dataTable__cell--expand": true,
                    "inte-dataTable__cell--spaced": true,
                    "inte-dataTable__cell--Fixedleft": columns[0].fixed
                  })}
                ></th>
              )}
              {rowSelection && (
                <th
                  ref={(cell) => makeCellRefsArray(rowNum+1, columnNum++, cell)}
                  className={getClassNames({
                    "inte-dataTable__checkbox": true,
                    "inte-dataTable__cell": true,
                    "inte-dataTable__cell--Fixedleft": columns[0].fixed
                  })}
                >
                  {/* {rowSelection.multi !== false && (
                    <Checkbox
                      onChange={headerCheckboxChangeHandler}
                      checked={giveHeaderCheckboxState(selectedCheckbox)}
                    />
                  )} */}
                </th>
              )}
              {
                bulkEditRow.map(item => (
                  <th
                    ref={(cell) => makeCellRefsArray(rowNum+1, columnNum++, cell)}
                    key={item.key}
                    className="inte-dataTable__cell inte-dataTable__cell--bulkEditCell"
                    colSpan={item.colSpan ?? 1}
                  >
                    {
                      item.editior
                    }
                  </th>
                ))
              }
            </tr>
          )
        }
      </>
    );
  };

  const makeDataTableBodyRows = (item: any, index: number) => {
    let rowNum = index + (hasHeader ? 1 + (!!bulkEditRow ? 1 : 0) : 0),
      columnNum = 0;
    const isRowSelected = selectedCheckbox[item.key];
    const isRowExpandable = expandable?.rowExpandable
      ? expandable.rowExpandable(item)
      : true;
    const row = (
      <React.Fragment key={index}>
        <tr
          className={getClassNames({
            "inte-dataTable__row": true,
            "inte-dataTable__row--selected": isRowSelected,
            "inte-dataTable__row--expandable": expandable && isRowExpandable,
            "inte-dataTable__row--expandActive": expandedRows.includes(item.key),
            "inte-dataTable__row--lastChild": index === dataSource.length - 1
          })}
        >
          {expandable ? (
            <td
              ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
              className={getClassNames({
                "inte-dataTable__cell": true,
                "inte-dataTable__cell--expand": true,
                "inte-dataTable__cell--spaced": !isRowExpandable,
                "inte-dataTable__cell--Fixedleft": columns[0].fixed
              })}
              onClick={
                isRowExpandable
                  ? () => {
                    expandIconClickHandler(item.key);
                  }
                  : void 0
              }
            >
              {isRowExpandable ? (
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00031 7.50073L10.0005 12.501L15.0008 7.50073"
                    stroke="#1C2433"
                    strokeWidth="1.66674"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                ""
              )}
            </td>
          ) : (
            ""
          )}
          {rowSelection && (
            <td
              ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
              className={getClassNames({
                "inte-dataTable__cell": true,
                "inte-dataTable__checkbox": true,
                "inte-dataTable__cell--Fixedleft": columns[0].fixed
              })}
            >
              {rowSelection.multi !== false ? (
                <Checkbox
                  checked={isRowSelected}
                  onChange={(state: any) =>
                    rowCheckboxChangeHandler(item, state)
                  }
                />
              ) : (
                <Radio
                  checked={isRowSelected ? isRowSelected : false}
                  value={item}
                  name={"DataTable--radio"}
                  onChange={rowRadioChangeHandler}
                />
              )}
            </td>
          )}
          {columns.map((i: any, ind: number) => {
            let span = i.onCell ? i.onCell(rowNum) : "";
            if (span === -1) return null;
            let ele = i.dataIndex ? item[i.dataIndex] : item;
            ele = i.render ? i.render(ele) : ele;
            return (
              <td
                {...span}
                key={ind}
                style={{

                  textAlign: i.align ? i.align : "left",
                }}
                ref={(cell) => makeCellRefsArray(rowNum, columnNum++, cell)}
                className={getClassNames({
                  'inte-dataTable__cell': true,
                  [`inte-dataTable__cell--Fixed` + i.fixed?.toLowerCase()]: i.fixed
                })}
              >
                {ele}
              </td>
            );
          })}
        </tr>
        <tr aria-expanded={expandedRows.includes(item.key)} className={"inte-dataTable__row--appendWithExpand"}>
          <td
            className="inte-dataTable__expanded-td"
            colSpan={
              columns.length + (expandable ? 1 : 0) + (rowSelection ? 1 : 0)
            }
          >
            <AnimationWrapper show={expandedRows.includes(item.key)} inAnimation="inte-dataTable-inAnimate" outAnimation="inte-dataTable-outAnimate">
              <div
                className="inte-dataTable__row--Fixed"
                style={{
                  position: "sticky",
                  left: "0",
                  width: (GridWrapperRef.current && scrollY)
                    ? ((GridWrapperRef.current.offsetWidth / 10) - 0.5) + "rem"
                    : "100%",
                }}
              >
                {expandable?.expandedRowRender
                  ? expandable.expandedRowRender(item)
                  : ""}
              </div>
            </AnimationWrapper>
          </td>
        </tr>
      </React.Fragment>
    );
    return row;
  };

  const makeTableSkeleton = () =>
    Array(5)
      .fill(0)
      .map((i, ind) => (
        <tr className="inte-dataTable__skeleton" key={ind}>
          {Array(columns.length + (rowSelection ? 1 : 0) + (expandable ? 1 : 0))
            .fill(0)
            .map((item: any, i: any) => {
              return (
                <td key={i} className="inte-dataTable__cell">
                  <Skeleton height="2rem" />
                </td>
              );
            })}
        </tr>
      ));

  const makeDataTableEmptyRow = () => {
    return (
      <tr>
        <td
          colSpan={
            columns.length + (expandable ? 1 : 0) + (rowSelection ? 1 : 0)
          }
        >
          {emptyTableUi ? emptyTableUi : <h1 style={{ textAlign: 'center' }}>No Data Found!</h1>}
        </td>
      </tr>
    );
  };

  const chageColGroup = () => {
    let colList1 = Array.from(
      fixHeaderRef.current?.children as HTMLCollectionOf<HTMLElement> ?? []
    );
    let colList2 = Array.from(
      tableColRef.current?.children as HTMLCollectionOf<HTMLElement> ?? []
    );
    colList2.map((i, ind) => {
      if (!tableCellRefs.current[1]) return;
      const thWidth: number = tableCellRefs.current[0][ind]?.getBoundingClientRect().width ?? 0;
      const tdWidth: number = tableCellRefs.current[1][ind]?.getBoundingClientRect().width ?? 0;
      if (
        tableCellRefs.current[1][ind]?.classList.contains('inte-dataTable__cell--expand') ||
        tableCellRefs.current[1][ind]?.classList.contains('inte-dataTable__checkbox')) i.style.width = 5.2 + "rem";
      else {
        let givenWidth = columns[ind - (expandable ? 1 : 0) - (rowSelection ? 1 : 0)]?.width
        i.style.width = givenWidth ? givenWidth / 10 + "rem" : ""
      }
      if (hasHeader) {
        if (
          tableCellRefs.current[1][ind]?.classList.contains('inte-dataTable__cell--expand') ||
          tableCellRefs.current[1][ind]?.classList.contains('inte-dataTable__checkbox')
        ) colList1[ind].style.width = 5.2 + "rem";
        else {
          let givenWidth = columns[ind - (expandable ? 1 : 0) - (rowSelection ? 1 : 0)]?.width
          colList1[ind].style.width = givenWidth ? givenWidth / 10 + "rem" : ""
        }
      }
    });
  };

  useEffect(() => {
    if (hasFixedHeader) {
      chageColGroup();
    }
    handelResize();
  }, [
    hasFixedHeader,
    fixHeaderRef.current,
    tableColRef.current,
    tableCellRefs.current,
    data
  ]);

  const scrollBarWidth = (GridWrapperRef.current?.offsetWidth ?? 0) - (GridWrapperRef.current?.clientWidth ?? 0) + "px"

  return (
    <div
      className={getClassNames({
        "inte-dataTable__container": true,
        "inte-dataTable__container--hasFixedHeader": hasFixedHeader,
        [customClass as string]: customClass
      })}
      key={data.length}
      style={{ width: scrollX ? scrollX / 10 + "rem" : "auto" }}
    >
      {hasFixedHeader && hasHeader && (
        <div className="inte-dataTable__fixHeader--handler">
          <table className="inte-dataTable" style={{ tableLayout: tableLayout ? tableLayout : "fixed" }}>
            <colgroup ref={fixHeaderRef}>
              {Array(
                columns.length + (expandable ? 1 : 0) + (rowSelection ? 1 : 0)
              )
                .fill(0)
                .map((i, ind) => {
                  const currIndex = ind - (expandable ? 1 : 0) - (rowSelection ? 1 : 0)
                  let columnWidth = ""
                  if (currIndex > -1 && columns[currIndex].width) {
                    columnWidth = `${columns && columns[currIndex]?.width ? `${(columns[currIndex].width ?? 0) / 10}rem` : ''}`
                  }
                  return <col style={{ width: columnWidth }} key={ind}></col>
                })}
              {(scrollY ?? 0) > 0 &&
                (GridWrapperRef.current?.scrollHeight ?? 0) >
                (GridWrapperRef.current?.clientHeight ?? 0) && (
                  <col
                    style={{
                      width: scrollBarWidth
                    }}
                  ></col>
                )}
            </colgroup>
            <thead>{makeDataTableHeaderRows(columns)}</thead>
          </table>
        </div>
      )}
      <div
        className="inte-dataTable--wrapper"
        style={{
          maxHeight: scrollY ? scrollY / 10 + "rem" : "auto",
          overflow: scrollY ? "auto" : "auto hidden",
        }}
        ref={GridWrapperRef}
        onScroll={handelGridScroll}
      >
        <table className={`inte-dataTable`}
          style={{
            maxWidth: (hasFixedHeader && hasHeader && scrollY) ? `calc(100% - ${scrollBarWidth})` : "",
            tableLayout: tableLayout ? tableLayout : hasFixedHeader ? "fixed" : "auto"
          }}
        >
          <colgroup ref={tableColRef}>
            {Array(
              columns.length + (expandable ? 1 : 0) + (rowSelection ? 1 : 0)
            )
              .fill(0)
              .map((i, ind) => {
                const currIndex = ind - (expandable ? 1 : 0) - (rowSelection ? 1 : 0)
                let columnWidth = ((ind === 0 && (expandable || rowSelection)) || (ind === 1 && expandable && rowSelection)) ? "5.2rem" : ""
                if (currIndex > -1 && columns[currIndex].width) {
                  columnWidth = `${columns && columns[currIndex]?.width ? `${(columns[currIndex].width ?? 0) / 10}rem` : ''}`
                }
                return <col style={{ width: columnWidth }} key={ind}></col>
              })}
          </colgroup>
          {(!hasFixedHeader && hasHeader) && (
            <thead className="inte-dataTable__header">
              {makeDataTableHeaderRows(columns)}
            </thead>
          )}
          <tbody className="inte-dataTable__body" aria-busy={isLoading}>
            {isLoading
              ? makeTableSkeleton()
              : data.length
                ? data.map((item: any, index: number) => {
                  return makeDataTableBodyRows(item, index);
                })
                : makeDataTableEmptyRow()}
          </tbody>
        </table>
      </div>
      {(pagination && dataSource.length) ? (
        <div className="inte-dataTable__pagination">{pagination}</div>
      ) : null}
    </div>
  );
};
export default DataTable;