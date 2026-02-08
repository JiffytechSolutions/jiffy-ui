import React, { forwardRef, useCallback, useEffect, useId, useRef, useState } from "react";
import { X, Copy, Check } from "react-feather";
import "./TextArea.css";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  name,
  value = "",
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  onPaste,
  label,
  description,
  error,
  success,
  warning,
  placeholder,
  required = false,
  disabled = false,
  readOnly = false,
  autoFocus = false,
  rows = 3,
  minRows,
  maxRows,
  cols,
  minLength,
  maxLength,
  resize = "vertical",
  autoResize = false,
  showCharacterCount = false,
  clearable = false,
  copyable = false,
  size = "Medium",
  variant = "Default",
  fullWidth = false,
  spellCheck,
  wrap = "soft",
  form,
  id,
  className,
  style,
  ...props
}, ref) => {
  const generatedId = useId();
  const textAreaId = id || `textarea-${generatedId}`;
  const internalRef = useRef<HTMLTextAreaElement>(null);
  const textAreaRef = ref || internalRef;
  
  // State for features
  const [focused, setFocused] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentRows, setCurrentRows] = useState(rows);

  // Auto-resize functionality
  const updateHeight = useCallback(() => {
    const textarea = textAreaRef as React.RefObject<HTMLTextAreaElement>;
    if (!textarea.current || !autoResize) return;

    const element = textarea.current;
    const computedStyle = window.getComputedStyle(element);
    const borderHeight = parseInt(computedStyle.borderTopWidth) + parseInt(computedStyle.borderBottomWidth);
    const paddingHeight = parseInt(computedStyle.paddingTop) + parseInt(computedStyle.paddingBottom);
    
    // Reset height to measure scrollHeight
    element.style.height = 'auto';
    
    // Calculate the line height
    const lineHeight = parseInt(computedStyle.lineHeight) || 20;
    const minHeight = (minRows || rows) * lineHeight + paddingHeight + borderHeight;
    const maxHeight = maxRows ? maxRows * lineHeight + paddingHeight + borderHeight : Infinity;
    
    // Set new height
    const scrollHeight = element.scrollHeight;
    const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
    
    element.style.height = `${newHeight}px`;
    
    // Update rows count for display
    const newRowCount = Math.round((newHeight - paddingHeight - borderHeight) / lineHeight);
    setCurrentRows(newRowCount);
  }, [autoResize, minRows, maxRows, rows, textAreaRef]);

  // Update height when value changes
  useEffect(() => {
    if (autoResize) {
      updateHeight();
    }
  }, [value, autoResize, updateHeight]);

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    
    // Character limit validation
    if (maxLength && newValue.length > maxLength) {
      return; // Don't allow input beyond max length
    }
    
    if (onChange) {
      onChange(newValue, event);
    }
    
    // Update height for auto-resize
    if (autoResize) {
      // Small delay to ensure DOM is updated
      setTimeout(updateHeight, 0);
    }
  };

  // Handle focus
  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  // Handle blur
  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  // Handle clear
  const handleClear = () => {
    if (onChange) {
      const syntheticEvent = {
        target: { value: "" },
        currentTarget: { value: "" },
      } as React.ChangeEvent<HTMLTextAreaElement>;
      onChange("", syntheticEvent);
    }
    
    // Focus back to textarea
    const textarea = textAreaRef as React.RefObject<HTMLTextAreaElement>;
    if (textarea.current) {
      textarea.current.focus();
    }
  };

  // Handle copy
  const handleCopy = async () => {
    if (!value) return;
    
    try {
      await navigator.clipboard.writeText(value.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textarea = textAreaRef as React.RefObject<HTMLTextAreaElement>;
      if (textarea.current) {
        textarea.current.select();
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
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

  // Get character count info
  const getCharacterInfo = () => {
    const currentLength = value.toString().length;
    const remaining = maxLength ? maxLength - currentLength : null;
    const isOverLimit = maxLength ? currentLength > maxLength : false;
    const isNearLimit = maxLength ? currentLength >= maxLength * 0.8 : false;
    
    return {
      current: currentLength,
      max: maxLength,
      remaining,
      isOverLimit,
      isNearLimit,
    };
  };

  const characterInfo = getCharacterInfo();

  // Generate CSS classes
  const textAreaClasses = [
    "jf-textarea",
    `jf-textarea--${size.toLowerCase()}`,
    `jf-textarea--${variant.toLowerCase()}`,
    `jf-textarea--${validationState}`,
    `jf-textarea--resize-${resize}`,
    disabled ? "jf-textarea--disabled" : "",
    readOnly ? "jf-textarea--readonly" : "",
    focused ? "jf-textarea--focused" : "",
    fullWidth ? "jf-textarea--full-width" : "",
    autoResize ? "jf-textarea--auto-resize" : "",
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

  // Calculate actual rows to use
  const effectiveRows = autoResize ? currentRows : rows;

  return (
    <div className={textAreaClasses} style={style}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={textAreaId}
          className="jf-textarea-label"
        >
          {label}
          {required && <span className="jf-textarea-required">*</span>}
        </label>
      )}

      {/* TextArea Container */}
      <div className="jf-textarea-container">
        <textarea
          ref={textAreaRef}
          id={textAreaId}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onPaste={onPaste}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
          rows={effectiveRows}
          cols={cols}
          minLength={minLength}
          maxLength={maxLength}
          spellCheck={spellCheck}
          wrap={wrap}
          form={form}
          className="jf-textarea-input"
          style={{
            resize: autoResize ? "none" : resize,
          }}
          aria-describedby={helpText ? `${textAreaId}-help` : undefined}
          aria-invalid={validationState === "error"}
          {...props}
        />

        {/* Action Buttons */}
        {((clearable && value && !disabled && !readOnly) || (copyable && value)) && (
          <div className="jf-textarea-actions">
            {copyable && value && (
              <button
                type="button"
                className="jf-textarea-action jf-textarea-action--copy"
                onClick={handleCopy}
                disabled={disabled}
                aria-label="Copy text"
                title="Copy text"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            )}
            
            {clearable && value && !disabled && !readOnly && (
              <button
                type="button"
                className="jf-textarea-action jf-textarea-action--clear"
                onClick={handleClear}
                aria-label="Clear text"
                title="Clear text"
              >
                <X size={16} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      {(helpText || showCharacterCount) && (
        <div className="jf-textarea-footer">
          {/* Help Text */}
          {helpText && (
            <div 
              id={`${textAreaId}-help`}
              className={`jf-textarea-help jf-textarea-help--${validationState}`}
            >
              {helpText}
            </div>
          )}
          
          {/* Character Count */}
          {showCharacterCount && (
            <div className={`jf-textarea-counter ${characterInfo.isOverLimit ? 'jf-textarea-counter--over' : characterInfo.isNearLimit ? 'jf-textarea-counter--near' : ''}`}>
              <span className="jf-textarea-counter-current">{characterInfo.current}</span>
              {maxLength && (
                <>
                  <span className="jf-textarea-counter-separator">/</span>
                  <span className="jf-textarea-counter-max">{maxLength}</span>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

// Type definitions
export interface TextAreaProps {
  /** Input name attribute */
  name?: string;
  
  /** TextArea value */
  value?: string | number;
  
  /** Change handler */
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  
  /** Key down handler */
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  
  /** Key up handler */
  onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  
  /** Paste handler */
  onPaste?: (event: React.ClipboardEvent<HTMLTextAreaElement>) => void;
  
  /** TextArea label */
  label?: React.ReactNode;
  
  /** Description/help text */
  description?: string;
  
  /** Error message */
  error?: string;
  
  /** Success message */
  success?: string;
  
  /** Warning message */
  warning?: string;
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Whether field is required */
  required?: boolean;
  
  /** Whether textarea is disabled */
  disabled?: boolean;
  
  /** Whether textarea is read-only */
  readOnly?: boolean;
  
  /** Whether to auto-focus */
  autoFocus?: boolean;
  
  /** Number of visible text lines */
  rows?: number;
  
  /** Minimum number of rows (for auto-resize) */
  minRows?: number;
  
  /** Maximum number of rows (for auto-resize) */
  maxRows?: number;
  
  /** Number of visible character widths */
  cols?: number;
  
  /** Minimum character length */
  minLength?: number;
  
  /** Maximum character length */
  maxLength?: number;
  
  /** Resize behavior */
  resize?: "none" | "both" | "horizontal" | "vertical";
  
  /** Automatic height adjustment */
  autoResize?: boolean;
  
  /** Show character count */
  showCharacterCount?: boolean;
  
  /** Show clear button */
  clearable?: boolean;
  
  /** Show copy button */
  copyable?: boolean;
  
  /** Component size */
  size?: "Small" | "Medium" | "Large";
  
  /** Visual variant */
  variant?: "Default" | "Outlined" | "Filled";
  
  /** Whether textarea should take full width */
  fullWidth?: boolean;
  
  /** Enable/disable spell checking */
  spellCheck?: boolean;
  
  /** Text wrapping behavior */
  wrap?: "hard" | "soft" | "off";
  
  /** Form element association */
  form?: string;
  
  /** Component ID */
  id?: string;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

// Legacy interface for backward compatibility
export interface TextAreaI extends Omit<TextAreaProps, 'onChange' | 'value'> {
  /** @deprecated Use onChange with proper signature */
  onChange?: (value: string) => void;
  /** @deprecated Use string value instead */
  value?: string | number;
  /** @deprecated Use error string instead */
  error?: boolean;
  /** @deprecated Use description instead */
  helpText?: string;
}

TextArea.displayName = "TextArea";

export default TextArea;