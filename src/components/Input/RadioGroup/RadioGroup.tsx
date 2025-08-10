import React, { useId } from "react";
import { classnames } from "../../../utilities/globalFunction";

import Radio from "../Radio/Radio";
import "../FormGroup.css";

export interface OptionsI {
  label?: string | React.ReactNode;
  value: any;
  isDisabled?: boolean;
}
export interface RadioGroupI {
  title?: string | React.ReactNode;
  name?: string;
  value?: any;
  onChange?: (val: string | number) => void;
  options: OptionsI[];
  direction?: "horizontal" | "vertical";
  helpText?: string;
  helpIcon?: React.ReactNode;
  type?: "success" | "warning" | "error";
  isClickableFullItem?: boolean;
}

const RadioGroup = (props: RadioGroupI) => {
  const {
    title,
    name,
    value,
    onChange,
    direction = "vertical",
    options,
    helpIcon,
    type,
    isClickableFullItem = false,
  } = props;

  const rName = useId();
  const getcontrolStates: { [key: string]: string } = {
    success: "jiffyui-formElement--success",
    warning: "jiffyui-formElement--warning",
    error: "jiffyui-formElement--error",
  };

  const controlStatesVal = type && getcontrolStates[type];
  return (
    <div
      className={classnames({
        "jiffyui-formGroup": true,
        [controlStatesVal as string]: controlStatesVal,
      })}
    >
      {title && (
        <h2 className="input-group-label">
          {title}
        </h2>
      )}
      <ul
        className={`jiffyui-formGroup__list jiffyui-formGroup__list--${direction}`}
      >
        {options.map((item, index) => {
          return (
            <li
              key={index}
              className={classnames({
                "jiffyui-formGroup__listItem": true,
                "jiffyui-formGroup__listitem--clickable": isClickableFullItem,
              })}
            >
              <Radio
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
          className={classnames({
            "jiffyui-formElement__itemHelp flex gap-8 align-center": true,
            "jiffyui-formElement__itemHelp--hasHelpIcon": helpIcon,
          })}
        >
          {helpIcon && <span style={{ display: "flex" }}>{helpIcon}</span>}
          <span>{props.helpText}</span>
        </span>
      )}
    </div>
  );
};

export default  RadioGroup;
