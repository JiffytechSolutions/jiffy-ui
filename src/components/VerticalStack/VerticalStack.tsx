import React from "react";
import { classnames } from "../../utilities/globalFunction";
import "./VerticalStack.css";

// Gap sizes
type GapSize = 0 | 1 | 2 | 3 | 4 | 5;

// Alignment types
type Alignment = "start" | "center" | "end" | "baseline" | "stretch";
type JustifyContent = "start" | "center" | "end" | "between" | "around" | "evenly";

// Responsive types
type Breakpoint = "sm" | "md" | "lg" | "xl" | "xxl";

type ResponsiveAlignment = {
  [K in Breakpoint]?: Alignment;
};

type ResponsiveJustifyContent = {
  [K in Breakpoint]?: JustifyContent;
};

// VerticalStack Props
export interface VerticalStackProps {
  /** Content to be displayed inside the vertical stack */
  children: React.ReactNode;

  /** Spacing between stack items (0-5) */
  gap?: GapSize;

  /** Horizontal alignment of items */
  align?: Alignment | ResponsiveAlignment;

  /** Vertical alignment/justification of items */
  justifyContent?: JustifyContent | ResponsiveJustifyContent;

  /** Whether items should wrap (rarely used in vertical stacks) */
  wrap?: boolean;

  /** Whether the stack should be full height */
  fullHeight?: boolean;

  /** Whether the stack should be centered */
  centered?: boolean;

  /** Additional CSS classes */
  className?: string;

  /** Additional inline styles */
  style?: React.CSSProperties;

  /** HTML element to render (default: div) */
  as?: keyof JSX.IntrinsicElements;

  /** Additional HTML attributes */
  [key: string]: any;
}

// VerticalStack Component
const VerticalStack: React.FC<VerticalStackProps> = ({
  children,
  gap = 0,
  align = "start",
  justifyContent = "start",
  wrap = false,
  fullHeight = false,
  centered = false,
  className = "",
  style,
  as: Component = "div",
  ...props
}) => {
  // Alignment class mappings (for horizontal alignment in vertical stack)
  const alignClasses: Record<Alignment, string> = {
    start: "jf-align-items-start",
    center: "jf-align-items-center",
    end: "jf-align-items-end",
    baseline: "jf-align-items-baseline",
    stretch: "jf-align-items-stretch",
  };

  // Justify content class mappings (for vertical alignment in vertical stack)
  const justifyClasses: Record<JustifyContent, string> = {
    start: "jf-justify-content-start",
    center: "jf-justify-content-center",
    end: "jf-justify-content-end",
    between: "jf-justify-content-between",
    around: "jf-justify-content-around",
    evenly: "jf-justify-content-evenly",
  };

  // Generate responsive classes
  const generateResponsiveClasses = (
    responsiveObj: ResponsiveAlignment | ResponsiveJustifyContent,
    classMap: Record<string, string>
  ): string => {
    if (typeof responsiveObj === "string") {
      return classMap[responsiveObj] || "";
    }

    return Object.entries(responsiveObj)
      .map(([breakpoint, value]) => {
        const baseClass = classMap[value];
        return breakpoint === "sm" ? baseClass : `${baseClass}-${breakpoint}`;
      })
      .filter(Boolean)
      .join(" ");
  };

  // Generate alignment classes (horizontal alignment in vertical stack)
  const alignClassesStr = typeof align === "string" 
    ? alignClasses[align] 
    : generateResponsiveClasses(align, alignClasses);

  // Generate justify content classes (vertical alignment in vertical stack)
  const justifyClassesStr = typeof justifyContent === "string"
    ? justifyClasses[justifyContent]
    : generateResponsiveClasses(justifyContent, justifyClasses);

  // Generate container classes
  const containerClasses = classnames({
    "jf-vertical-stack": true,
    "jf-vertical-stack-container": true,
    [`jf-vertical-stack-gap-${gap}`]: gap > 0,
    "jf-vertical-stack-wrap": wrap,
    "jf-vertical-stack-nowrap": !wrap,
    [alignClassesStr]: alignClassesStr,
    [justifyClassesStr]: justifyClassesStr,
    "jf-vertical-stack-full-height": fullHeight,
    "jf-vertical-stack-centered": centered,
    [className]: className,
  });

  return (
    <Component
      className={containerClasses}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

export default VerticalStack;
