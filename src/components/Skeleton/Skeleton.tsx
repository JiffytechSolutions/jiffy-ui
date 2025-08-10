import React, { forwardRef } from "react";
import "./Skeleton.css";

export interface SkeletonI {
  variant?: "Primary" | "Secondry" | "Tertiary" | "Link";
  size?: "XSmall" | "Small" | "Medium" | "Large";
  color?: "Primary" | "Positive" | "Negative" | "Waiting" | "Neutral";
  isDisabled?: boolean;
  icon?: string | React.ReactNode;
  isLoading?: boolean;
  isFullWidth?: boolean;
  iconOnly?: boolean;
  alignIcon?: "Left" | "Right";
  onClick?: () => void;
  label?: string;
}

export const Skeleton = forwardRef(({
  variant = "Primary",
  size = "Medium",
  color = "Primary",
  icon,
  isDisabled,
  isLoading,
  isFullWidth,
  iconOnly,
  alignIcon,
  label = "Button",
  ...props
}: SkeletonI, ref: any) => {
  const checkSize = (): string => {
    switch (size) {
      case "XSmall":
        return "btn--xsmall";
      case "Small":
        return "btn--small";
      case "Medium":
        return "btn--medium";
      case "Large":
        return "btn--large";
      default:
        return "btn--medium";
    }
  };
  const checkVarients = (): string => {
    switch (variant) {
      case "Primary":
        return "btn--primary";
      case "Secondry":
        return "btn--secondry";
      case "Tertiary":
        return "btn--tertiary";
      case "Link":
        return "btn--link";
      default:
        return "btn--primary";
    }
  };
  const checkColor = (): string => {
    switch (color) {
      case "Primary":
        return "btn--primary__color";
      case "Positive":
        return "btn--positive__color";
      case "Negative":
        return "btn--negative__color";
      case "Waiting":
        return "btn--waiting__color";
      case "Neutral":
        return "btn--neutral__color";
      default:
        return "";
    }
  };

  const allowSpinnerSize = (): string => {
    switch (size) {
      case "XSmall":
        return "Small";
      case "Small":
        return "Small";
      case "Medium":
        return "Medium";
      case "Large":
        return "Large";
      default:
        return "Medium";
    }
  }
  const ButtonVarent = checkVarients();
  const ButtonSize = checkSize();
  const ButtonColor = checkColor();
  const SpinnerSize: any = allowSpinnerSize();
  return (
    <>Skeleton</>
  );
});
