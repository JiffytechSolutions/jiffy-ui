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
        return "jf-tag--small";
      case "Medium":
        return "jf-tag--medium";
      case "Large":
        return "jf-tag--large";
      default:
        return "jf-tag--large";
    }
  };

  const TageSize = checkSize();

  return (
    <div className="jf-tag-wrapp">
      <div className={`jf-tag ${TageSize} ${onDismis ? "jf-hasDismis" : ""}`}>
        <span className="jf-tag-label">{children}</span>
        {onDismis &&
          <span className="jf-tag-clear" onClick={(e: any) => onDismis(e)} role="none">
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