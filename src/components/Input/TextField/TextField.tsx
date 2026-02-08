import React, { useState, useRef, useEffect, forwardRef } from "react";
import { X, Eye, EyeOff } from "react-feather";
import "./TextField.css";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  value,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  onClear,
  type = "text",
  placeholder,
  label,
  description,
  error,
  success,
  warning,
  required = false,
  disabled = false,
  readOnly = false,
  autoFocus = false,
  autoComplete,
  size = "Medium",
  variant = "Default",
  fullWidth = false,
  clearable = false,
  leading,
  trailing,
  min,
  max,
  step,
  minLength,
  maxLength,
  pattern,
  name,
  id,
  className,
  style,
  inputProps,
  ...props
}, ref) => {
  const [internalValue, setInternalValue] = useState(value || "");
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const leadingRef = useRef<HTMLDivElement>(null);
  const trailingRef = useRef<HTMLDivElement>(null);

  // Use internal value if no value prop is provided (uncontrolled)
  const currentValue = value !== undefined ? value : internalValue;
  const isControlled = value !== undefined;

  // Update internal value when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    if (onChange) {
      onChange(newValue, e);
    }
  };

  // Handle clear button
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newValue = "";
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    if (onChange) {
      const syntheticEvent = {
        target: { value: newValue },
        currentTarget: { value: newValue },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(newValue, syntheticEvent);
    }
    
    if (onClear) {
      onClear();
    }
    
    // Focus input after clearing
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handle focus
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  // Handle blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Determine input type
  const inputType = type === "password" && showPassword ? "text" : type;

  // Get validation state
  const getValidationState = () => {
    if (error) return "error";
    if (warning) return "warning";
    if (success) return "success";
    return "default";
  };

  const validationState = getValidationState();

  // Generate CSS classes
  const textFieldClasses = [
    "jf-textfield",
    `jf-textfield--${size.toLowerCase()}`,
    `jf-textfield--${variant.toLowerCase()}`,
    `jf-textfield--${validationState}`,
    focused ? "jf-textfield--focused" : "",
    disabled ? "jf-textfield--disabled" : "",
    readOnly ? "jf-textfield--readonly" : "",
    fullWidth ? "jf-textfield--full-width" : "",
    leading ? "jf-textfield--has-leading" : "",
    trailing || clearable || type === "password" ? "jf-textfield--has-trailing" : "",
    className || "",
  ].filter(Boolean).join(" ");

  // Calculate if we should show clear button
  const shouldShowClear = clearable && currentValue && !disabled && !readOnly;

  // Calculate if we should show password toggle
  const shouldShowPasswordToggle = type === "password" && !disabled && !readOnly;

  // Get help text
  const getHelpText = () => {
    if (error) return error;
    if (warning) return warning;
    if (success) return success;
    return description;
  };

  const helpText = getHelpText();

  return (
    <div className={textFieldClasses} style={style}>
      {/* Label */}
      {label && (
        <label 
          className="jf-textfield-label" 
          htmlFor={id}
        >
          {label}
          {required && <span className="jf-textfield-required">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="jf-textfield-container">
        {/* Leading Element */}
        {leading && (
          <div ref={leadingRef} className="jf-textfield-leading">
            {leading}
          </div>
        )}

        {/* Input */}
        <input
          ref={ref || inputRef}
          type={inputType}
          value={currentValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          min={min}
          max={max}
          step={step}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          name={name}
          id={id}
          className="jf-textfield-input"
          aria-invalid={validationState === "error"}
          aria-describedby={helpText ? `${id}-help` : undefined}
          {...inputProps}
          {...props}
        />

        {/* Trailing Elements */}
        <div ref={trailingRef} className="jf-textfield-trailing">
          {/* Clear Button */}
          {shouldShowClear && (
            <button
              type="button"
              className="jf-textfield-clear"
              onClick={handleClear}
              tabIndex={-1}
              aria-label="Clear input"
            >
              <X size={16} />
            </button>
          )}

          {/* Password Toggle */}
          {shouldShowPasswordToggle && (
            <button
              type="button"
              className="jf-textfield-password-toggle"
              onClick={togglePasswordVisibility}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          )}

          {/* Custom Trailing Element */}
          {trailing && <div className="jf-textfield-trailing-element">{trailing}</div>}
        </div>
      </div>

      {/* Help Text */}
      {helpText && (
        <div 
          id={id ? `${id}-help` : undefined}
          className={`jf-textfield-help jf-textfield-help--${validationState}`}
        >
          {helpText}
        </div>
      )}
    </div>
  );
});

// Type definitions
export interface TextFieldProps {
  /** Input value (controlled) */
  value?: string;
  
  /** Change handler */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /** Key down handler */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  
  /** Key up handler */
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  
  /** Clear handler */
  onClear?: () => void;
  
  /** Input type */
  type?: "text" | "password" | "email" | "tel" | "url" | "number" | "search";
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Label text */
  label?: string;
  
  /** Description/help text */
  description?: string;
  
  /** Error message */
  error?: string;
  
  /** Success message */
  success?: string;
  
  /** Warning message */
  warning?: string;
  
  /** Whether field is required */
  required?: boolean;
  
  /** Whether field is disabled */
  disabled?: boolean;
  
  /** Whether field is read-only */
  readOnly?: boolean;
  
  /** Whether to auto-focus */
  autoFocus?: boolean;
  
  /** Auto-complete attribute */
  autoComplete?: string;
  
  /** Size of the input */
  size?: "Small" | "Medium" | "Large";
  
  /** Visual variant */
  variant?: "Default" | "Outlined" | "Filled";
  
  /** Whether input should take full width */
  fullWidth?: boolean;
  
  /** Whether to show clear button */
  clearable?: boolean;
  
  /** Leading icon or element */
  leading?: React.ReactNode;
  
  /** Trailing icon or element */
  trailing?: React.ReactNode;
  
  /** Minimum value (for number type) */
  min?: number;
  
  /** Maximum value (for number type) */
  max?: number;
  
  /** Step value (for number type) */
  step?: number;
  
  /** Minimum length */
  minLength?: number;
  
  /** Maximum length */
  maxLength?: number;
  
  /** Input pattern */
  pattern?: string;
  
  /** Input name */
  name?: string;
  
  /** Input ID */
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
export interface TextfieldI extends Omit<TextFieldProps, 'onChange' | 'onClear'> {
  /** @deprecated Use value instead */
  value?: string | number;
  /** @deprecated Use label instead */
  label?: string | React.ReactNode;
  /** @deprecated Use leading instead */
  prefix?: React.ReactNode;
  /** @deprecated Use trailing instead */
  suffix?: React.ReactNode;
  /** @deprecated Use description instead */
  helpText?: string;
  /** @deprecated Use error/warning/success instead */
  variant?: "success" | "warning" | "error" | "default";
  /** @deprecated Use clearable instead */
  isClearable?: boolean;
  /** @deprecated Use required instead */
  isRequired?: boolean;
  /** @deprecated Use disabled instead */
  isDisabled?: boolean;
  /** @deprecated Use maxLength instead */
  maxlength?: number | string | any;
  /** @deprecated Use onChange instead */
  onChange?: (value: any) => void;
  /** @deprecated Use onClear instead */
  onClear?: () => void;
  /** @deprecated Use size with proper casing */
  size?: "XSmall" | "Small" | "Medium" | "Large";
  /** @deprecated Use description with icon separately */
  helpIcon?: React.ReactNode;
}

TextField.displayName = "TextField";

export default TextField;