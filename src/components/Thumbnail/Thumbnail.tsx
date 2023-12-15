/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import "./Thumbnail.css";
const Thumbnail: React.FC<ThumbnailI> = ({
  alt = "Image",
  size = "medium",
  src,
  customClass = "",
  objectFit = "fill",
  onLoad,
  onError,
}: ThumbnailI) => {
  //thumnail Sizes
  const checkImageSize: { [key: string]: string } = {
    extraSmall: "inte-thumbnail--extraSmall",
    small: "inte-thumbnail--small",
    medium: "inte-thumbnail--medium",
    large: "inte-thumbnail--large",
    extraLarge: "inte-thumbnail--extraLarge",
  };
  const imageSizeValue = size && checkImageSize[size];
  return (
    <div
      className={`inte-thumbnail__wrapper ${imageSizeValue} ${customClass}`
        .replace(/\s\s+/g, " ")
        .trim()}
    >
      <img
        style={{ objectFit: objectFit }}
        src={src}
        alt={alt}
        width={"100%"}
        height={"100%"}
        className={`inte-thumbnail`}
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
};
export interface ThumbnailI {
  src?: string;
  alt?: string;
  size?: "extraLarge" | "large" | "medium" | "small" | "extraSmall";
  objectFit?: "fill" | "contain" | "cover" | "none";
  customClass?: string;
  onLoad?: (e: any) => void;
  onError?: (e: any) => void;
}
export default Thumbnail;
