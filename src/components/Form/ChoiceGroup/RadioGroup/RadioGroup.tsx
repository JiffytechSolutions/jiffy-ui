import React, { useId } from "react";
import getClassNames from "../../../../utilities/getClassnames";
import Radio from "../../Radio/Radio";
import Text from "../../../Text/Text";
import "../ChoiceGroup.css";
export interface OptionsI {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  value: any;
  customClass?: string;
  isDisabled?: boolean;
}
export interface RadioGroupI {
  title?: string | React.ReactNode;
  name?: string;
  value?: any;
  onChange?: (val: string | number) => void;
  options: OptionsI[];
  direction?: "horizontal" | "vertical";
  required?: boolean;
  helpText?: string;
  helpIcon?: React.ReactNode;
  controlStates?: "success" | "warning" | "error";
  customClass?: string;
  isClickableFullItem?: boolean;
}

const RadioGroup = ({
  title,
  name,
  value,
  onChange,
  direction = "vertical",
  required,
  options,
  helpIcon,
  controlStates,
  customClass,
  isClickableFullItem = false,
  ...props
}: RadioGroupI) => {
  const rName = useId();
  const getcontrolStates: { [key: string]: string } = {
    success: "inte-formElement--success",
    warning: "inte-formElement--warning",
    error: "inte-formElement--error",
  };

  const controlStatesVal = controlStates && getcontrolStates[controlStates];
  return (
    <div
      className={getClassNames({
        "inte-radioGroup": true,
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
        className={`inte-radioGroup__list inte-radioGroup__list--${direction}`}
      >
        {options.map((item, index) => {
          return (
            <li
              key={index}
              className={getClassNames({
                "inte-radioGroup__listItem": true,
                "inte-radioGroup__listitem--clickable": isClickableFullItem,
                [item.customClass as string]: item.customClass,
              })}
            >
              <Radio
                description={item.description}
                isDisabled={item.isDisabled}
                label={item.label}
                value={item.value}
                checked={value === item.value}
                onChange={onChange}
                name={name || "radioGroup" + rName}
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

export default RadioGroup;
