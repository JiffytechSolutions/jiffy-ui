import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import "./Dropdown.css";

const Popover = ({
  children,
  content,
  trigger = "click",
  placement = "bottom",
  offset = 8,
  disabled = false,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  className,
  style,
  onOpen,
  onClose,
  ...props
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Calculate position
  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !contentRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    let top = 0;
    let left = 0;

    switch (placement) {
      case "top":
        top = triggerRect.top - contentRect.height - offset;
        left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + offset;
        left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        break;
      case "left":
        top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.left - contentRect.width - offset;
        break;
      case "right":
        top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.right + offset;
        break;
      case "bottom-start":
        top = triggerRect.bottom + offset;
        left = triggerRect.left;
        break;
      case "bottom-end":
        top = triggerRect.bottom + offset;
        left = triggerRect.right - contentRect.width;
        break;
      case "top-start":
        top = triggerRect.top - contentRect.height - offset;
        left = triggerRect.left;
        break;
      case "top-end":
        top = triggerRect.top - contentRect.height - offset;
        left = triggerRect.right - contentRect.width;
        break;
      default:
        top = triggerRect.bottom + offset;
        left = triggerRect.left;
    }

    // Viewport boundary adjustments
    if (left < 0) left = 8;
    if (left + contentRect.width > viewportWidth) {
      left = viewportWidth - contentRect.width - 8;
    }
    if (top < 0) top = 8;
    if (top + contentRect.height > viewportHeight) {
      top = triggerRect.top - contentRect.height - offset;
    }

    setPosition({ top, left });
  }, [placement, offset]);

  // Handle open/close
  const handleToggle = () => {
    if (disabled) return;
    
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    if (newIsOpen && onOpen) {
      onOpen();
    } else if (!newIsOpen && onClose) {
      onClose();
    }
  };

  const handleOpen = () => {
    if (disabled) return;
    
    setIsOpen(true);
    if (onOpen) onOpen();
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  // Position calculation after opening
  useLayoutEffect(() => {
    if (isOpen) {
      calculatePosition();
    }
  }, [isOpen]); // Remove calculatePosition dependency

  // Recalculate on scroll/resize
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => calculatePosition();
    const handleScroll = () => calculatePosition();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen]); // Remove calculatePosition dependency

  // Handle outside click
  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;

    const handleClickOutside = (event: MouseEvent) => {
      const trigger = triggerRef.current;
      const content = contentRef.current;
      
      if (
        trigger && content &&
        !trigger.contains(event.target as Node) &&
        !content.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeOnOutsideClick]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOnEscape]);

  // Trigger event handlers
  const triggerProps = {
    onClick: trigger === "click" ? handleToggle : undefined,
    onMouseEnter: trigger === "hover" ? handleOpen : undefined,
    onMouseLeave: trigger === "hover" ? handleClose : undefined,
    onFocus: trigger === "focus" ? handleOpen : undefined,
    onBlur: trigger === "focus" ? handleClose : undefined,
  };

  const popoverClasses = [
    "jf-popover",
    `jf-popover--${placement}`,
    disabled ? "jf-popover--disabled" : "",
    className || "",
  ].filter(Boolean).join(" ");

  return (
    <div className={popoverClasses} style={style} {...props}>
      {/* Trigger */}
      <div
        ref={triggerRef}
        className="jf-popover-trigger"
        {...triggerProps}
      >
        {children}
      </div>

      {/* Content Portal */}
      {isOpen && (
        <div className="jf-popover-portal">
          <div
            ref={contentRef}
            className="jf-popover-content"
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              zIndex: 1000,
            }}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

// Dropdown component using Popover
export const Dropdown = ({
  children,
  placeholder = "Select an option",
  size = "Medium",
  variant = "Default",
  disabled = false,
  fullWidth = false,
  label,
  error,
  required = false,
  className,
  style,
  onSelectionChange,
  ...props
}: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  // Handle selection
  const handleSelect = (value: string, label: string) => {
    setSelectedValue(label);
    setIsOpen(false);
    
    if (onSelectionChange) {
      onSelectionChange(value, label);
    }
  };

  // Clone children and inject selection handler
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === DropdownItem) {
      return React.cloneElement(child as React.ReactElement<DropdownItemProps>, {
        onSelect: handleSelect,
        isSelected: selectedValue === child.props.children,
      });
    }
    return child;
  });

  // Generate CSS classes
  const dropdownClasses = [
    "jf-dropdown",
    `jf-dropdown--${size.toLowerCase()}`,
    `jf-dropdown--${variant.toLowerCase()}`,
    disabled ? "jf-dropdown--disabled" : "",
    error ? "jf-dropdown--error" : "",
    fullWidth ? "jf-dropdown--full-width" : "",
    isOpen ? "jf-dropdown--open" : "",
    className || "",
  ].filter(Boolean).join(" ");

  const dropdownContent = (
    <div className="jf-dropdown-content">
      {enhancedChildren}
    </div>
  );

  const dropdownTrigger = (
    <div className={dropdownClasses}>
      <div className="jf-dropdown-value">
        {selectedValue || placeholder}
      </div>
      <div className="jf-dropdown-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );

  return (
    <div className="jf-dropdown-container" style={style}>
      {/* Label */}
      {label && (
        <label className="jf-dropdown-label">
          {label}
          {required && <span className="jf-dropdown-required">*</span>}
        </label>
      )}

      {/* Dropdown using Popover */}
      <Popover
        content={dropdownContent}
        trigger="click"
        placement="bottom-start"
        disabled={disabled}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        {...props}
      >
        {dropdownTrigger}
      </Popover>

      {/* Error message */}
      {error && (
        <div className="jf-dropdown-error-message">
          {error}
        </div>
      )}
    </div>
  );
};

