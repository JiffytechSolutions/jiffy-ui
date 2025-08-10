import { useId } from "react";
import "./Radio.css";
import { classnames } from "../../../utilities/globalFunction";
import React from "react";

export interface RadioI {
  name?: string;
  label?: string | React.ReactNode;
  value?: any;
  onChange?: (val: any) => void;
  checked?: boolean;
  isDisabled?: boolean;
  hasError?: boolean;
  id?: string;
}
const Radio = (props: RadioI) => {
  const { label = "Default label", id, name, value, onChange, checked, isDisabled, hasError } =
    props;
  const rId = useId();
  return (
    <div className="jiffyui-radio">
      <label
        htmlFor={id || `jiffyui-radio-${rId}`}
        className={`jiffyui-radio__label ${isDisabled ? "disbaled" : null}`}
      >
        <div className="jiffyui-radio jiffyui-radio__container">
          <div className="jiffyui-radio jiffyui-radio__inputWrapper"

          >
            <input
              type="radio"
              id={id || `jiffyui-radio-${rId}`}
              name={name}
              aria-disabled="false"
              aria-checked="true"
              aria-describedby="radio-245-helptext-246"
              className={classnames({
                "jiffyui-radio__input": true,
                "jiffyui-radio__input--error": hasError,
              })}
              value={value}
              // onChange={() => onChange?.(value)}
              onChange={isDisabled ? () => { } : () => onChange?.(value)}
              checked={checked}
              disabled={isDisabled}
            />
            <div
              className={classnames({
                "jiffyui-radio__iconWrapper": true,
                "jiffyui-radio__checked": checked,
              })}
            >
              <div
                className="jiffyui-radio__iconContainer"
                style={{ position: "absolute", display: "flex" }}
              >
                <svg
                  aria-hidden="true"
                  height="20px"
                  viewBox="0 0 16 16"
                  width="20px"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="3"
                    fill="hsla(0, 0%, 100%, 1)"
                  ></circle>
                </svg>
              </div>
            </div>
            <div className="jiffyui-radio jiffyui-radio__gap"></div>
            <span className="jiffyui-radio__text">{label}</span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Radio ;
