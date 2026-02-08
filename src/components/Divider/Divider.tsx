import React from "react";
import "./Divider.css";
const Divider = ({
  thickness = "Thinner",
  type = "Solid",
  color = "Normal",
  orientation = "Horizontal",
  ...props
}: DividerI) => {
  const checkThikness = (): string => {
    switch (thickness) {
      case "Thinner":
        return "jf-divider--thinner";
      case "Thin":
        return "jf-divider--thin";
      case "Thick":
        return "jf-divider--thick";
      case "Thicker":
        return "jf-divider--thicker";
      default:
        return "jf-divider--thinner";
    }
  };

  const checkStyle = (): string => {
    switch (type) {
      case "Solid":
        return "jf-divider--solid";
      case "Dashed":
        return "jf-divider--dashed";
      case "Dotted":
        return "jf-divider--dotted";
      default:
        return "jf-divider--solid";
    }
  };

  const checkColor = (): string => {
    switch (color) {
      case "Normal":
        return "jf-indicator--normal";
      case "Subtile":
        return "jf-indicator--subtile";
      case "Muted":
        return "jf-indicator--muted";
      default:
        return "jf-indicator--normal";
    }
  };
  const checkOrientation = (): string => {
    switch (orientation) {
      case "Vertical":
        return "jf-divider--vertical";
      default:
        return "jf-divider--horizontal";
    }
  };

  const dividertThikness = checkThikness();
  const DividerColor = checkColor();
  const dividerStyle = checkStyle();
  const dividerOrientation = checkOrientation();
  return (
    <div className={`jf-divider ${dividertThikness} ${DividerColor} ${dividerStyle} ${dividerOrientation}`}>
    </div>
  );
};

export interface DividerI {
  thickness: "Thinner" | "Thin" | "Thick" | "Thicker";
  type?: "Solid" | "Dashed" | "Dotted";
  color?: "Normal" | "Subtile" | "Muted";
  orientation?: "Horizontal" | "Vertical";
}

export default Divider;