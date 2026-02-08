import React from "react";
import { classnames } from "../../utilities/globalFunction";
import "./FlexLayout.css";

// Column width types
type ColumnWidth = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto";

// Order types
type OrderValue = "first" | "0" | "1" | "2" | "3" | "4" | "5" | "last";

// Breakpoint types
type Breakpoint = "sm" | "md" | "lg" | "xl" | "xxl";

// Responsive column configuration
type ResponsiveColumns = {
  sm?: ColumnWidth;
  md?: ColumnWidth;
  lg?: ColumnWidth;
  xl?: ColumnWidth;
  xxl?: ColumnWidth;
};

// Responsive order configuration
type ResponsiveOrder = {
  sm?: OrderValue;
  md?: OrderValue;
  lg?: OrderValue;
  xl?: OrderValue;
  xxl?: OrderValue;
};

// Alignment types
type Alignment = "start" | "center" | "end" | "around" | "between" | "evenly";
type VerticalAlignment = "start" | "center" | "end" | "baseline" | "stretch";

// Responsive alignment
type ResponsiveAlignment = {
  sm?: Alignment;
  md?: Alignment;
  lg?: Alignment;
  xl?: Alignment;
  xxl?: Alignment;
};

type ResponsiveVerticalAlignment = {
  sm?: VerticalAlignment;
  md?: VerticalAlignment;
  lg?: VerticalAlignment;
  xl?: VerticalAlignment;
  xxl?: VerticalAlignment;
};

// Gap sizes (based on Bootstrap)
type GapSize = 0 | 1 | 2 | 3 | 4 | 5;

// FlexLayout Container Props
export interface FlexLayoutProps {
  /** Content to be displayed inside the flex container */
  children: React.ReactNode;

  /** Spacing between flex items (0-5) */
  gap?: GapSize;

  /** Whether items should wrap to the next line */
  wrap?: boolean;

  /** Horizontal alignment for different breakpoints */
  justify?: ResponsiveAlignment;

  /** Vertical alignment for different breakpoints */
  align?: ResponsiveVerticalAlignment;

  /** Shorthand horizontal alignment */
  justifyContent?: Alignment;

  /** Shorthand vertical alignment */
  alignItems?: VerticalAlignment;

  /** Additional CSS classes */
  className?: string;

  /** Additional inline styles */
  style?: React.CSSProperties;

  /** Remove gutters (padding) from flex items */
  noGutters?: boolean;

  /** Direction of flex items */
  direction?: "row" | "row-reverse" | "column" | "column-reverse";

  /** Whether the container should be full width */
  fullWidth?: boolean;

  /** Whether the container should be centered */
  centered?: boolean;

  /** Maximum width of the container */
  maxWidth?: string | number;

  /** Additional HTML attributes */
  [key: string]: any;
}

// FlexLayout Item Props
export interface FlexLayoutItemProps {
  /** Content to be displayed inside the flex item */
  children: React.ReactNode;

  /** Responsive column widths */
  cols?: ResponsiveColumns;

  /** Responsive order values */
  order?: ResponsiveOrder;

  /** Additional CSS classes */
  className?: string;

  /** Additional inline styles */
  style?: React.CSSProperties;

  /** Additional HTML attributes */
  [key: string]: any;
}

