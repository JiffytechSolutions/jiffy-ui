import React, { useId } from "react";
import getClassNames from "../../../utilities/getClassnames";
import "../Form.css";
import "./Radio.css";

const Radio: React.FC<RadioI> = ({
  label,
  name,
  checked,
  onChange, // This function working on the Radio button and set the value true of false
  value = 1,
  id,
  isDisable,
  hasError,
  ...props
}: RadioI) => {

  const rId = useId()

  const radioChangeHandler = () => {
    if (onChange) onChange(value);
  };

  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onChange) {
     onChange(value)
    }
  };

  return (
    <div
      className={getClassNames({
        "inte-radio" : true,
        "inte-radio--disabled" : isDisable,
        [props.customClass as string] : props.customClass
      })}
    >
      <label htmlFor={id ? id : `inte-radio-${rId}`}>
        <input
          aria-describedby={`inte-radio__description-${id ? id : rId}`}
          aria-checked={checked}
          aria-label={id ? id : `inte-radio-${rId}`}
          disabled={isDisable}
          id={id ? id : `inte-radio-${rId}`}
          value={value}
          type="radio"
          name={name}
          onChange={radioChangeHandler}
          checked={checked}
          onKeyDown={handleKeyDown}
          className={getClassNames({
            "inte-radio--fake" : true,
            "inte-radio--error" : hasError,
          })}
        />
        <span className={"inte-radioWrap"}>
          <span className={"inte-radioEle--fake"} />
          {label && <span className="inte-radio__label">{label}</span>}
        </span>
      </label>
      {props.description ? (
        <div id={`inte-radio__description-${id ? id : rId}`} className="inte-radio__description">{props.description}</div>
      ) : (
        ""
      )}
    </div>
  );
};
export interface RadioI {
  onChange?: (val: any) => void;
  name?: string;
  label?: string | React.ReactNode;
  value?: any;
  id?: string;
  checked?: boolean;
  isDisable?: boolean;
  description?: string | React.ReactNode;
  hasError?: boolean;
  customClass?: string;
}

export default Radio;