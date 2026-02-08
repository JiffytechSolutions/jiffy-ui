import React, { createContext, forwardRef, useContext, useId, useState } from "react";
import "./Tabs.css";

// Context for tabs state management
interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  orientation?: "horizontal" | "vertical";
}

const TabsContext = createContext<TabsContextValue | null>(null);

// Hook to use tabs context
const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab components must be used within a Tabs component");
  }
  return context;
};

// Main Tabs component (Root)
export interface TabsProps {
  /** Current active tab value (controlled) */
  value?: string;
  /** Default active tab value (uncontrolled) */
  defaultValue?: string;
  /** Change handler */
  onValueChange?: (value: string) => void;
  /** Orientation of tabs */
  orientation?: "horizontal" | "vertical";
  /** Whether tabs should stretch to full width */
  fullWidth?: boolean;
  /** Visual variant */
  variant?: "default" | "pills" | "underlined";
  /** Whether tabs are disabled */
  disabled?: boolean;
  /** Children components */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Component ID */
  id?: string;
  /** Additional HTML attributes */
  [key: string]: any;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(({
  value,
  defaultValue,
  onValueChange,
  orientation = "horizontal",
  fullWidth = false,
  variant = "default",
  disabled = false,
  children,
  className = "",
  id,
  ...props
}, ref) => {
  const generatedId = useId();
  const tabsId = id || `tabs-${generatedId}`;
  
  const [internalValue, setInternalValue] = useState(defaultValue || "");
  const currentValue = value !== undefined ? value : internalValue;

  const handleValueChange = (newValue: string) => {
    if (disabled) return;
    
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const contextValue: TabsContextValue = {
    value: currentValue,
    onValueChange: handleValueChange,
    orientation,
  };

  const classes = [
    "jf-tabs",
    `jf-tabs--${orientation}`,
    `jf-tabs--${variant}`,
    fullWidth ? "jf-tabs--full-width" : "",
    disabled ? "jf-tabs--disabled" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        ref={ref}
        id={tabsId}
        className={classes}
        data-orientation={orientation}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
});

// TabsList component
export interface TabsListProps {
  /** Children components (TabsTrigger elements) */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Additional HTML attributes */
  [key: string]: any;
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(({
  children,
  className = "",
  ...props
}, ref) => {
  const { orientation } = useTabs();

  const classes = [
    "jf-tabs-list",
    className,
  ].filter(Boolean).join(" ");

  return (
    <div
      ref={ref}
      role="tablist"
      aria-orientation={orientation}
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
});

// TabsTrigger component  
export interface TabsTriggerProps {
  /** Unique value for this tab */
  value: string;
  /** Tab content/label */
  children: React.ReactNode;
  /** Whether this specific tab is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Additional HTML attributes */
  [key: string]: any;
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(({
  value,
  children,
  disabled = false,
  className = "",
  ...props
}, ref) => {
  const { value: selectedValue, onValueChange, orientation } = useTabs();
  const isSelected = selectedValue === value;

  const handleClick = () => {
    if (!disabled) {
      onValueChange(value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        onValueChange(value);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        if (
          (orientation === "horizontal" && event.key === "ArrowLeft") ||
          (orientation === "vertical" && event.key === "ArrowUp")
        ) {
          event.preventDefault();
          // Focus previous tab - handled by browser's roving tabindex
        }
        break;
      case "ArrowRight":
      case "ArrowDown":
        if (
          (orientation === "horizontal" && event.key === "ArrowRight") ||
          (orientation === "vertical" && event.key === "ArrowDown")
        ) {
          event.preventDefault();
          // Focus next tab - handled by browser's roving tabindex
        }
        break;
    }
  };

  const classes = [
    "jf-tabs-trigger",
    isSelected ? "jf-tabs-trigger--active" : "",
    disabled ? "jf-tabs-trigger--disabled" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={isSelected}
      aria-controls={`${value}-content`}
      data-state={isSelected ? "active" : "inactive"}
      disabled={disabled}
      tabIndex={isSelected ? 0 : -1}
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </button>
  );
});

// TabsContent component
export interface TabsContentProps {
  /** Value that this content corresponds to */
  value: string;
  /** Content to display */
  children: React.ReactNode;
  /** Whether content should be force mounted */
  forceMount?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Additional HTML attributes */
  [key: string]: any;
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(({
  value,
  children,
  forceMount = false,
  className = "",
  ...props
}, ref) => {
  const { value: selectedValue } = useTabs();
  const isSelected = selectedValue === value;

  if (!isSelected && !forceMount) {
    return null;
  }

  const classes = [
    "jf-tabs-content",
    isSelected ? "jf-tabs-content--active" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <div
      ref={ref}
      role="tabpanel"
      id={`${value}-content`}
      aria-labelledby={value}
      data-state={isSelected ? "active" : "inactive"}
      tabIndex={0}
      className={classes}
      style={{ display: isSelected || forceMount ? undefined : "none" }}
      {...props}
    >
      {children}
    </div>
  );
});

// Set display names for debugging
Tabs.displayName = "Tabs";
TabsList.displayName = "TabsList";
TabsTrigger.displayName = "TabsTrigger";
TabsContent.displayName = "TabsContent";



// Default export for backward compatibility
export default Tabs;
