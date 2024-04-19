import React, { useId } from "react";
import getClassNames from "../../../utilities/getClassnames";
import "../Form.css";
import "./Checkbox.css";

const Checkbox: React.FC<CheckboxI> = ({
  onChange,
  value,
  checked = false,
  isDisabled = false,
  ...props
}: CheckboxI) => {
  const rId = useId();

  const CheckboxChangeHandler = (e: any) => {
    e.stopPropagation();
    if (checked === "indeterminate") e.target.indeterminate = "true";
    if (!onChange || isDisabled) return;
    onChange(!checked, value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onChange) {
      onChange(!checked, value);
    }
  };

  return (
    <div
      className={getClassNames({
        "inte-checkbox": true,
        "inte-checkbox--disabled": isDisabled,
        [props.customClass as string]: props.customClass,
      })}
    >
      <label htmlFor={props.id ? props.id : `inte-checkbox-${rId}`}>
        <input
          disabled={isDisabled}
          aria-describedby={`inte-checkbox__description-${
            props.id ? props.id : rId
          }`}
          aria-label={props.id ? props.id : `inte-checkbox-${rId}`}
          aria-checked={checked === "indeterminate" ? "mixed" : checked}
          id={props.id ? props.id : `inte-checkbox-${rId}`}
          type="checkbox"
          name={props.name}
          ref={(ele) => {
            if (!ele) return;
            if (checked === "indeterminate") ele.indeterminate = true;
            else ele.indeterminate = false;
          }}
          onChange={CheckboxChangeHandler}
          value={value}
          checked={!checked ? false : true}
          className={getClassNames({
            "inte-checkbox--fake": true,
            "inte-checkbox--error": props.hasError,
          })}
          onKeyDown={handleKeyDown}
        />
        <span className={"inte-checkboxWrap"}>
          <span className={"inte__checkboxEle--fake"} />
          {props.label && (
            <span
              className={`inte-checkbox__label ${
                props.required ? "inte--required" : ""
              }`.trim()}
            >
              {props.label}
            </span>
          )}
        </span>
      </label>
      {props.description ? (
        <div
          id={`inte-checkbox__description-${props.id ? props.id : rId}`}
          className="inte-checkbox__description"
        >
          {props.description}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export interface CheckboxI {
  checked?: boolean | "indeterminate";
  onChange?: (newState: boolean, value: any) => void;
  label?: string | React.ReactNode;
  id?: string;
  name?: string;
  required?: boolean;
  isDisabled?: boolean;
  description?: string | React.ReactNode;
  hasError?: boolean;
  value?: any;
  customClass?: string;
}

export default Checkbox;
