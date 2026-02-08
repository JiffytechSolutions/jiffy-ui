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
        return "jf-spinner-small";
      case "Medium":
        return "jf-spinner-medium";
      case "Large":
        return "jf-spinner-large";
      default:
        return "jf-spinner-large";
    }
  };
  const getLabelPosition = () => {
    switch (labelPosition) {
      case "Right":
        return "jf-spinner-labelRight";
      case "Bottom":
        return "jf-spinner-labelBottom";
      default:
        return "";
    }
  };

  const getSpinnerColor = () => {
    switch (color) {
      case "Positive":
        return "jf-spinner-positive";
      case "Negative":
        return "jf-spinner-negative";
      case "Notice":
        return "jf-spinner-notice";
      case "Information":
        return "jf-spinner-info";
      case "Neutral":
        return "jf-spinner-neutral";
      case "Primary":
        return "jf-spinner-primary";
      default:
        return "jf-spinner-neutral";
    }
  };

  const spinnerSize = getSpinnerSize();
  const labelPosition1 = getLabelPosition();
  const spinnerColor = getSpinnerColor();
  return (
    <div className={`jf-spinner ${spinnerSize} ${labelPosition1} ${spinnerColor}`}>
      <div className="jf-spinner-circle"></div>
      {label && <label className="jf-spinner-label">{label}</label>}
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