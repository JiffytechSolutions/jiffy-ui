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
        return "jf-avatar--small";
      case "Medium":
        return "jf-avatar--medium";
      case "Large":
        return "jf-avatar--large";
      case "Xlarge":
        return "jf-avatar--xLarge";
      default:
        return "jf-avatar--medium";
    }
  };

  const checkShape = (): string => {
    switch (shape) {
      case "Circle":
        return "jf-avatar--circle";
      case "Squire":
        return "jf-avatar--squire";
      default:
        return "jf-avatar--squire";
    }
  }
  const avatarSize = checkSize();
  const avatarShape = checkShape();
  return (
    <div onClick={onClick} className={`jf-avatar ${avatarSize} ${avatarShape} ${srcIco ? "jf-has-image-icon" : ""} ${onClick ? "jf-has-action" : ""} ${indicator ? "jf-has-indicator" : ""}`}>
      {indicator ? <div className="jf-avatar-indicator">{indicator}</div> : null}
      <div className="jf-avatar-icon" data-labe={label}>
        {srcIco ? (<img src={`${srcIco}`} alt={label ? label : "Avatar"} />) : icon}
      </div>
    </div>
  );
}

export default Avatar;
