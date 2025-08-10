
import { useId } from "react";

import { classnames } from "../../../utilities/globalFunction";
import "./TextArea.css";
import React from "react";

const TextArea = (props: TextAreaI): JSX.Element => {
  const {
    placeholder = "Type..",
    value = "",
    resize = "both",
    required = false,
    helpText,
    onChange = () => {
      return "";
    },
    label = "",
    rows = 3,
    error = false,
    readOnly = false,
  } = props;
  const rId = useId();

  return (
    <div
      className={classnames({
        "jiffyui-textArea": true,
        "jiffyui-formElement--error": error,
      })}
    >
      {label ? (
        <label
          htmlFor={`jiffyui-textArea-${rId}`}
          id={`jiffyui-textArea__label-${rId}`}
          className={classnames({
            "jiffyui-form__label": true,
            "jiffyui--required": required,
          })}
        >
          {label}
        </label>
      ) : null}

      <textarea
        id={`jiffyui-textArea-${rId}`}
        className="jiffyui-formElement_textArea__control jiffyui-formElement__textArea"
        style={{
          opacity: readOnly ? "0.6" : "1",
          width: "100%",
          resize: resize,
        }}
        rows={rows}
        value={value}
        readOnly={readOnly}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        aria-labelledby={`jiffyui-textArea__label-${rId}`}
        {...(required ? { "aria-required": "true" } : {})}
      />
      {helpText ? (
        <span className="jiffyui-formElement__itemHelp">{helpText}</span>
      ) : null}
    </div>
  );
};

export interface TextAreaI {
  onChange?: (e: string) => void;
  value?: string | number;
  label?: string;
  resize?: "horizontal" | "vertical" | "both" | "none";
  placeholder?: string;
  helpText?: string;
  readOnly?: boolean;
  error?: boolean;
  rows?: number;
  required?: boolean;
}

export default TextArea;
