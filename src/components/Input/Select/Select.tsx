import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X, Check } from "react-feather";
import Popover from "../../Dropdown/Dropdown";
import Tag from "../../Tag/Tag";
import "./Select.css";

const Select = ({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  size = "Medium",
  variant = "Default",
  selectionType = "single",
  searchable = false,
  disabled = false,
  clearable = false,
  fullWidth = false,
  label,
  helpText,
  error,
  required = false,
  maxHeight = 300,
  className,
  style,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter options based on search term
  useEffect(() => {
    if (!searchable || !searchTerm) {
      setFilteredOptions(options);
      return;
    }

    const filtered = options.filter((option) => {
      if (option.group && option.options) {
        const filteredGroup = option.options.filter((subOption: SelectOption) =>
          subOption.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return filteredGroup.length > 0;
      }
      return option.label.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredOptions(filtered);
  }, [searchTerm, options, searchable]);

  // Focus search input when popover opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 0);
    }
  }, [isOpen, searchable]);

  // Get selected options for display
  const getSelectedOptions = () => {
    if (!value) return [];
    
    const values = Array.isArray(value) ? value : [value];
    const selected: SelectOption[] = [];
    
    options.forEach((option) => {
      if (option.group && option.options) {
        option.options.forEach((subOption) => {
          if (values.includes(subOption.value)) {
            selected.push(subOption);
          }
        });
      } else {
        if (values.includes(option.value)) {
          selected.push(option);
        }
      }
    });
    
    return selected;
  };

  // Handle option selection
  const handleOptionSelect = (option: SelectOption) => {
    if (option.disabled) return;

    if (selectionType === "single") {
      onChange?.(option.value);
      setIsOpen(false);
      setSearchTerm("");
    } else {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(option.value)
        ? currentValues.filter(v => v !== option.value)
        : [...currentValues, option.value];
      
      onChange?.(newValues);
    }
  };

  // Handle tag removal in multi-select
  const handleTagRemove = (optionValue: string) => {
    if (selectionType === "multiple" && Array.isArray(value)) {
      const newValues = value.filter(v => v !== optionValue);
      onChange?.(newValues);
    }
  };

  // Handle clear all
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(selectionType === "single" ? "" : []);
  };

  // Check if option is selected
  const isOptionSelected = (option: SelectOption) => {
    if (!value) return false;
    const values = Array.isArray(value) ? value : [value];
    return values.includes(option.value);
  };

  const selectedOptions = getSelectedOptions();
  const hasValue = selectedOptions.length > 0;

  // Generate CSS classes
  const selectClasses = [
    "jf-select",
    `jf-select--${size.toLowerCase()}`,
    `jf-select--${variant.toLowerCase()}`,
    disabled ? "jf-select--disabled" : "",
    error ? "jf-select--error" : "",
    fullWidth ? "jf-select--full-width" : "",
    isOpen ? "jf-select--open" : "",
    className || "",
  ].filter(Boolean).join(" ");

  // Render option content
  const renderOption = (option: SelectOption, isGroup = false) => {
    if (option.group) {
      return (
        <div key={option.label} className="jf-select-option-group">
          <div className="jf-select-option-group-label">{option.label}</div>
          {option.options?.filter((subOption) => {
            if (!searchable || !searchTerm) return true;
            return subOption.label.toLowerCase().includes(searchTerm.toLowerCase());
          }).map((subOption) => renderOption(subOption))}
        </div>
      );
    }

    const isSelected = isOptionSelected(option);
    const optionClasses = [
      "jf-select-option",
      isSelected ? "jf-select-option--selected" : "",
      option.disabled ? "jf-select-option--disabled" : "",
    ].filter(Boolean).join(" ");

    return (
      <div
        key={option.value}
        className={optionClasses}
        onClick={() => handleOptionSelect(option)}
      >
        {selectionType === "multiple" && (
          <div className="jf-select-option-checkbox">
            <div className={`jf-select-checkbox ${isSelected ? "jf-select-checkbox--checked" : ""}`}>
              {isSelected && <Check size={12} />}
            </div>
          </div>
        )}
        
        <div className="jf-select-option-content">
          <div className="jf-select-option-label">{option.label}</div>
          {option.description && (
            <div className="jf-select-option-description">{option.description}</div>
          )}
        </div>

        {selectionType === "single" && isSelected && (
          <div className="jf-select-option-check">
            <Check size={16} />
          </div>
        )}
      </div>
    );
  };

  // Select trigger content
  const triggerContent = (
    <div className={selectClasses}>
      <div className="jf-select-value">
        {selectionType === "single" ? (
          selectedOptions.length > 0 ? (
            <span className="jf-select-single-value">{selectedOptions[0].label}</span>
          ) : (
            <span className="jf-select-placeholder">{placeholder}</span>
          )
        ) : (
          <div className="jf-select-multi-value">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                <Tag
                  key={option.value}
                  size="Small"
                  onDismis={() => handleTagRemove(option.value)}
                >
                  {option.label}
                </Tag>
              ))
            ) : (
              <span className="jf-select-placeholder">{placeholder}</span>
            )}
          </div>
        )}
      </div>

      <div className="jf-select-icons">
        {clearable && hasValue && !disabled && (
          <button
            type="button"
            className="jf-select-clear"
            onClick={handleClear}
            tabIndex={-1}
          >
            <X size={16} />
          </button>
        )}
        
        <div className="jf-select-chevron">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );

  // Popover content
  const popoverContent = (
    <div className="jf-select-dropdown" style={{ maxHeight }}>
      {searchable && (
        <div className="jf-select-search">
          <input
            ref={searchInputRef}
            type="text"
            className="jf-select-search-input"
            placeholder="Search options..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      <div className="jf-select-options">
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => renderOption(option))
        ) : (
          <div className="jf-select-no-options">
            {searchTerm ? "No matching options" : "No options available"}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="jf-select-container" style={style}>
      {/* Label */}
      {label && (
        <label className="jf-select-label">
          {label}
          {required && <span className="jf-select-required">*</span>}
        </label>
      )}

      {/* Select using Popover */}
      <Popover
        content={popoverContent}
        trigger="click"
        placement="bottom-start"
        disabled={disabled}
        onOpen={() => setIsOpen(true)}
        onClose={() => {
          setIsOpen(false);
          setSearchTerm("");
        }}
        {...props}
      >
        {triggerContent}
      </Popover>

      {/* Help text */}
      {helpText && (
        <div className="jf-select-help-text">{helpText}</div>
      )}

      {/* Error message */}
      {error && (
        <div className="jf-select-error-message">{error}</div>
      )}
    </div>
  );
};

