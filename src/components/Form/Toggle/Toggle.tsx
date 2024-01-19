import React, { useId } from "react";
import "./Toggle.css";
import getClassNames from "../../../utilities/getClassnames";
import ToolTip from "../../ToolTip/ToolTip";

export default function Toggle({
  checked,
  onChange = () => {
    // Use / Click This function and switcher ON or OFF / true or false
    // The onclick event occurs when the user clicks on an element.
  },
  label,
  description,
  isDisabled = false,
  required,
  customClass = "",
  value,
  id,
  helpPosition,
  helpText,
  ...props
}: ToggleI): JSX.Element {
  const rId = useId();
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onChange) {
      onChange(!checked, value);
    }
  };
  return (
    <div
      className={getClassNames({
        "inte-toggle__wrapper": true,
        "inte-toggle--required": required,
        "inte-toggle--disabled": isDisabled,
        "inte-toggle--hasHelp": helpText,
        "inte-toggle__noDescription": !description,
        [customClass]: customClass,
      })}
    >
      <label htmlFor={id || `inte-toggle-${rId}`}>
        <input
          id={id || `inte-toggle-${rId}`}
          disabled={isDisabled}
          aria-label={id || `inte-toggle-${rId}`}
          type="checkbox"
          className="inte-toggle"
          checked={checked}
          value={value}
          onChange={() => onChange(!checked, value)}
          onKeyDown={handleKeyDown}
        ></input>
        {label && (
          <span className="inte-toggle__text">
            {!helpText || isDisabled ? (
              <>{label}</>
            ) : (
              <ToolTip
                isOpen={false}
                direction={helpPosition}
                helpText={helpText}
                activator={<span>{label}</span>}
              />
            )}
          </span>
        )}
      </label>
      {description && (
        <div className="inte-toggle__description">{description}</div>
      )}
    </div>
  );
}
export interface ToggleI {
  customClass?: string;
  checked?: boolean;
  required?: boolean;
  onChange?: (newState: boolean, value: any) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  isDisabled?: boolean;
  value?: any;
  id?: any;
  helpText?: string | React.ReactNode;
  helpPosition?: "left" | "right" | "top" | "bottom";
}
