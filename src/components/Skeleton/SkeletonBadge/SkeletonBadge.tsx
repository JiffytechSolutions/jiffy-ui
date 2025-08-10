import React from "react";
import "../Skeleton.css";
export interface SkeletonBadgeI {
  size?: "Small" | "Medium" | "Large";
}

const SkeletonBadge = ({
  size = "Medium",
  ...props
}: SkeletonBadgeI) => {
  const checkSize = (): string => {
    switch (size) {
      case "Small":
        return "SkeletonBadge--small";
      case "Medium":
        return "SkeletonBadge--medium";
      case "Large":
        return "SkeletonBadge--large";
      default:
        return "SkeletonBadge--medium";
    }
  };

  const ThumbnailSize = checkSize();

  return (
    <div className={`skeleton SkeletonBadge ${ThumbnailSize}`}>
      <div className="skeleton-inner"></div>
    </div>
  );
};
export default SkeletonBadge;