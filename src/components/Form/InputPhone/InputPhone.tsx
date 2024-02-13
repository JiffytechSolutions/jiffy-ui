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
  const [val, setValue] = useState();
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
  }, [val]);

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
        onChange={(e) => onChange(e)}
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
              setValue(e);
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
