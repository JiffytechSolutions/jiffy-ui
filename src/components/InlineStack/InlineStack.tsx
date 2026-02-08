import React from "react";
import { classnames } from "../../utilities/globalFunction";
import "./InlineStack.css";

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

// InlineStack Props
export interface InlineStackProps {
  /** Content to be displayed inside the inline stack */
  children: React.ReactNode;

  /** Spacing between stack items (0-5) */
  gap?: GapSize;

  /** Vertical alignment of items */
  align?: Alignment | ResponsiveAlignment;

  /** Horizontal alignment/justification of items */
  justifyContent?: JustifyContent | ResponsiveJustifyContent;

  /** Whether items should wrap to the next line */
  wrap?: boolean;

  /** Whether the stack should be full width */
  fullWidth?: boolean;

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

// InlineStack Component
const InlineStack: React.FC<InlineStackProps> = ({
  children,
  gap = 0,
  align = "start",
  justifyContent = "start",
  wrap = true,
  fullWidth = false,
  centered = false,
  className = "",
  style,
  as: Component = "div",
  ...props
}) => {
  // Alignment class mappings
  const alignClasses: Record<Alignment, string> = {
    start: "jf-align-items-start",
    center: "jf-align-items-center",
    end: "jf-align-items-end",
    baseline: "jf-align-items-baseline",
    stretch: "jf-align-items-stretch",
  };

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

  // Generate alignment classes (using Bootstrap classes but scoped to inline-stack)
  const alignClassesStr = typeof align === "string" 
    ? alignClasses[align] 
    : generateResponsiveClasses(align, alignClasses);

  const justifyClassesStr = typeof justifyContent === "string"
    ? justifyClasses[justifyContent]
    : generateResponsiveClasses(justifyContent, justifyClasses);

  // Generate container classes
  const containerClasses = classnames({
    "jf-inline-stack": true,
    "jf-inline-stack-container": true,
    [`jf-inline-stack-gap-${gap}`]: gap > 0,
    "jf-inline-stack-wrap": wrap,
    "jf-inline-stack-nowrap": !wrap,
    [alignClassesStr]: alignClassesStr,
    [justifyClassesStr]: justifyClassesStr,
    "jf-inline-stack-full-width": fullWidth,
    "jf-inline-stack-centered": centered,
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

export default InlineStack;
