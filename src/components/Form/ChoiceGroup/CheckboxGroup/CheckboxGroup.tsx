import React, { useEffect, useState } from "react";
import { Checkbox } from "../..";
import getClassNames from "../../../../utilities/getClassnames";
import Text from "../../../Text/Text";
import "../ChoiceGroup.css";
export interface OptionsI {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  value: any;
  customClass?: string;
  isDisabled?: boolean;
}
export interface CheckboxGroupI {
  title?: string | React.ReactNode;
  name?: string;
  value?: any[];
  onChange?: (newVal: any[]) => void;
  options: OptionsI[];
  direction?: "horizontal" | "vertical";
  required?: boolean;
  helpText?: string;
  helpIcon?: React.ReactNode;
  controlStates?: "success" | "warning" | "error";
  customClass?: string;
  isClickableFullItem?: boolean;
}

const CheckboxGroup = ({
  title,
  isClickableFullItem,
  name,
  value = [],
  onChange = () => {},
  direction = "vertical",
  options,
  required,
  helpIcon,
  controlStates,
  customClass,
  ...props
}: CheckboxGroupI) => {
  // Getting different states like warning , success
  const getcontrolStates: { [key: string]: string } = {
    success: "inte-formElement--success",
    warning: "inte-formElement--warning",
    error: "inte-formElement--error",
  };

  const controlStatesVal = controlStates && getcontrolStates[controlStates];

  const [grpVal, setGrpVal] = useState<any[]>([]);
  const handleCheckboxGroupChange = (state: boolean, val: string | number) => {
    let curr = [...grpVal];
    if (state) curr = [...curr, val];
    else curr = curr.filter((i) => i !== val);
    onChange(curr);
  };

  useEffect(() => {
    setGrpVal([...value]);
  }, [value]);

  return (
    <div
      className={getClassNames({
        "inte-checkboxGroup": true,
        [controlStatesVal as string]: controlStatesVal,
        [customClass as string]: customClass,
      })}
    >
      {title && (
        <Text
          type="T-7"
          as="h2"
          customClass={
            required ? "inte--required inte-form__label" : "inte-form__label"
          }
        >
          {title}
        </Text>
      )}
      <ul
        className={`inte-checkboxGroup__list inte-checkboxGroup__list--${direction}`}
      >
        {options.map((item, index) => {
          return (
            <li
              key={index}
              className={getClassNames({
                "inte-checkboxGroup__listItem": true,
                "inte-checkboxGroup__listitem--clickable": isClickableFullItem,
                [item.customClass as string]: item.customClass,
              })}
            >
              <Checkbox
                description={item.description}
                isDisabled={item.isDisabled}
                label={item.label}
                value={item.value}
                checked={value.includes(item.value)}
                onChange={handleCheckboxGroupChange}
                name={name}
              />
            </li>
          );
        })}
      </ul>
      {props.helpText && (
        <span
          className={getClassNames({
            "inte-formElement__itemHelp": true,
            "inte-formElement__itemHelp--hasHelpIcon": helpIcon,
          })}
        >
          {helpIcon && <span style={{ display: "flex" }}>{helpIcon}</span>}
          <span>{props.helpText}</span>
        </span>
      )}
    </div>
  );
};

export default CheckboxGroup;
