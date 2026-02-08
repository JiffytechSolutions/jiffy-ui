import React from "react";
import { AlertCircle, CheckCircle, X, Info, AlertTriangle } from "react-feather";
import Button from "../Button/Button";
import type { ButtonI } from "../Button/Button";
import "./alert.css";

// Icon mapping for different variants
const iconMap = {
  success: CheckCircle,
  error: AlertTriangle,
  warning: AlertTriangle,
  info: Info,
  default: AlertCircle,
};

const Alert = ({
  children = "Alert message here",
  title,
  variant = "default",
  emphasis = "Subtle",
  onDismiss,
  primaryAction,
  secondaryAction,
  className,
  style,
  ...props
}: AlertProps) => {
  // Get the appropriate icon
  const IconComponent = iconMap[variant as keyof typeof iconMap] || iconMap.default;

  // Generate CSS classes
  const alertClasses = [
    "jf-alert",
    `jf-alert--${variant}`,
    `jf-alert--${emphasis.toLowerCase()}`,
    onDismiss ? "jf-alert--dismissible" : "",
    (primaryAction || secondaryAction) ? "jf-alert--with-actions" : "",
    className || "",
  ].filter(Boolean).join(" ");

  return (
    <div className={alertClasses} style={style} role="alert" {...props}>
      {/* Dismiss button */}
      {onDismiss && (
        <button
          type="button"
          className="jf-alert-dismiss"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <X size={16} />
        </button>
      )}

      <div className="jf-alert-inner">
        {/* Icon */}
        <div className="jf-alert-icon">
          <IconComponent size={20} />
        </div>

        {/* Content */}
        <div className="jf-alert-content">
          {title && <h3 className="jf-alert-title">{title}</h3>}
          <div className="jf-alert-description">{children}</div>
          
          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div className="jf-alert-actions">
              {primaryAction && (
                <Button
                  size="Small"
                  variant="Primary"
                  {...primaryAction}
                >
                  {primaryAction.children || "Primary Action"}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  size="Small"
                  variant="Secondary"
                  {...secondaryAction}
                >
                  {secondaryAction.children || "Secondary Action"}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export interface AlertProps {
  /** Alert content */
  children?: React.ReactNode;
  
  /** Alert title */
  title?: string;
  
  /** Visual variant of the alert */
  variant?: "default" | "success" | "error" | "warning" | "info";
  
  /** Emphasis level */
  emphasis?: "Subtle" | "Intense";
  
  /** Callback when dismiss button is clicked */
  onDismiss?: () => void;
  
  /** Primary action button configuration */
  primaryAction?: ButtonI;
  
  /** Secondary action button configuration */
  secondaryAction?: ButtonI;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

export default Alert;