// Type definitions
export interface SelectOption {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
  group?: boolean;
  options?: SelectOption[];
}

export interface SelectProps {
  /** Array of options */
  options: SelectOption[];
  
  /** Selected value(s) */
  value?: string | string[];
  
  /** Change handler */
  onChange?: (value: string | string[]) => void;
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Size of the select */
  size?: "Small" | "Medium" | "Large";
  
  /** Visual variant */
  variant?: "Default" | "Primary" | "Success" | "Error" | "Warning";
  
  /** Selection type */
  selectionType?: "single" | "multiple";
  
  /** Enable search functionality */
  searchable?: boolean;
  
  /** Whether the select is disabled */
  disabled?: boolean;
  
  /** Show clear button */
  clearable?: boolean;
  
  /** Whether the select should take full width */
  fullWidth?: boolean;
  
  /** Label for the select */
  label?: string;
  
  /** Help text */
  helpText?: string;
  
  /** Error message */
  error?: string;
  
  /** Whether the field is required */
  required?: boolean;
  
  /** Maximum height of dropdown */
  maxHeight?: number;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

// Legacy interface for backward compatibility
export interface SelectI extends SelectProps {
  /** @deprecated Use onChange instead */
  onChange: (value: string | string[], item?: any) => void;
  /** @deprecated Use selectionType instead */
  type?: "select" | "autoComplete";
  /** @deprecated Use disabled instead */
  isDisabled?: boolean;
  /** @deprecated Use value instead */
  inputValue?: string;
  /** @deprecated Use onChange instead */
  onInputValueChange?: (e: any) => void;
  /** @deprecated Use isOpen state internally */
  open?: boolean;
}

export default Select;