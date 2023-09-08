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
  isDisable = false,
  required,
  customClass = "",
  value,
  id,
  helpPosition,
  helpText,
  ...props
}: ToggleI): JSX.Element {
  const rId = useId()
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onChange) {
      onChange(!checked, value)
    }
  };
  return (
    <div
      className={getClassNames({
        "inte-toggle__wrapper": true,
        "inte-toggle--required": required,
        "inte-toggle--disabled": isDisable,
        "inte-toggle--hasHelp": helpText,
        [customClass]: customClass
      })}
    >
      <label htmlFor={
        id ? id : `inte-toggle-${rId}`
      } >
        <input
          id={id ? id : `inte-toggle-${rId}`}
          disabled={isDisable}
          aria-label={id ? id : `inte-toggle-${rId}`}
          type="checkbox"
          className="inte-toggle"
          checked={checked}
          value={value}
          onChange={() => onChange(!checked, value)}
          onKeyDown={handleKeyDown}
        ></input>
        {label && <span className="inte-toggle__text">
          {(!helpText || isDisable) ? (
            `${label}`
          ) : (
            <ToolTip
              isOpen={false}
              direction={helpPosition}
              helpText={helpText}
              activator={<span>{label}</span>}
            />
          )}</span>}
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
  isDisable?: boolean;
  value?: any;
  id?: any
  helpText?: string | React.ReactNode;
  helpPosition?: "left" | "right" | "top" | "bottom";
}