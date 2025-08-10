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
        return "jiffyui-divider--thinner";
      case "Thin":
        return "jiffyui-divider--thin";
      case "Thick":
        return "jiffyui-divider--thick";
      case "Thicker":
        return "jiffyui-divider--thicker";
      default:
        return "jiffyui-divider--thinner";
    }
  };

  const checkStyle = (): string => {
    switch (type) {
      case "Solid":
        return "jiffyui-divider--solid";
      case "Dashed":
        return "jiffyui-divider--dashed";
      case "Dotted":
        return "jiffyui-divider--dotted";
      default:
        return "jiffyui-divider--solid";
    }
  };

  const checkColor = (): string => {
    switch (color) {
      case "Normal":
        return "jiffyui-indicator--normal";
      case "Subtile":
        return "jiffyui-indicator--subtile";
      case "Muted":
        return "jiffyui-indicator--muted";
      default:
        return "jiffyui-indicator--normal";
    }
  };
  const checkOrientation = (): string => {
    switch (orientation) {
      case "Vertical":
        return "jiffyui-divider--vertical";
      default:
        return "jiffyui-divider--horizontal";
    }
  };

  const dividertThikness = checkThikness();
  const DividerColor = checkColor();
  const dividerStyle = checkStyle();
  const dividerOrientation = checkOrientation();
  return (
    <div className={`jiffyui-divider ${dividertThikness} ${DividerColor} ${dividerStyle} ${dividerOrientation}`}>
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