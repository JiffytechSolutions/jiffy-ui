import React, { forwardRef, useId } from "react";
import "./Radio.css";

const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  name,
  value,
  checked = false,
  onChange,
  onFocus,
  onBlur,
  label,
  description,
  error,
  success,
  warning,
  required = false,
  disabled = false,
  size = "Medium",
  variant = "Default",
  labelPosition = "right",
  id,
  className,
  style,
  inputProps,
  ...props
}, ref) => {
  const generatedId = useId();
  const radioId = id || `radio-${generatedId}`;
  const descriptionId = description ? `${radioId}-description` : undefined;

  // Handle change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    if (onChange) {
      onChange(value, event);
    }
  };

  // Handle focus event
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(event);
    }
  };

  // Handle blur event
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }
  };

  // Get validation state
  const getValidationState = () => {
    if (error) return "error";
    if (warning) return "warning";
    if (success) return "success";
    return "default";
  };

  const validationState = getValidationState();

  // Generate CSS classes
  const radioClasses = [
    "jf-radio",
    `jf-radio--${size.toLowerCase()}`,
    `jf-radio--${variant.toLowerCase()}`,
    `jf-radio--${validationState}`,
    `jf-radio--label-${labelPosition}`,
    disabled ? "jf-radio--disabled" : "",
    checked ? "jf-radio--checked" : "",
    className || "",
  ].filter(Boolean).join(" ");

  // Get help text
  const getHelpText = () => {
    if (error) return error;
    if (warning) return warning;
    if (success) return success;
    return description;
  };

  const helpText = getHelpText();

  return (
    <div className={radioClasses} style={style}>
      <label className="jf-radio-label" htmlFor={radioId}>
        {/* Radio Input and Custom Indicator */}
        <div className="jf-radio-container">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            className="jf-radio-input"
            aria-invalid={validationState === "error"}
            aria-describedby={descriptionId}
            {...inputProps}
            {...props}
          />
          
          {/* Custom Radio Indicator */}
          <div className="jf-radio-indicator">
            <div className="jf-radio-dot" />
          </div>
        </div>

        {/* Label Content */}
        {label && (
          <div className="jf-radio-content">
            <div className="jf-radio-text">
              {label}
              {required && <span className="jf-radio-required">*</span>}
            </div>
            
            {helpText && (
              <div 
                id={descriptionId}
                className={`jf-radio-description jf-radio-description--${validationState}`}
              >
                {helpText}
              </div>
            )}
          </div>
        )}
      </label>
    </div>
  );
});

// Type definitions
export interface RadioProps {
  /** Radio name attribute (for grouping) */
  name?: string;
  
  /** Radio value */
  value?: string | number;
  
  /** Whether radio is checked */
  checked?: boolean;
  
  /** Change handler */
  onChange?: (value: string | number | undefined, event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /** Label text or element */
  label?: React.ReactNode;
  
  /** Description/help text */
  description?: string;
  
  /** Error message */
  error?: string;
  
  /** Success message */
  success?: string;
  
  /** Warning message */
  warning?: string;
  
  /** Whether radio is required */
  required?: boolean;
  
  /** Whether radio is disabled */
  disabled?: boolean;
  
  /** Size of the radio */
  size?: "Small" | "Medium" | "Large";
  
  /** Visual variant */
  variant?: "Default" | "Card" | "Button";
  
  /** Label position relative to radio */
  labelPosition?: "left" | "right" | "top" | "bottom";
  
  /** Radio ID */
  id?: string;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
  
  /** Additional props passed to input element */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

// Legacy interface for backward compatibility
export interface RadioI extends Omit<RadioProps, 'onChange'> {
  /** @deprecated Use checked instead */
  checked?: boolean;
  /** @deprecated Use disabled instead */
  isDisabled?: boolean;
  /** @deprecated Use error instead */
  hasError?: boolean;
  /** @deprecated Use onChange with proper signature */
  onChange?: (value: any) => void;
}

Radio.displayName = "Radio";

export default Radio;