import React from "react";
import TextField from "../TextField/TextField";
import Select from "../Select/Select";
import "./InputPhone.css";

export interface InputPhoneI {
  onCountryChange?: any;
  countryValue?: any;
  countryOptions?: any;
  placeholder?: string;

  // new
  value?: string | number;
  label?: string | React.ReactNode;
  type?: "text" | "number";
  placeHolder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  connectLeft?: React.ReactNode;
  connectRight?: React.ReactNode;
  helpText?: string;
  helpIcon?: React.ReactNode;
  customClass?: string;
  IsReadOnly?: boolean;
  id?: string;
  controlStates?: "success" | "warning" | "error";
  isLoading?: boolean;
  autocomplete?: "on" | "off" | "new-password";
  isClearable?: boolean;
  isRequired?: boolean;
  min?: number;
  max?: number;
  maxlength?: number | string | any;
  isDisabled?: boolean;
  onEnter?: () => void;
  onChange?: (e: any) => void;
  onClear?: () => void;
}

const InputPhone = ({
  onCountryChange,
  value,
  type = "number",
  countryValue,
  countryOptions,
  placeHolder,
  placeholder,

  //new
  onChange = () => {
    return "";
  },
  label = "",
  prefix,
  suffix,
  autocomplete = "off",
  isClearable = false,
  helpIcon,
  isDisabled = false,
  isRequired = false,
  customClass = "",
  controlStates,
  isLoading,
  min,
  max,
  onEnter,
  onClear,
}: InputPhoneI) => {
  return (
    <div className="inte-inputPhone">
      <TextField
        type={type}
        customClass={customClass}
        placeholder={placeHolder}
        onChange={(e) => onChange(e)}
        value={value}
        label={label}
        min={min}
        max={max}
        suffix={suffix}
        prefix={prefix}
        autocomplete={autocomplete}
        isClearable={isClearable}
        helpIcon={helpIcon}
        isRequired={isRequired}
        isDisabled={isDisabled}
        controlStates={controlStates}
        isLoading={isLoading}
        onEnter={onEnter}
        onClear={onClear}
        connectLeft={
          <Select
            onChange={(e) => onCountryChange(e)}
            placeholder={placeholder}
            value={countryValue}
            options={countryOptions}
          />
        }
      />
    </div>
  );
};

export default InputPhone;
