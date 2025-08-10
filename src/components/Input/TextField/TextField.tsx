import React, { useId, useLayoutEffect, useRef, useState } from "react";
import { X } from "react-feather";

import "./TextField.css";
import { classnames } from "../../../utilities/globalFunction";

const TextField = React.forwardRef(
  (props: TextfieldI, ref: any): JSX.Element => {
    const {
      onChange = () => {
        return "";
      },
      label = "",
      prefix,
      suffix,
      isClearable = false,
      helpIcon,
      isDisabled = false,
      isRequired = false,
      variant,
      step = 1,
      size,
    } = props;

    const rId = useId();
    const inputRef: any = useRef(null);
    const innerPreref: any = useRef(null);
    const innerSufrefWidth: any = useRef(null);
    const [paddingLeft, setPaddingLeft] = useState(0);
    const [paddingRight, setPaddingRight] = useState(0);

    const getcontrolStates: { [key: string]: string } = {
      success: "jiffyui-formElement--success",
      warning: "jiffyui-formElement--warning",
      error: "jiffyui-formElement--error",
    };

    const getsizeStates: { [key: string]: string } = {
      XSmall: "jiffyui-formElement--xSmall",
      Small: "jiffyui-formElement--small",
      Medium: "jiffyui-formElement--medium",
      Large: "jiffyui-formElement--large",
    };

    const controlStatesVal = variant && getcontrolStates[variant];
    const sizeVal = size && getsizeStates[size];
    const clearIconWidth = isClearable ? 28 : 0;
    const numberSpinnerwidth = props.type === "number" ? 20 : 0;

    useLayoutEffect(() => {
      setPaddingLeft(prefix ? innerPreref?.current?.offsetWidth + 16 : null);
      setPaddingRight(
        suffix ? innerSufrefWidth?.current?.offsetWidth + 22 : 12
      );
    }, [prefix, suffix]);

    const getInput = () => (
      <>
        <input
          ref={inputRef}
          style={{
            paddingLeft: paddingLeft ? paddingLeft + "px" : "12px",
            paddingRight: paddingRight + clearIconWidth + "px",
          }}
          id={`jiffyui-textField-${rId}`}
          type={props.type}
          disabled={isDisabled}
          value={props.value}
          readOnly={isDisabled}
          onChange={(e) => {
            if (props.type === "password") {
              onChange(e.target.value);
              return;
            }
            onChange(e.target.value);
          }}
          autoComplete="off"
          onBlur={() => props?.onBlur?.()}
          onKeyUp={() => props?.onKeyUp?.()}
          onFocus={props.onFocus}
          min={props.min}
          max={props.max}
          step={step}
          placeholder={props.placeholder}
          autoFocus={props.autoFocus}
          className="jiffyui-formElement__control jiffyui-formElement__textField"
          maxLength={props.maxlength}
        />
        {isClearable && props.value ? (
          <div
            role="none"
            className="jiffyui-formElement--clear"
            style={{
              right: numberSpinnerwidth + paddingRight + "px",
            }}
            onClick={props.onClear}
          >
            {<X size={16} />}
          </div>
        ) : null}
      </>
    );

    return (
      <div
        className={classnames({
          "jiffyui-formElement": true,
          "jiffyui-formElement--hasClear": isClearable,
          [controlStatesVal as string]: controlStatesVal,
          "jiffyui-formElement--hasPrefix": prefix,
          "jiffyui-formElement--hasSuffix": suffix,
          "jiffyui-formElement--disabled": isDisabled,
          [sizeVal as string]: sizeVal,
        })}
      >
        {label ? (
          <label
            htmlFor={`jiffyui-textField-${rId}`}
            id={`jiffyui-textField__label-${rId}`}
            className={classnames({
              "jiffyui-form__label": true,
              "jiffyui--required": isRequired,
            })}
          >
            {label}
          </label>
        ) : null}

        <div className={`jiffyui-formElement__inner`} ref={ref}>
          {getInput()}

          {prefix !== "" ? (
            <span
              ref={innerPreref}
              className={"jiffyui-formElement__prefixIcon"}
            >
              {prefix}
            </span>
          ) : null}

          {suffix !== "" && props.type !== "number" ? (
            <span
              ref={innerSufrefWidth}
              className={"jiffyui-formElement__suffixIcon"}
            >
              {suffix}
            </span>
          ) : null}
        </div>

        {props.helpText && (
          <span
            id={`jiffyui-textFiled__description-${rId}`}
            className={classnames({
              "jiffyui-formElement__itemHelp": true,
              "jiffyui-formElement__itemHelp--hasHelpIcon": helpIcon,
            })}
          >
            {helpIcon && <span className="jiffyui-formElement__itemHelp--helpIcon">{helpIcon}</span>}
            <span>{props.helpText}</span>
          </span>
        )}
      </div>
    );
  }
);

export interface TextfieldI {
  value?: string | number;
  label?: string | React.ReactNode;
  type?: "text" | "number" | "password" | "tel" | "url" | "email";
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  helpText?: string;
  helpIcon?: React.ReactNode;
  variant?: "success" | "warning" | "error" | "default";
  isClearable?: boolean;
  isRequired?: boolean;
  min?: number;
  max?: number;
  step?: number;
  maxlength?: number | string | any;
  isDisabled?: boolean;
  autoFocus?: boolean;
  onBlur?: () => void;
  onKeyUp?: () => void;
  onFocus?: () => void;
  onChange?: (e: any) => void;
  onClear?: () => void;
  size?: "XSmall" | "Small" | "Medium" | "Large";
}

export default TextField;
