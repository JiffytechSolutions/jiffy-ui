import React, { useEffect, useState } from "react";
import { classnames } from "../../utilities/globalFunction";

import "./Table.css";
import Checkbox from "../Input/Checkbox/Checkbox";

export interface TableHeading {
  title: string;
  key?: string;
  sortable?: boolean;
  width?: string | number;
  align?: "left" | "center" | "right";
  hideOnMobile?: boolean;
  priority?: number; // Lower numbers have higher priority on mobile
}

export interface TableI {
  headings: TableHeading[];
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
  
  // Enhanced Design Props
  variant?: "default" | "minimal" | "bordered" | "striped";
  density?: "comfortable" | "compact" | "spacious";
  stickyHeader?: boolean;
  maxHeight?: string | number;
  
  // Responsive Props
  responsive?: boolean;
  stackOnMobile?: boolean;
  mobileBreakpoint?: string;
  hideColumnsOnMobile?: number[]; // Column indices to hide on mobile
  showRowBorders?: boolean;
  
  // State Props
  loading?: boolean;
  loadingMessage?: string;
  emptyState?: React.ReactNode;
  emptyMessage?: string;
  
  // Enhanced Styling
  className?: string;
  tableClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
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
    
    // Enhanced Design Props
    variant = "default",
    density = "comfortable",
    stickyHeader = false,
    maxHeight,
    
    // Responsive Props
    responsive = true,
    stackOnMobile = false,
    mobileBreakpoint = "768px",
    hideColumnsOnMobile = [],
    showRowBorders = true,
    
    // State Props
    loading = false,
    loadingMessage = "Loading...",
    emptyState,
    emptyMessage = "No data available",
    
    // Enhanced Styling
    className,
    tableClassName,
    headerClassName,
    rowClassName,
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

  // Generate wrapper classes
  const wrapperClasses = classnames({
    "jf-table__wrapper": true,
    [`jf-table__wrapper--${variant}`]: variant !== "default",
    [`jf-table__wrapper--${density}`]: density !== "comfortable",
    "jf-table__wrapper--responsive": responsive,
    "jf-table__wrapper--stack-mobile": stackOnMobile,
    "jf-table__wrapper--sticky-header": stickyHeader,
    [className || ""]: className,
  });

  // Generate table classes
  const tableClasses = classnames({
    "jf-table": true,
    [`jf-table--${variant}`]: variant !== "default",
    [`jf-table--${density}`]: density !== "comfortable",
    "jf-table--row-borders": showRowBorders,
    [tableClassName || ""]: tableClassName,
  });

  // Generate CSS custom properties for responsive behavior
  const wrapperStyle = {
    "--mobile-breakpoint": mobileBreakpoint,
    "--max-height": typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
    ...({} as React.CSSProperties),
  };

  // Render loading state
  if (loading) {
    return (
      <div className={wrapperClasses} style={wrapperStyle}>
        <div className="jf-table__loading">
          <div className="jf-table__loading-spinner"></div>
          <p className="jf-table__loading-message">{loadingMessage}</p>
        </div>
      </div>
    );
  }

