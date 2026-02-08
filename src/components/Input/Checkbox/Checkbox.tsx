import React, { forwardRef, useId, useEffect, useRef } from "react";
import { Check, Minus } from "react-feather";
import "./Checkbox.css";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  name,
  value,
  checked = false,
  indeterminate = false,
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
  const checkboxId = id || `checkbox-${generatedId}`;
  const descriptionId = description ? `${checkboxId}-description` : undefined;
  const internalRef = useRef<HTMLInputElement>(null);
  const inputRef = ref || internalRef;

  // Handle indeterminate state
  useEffect(() => {
    if (inputRef && 'current' in inputRef && inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate, inputRef]);

  // Handle change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    const newChecked = event.target.checked;
    
    if (onChange) {
      onChange(newChecked, value, event);
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
  const checkboxClasses = [
    "jf-checkbox",
    `jf-checkbox--${size.toLowerCase()}`,
    `jf-checkbox--${variant.toLowerCase()}`,
    `jf-checkbox--${validationState}`,
    `jf-checkbox--label-${labelPosition}`,
    disabled ? "jf-checkbox--disabled" : "",
    checked ? "jf-checkbox--checked" : "",
    indeterminate ? "jf-checkbox--indeterminate" : "",
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

  // Determine which icon to show
  const getIcon = () => {
    if (indeterminate) {
      return <Minus size={12} className="jf-checkbox-icon jf-checkbox-icon--indeterminate" />;
    }
    if (checked) {
      return <Check size={12} className="jf-checkbox-icon jf-checkbox-icon--checked" />;
    }
    return null;
  };

  return (
    <div className={checkboxClasses} style={style}>
      <label className="jf-checkbox-label" htmlFor={checkboxId}>
        {/* Checkbox Input and Custom Indicator */}
        <div className="jf-checkbox-container">
          <input
            ref={inputRef}
            type="checkbox"
            id={checkboxId}
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            className="jf-checkbox-input"
            aria-invalid={validationState === "error"}
            aria-describedby={descriptionId}
            {...inputProps}
            {...props}
          />
          
          {/* Custom Checkbox Indicator */}
          <div className="jf-checkbox-indicator">
            {getIcon()}
          </div>
        </div>

        {/* Label Content */}
        {label && (
          <div className="jf-checkbox-content">
            <div className="jf-checkbox-text">
              {label}
              {required && <span className="jf-checkbox-required">*</span>}
            </div>
            
            {helpText && (
              <div 
                id={descriptionId}
                className={`jf-checkbox-description jf-checkbox-description--${validationState}`}
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
export interface CheckboxProps {
  /** Checkbox name attribute */
  name?: string;
  
  /** Checkbox value */
  value?: string | number;
  
  /** Whether checkbox is checked */
  checked?: boolean;
  
  /** Whether checkbox is in indeterminate state */
  indeterminate?: boolean;
  
  /** Change handler */
  onChange?: (checked: boolean, value: string | number | undefined, event: React.ChangeEvent<HTMLInputElement>) => void;
  
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
  
  /** Whether checkbox is required */
  required?: boolean;
  
  /** Whether checkbox is disabled */
  disabled?: boolean;
  
  /** Size of the checkbox */
  size?: "Small" | "Medium" | "Large";
  
  /** Visual variant */
  variant?: "Default" | "Card" | "Switch";
  
  /** Label position relative to checkbox */
  labelPosition?: "left" | "right" | "top" | "bottom";
  
  /** Checkbox ID */
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
export interface CheckboxI extends Omit<CheckboxProps, 'onChange' | 'checked'> {
  /** @deprecated Use checked instead */
  checked?: boolean | "indeterminate";
  /** @deprecated Use disabled instead */
  isDisabled?: boolean;
  /** @deprecated Use error instead */
  hasError?: boolean;
  /** @deprecated Use onChange with proper signature */
  onChange?: (newState: boolean, value: any) => void;
}

Checkbox.displayName = "Checkbox";

export default Checkbox;