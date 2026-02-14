import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Check } from "react-feather";
import Popover from "../Dropdown/Dropdown";
import "./actionlist.css";

const ActionList = ({
  children,
  items = [],
  trigger = "click",
  placement = "bottom-start",
  size = "Medium",
  variant = "Default",
  disabled = false,
  closeOnSelect = true,
  maxHeight = 300,
  className,
  style,
  onItemSelect,
  onOpenChange,
  ...props
}: ActionListProps) => {
  // console.log("ActionList rendering with items:", items);
  const [isOpen, setIsOpen] = useState(false);

  // Handle item selection
  const handleItemSelect = useCallback((item: ActionItem) => {
    if (item.disabled) return;

    // Call item's onClick handler
    if (item.onClick) {
      item.onClick();
    }

    // Call component's onItemSelect handler
    if (onItemSelect) {
      onItemSelect(item);
    }

    // Close popover if configured to do so
    if (closeOnSelect) {
      setIsOpen(false);
    }
  }, [onItemSelect, closeOnSelect]);

  // Handle popover open/close
  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  }, [onOpenChange]);

  // Render individual action item
  const renderItem = useCallback((item: ActionItem, index: number) => {
    const itemClasses = [
      "jf-actionlist-item",
      `jf-actionlist-item--${size.toLowerCase()}`,
      `jf-actionlist-item--${variant.toLowerCase()}`,
      item.variant ? `jf-actionlist-item--${item.variant}` : "",
      item.disabled ? "jf-actionlist-item--disabled" : "",
      item.destructive ? "jf-actionlist-item--destructive" : "",
      item.selected ? "jf-actionlist-item--selected" : "",
    ].filter(Boolean).join(" ");

    return (
      <div
        key={item.id || index}
        className={itemClasses}
        onClick={() => handleItemSelect(item)}
        role="menuitem"
        tabIndex={item.disabled ? -1 : 0}
        aria-disabled={item.disabled}
        aria-label={item.label}
      >
        {/* Leading content */}
        <div className="jf-actionlist-item-leading">
          {item.leading && (
            <div className="jf-actionlist-item-icon jf-actionlist-item-icon--leading">
              {item.leading}
            </div>
          )}
        </div>

        {/* Main content */}
        <div className="jf-actionlist-item-content">
          <div className="jf-actionlist-item-label">
            {item.label}
          </div>
          {item.description && (
            <div className="jf-actionlist-item-description">
              {item.description}
            </div>
          )}
        </div>

        {/* Trailing content */}
        <div className="actionlist-item-trailing">
          {item.badge && (
            <div className={`jf-actionlist-item-badge jf-actionlist-item-badge--${item.badgeVariant || 'default'}`}>
              {item.badge}
            </div>
          )}
          
          {item.shortcut && (
            <div className="jf-actionlist-item-shortcut">
              {item.shortcut}
            </div>
          )}
          
          {item.trailing && (
            <div className="jf-actionlist-item-icon jf-actionlist-item-icon--trailing">
              {item.trailing}
            </div>
          )}
          
          {item.selected && (
            <div className="jf-actionlist-item-check">
              <Check size={16} />
            </div>
          )}
        </div>
      </div>
    );
  }, [size, variant, handleItemSelect]);

  // Render action group
  const renderGroup = useCallback((group: ActionGroup, index: number) => {
    return (
      <div key={group.id || index} className="jf-actionlist-group">
        {group.title && (
          <div className="jf-actionlist-group-title">
            {group.title}
          </div>
        )}
        <div className="jf-actionlist-group-items">
          {group.items.map((item, itemIndex) => renderItem(item, itemIndex))}
        </div>
        {group.separator && index < items.length - 1 && (
          <div className="jf-actionlist-separator" />
        )}
      </div>
    );
  }, [renderItem, items.length]);

  // Generate CSS classes
  const actionListClasses = useMemo(() => [
    "jf-actionlist",
    `jf-actionlist--${size.toLowerCase()}`,
    `jf-actionlist--${variant.toLowerCase()}`,
    disabled ? "jf-actionlist--disabled" : "",
    className || "",
  ].filter(Boolean).join(" "), [size, variant, disabled, className]);

  // Popover content
  const popoverContent = useMemo(() => (
    <div className="jf-actionlist-dropdown" style={{ maxHeight }}>
      <div className="jf-actionlist-content">
        {items.map((item, index) => {
          // Handle both individual items and groups
          if ('items' in item && Array.isArray(item.items)) {
            return renderGroup(item as ActionGroup, index);
          } else {
            return renderItem(item as ActionItem, index);
          }
        })}
      </div>
    </div>
  ), [items, maxHeight, renderGroup, renderItem]);

  return (
    <div className={actionListClasses} style={style}>
      <Popover
        content={popoverContent}
        trigger={trigger}
        placement={placement}
        disabled={disabled}
        onOpen={() => handleOpenChange(true)}
        onClose={() => handleOpenChange(false)}
        {...props}
      >
        {children}
      </Popover>
    </div>
  );
};

