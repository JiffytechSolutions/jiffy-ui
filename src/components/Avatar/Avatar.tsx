import React from "react";
import "./Avatar.css";
import { User } from "react-feather";
export interface AvatarI {
  size: "Small" | "Medium" | "Large" | "Xlarge";
  shape?: "Circle" | "Squire";
  icon?: React.ReactNode;
  srcIco?: string;
  label?: string;
  onClick?: () => void;
  indicator?: React.ReactNode;
}

const Avatar = ({
  size = "Medium",
  shape = "Squire",
  label = "Label",
  icon = <User />,
  srcIco = "",
  indicator = "",
  onClick,
  ...props
}: AvatarI) => {
  const checkSize = (): string => {
    switch (size) {
      case "Small":
        return "jiffyui-avatar--small";
      case "Medium":
        return "jiffyui-avatar--medium";
      case "Large":
        return "jiffyui-avatar--large";
      case "Xlarge":
        return "jiffyui-avatar--xLarge";
      default:
        return "jiffyui-avatar--medium";
    }
  };

  const checkShape = (): string => {
    switch (shape) {
      case "Circle":
        return "jiffyui-avatar--circle";
      case "Squire":
        return "jiffyui-avatar--squire";
      default:
        return "jiffyui-avatar--squire";
    }
  }
  const avatarSize = checkSize();
  const avatarShape = checkShape();
  return (
    <div onClick={onClick} className={`jiffyui-avatar ${avatarSize} ${avatarShape} ${srcIco ? "jiffyui-has-image-icon" : ""} ${onClick ? "jiffyui-has-action" : ""} ${indicator ? "jiffyui-has-indicator" : ""}`}>
      {indicator ? <div className="jiffyui-avatar-indicator">{indicator}</div> : null}
      <div className="jiffyui-avatar-icon" data-labe={label}>
        {srcIco ? (<img src={`${srcIco}`} alt={label ? label : "Avatar"} />) : icon}
      </div>
    </div>
  );
}

export default Avatar;
