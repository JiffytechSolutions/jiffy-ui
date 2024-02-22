import React, { useEffect, useRef, useState } from "react";
import TextField from "../TextField/TextField";
import Select from "../Select/Select";
import "./InputPhone.css";
import getClassNames from "../../../utilities/getClassnames";

export interface InputPhoneI {
  placeholder?: string;
  value?: string | number;
  label?: string;
  type?: "text" | "number";
  helpText?: string;
  helpIcon?: React.ReactNode;
  isSearchable?: boolean;
  customClass?: string;
  IsReadOnly?: boolean;
  controlStates?: "success" | "warning" | "error";
  isClearable?: boolean;
  isRequired?: boolean;
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
  helpText,
  isClearable = false,
  helpIcon,
  isDisabled = false,
  isRequired = false,
  IsReadOnly = false,
  customClass = "",
  controlStates,
  isSearchable = false,
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
  const [selectValue, setSelectValue] = useState();

  useEffect(() => {
    const textFieldElement = myInputRef?.current;
    const node = document.querySelector(".inte-formElement--select-focused");
    if (textFieldElement && countryValue && selectValue) {
      const innerNode = textFieldElement.querySelector(
        ".inte-formElement__textField"
      );
      if (innerNode) {
        innerNode.focus();
        node?.classList.remove("inte-formElement--select-focused");
      }
    }
    const handleKey = (e: any) => {
      if (e.key === "Tab") {
        if (textFieldElement && countryValue && selectValue) {
          if (node) {
            node?.classList.remove("inte-formElement--select-focused");
          }
        }
      }
    };
    const handleKeydown = (e: any) => {
      if (["e", "+", "-", "E"].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKey);
    textFieldElement.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKey);
      textFieldElement.removeEventListener("keydown", handleKeydown);
    };
  }, [selectValue]);

  const handleChange = (event: any) => {
    const value = event;
    const regex = /^[0-9\b]+$/;
    if (value === "" || regex.test(value)) {
      onChange(value);
    }
  };

  return (
    <div
      className={getClassNames({
        "inte-inputPhone": true,
        [customClass as string]: customClass,
      })}
    >
      <TextField
        ref={myInputRef}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        value={value}
        label={label}
        helpText={helpText}
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
            onChange={(e) => {
              setSelectValue(e);
              onCountryChange(e);
            }}
            value={countryValue ?? ""}
            options={countryOptions ?? []}
            isSearchable={isSearchable}
          />
        }
      />
    </div>
  );
};

export default InputPhone;
