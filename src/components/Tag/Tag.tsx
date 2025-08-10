import React from "react";
import "./Tag.css";
import { X } from "react-feather";

const Tag = ({
  children = "Badge",
  size = "Large",
  onDismis,
  ...props
}: TagI) => {
  const checkSize = (): string => {
    switch (size) {
      case "Small":
        return "tag--small";
      case "Medium":
        return "tag--medium";
      case "Large":
        return "tag--large";
      default:
        return "tag--large";
    }
  };

  const TageSize = checkSize();

  return (
    <div className="tag-wrapp">
      <div className={`tag ${TageSize} ${onDismis ? "hasDismis" : ""}`}>
        <span className="tag-label">{children}</span>
        {onDismis &&
          <span className="tag-clear" onClick={(e: any) => onDismis(e)} role="none">
            <X size={16} />
          </span>
        }
      </div>
    </div>
  );
}

export interface TagI {
  size?: "Small" | "Medium" | "Large";
  onDismis?: (e: any) => void | string;
  children: string | React.ReactNode;
}

export default Tag;