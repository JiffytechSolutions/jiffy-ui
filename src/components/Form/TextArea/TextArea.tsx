/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useId } from "react";
import { useState } from "react";
import Badge from "../../Badge/Badge";
import { FlexLayout } from "../../FlexLayout";
import TextStyles from "../../TextStyles/TextStyles";
import "../Form.css";
import "./TextArea.css";

const TextArea = ({
  placeHolder = "Type..",
  value = "",
  resize = "both",
  required = false,
  helpText,
  customClass,
  onChange = () => {
    return ""; // The onchange event occurs when the value of an element has been changed.
  },
  onEnter = () => {
    return ""; // Press the "Enter" key inside the input field to trigger the button
  },
  label = "",
  rows = 3,
  error = false,
  readOnly = false,
  ...props
}: TextfieldI): JSX.Element => {
  const rId = useId()
  const errorCss = error ? "inte-formElement--error" : "";

  return (
    <div className={`inte-formElement inte-textArea ${customClass} ${errorCss}`.replace(/\s\s+/g, " ")
      .trim()}>
      {label ? (
        <label
          htmlFor={
            props.id ? `${props.id}`.trim() : `inte-textArea-${rId}`.trim()
          }
          id={`inte-textArea__label-${rId}`}
          className={`inte-form__label ${required ? "inte--required" : ""}`.replace(/\s\s+/g, " ")
            .trim()}>{label}</label>
      ) : null}

      <textarea
        id={props.id ? props.id : `inte-textArea-${rId}`}
        className={`inte-formElement__control inte-formElement__textArea `.replace(/\s\s+/g, " ")
          .trim()}
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
        placeholder={placeHolder}
        aria-describedby={`inte-textArea__description-${props.id ? props.id : rId}`}
        aria-labelledby={`inte-textArea__label-${rId}`}
        {...(required ? { "aria-required": "true" } : {})}
      />
      {helpText ? (
        <span
          id={`inte-textArea__description-${props.id ? props.id : rId}`}
          className={"inte-formElement__itemHelp"}>{helpText}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export interface TextfieldI {
  onChange?: (e: string) => void;
  value?: string | number;
  label?: string;
  resize?: "horizontal" | "vertical" | "both" | "none";
  placeHolder?: string;
  helpText?: string;
  onEnter?: (arr: any) => void;
  readOnly?: boolean;
  id?: string;
  error?: boolean;
  rows?: number;
  required?: boolean;
  customClass?: string;
}

export default TextArea;
