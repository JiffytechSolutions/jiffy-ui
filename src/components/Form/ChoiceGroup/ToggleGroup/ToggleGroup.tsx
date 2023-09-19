import React, { useEffect, useState } from "react";
import { Text } from "../../..";
import getClassNames from "../../../../utilities/getClassnames";
import Toggle from "../../Toggle/Toggle";
import "../ChoiceGroup.css";

export interface OptionsI {
  checked?: boolean;
  required?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  isDisabled?: boolean;
  value: any;
  id?: any;
  customClass?: string;
  helpText?: string | React.ReactNode;
  helpPosition?: "left" | "right" | "top" | "bottom";
}
export interface ToggleGroupI {
  title?: string | React.ReactNode;
  options: OptionsI[];
  name?: string;
  value?: any[];
  onChange?: (val: string | any) => void;
  direction?: "horizontal" | "vertical";
  required?: boolean;
  helpText?: string;
  helpIcon?: React.ReactNode;
  controlStates?: "success" | "warning" | "error";
  customClass?: string;
}

const ToggleGroup = ({
  title,
  name,
  value = [],
  onChange = () => {},
  direction = "vertical",
  required,
  helpIcon,
  controlStates,
  customClass,
  options,
  ...props
}: ToggleGroupI) => {
  const getcontrolStates: { [key: string]: string } = {
    success: "inte-formElement--success",
    warning: "inte-formElement--warning",
    error: "inte-formElement--error",
  };
  const controlStatesVal = controlStates && getcontrolStates[controlStates];

  const [grpVal, setGrpVal] = useState<any[]>([]);
  const handleToggleGroupChange = (state: boolean, val: string | number) => {
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
        "inte-toggleGroup": true,
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
      <div
        className={`inte-toggleGroup__list inte-toggleGroup__list--${direction}`}
      >
        {options.map((item, index) => {
          return (
            <Toggle
              {...item}
              key={index}
              checked={value.includes(item.value)}
              description={item.description}
              label={item.label}
              value={item.value}
              isDisabled={item.isDisabled}
              id={item.id}
              onChange={handleToggleGroupChange}
            />
          );
        })}
      </div>
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

export default ToggleGroup;
