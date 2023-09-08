/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Children } from "react";
import FormChild from "./components/FormChild";
import "../Form.css";
import "./FormElement.css";

const FormElement: React.FC<FormElementI> = ({
  horizontal,
  condensed,
  children,
  customClass = "",
}: FormElementI): JSX.Element => {
  const arrayChildren = Children.toArray(children);

  return (
    <div
      className={`inte-form ${horizontal ? "inte-form--horizontal" : ""}  ${
        condensed ? "inte-form--condensed" : ""
      } ${customClass}`
        .replace(/\s\s+/g, " ")
        .trim()}
    >
      {Children.map(arrayChildren, (child, index) => (
        <FormChild key={index}>{child}</FormChild>
      ))}
    </div>
  );
};

export interface FormElementI {
  horizontal?: boolean;
  condensed?: boolean;
  children?: any;
  customClass?: string;
}

export default FormElement;
