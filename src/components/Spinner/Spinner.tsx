import React from "react";
import "./Spinner.css";

 const Spinner = ({
  size = "Medium",
  color = "Neutral",
  label = "Loading",
  labelPosition = "Bottom",
  ...props
}: SpinnerI) => {
  const getSpinnerSize = () => {
    switch (size) {
      case "Small":
        return "spinner-small";
      case "Medium":
        return "spinner-medium";
      case "Large":
        return "spinner-large";
      default:
        return "spinner-large";
    }
  };
  const getLabelPosition = () => {
    switch (labelPosition) {
      case "Right":
        return "spinner-labelRight";
      case "Bottom":
        return "spinner-labelBottom";
      default:
        return "";
    }
  };

  const getSpinnerColor = () => {
    switch (color) {
      case "Positive":
        return "spinner-positive";
      case "Negative":
        return "spinner-negative";
      case "Notice":
        return "spinner-notice";
      case "Information":
        return "spinner-info";
      case "Neutral":
        return "spinner-neutral";
      case "Primary":
        return "spinner-primary";
      default:
        return "spinner-neutral";
    }
  };

  const spinnerSize = getSpinnerSize();
  const labelPosition1 = getLabelPosition();
  const spinnerColor = getSpinnerColor();
  return (
    <div className={`spinner ${spinnerSize} ${labelPosition1} ${spinnerColor}`}>
      <div className="spinner-circle"></div>
      {label && <label className="spinner-label">{label}</label>}
    </div>
  );
};

export interface SpinnerI {
  size: "Small" | "Medium" | "Large";
  color?:
    | "Positive"
    | "Negative"
    | "Notice"
    | "Information"
    | "Neutral"
    | "Primary";
  label?: string;
  labelPosition?: "Right" | "Bottom";
}

export default Spinner;