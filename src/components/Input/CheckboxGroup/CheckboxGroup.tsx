import React, { useEffect, useState } from "react";
import { classnames } from "../../../utilities/globalFunction";

import Checkbox from "../Checkbox/Checkbox";
import "../FormGroup.css";

export interface OptionsI {
  label?: string | React.ReactNode;
  value: any;
  isDisabled?: boolean;
}
export interface CheckboxGroupI {
  title?: string | React.ReactNode;
  name?: string;
  value?: any[];
  onChange?: (newVal: any[]) => void;
  options: OptionsI[];
  direction?: "horizontal" | "vertical";
  helpText?: string;
  helpIcon?: React.ReactNode;
  type?: "success" | "warning" | "error";
  isClickableFullItem?: boolean;
}

const CheckboxGroup = (props: CheckboxGroupI) => {
  const {
    title,
    isClickableFullItem,
    name,
    value = [],
    onChange,
    direction,
    options,
    helpIcon,
    type,
  } = props;

  const getcontrolStates: { [key: string]: string } = {
    success: "jiffyui-formElement--success",
    warning: "jiffyui-formElement--warning",
    error: "jiffyui-formElement--error",
  };

  const controlStatesVal = type && getcontrolStates[type];

  const [grpVal, setGrpVal] = useState<any[]>([]);
  const handleCheckboxGroupChange = (state: boolean, val: string | number) => {
    let curr = [...grpVal];
    if (state) curr = [...curr, val];
    else curr = curr.filter((i) => i !== val);
    onChange?.(curr);
  };

  useEffect(() => {
    setGrpVal([...value]);
  }, [value]);

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
      )
      }
      <ul className={`jiffyui-Group__list jiffyui-Group__list--${direction}`}>
        {options.map((item, index) => {
          return (
            <li
              key={index}
              className={classnames({
                "jiffyui-Group__listItem": true,
                "jiffyui-Group__listitem--clickable": isClickableFullItem,
              })}
            >
              <Checkbox
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
      {
        props.helpText && (
          <span
            className={classnames({
              "jiffyui-formElement__itemHelp": true,
              "jiffyui-formElement__itemHelp--hasHelpIcon": helpIcon,
            })}
          >
            {helpIcon && <span style={{ display: "flex" }}>{helpIcon}</span>}
            <span>{props.helpText}</span>
          </span>
        )
      }
    </div >
  );
};

export default  CheckboxGroup;