// Main FlexLayout Container Component
const FlexLayout: React.FC<FlexLayoutProps> = ({
  children,
  gap = 0,
  wrap = true,
  justify,
  align,
  justifyContent,
  alignItems,
  className = "",
  style,
  noGutters = false,
  direction = "row",
  fullWidth = false,
  centered = false,
  maxWidth,
  ...props
}) => {
  // Alignment class mappings
  const justifyClasses: Record<Alignment, string> = {
    start: "jf-justify-content-start",
    center: "jf-justify-content-center",
    end: "jf-justify-content-end",
    around: "jf-justify-content-around",
    between: "jf-justify-content-between",
    evenly: "jf-justify-content-evenly",
  };

  const alignClasses: Record<VerticalAlignment, string> = {
    start: "jf-align-items-start",
    center: "jf-align-items-center",
    end: "jf-align-items-end",
    baseline: "jf-align-items-baseline",
    stretch: "jf-align-items-stretch",
  };

  // Generate responsive classes
  const generateResponsiveClasses = (
    responsiveObj: ResponsiveAlignment | ResponsiveVerticalAlignment | undefined,
    classMap: Record<string, string>
  ): string => {
    if (!responsiveObj) return "";

    return Object.entries(responsiveObj)
      .map(([breakpoint, value]) => {
        const baseClass = classMap[value];
        return breakpoint === "sm" ? baseClass : `${baseClass}-${breakpoint}`;
      })
      .filter(Boolean)
      .join(" ");
  };

  // Generate alignment classes
  const justifyClassesStr = generateResponsiveClasses(justify, justifyClasses);
  const alignClassesStr = generateResponsiveClasses(align, alignClasses);

  // Generate shorthand alignment classes
  const justifyContentClass = justifyContent ? justifyClasses[justifyContent] : "";
  const alignItemsClass = alignItems ? alignClasses[alignItems] : "";

  // Generate container classes
  const containerClasses = classnames({
    "jf-row": true,
    [`g-${gap}`]: gap > 0,
    "g-0": noGutters,
    "jf-flex-wrap": wrap,
    "jf-flex-nowrap": !wrap,
    "jf-flex-row": direction === "row",
    "jf-flex-row-reverse": direction === "row-reverse",
    "jf-flex-column": direction === "column",
    "jf-flex-column-reverse": direction === "column-reverse",
    [justifyClassesStr]: justifyClassesStr,
    [alignClassesStr]: alignClassesStr,
    [justifyContentClass]: justifyContentClass,
    [alignItemsClass]: alignItemsClass,
    "w-100": fullWidth,
    "mx-auto": centered,
    [className]: className,
  });


  const containerStyle: React.CSSProperties = {
    ...style,
    ...(maxWidth && { maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth }),
  };

  // const processedChildren = (children as any)?.props?.children?.map?.((child:any, index:any)=>{
  //   console.log(child,'children1111')
  //   const isFlexLayoutItem = React.isValidElement(child) && (
  //     (child.type as any)?.displayName === "FlexLayoutItem" ||
  //     (child.type as any)?.__TYPE === "FlexLayoutItem"
  //   );
    
  //   if (isFlexLayoutItem) {
  //     console.log('Keeping FlexLayoutItem as-is');
  //     return child;
  //   }
  //   console.log('Wrapping non-FlexLayoutItem with FlexLayoutItem');
  //   return <FlexLayoutItem key={index}>{child}</FlexLayoutItem>;
  // });

  return (
    // <div className={`flex-container g-${gap}`}>
      <div
        className={containerClasses}
        style={containerStyle}
        {...props}
      >
        {children}
      {/* </div> */}
    </div>
  );
};

// FlexLayout Item Component
const FlexLayoutItem: React.FC<FlexLayoutItemProps> = ({
  children,
  cols,
  order,
  className = "",
  style,
  ...props
}) => {
  // Generate column classes
  const generateColumnClasses = (): string => {
    if (!cols) return "col"; // Default auto column

    return Object.entries(cols)
      .map(([breakpoint, width]) => {
        if (width === "auto") {
          return breakpoint === "sm" ? "col" : `col-${breakpoint}`;
        }
        return `jf-col jf-col-${breakpoint}-${width}`;
      })
      .filter(Boolean)
      .join(" ");
  };

  // Generate order classes
  const generateOrderClasses = (): string => {
    if (!order) return "";

    return Object.entries(order)
      .map(([breakpoint, orderValue]) => {
        return breakpoint === "sm" ? `order-${orderValue}` : `order-${orderValue}-${breakpoint}`;
      })
      .filter(Boolean)
      .join(" ");
  };

  const columnClasses = generateColumnClasses();
  const orderClasses = generateOrderClasses();

  const itemClasses = classnames({
    [columnClasses]: columnClasses,
    [orderClasses]: orderClasses,
    [className]: className,
  });

  return (
    <div
      className={itemClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

// Add displayName for component identification
FlexLayoutItem.displayName = "FlexLayoutItem";

// Add __TYPE for alternative component identification
(FlexLayoutItem as any).__TYPE = "FlexLayoutItem";

// Export both components
export { FlexLayoutItem };
export default FlexLayout; 