// Dropdown Item component
export const DropdownItem = ({
  children,
  value,
  disabled = false,
  onSelect,
  isSelected = false,
  ...props
}: DropdownItemProps) => {
  const handleClick = () => {
    if (!disabled && onSelect) {
      onSelect(value || children?.toString() || "", children?.toString() || "");
    }
  };

  const itemClasses = [
    "jf-dropdown-item",
    disabled ? "jf-dropdown-item--disabled" : "",
    isSelected ? "jf-dropdown-item--selected" : "",
  ].filter(Boolean).join(" ");

  return (
    <div
      className={itemClasses}
      onClick={handleClick}
      role="option"
      aria-selected={isSelected}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </div>
  );
};

// Type definitions
export interface PopoverProps {
  /** Trigger element */
  children: React.ReactNode;
  
  /** Content to display in popover */
  content: React.ReactNode;
  
  /** How to trigger the popover */
  trigger?: "click" | "hover" | "focus";
  
  /** Placement of the popover */
  placement?: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end";
  
  /** Offset from trigger element */
  offset?: number;
  
  /** Whether the popover is disabled */
  disabled?: boolean;
  
  /** Close on outside click */
  closeOnOutsideClick?: boolean;
  
  /** Close on escape key */
  closeOnEscape?: boolean;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
  
  /** Callback when popover opens */
  onOpen?: () => void;
  
  /** Callback when popover closes */
  onClose?: () => void;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

export interface DropdownProps {
  /** Dropdown content (DropdownItem components) */
  children: React.ReactNode;
  
  /** Placeholder text when no option is selected */
  placeholder?: string;
  
  /** Size of the dropdown */
  size?: "Small" | "Medium" | "Large";
  
  /** Visual variant */
  variant?: "Default" | "Primary" | "Success" | "Error" | "Warning";
  
  /** Whether the dropdown is disabled */
  disabled?: boolean;
  
  /** Whether the dropdown should take full width */
  fullWidth?: boolean;
  
  /** Label for the dropdown */
  label?: string;
  
  /** Error message */
  error?: string;
  
  /** Whether the field is required */
  required?: boolean;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
  
  /** Callback when selection changes */
  onSelectionChange?: (value: string, label: string) => void;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

export interface DropdownItemProps {
  /** Item content */
  children: React.ReactNode;
  
  /** Item value */
  value?: string;
  
  /** Whether the item is disabled */
  disabled?: boolean;
  
  /** Internal: Selection handler */
  onSelect?: (value: string, label: string) => void;
  
  /** Internal: Whether this item is selected */
  isSelected?: boolean;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

  Popover.displayName = "jf-popover";
Dropdown.displayName = "jf-dropdown";
DropdownItem.displayName = "DropdownItem";

export default Popover;