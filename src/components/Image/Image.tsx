import React, { useState, useEffect, useRef } from "react";
import useBodyLock from "../../utilities/UseBodyLock";
import PortalComponent from "../../utilities/PoratalComponent";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  RotateCw,
  X,
  ZoomIn,
  ZoomOut,
} from "../../icons";
import Button from "../Button/Button";
import getClassNames from "../../utilities/getClassnames";
import useDelayUnmount from "../../utilities/useDelayTimeout";
import "./Image.css";
export interface ImageI {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  objectFit?: "fill" | "contain" | "cover" | "none";
  isOpen?: boolean;
  preview?: boolean;
  borderRadius?: string;
  previewText?: string;
  previewIcon?: React.ReactNode;
  title?: React.ReactNode;
  titleBar?: React.ReactNode;
  customClass?: string;
  onClick?: () => void;
  onClose?: () => void;
  onLoad?: () => void;
  onError?: () => void;
  fallback?: string;
  multipleImage?: ImageItemsI[];
}

export interface ImageItemsI {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  fallback?: string;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
  objectFit?: "fill" | "contain" | "cover" | "none";
}

const Image: React.FC<ImageI> = ({
  src,
  alt,
  width = "100%",
  height = "100%",
  customClass = "",
  borderRadius = "8px",
  previewIcon,
  previewText,
  objectFit = "fill",
  isOpen = false,
  preview = false,
  multipleImage = [],
  title,
  titleBar,
  fallback,
  onClick,
  onClose = () => {
    //
  },
  onLoad = () => {
    //
  },
  onError = () => {
    //
  },
}) => {
  const modalImgRef = useRef<any>(null);
  const animation = useDelayUnmount(isOpen, 200);
  const [upDownScale, setUpDownScale] = useState<number>(1);
  const [leftRightScale, setLeftRightScale] = useState<number>(1);
  const [rotate, setRotate] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  if (multipleImage?.length > 0) {
    useBodyLock(isOpen);
  }

  // image rotate to left side functionality
  const handleLeftRotate = () => {
    const a = Math.abs(rotate);
    if (rotate > 0) {
      setRotate(a - 90);
    } else {
      setRotate(-(a + 90));
    }
  };

  // image rotate to right side functionality
  const handleRightRotate = () => {
    setRotate(rotate + 90);
  };

  // zoom in image functionality
  const handleZoomIn = () => {
    const upScale = upDownScale / 2;
    const RightScale = leftRightScale / 2;
    setUpDownScale(() => upDownScale + upScale);
    setLeftRightScale(() => leftRightScale + RightScale);
  };

  //zoom out image functionality
  const handleZoomOut = () => {
    const upScale = upDownScale / 3;
    const RightScale = leftRightScale / 3;
    setUpDownScale(() => upDownScale - upScale);
    setLeftRightScale(() => leftRightScale - RightScale);
  };

  useEffect(() => {
    setUpDownScale(1);
    setLeftRightScale(1);
    setRotate(0);
  }, [animation]);

  const resetImageActivity = () => {
    setUpDownScale(1);
    setLeftRightScale(1);
    setRotate(0);
  };

  const handleNextButtonClick = () => {
    resetImageActivity();
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === multipleImage?.length - 1 ? 0 : prevIndex + 1
        );
        setIsButtonDisabled(false);
      }, 100);
    }
  };

  const handlePreviousButtonClick = () => {
    resetImageActivity();
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? multipleImage?.length - 1 : prevIndex - 1
        );
        setIsButtonDisabled(false);
      }, 100);
    }
  };
  return (
    <React.Fragment>
      <div
        className={getClassNames({
          "inte-image": true,
          [customClass]: customClass,
        })}
        style={{
          borderRadius: borderRadius,
          height: height,
          width: width,
        }}
      >
        {title && <div className="inte-image__title">{title}</div>}
        <img
          src={src == "" ? fallback : src}
          alt={alt}
          className="image-component"
          onClick={() => {
            !preview && onClick?.();
          }}
          onLoad={onLoad}
          onError={onError}
          style={{
            objectFit: objectFit,
            cursor: !!onClick ? "pointer" : "default",
          }}
        />
        {preview && (previewText || previewText) && (
          <div
            className="inte-image__preview"
            onClick={() => {
              preview && onClick?.();
            }}
          >
            {previewIcon && previewIcon}
            {previewText && previewText}
          </div>
        )}
        {titleBar && <div className="inte-image__titleBar">{titleBar}</div>}
      </div>

      {animation && preview && multipleImage?.length > 0 && (
        <PortalComponent>
          <div
            className={getClassNames({
              "inte-image__modalWrapper": true,
              "inte-imageAnimation--in": isOpen,
              "inte-imageAnimation--out": !isOpen,
            })}
          >
            <div className="inte-image__totalItam">
              {currentImageIndex + 1 + "/" + multipleImage?.length}
            </div>

            {multipleImage.length > 1 && (
              <Button
                icon={<ChevronLeft size="24" color="#fff" />}
                onClick={handlePreviousButtonClick}
                customClass="inte-previoue__btn"
                type="secondary"
              />
            )}

            <div
              className="inte-image__modal"
              ref={modalImgRef}
              style={{
                height: multipleImage[currentImageIndex]?.height,
                width: multipleImage[currentImageIndex]?.width,
              }}
            >
              <img
                src={
                  multipleImage[currentImageIndex]?.src == ""
                    ? multipleImage[currentImageIndex]?.fallback
                    : multipleImage[currentImageIndex]?.src
                }
                alt={multipleImage[currentImageIndex]?.alt}
                onClick={multipleImage[currentImageIndex]?.onClick}
                onLoad={multipleImage[currentImageIndex]?.onLoad}
                onError={multipleImage[currentImageIndex]?.onError}
                style={{
                  transform: `translate3d(0px, 0px, 0px) scale3d(${leftRightScale}, ${upDownScale} ,1) rotate(${rotate}deg)`,
                  objectFit: multipleImage[currentImageIndex]?.objectFit,
                  cursor: multipleImage[currentImageIndex]?.onClick
                    ? "pointer"
                    : "default",
                }}
              />
            </div>

            <div className="int-imageModal__preview">
              <div
                className="inte-iange__upDown"
                onClick={() => {
                  if (upDownScale > 0) {
                    setUpDownScale(-upDownScale);
                  } else {
                    setUpDownScale(Math.abs(upDownScale));
                  }
                }}
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="swap"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  style={{ transform: "rotate(90deg)" }}
                >
                  <path d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </div>
              <div
                className="inte-image__leftRight"
                onClick={() => {
                  if (leftRightScale > 0) {
                    setLeftRightScale(-leftRightScale);
                  } else {
                    setLeftRightScale(Math.abs(leftRightScale));
                  }
                }}
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="swap"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </div>

              <Button
                onClick={handleRightRotate}
                type="textButton"
                icon={<RotateCw size="25" color="#fff" />}
              />

              <Button
                onClick={handleLeftRotate}
                type="textButton"
                icon={<RotateCcw size="25" color="#fff" />}
              />

              <Button
                isDisabled={
                  Math.abs(upDownScale) <= 1 && Math.abs(leftRightScale) <= 1
                }
                onClick={() => {
                  Math.abs(upDownScale) > 1 &&
                    Math.abs(leftRightScale) > 1 &&
                    handleZoomOut();
                }}
                type="textButton"
                icon={
                  <ZoomOut
                    size="25"
                    color={
                      Math.abs(upDownScale) <= 1 &&
                      Math.abs(leftRightScale) <= 1
                        ? "silver"
                        : "#fff"
                    }
                  />
                }
              />

              <Button
                onClick={handleZoomIn}
                type="textButton"
                icon={<ZoomIn size="25" color="#fff" />}
              />
              <Button
                onClick={onClose}
                type="textButton"
                icon={<X size="25" color="#fff" />}
              />
            </div>

            {multipleImage.length > 1 && (
              <Button
                icon={<ChevronRight size="24" color="#fff" />}
                onClick={handleNextButtonClick}
                customClass="inte-next__btn"
                type="secondary"
              />
            )}
            <div className="modal-overlay" onClick={onClose} />
          </div>
        </PortalComponent>
      )}
    </React.Fragment>
  );
};

export default Image;
