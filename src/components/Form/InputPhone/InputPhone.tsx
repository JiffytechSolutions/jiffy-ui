import React, { useEffect, useRef, useState } from "react";
import TextField from "../TextField/TextField";
import Select from "../Select/Select";
import "./InputPhone.css";

export interface InputPhoneI {
  placeholder?: string;
  value?: string | number;
  label?: string;
  type?: "text" | "number";

  helpText?: string;
  helpIcon?: React.ReactNode;
  customClass?: string;
  IsReadOnly?: boolean;
  controlStates?: "success" | "warning" | "error";
  isClearable?: boolean;
  isRequired?: boolean;
  min?: number;
  max?: number;
  maxlength?: number | string | any;
  isDisabled?: boolean;
  onEnter?: () => void;
  onChange?: (e: any) => void;
  onClear?: () => void;
  onCountryChange?: (e: any) => void;
  countryOptions?: SimpleObjI[];
  countryValue?: string | string[] | number | number[];
}

export interface SimpleObjI {
  label: string;
  value: string | number;
  isDisabled?: boolean;
}

const InputPhone = ({
  value,
  type = "number",
  countryValue,
  countryOptions,
  placeholder,
  label,

  isClearable = false,
  helpIcon,
  isDisabled = false,
  isRequired = false,
  IsReadOnly = false,
  customClass = "",
  controlStates,
  min,
  max,
  onEnter,
  onClear,
  onCountryChange = () => {
    //
  },
  onChange = () => {
    //
  },
}: InputPhoneI) => {
  const myInputRef = useRef<any>(null);

  useEffect(() => {
    const textFieldElement = myInputRef?.current;
    if (textFieldElement && countryValue) {
      const innerNode = textFieldElement.querySelector(
        ".inte-formElement__textField"
      );
      if (innerNode) {
        innerNode.focus();
      }
    }
  }, [onCountryChange, countryValue]);

  return (
    <div className="inte-inputPhone" ref={myInputRef}>
      <TextField
        type={type}
        customClass={customClass}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        value={value}
        label={label}
        min={min}
        max={max}
        IsReadOnly={IsReadOnly}
        isClearable={isClearable}
        helpIcon={helpIcon}
        isRequired={isRequired}
        isDisabled={isDisabled}
        controlStates={controlStates}
        onEnter={onEnter}
        onClear={onClear}
        connectLeft={
          <Select
            onChange={(e) => onCountryChange(e)}
            value={countryValue ?? ""}
            options={countryOptions ?? []}
          />
        }
      />
    </div>
  );
};

export default InputPhone;