// Type definitions
export interface ActionItem {
  /** Unique identifier */
  id?: string | number;
  
  /** Item label/text */
  label: string;
  
  /** Optional description */
  description?: string;
  
  /** Click handler */
  onClick?: () => void;
  
  /** Leading icon or element */
  leading?: React.ReactNode;
  
  /** Trailing icon or element */
  trailing?: React.ReactNode;
  
  /** Badge text */
  badge?: string | number;
  
  /** Badge variant */
  badgeVariant?: "default" | "primary" | "success" | "warning" | "error";
  
  /** Keyboard shortcut display */
  shortcut?: string;
  
  /** Visual variant */
  variant?: "default" | "primary" | "secondary" | "destructive";
  
  /** Whether item is disabled */
  disabled?: boolean;
  
  /** Whether item is destructive (red styling) */
  destructive?: boolean;
  
  /** Whether item is selected */
  selected?: boolean;
  
  /** Custom class names */
  className?: string;
}

export interface ActionGroup {
  /** Unique identifier */
  id?: string | number;
  
  /** Group title */
  title?: string;
  
  /** Items in this group */
  items: ActionItem[];
  
  /** Whether to show separator after this group */
  separator?: boolean;
  
  /** Whether entire group is disabled */
  disabled?: boolean;
}

export interface ActionListProps {
  /** Trigger element */
  children: React.ReactElement;
  
  /** Action items or groups */
  items: (ActionItem | ActionGroup)[];
  
  /** Trigger behavior */
  trigger?: "click" | "hover" | "focus";
  
  /** Placement relative to trigger */
  placement?: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end";
  
  /** Size of the action list */
  size?: "Small" | "Medium" | "Large";
  
  /** Visual variant */
  variant?: "Default" | "Bordered" | "Elevated";
  
  /** Whether the action list is disabled */
  disabled?: boolean;
  
  /** Whether to close on item selection */
  closeOnSelect?: boolean;
  
  /** Maximum height of dropdown */
  maxHeight?: number;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
  
  /** Item selection handler */
  onItemSelect?: (item: ActionItem) => void;
  
  /** Open/close state change handler */
  onOpenChange?: (open: boolean) => void;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

// Legacy interfaces for backward compatibility
export interface ActionListI extends Omit<ActionListProps, 'children' | 'items'> {
  /** @deprecated Use children instead */
  activator: React.ReactNode;
  /** @deprecated Use items instead */
  options: ActionListObjI[];
  /** @deprecated Use isOpen state internally */
  open: boolean;
  /** @deprecated Use onOpenChange instead */
  onClose: () => void;
  /** @deprecated Use placement instead */
  direction?: "left" | "right" | "auto";
  /** @deprecated Use variant instead */
  variant?: "default" | "bordered" | "elevated";
  /** @deprecated Use size instead */
  size?: "small" | "medium" | "large";
  /** @deprecated Use maxHeight instead */
  maxHeight?: string | number;
  /** @deprecated Use style.width instead */
  width?: string | number;
  /** @deprecated Use className instead */
  itemClassName?: string;
  /** @deprecated Use className instead */
  titleClassName?: string;
  /** @deprecated Use separator in groups instead */
  showDividers?: boolean;
}

export interface ActionListObjI {
  /** @deprecated Use ActionGroup instead */
  title?: string;
  id?: number | string;
  items: ActionListItemsI[];
  disabled?: boolean;
}

export interface ActionListItemsI {
  /** @deprecated Use ActionItem instead */
  id?: number | string;
  content?: string;
  destructive?: boolean;
  description?: string;
  onClick?: () => void;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  isDisabled?: boolean;
  variant?: "default" | "primary" | "secondary" | "destructive";
  size?: "small" | "medium" | "large";
  badge?: string | number;
  badgeVariant?: "default" | "primary" | "success" | "warning" | "error";
  divider?: boolean;
}



export default ActionList;

