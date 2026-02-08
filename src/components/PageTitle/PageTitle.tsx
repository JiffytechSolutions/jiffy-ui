import React, { useCallback, useMemo } from "react";
import { ChevronLeft } from "react-feather";
// import Button from "../Button/Button";
import Badge from "../Badge/Badge";
// import ActionList from "../Actionlist/Actionlist";

import Button, { ButtonI } from "../Button/Button";
import ActionList, { ActionItem } from "../Actionlist/Actionlist";


import "./PageTitle.css";

// Action button interface
export interface PageTitleAction {
  /** Button label/text */
  label: string;
  
  /** Click handler */
  onClick?: () => void;
  
  /** Button variant */
  variant?: "Primary" | "Secondary" | "Tertiary" | "Link" | "Ghost" | "Danger";
  
  /** Button size */
  size?: "Small" | "Medium" | "Large";
  
  /** Icon element */
  icon?: React.ReactNode;
  
  /** Whether button is disabled */
  disabled?: boolean;
  
  /** Whether button is loading */
  loading?: boolean;
  
  /** Additional props to pass to Button */
  [key: string]: any;
}

// Badge configuration interface
export interface PageTitleBadge {
  /** Badge text content */
  text: string;
  
  /** Badge color variant */
  color: "Primary" | "Positive" | "Negative" | "Notice" | "Neutral";
  
  /** Badge size */
  size?: "Small" | "Medium" | "Large";
  
  /** Whether badge has subtle styling */
  subtle?: boolean;
}

// ActionList item interface for secondary actions
export interface SecondaryActionItem {
  /** Action item ID */
  id: string;
  
  /** Action label/text */
  label: string;
  
  /** Click handler */
  onClick?: () => void;
  
  /** Icon element */
  leading?: React.ReactNode;
  
  /** Whether action is disabled */
  disabled?: boolean;
  
  /** Action variant */
  variant?: "default" | "primary" | "secondary" | "destructive";
  
  /** Optional description */
  description?: string;
}

// Main PageTitle props interface
export interface PageTitleProps {
  /** Page title text or element */
  title: string | React.ReactNode;
  
  /** Optional subtitle/description */
  subtitle?: string | React.ReactNode;
  
  /** Show back navigation button */
  showBackButton?: boolean;
  
  /** Back button click handler */
  onBackClick?: () => void;
  
  /** Back button label (default: "Back") */
  backButtonLabel?: string;
  
  /** Primary action button */
  primaryAction?: PageTitleAction;
  
  /** Secondary actions using ActionList */
  secondaryActions?: SecondaryActionItem[];
  
  /** Badge to display next to title */
  badge?: PageTitleBadge;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Inline styles */
  style?: React.CSSProperties;
  
  /** Test ID for testing */
  testId?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  showBackButton = false,
  onBackClick,
  backButtonLabel = "Back",
  primaryAction,
  secondaryActions = [],
  badge,
  className = "",
  style,
  testId,
}) => {

  // Handle back button click
  const handleBackClick = useCallback(() => {
    if (onBackClick) {
      onBackClick();
    }
  }, [onBackClick]);

  // Convert secondary actions to ActionList format
  const actionListItems = useMemo(() => {
    return secondaryActions.map(action => ({
      id: action.id,
      label: action.label,
      onClick: action.onClick,
      leading: action.leading,
      disabled: action.disabled,
      variant: action.variant,
      description: action.description
    }));
  }, [secondaryActions]);

  // Render primary action button
  const renderPrimaryAction = useCallback(() => {
    if (!primaryAction) return null;

    return (
      <Button
        variant={primaryAction.variant || "Primary"}
        size={primaryAction.size || "Medium"}
        onClick={primaryAction.onClick}
        disabled={primaryAction.disabled}
        isLoading={primaryAction.loading}
        icon={primaryAction.icon}
        {...primaryAction}
      >
        {primaryAction.label}
      </Button>
    );
  }, [primaryAction]);



  // Render badge
  const renderBadge = () => {
    if (!badge) return null;

    return (
      <Badge
        // color={badge.variant || "primary"}
        color={badge.color || "Primary"}
        size={badge.size || "Medium"}
        // size={badge.size || "Medium"}
        emphasis={badge.subtle ? "Subtile" : "Intense"}
        type="None"
      >
        {badge.text}
      </Badge>
    );
  };

  // Main CSS classes
  const containerClasses = [
    "pagetitle",
    showBackButton ? "pagetitle--with-back" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <div 
      className={containerClasses}
      style={style}
      data-testid={testId}
    >
      {/* Main content row */}
      <div className="pagetitle-main">
        {/* Left section: Back button + Title */}
        <div className="pagetitle-content">
          {showBackButton && (
            <button
              className="pagetitle-back-button"
              onClick={handleBackClick}
              type="button"
              aria-label={backButtonLabel}
            >
              <ChevronLeft size={20} />
              {/* <span className="pagetitle-back-text">{backButtonLabel}</span> */}
            </button>
          )}

          <div className="pagetitle-header">
            <div className="pagetitle-title-row">
              <h1 className="pagetitle-title">{title}</h1>
              {renderBadge()}
            </div>
            
            {subtitle && (
              <p className="pagetitle-subtitle">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Right section: Actions */}
        {(primaryAction || secondaryActions.length > 0) && (
          <div className="pagetitle-actions">
            {/* Secondary Actions using ActionList */}
            {secondaryActions.length > 0 && (
              <ActionList
                items={actionListItems}
                trigger="click"
                placement="bottom-end"
                variant="Bordered"
                size="Medium"
              >
                <Button variant="Secondary" size="Medium">
                  Actions
                </Button>
              </ActionList>
            )}
            
            {/* Primary Action */}
            {renderPrimaryAction()}
          </div>
        )}
      </div>
    </div>
  );
};

PageTitle.displayName = "PageTitle";

export default PageTitle;