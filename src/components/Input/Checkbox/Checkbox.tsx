import React, { useId } from "react";
import { classnames } from "../../../utilities/globalFunction";
import "./Checkbox.css";

const Checkbox: React.FC<CheckboxI> = (props: CheckboxI) => {
  const {
    value,
    onChange,
    checked = false,
    isDisabled,
    hasError,
    name,
    label,
    required,
  } = props;

  const rId = useId();
  const handleCheckbox = (e: any) => {
    e.stopPropagation();
    if (checked === "indeterminate") e.target.indeterminate = "true";
    if (!onChange || isDisabled) return;
    onChange(!checked, value);
  };

  return (
    <div
      className={classnames({
        "jiffyui-checkbox": true,
        "jiffyui-checkbox--disabled": isDisabled,
        "jiffyui-checkbox--hasError": hasError,
      })}
    >
      <label htmlFor={`jiffyui-checkbox-${rId}`}>
        <input
          disabled={isDisabled}
          aria-label={`jiffyui-checkbox-${rId}`}
          aria-checked={checked === "indeterminate" ? "mixed" : checked}
          id={`jiffyui-checkbox-${rId}`}
          type="checkbox"
          name={name}
          ref={(ele) => {
            if (!ele) return;
            if (checked === "indeterminate") ele.indeterminate = true;
            else ele.indeterminate = false;
          }}
          onChange={handleCheckbox}
          value={value}
          onClick={handleCheckbox}
          checked={!!checked}
          className={classnames({
            "jiffyui-checkbox--fake": true,
          })}
        />
        <span className={"jiffyui-checkboxWrap"}>
          <span className={"jiffyui__checkboxEle--fake"} />
          {label && (
            <span
              className={`jiffyui-checkbox__label ${required ? "jiffyui--required" : ""
                }`.trim()}
            >
              {label}
            </span>
          )}
        </span>
      </label>
    </div>
  );
};

export interface CheckboxI {
  checked?: boolean | "indeterminate";
  onChange?: (newState: boolean, value: any) => void;
  label?: string | React.ReactNode;
  name?: string;
  required?: boolean;
  isDisabled?: boolean;
  value?: any;
  hasError?: boolean;
}

export default Checkbox ;
