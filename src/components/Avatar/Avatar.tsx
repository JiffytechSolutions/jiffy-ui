import React, { FC, useEffect, useState } from "react";
import Badge from "../Badge/Badge";
import getClassNames from "../../utilities/getClassnames";
import "./Avatar.css";
const Avatar: FC<AvatarI> = ({
  text = "Jon Doe",
  color = "primary",
  size = "small",
  image,
  hasBadge = false,
  animateLines,
  customClass = "",
  onClick,
  ...props
}: AvatarI) => {
  const values = [111, 111, 70, 50, 40, 33, 26, 22, 18, 15];
  const [dashArray, setDashArray] = useState("");
  useEffect(() => {
    const inputValue = animateLines && animateLines - 1;
    if ((inputValue && inputValue < 0) || (inputValue && inputValue > 19))
      return;
    const newDashArray =
      inputValue === 0 ? `${values[0]} 0` : `${values[inputValue || 0]} 10`;
    setDashArray(newDashArray);
  }, [animateLines]);
  //Avatar size code
  const checkSize: { [key: string]: string } = {
    large: "inte-avatar--large",
    medium: "inte-avatar--medium",
    small: "inte-avatar--small",
  };

  //Avatar types code
  const checkColor: { [key: string]: string } = {
    primary: "inte-avtar--primary",
    secondary: "inte-avtar--secondary",
    red: "inte-avtar--red",
    green: "inte-avtar--green",
    yellow: "inte-avtar--yellow",
  };

  const avtarType = color && checkColor[color];
  const avtarSize = size && checkSize[size];
  if (typeof text !== "string") {
    return <></>;
  }
  // extracting First letter from the name
  const displayText = text.includes(" ")
    ? text.charAt(0) + text.charAt(text.lastIndexOf(" ") + 1)
    : text.substring(0, 2);
  return (
    <React.Fragment>
      {image ? (
        <div
          className={getClassNames({
            "inte-avatar inte-avatar__image": true,
            "inte-avatar--pointer": onClick,
            "inte-avatar--animate": animateLines && animateLines !== 0,
            [avtarType]: avtarType,
            [customClass]: customClass,
            [avtarSize]: avtarSize,
          })}
          onClick={(e: any) => onClick && onClick(e)}
        >
          {animateLines && animateLines !== 0 && (
            <svg
              id="loader"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                style={{
                  strokeDasharray: dashArray,
                  stroke: "#8a3ab9",
                  strokeLinecap: "round",
                  strokeWidth: "3",
                }}
              ></circle>
            </svg>
          )}
          <img
            src={image.toString()}
            alt={"Avatar"}
            onError={props.onError}
            onLoad={props.onLoad}
          />
          {hasBadge && (
            <Badge
              type="success"
              dot
              size={`${
                size === "small"
                  ? "small"
                  : size === "large"
                  ? "large"
                  : size === "medium"
                  ? "medium"
                  : "small"
              }`}
            ></Badge>
          )}
        </div>
      ) : (
        <div
          className={getClassNames({
            "inte-avatar inte-avatar__text": true,
            "inte-avatar--pointer": onClick,
            "inte-avatar--animate": animateLines && animateLines !== 0,
            [avtarType]: avtarType,
            [customClass]: customClass,
            [avtarSize]: avtarSize,
          })}
          onClick={(e: any) => onClick && onClick(e)}
        >
          {typeof text == "string" ? (
            <>
              {animateLines && animateLines !== 0 ? (
                <>
                  <svg
                    id="loader"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      style={{
                        strokeDasharray: dashArray,
                        stroke: "#8a3ab9",
                        strokeLinecap: "round",
                        strokeWidth: "3",
                      }}
                    ></circle>
                  </svg>
                  <span>{displayText.toUpperCase()}</span>
                </>
              ) : (
                displayText.toUpperCase()
              )}
            </>
          ) : null}
          {hasBadge && (
            <Badge
              type="success"
              dot
              size={`${
                size === "small"
                  ? "small"
                  : size === "large"
                  ? "large"
                  : size === "medium"
                  ? "medium"
                  : "small"
              }`}
            ></Badge>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export interface AvatarI {
  text?: string | React.ReactNode;
  color?: "primary" | "secondary" | "red" | "yellow" | "green";
  size?: "small" | "medium" | "large";
  image?: string;
  children?: React.ReactNode | any;
  hasBadge?: boolean;
  onError?: () => void;
  onLoad?: () => void;
  onClick?: (e: any) => void;
  animateLines?: number;
  customClass?: string;
}
export default Avatar;