  // Render empty state
  if (!children || (Array.isArray(children) && children.length === 0)) {
    return (
      <div className={wrapperClasses} style={wrapperStyle}>
        <div className="jf-table__empty">
          {emptyState || (
            <>
              <div className="jf-table__empty-icon">📋</div>
              <p className="jf-table__empty-message">{emptyMessage}</p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClasses} style={wrapperStyle}>
      <table className={tableClasses} role="table">
        <thead className={headerClassName}>
          <tr>
            {selectable && (
              <th className="jf-table__heading jf-table__headingCheckboxCell">
                <Checkbox
                  onChange={handleSelectAll}
                  checked={selectAll}
                />
              </th>
            )}
            {headings.map((heading: TableHeading, ind: number) => {
              const isSortable = heading.sortable ?? sortable?.[ind];
              const isHiddenOnMobile = heading.hideOnMobile || hideColumnsOnMobile.includes(ind);
              
              return (
                <th
                  key={heading.key || heading.title}
                  className={classnames({
                    "jf-table__heading": true,
                    "jf-table__heading--sortable": isSortable,
                    "jf-table__heading--hidden-mobile": isHiddenOnMobile,
                    [`jf-table__heading--align-${heading.align}`]: heading.align,
                    "c-pointer": isSortable,
                  })}
                  style={{
                    width: heading.width,
                    "--priority": heading.priority,
                  } as React.CSSProperties}
                  onClick={() =>
                    isSortable && onSort?.(
                      ind,
                      sortDirection === "ascending" ? "descending" : "ascending"
                    )
                  }
                >
                  <div className="jf-table__heading-content">
                    <span className="jf-table__heading-title">{heading.title}</span>
                    {isSortable && (
                      <span className="jf-table__sort-icon">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                          <path
                            fill={
                              sortColumnIndex === ind &&
                              sortDirection === "descending"
                                ? "var(--jf-color-primary)"
                                : "var(--jf-color-text-secondary)"
                            }
                            d="M10.59 2.251a.817.817 0 0 0-1.18 0L5.245 6.537a.875.875 0 0 0 0 1.212.817.817 0 0 0 1.179 0L10 4.069l3.577 3.68a.817.817 0 0 0 1.179 0 .874.874 0 0 0 0-1.212L10.589 2.25Z"
                          />
                          <path
                            fill={
                              sortColumnIndex === ind &&
                              sortDirection === "ascending"
                                ? "var(--jf-color-primary)"
                                : "var(--jf-color-text-secondary)"
                            }
                            d="M9.41 17.749a.817.817 0 0 0 1.18 0l4.166-4.286a.874.874 0 0 0 0-1.212.817.817 0 0 0-1.179 0L10 15.931l-3.577-3.68a.817.817 0 0 0-1.179 0 .874.874 0 0 0 0 1.212l4.167 4.286Z"
                          />
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
              hideColumnsOnMobile,
              stackOnMobile,
              rowClassName,
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

const Row = (props: any) => {
  const { 
    children, 
    selectable, 
    id, 
    onRowSelection, 
    selected, 
    hideColumnsOnMobile = [],
    stackOnMobile = false,
    rowClassName,
    ...otherProps 
  } = props;
  
  const rowClasses = classnames({
    "jf-table__row": true,
    "jf-table__row--selected": selected,
    "jf-table__row--stack-mobile": stackOnMobile,
    [rowClassName || ""]: rowClassName,
  });

  return (
    <tr className={rowClasses} id={id} {...otherProps}>
      {selectable && (
        <td className="jf-table__cell jf-table__checkboxCell">
          <Checkbox
            onChange={() => {
              onRowSelection(id);
            }}
            checked={selected}
          />
        </td>
      )}
      {React.Children.map(children, (child, index) => 
        React.cloneElement(child, {
          isHiddenOnMobile: hideColumnsOnMobile.includes(index),
          columnIndex: index,
        })
      )}
    </tr>
  );
};

const Cell = (props: any) => {
  const { 
    children, 
    align = "left", 
    width,
    className,
    isHiddenOnMobile = false,
    columnIndex,
    ...otherProps 
  } = props;
  
  const cellClasses = classnames({
    "jf-table__cell": true,
    [`jf-table__cell--align-${align}`]: align !== "left",
    "jf-table__cell--hidden-mobile": isHiddenOnMobile,
    [className || ""]: className,
  });

  const cellStyle = {
    width,
    "--column-index": columnIndex,
  } as React.CSSProperties;

  return (
    <td className={cellClasses} style={cellStyle} {...otherProps}>
      {children}
    </td>
  );
};

Table.Row = Row;
Table.Cell = Cell;

export default Table ;
