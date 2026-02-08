import React, { forwardRef } from "react";
import "./Button.css";
import Spinner from "../Spinner/Spinner";

export interface ButtonI {
  variant?: "Primary" | "Secondary" | "Tertiary" | "Link" | "Ghost" | "Danger";
  size?:  "Small" | "Medium" | "Large";
  color?: "Primary" | "Positive" | "Negative" | "Waiting" | "Neutral";
  isDisabled?: boolean;
  icon?: string | React.ReactNode;
  suffixIcon?: React.ReactNode;
  isLoading?: boolean;
  isFullWidth?: boolean;
  iconOnly?: boolean;
  alignIcon?: "Left" | "Right";
  onClick?: () => void;
  children?: string | React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  rounded?: boolean;
  outlined?: boolean;
  elevated?: boolean;
  compact?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  badge?: string | number;
  badgeVariant?: "default" | "primary" | "success" | "warning" | "error";
  pressed?: boolean;
  active?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonI>(({
  variant = "Primary",
  size = "Medium",
  color = "Neutral",
  icon,
  suffixIcon,
  isDisabled,
  isLoading,
  isFullWidth,
  iconOnly,
  alignIcon = "Left",
  children = "Button",
  type = "button",
  className = "",
  rounded = false,
  outlined = false,
  elevated = false,
  compact = false,
  href,
  target,
  rel,
  badge,
  badgeVariant = "default",
  pressed = false,
  active = false,
  ...props
}: ButtonI, ref) => {
  
  const getSizeClass = (): string => {
    switch (size) {
      case "Small":
        return "jf-btn--small";
      case "Medium":
        return "jf-btn--medium";
      case "Large":
        return "jf-btn--large";
      default:
        return "jf-btn--medium";
    }
  };

  const getVariantClass = (): string => {
    switch (variant) {
      case "Primary":
        return "jf-btn--primary";
      case "Tertiary":
        return "jf-btn--tertiary";
      case "Secondary":
        return "jf-btn--Secondary";
      case "Link":
        return "jf-btn--link";
      case "Ghost":
        return "jf-btn--ghost";
      case "Danger":
        return "jf-btn--danger";
      default:
        return "jf-btn--primary";
    }
  };

  const getColorClass = (): string => {
    switch (color) {
      case "Primary":
        return "jf-btn--primary__color";
      case "Positive":
        return "jf-btn--positive__color";
      case "Negative":
        return "jf-btn--negative__color";
      case "Waiting":
        return "jf-btn--waiting__color";
      case "Neutral":
        return "jf-btn--neutral__color";
      default:
        return "";
    }
  };

  const getBadgeVariantClass = (): string => {
    switch (badgeVariant) {
      case "primary":
        return "jf-btn-badge--primary";
      case "success":
        return "jf-btn-badge--success";
      case "warning":
        return "jf-btn-badge--warning";
      case "error":
        return "jf-btn-badge--error";
      default:
        return "jf-btn-badge--default";
    }
  };

  const getSpinnerSize = (): "Small" | "Medium" | "Large" => {
    switch (size) {
      case "Small":
        return "Small";
      case "Medium":
        return "Medium";
      case "Large":
        return "Large";
      default:
        return "Medium";
    }
  };

  const buttonClasses = [
    "jf-btn",
    getVariantClass(),
    getSizeClass(),
    getColorClass(),
    icon ? "jf-btn-icon" : "",
    suffixIcon ? "jf-btn-suffix-icon" : "",
    (icon && alignIcon === "Right") ? "jf-iconAlign-right" : "",
    (!children || iconOnly) ? "jf-icononly-btn" : "",
    isDisabled ? "jf-btn-disabled" : "",
    isLoading ? "jf-btn-loading" : "",
    isFullWidth ? "jf-btn-full" : "",
    rounded ? "jf-btn--rounded" : "",
    outlined ? "jf-btn--outlined" : "",
    elevated ? "jf-btn--elevated" : "",
    compact ? "jf-btn--compact" : "",
    pressed ? "jf-btn--pressed" : "",
    active ? "jf-btn--active" : "",
    className
  ].filter(Boolean).join(" ");

  const handleClick = (e: React.MouseEvent) => {
    if (isDisabled || isLoading) {
      e.preventDefault();
      return;
    }
    props.onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!isDisabled && !isLoading) {
        props.onClick?.();
      }
    }
  };

  const buttonContent = (
    <>
      {/* {icon && !isLoading && (
        <div className="btn-icon">
          {icon}
        </div>
      )} */}
      {children && !isLoading && !iconOnly && (
        <span className="jf-btn-text">
          {children}
        </span>
      )}
      {suffixIcon && !isLoading && (
        <div className="jf-btn-suffix-icon">
          {suffixIcon}
        </div>
      )}
      {badge && !isLoading && (
        <span className={`jf-btn-badge ${getBadgeVariantClass()}`}>
          {badge}
        </span>
      )}
      {isLoading && (
        <div className="jf-btn-loader__overlay">
          <Spinner size={getSpinnerSize()} label="" />
         
        </div>
      )}
      {iconOnly && icon && (
        <div className="jf-btn-icon">
          {icon}
        </div>
      )}
    </>
  );

  // If href is provided, render as anchor
  if (href) {
    return (
      <a
        ref={ref as any}
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={isDisabled ? -1 : 0}
        role="button"
        aria-disabled={isDisabled}
        aria-pressed={pressed}
        aria-label={typeof children === "string" ? children : undefined}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  // Render as button
  return (
    <button
      ref={ref}
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={isDisabled || isLoading}
      aria-pressed={pressed}
      aria-label={typeof children === "string" ? children : undefined}
      {...props}
    >
      {buttonContent}
    </button>
  );
});

Button.displayName = "Button";

export default Button;