import React, { forwardRef } from "react";
import Button from "../Button/Button";
import type { ButtonI } from "../Button/Button";
import "./card.css";

// Card action interface
export interface CardAction {
  label: string;
  onClick?: () => void;
  variant?: "Primary" | "Secondary" | "Tertiary" | "Ghost" | "Danger";
  size?: "Small" | "Medium" | "Large";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

// Card section interface for header/footer content
export interface CardSection {
  title?: string;
  subtitle?: string;
  actions?: CardAction[];
  content?: React.ReactNode;
}

// Main Card props interface
export interface CardProps {
  /** Card visual variant */
  variant?: "default" | "outlined" | "elevated" | "filled" | "ghost";
  /** Card size affects padding and spacing */
  size?:  "medium";
  /** Card header configuration */
  header?: CardSection;
  /** Card footer configuration */
  footer?: CardSection;
  /** Main card content */
  children?: React.ReactNode;
  /** Card padding override */
  padding?: "none" | "small" | "medium" | "large";
  /** Card border radius */
  radius?: "none" | "small" | "medium" | "large" | "full";
  /** Whether card is interactive (adds hover effects) */
  interactive?: boolean;
  /** Whether card is selectable */
  selectable?: boolean;
  /** Selected state (when selectable) */
  selected?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Custom CSS class */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Click handler for the entire card */
  onClick?: () => void;
  /** Selection change handler */
  onSelectionChange?: (selected: boolean) => void;
  /** Background color override */
  backgroundColor?: string;
  /** Border color override */
  borderColor?: string;
  /** Custom width */
  width?: string | number;
  /** Custom height */
  height?: string | number;

  /** Card orientation for complex layouts */
  orientation?: "vertical" | "horizontal";
  /** Accessibility label */
  "aria-label"?: string;
  /** Test ID for testing */
  "data-testid"?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  variant = "default",
  size = "medium",
  header,
  footer,
  children,
  padding,
  radius = "medium",
  interactive = false,
  selectable = false,
  selected = false,
  disabled = false,
  loading = false,
  className,
  style,
  onClick,
  onSelectionChange,
  backgroundColor,
  borderColor,
  width,
  height,

  orientation = "vertical",
  "aria-label": ariaLabel,
  "data-testid": testId,
  ...props
}, ref) => {
  // Generate CSS classes
  const cardClasses = [
    "jf-card",
    `jf-card--${variant}`,
    `jf-card--${size}`,
    `jf-card--${orientation}`,
    padding && `jf-card--padding-${padding}`,
    `jf-card--radius-${radius}`,
    interactive && "jf-card--interactive",
    selectable && "jf-card--selectable",
    selected && "jf-card--selected",
    disabled && "jf-card--disabled",
    loading && "jf-card--loading",
   
    className || ""
  ].filter(Boolean).join(" ");

  // Handle card click
  const handleCardClick = () => {
    if (disabled || loading) return;
    
    if (selectable && onSelectionChange) {
      onSelectionChange(!selected);
    }
    
    if (onClick) {
      onClick();
    }
  };

  // Render action buttons
  const renderActions = (actions: CardAction[]) => {
    if (!actions || actions.length === 0) return null;
    
    return (
      <div className="jf-card-actions">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant || "Secondary"}
            size={action.size || "Medium"}
            isDisabled={action.disabled}
            isLoading={action.loading}
            icon={action.icon}
            alignIcon={action.iconPosition === "right" ? "Right" : "Left"}
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        ))}
      </div>
    );
  };

  // Render card section (header or footer)
  const renderSection = (section: CardSection | undefined, type: "header" | "footer") => {
    if (!section) return null;

    const hasTitle = section.title || section.subtitle;
    const hasActions = section.actions && section.actions.length > 0;
    const hasContent = section.content;

    if (!hasTitle && !hasActions && !hasContent) return null;

    return (
      <div className={`jf-card-${type}`}>
        {(hasTitle || hasActions) && (
          <div className={`jf-card-${type}-main`}>
            {hasTitle && (
              <div className={`jf-card-${type}-content`}>
                {section.title && (
                  <h3 className={`jf-card-${type}-title`}>{section.title}</h3>
                )}
                {section.subtitle && (
                  <p className={`jf-card-${type}-subtitle`}>{section.subtitle}</p>
                )}
              </div>
            )}
            {hasActions && renderActions(section.actions!)}
          </div>
        )}
        {hasContent && (
          <div className={`jf-card-${type}-custom`}>
            {section.content}
          </div>
        )}
      </div>
    );
  };

  // Custom style object
  const cardStyle: React.CSSProperties = {
    backgroundColor,
    borderColor,
    width,
    height,
    ...style
  };

  return (
    <div
      ref={ref}
      className={cardClasses}
      style={cardStyle}
      onClick={handleCardClick}
      role={selectable ? "button" : undefined}
      tabIndex={selectable && !disabled ? 0 : undefined}
      aria-label={ariaLabel}
      aria-pressed={selectable ? selected : undefined}
      aria-disabled={disabled}
      data-testid={testId}
      {...props}
    >
      {loading && (
        <div className="jf-card-loading-overlay">
          <div className="jf-card-loading-spinner" />
        </div>
      )}
      
      {selectable && (
        <div className="jf-card-selection-indicator">
          <div className="jf-card-selection-checkbox" />
        </div>
      )}

      {renderSection(header, "header")}
      
      {children && (
        <div className="jf-card-body">
          {children}
        </div>
      )}
      
      {renderSection(footer, "footer")}
    </div>
  );
});

Card.displayName = "Card";

export default Card;