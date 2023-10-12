/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Image.css";
import useBodyLock from "../../utilities/UseBodyLock";

export interface ImageProps {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  fallback?: string;
  borderRadius?: string;
  name?: string;
  multipleSrc?: any;
  title?: React.ReactNode;
  titleBar?: React.ReactNode;
  customClass?: string;
  onClick?: (e: any) => void;
  objectFit?: "fill" | "contain" | "cover" | "none";
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = "100%",
  height = "100%",
  customClass = "",
  borderRadius = "8px",
  objectFit = "fill",
  multipleSrc,
  name,
  title,
  titleBar,
  fallback,
  onClick = () => {
    //
  },
}) => {
  const modalImgRef = useRef<any>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [upDownScale, setUpDownScale] = useState<number>(1);
  const [leftRightScale, setLeftRightScale] = useState<number>(1);
  const [rotate, setRotate] = useState<number>(0);
  const closeModal = () => {
    setModalOpen(!modalOpen);
  };
  useBodyLock(modalOpen);
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
  }, [modalOpen]);
  // reset image function
  function resetFunction() {
    setUpDownScale(1);
    setLeftRightScale(1);
    setRotate(0);
  }
  // Image scroll when image pass an array
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <React.Fragment>
      <br />
      <div
        className="inte-image"
        style={{
          borderRadius: borderRadius,
          width: width,
          height: height,
          border: "1px solid #D7D9DB",
          background: "url(<path-to-image>), lightgray 50% / cover no-repeat",
        }}
      >
        {title && <div className="inte-image__title">{title}</div>}
        <img
          src={src ?? fallback}
          alt={alt}
          className={`image-component ${customClass}`}
          onClick={() => {
            closeModal();
            onClick({ src, alt, name });
          }}
          style={{ objectFit: objectFit }}
        />
        {titleBar && <div className="inte-image__titleBar ">{titleBar}</div>}
      </div>

      {modalOpen &&
        createPortal(
          <>
            <div className="inte-image__modalSection">
              <div className="inte-image__totalItam">
                {currentImageIndex +
                  1 +
                  "/" +
                  (multipleSrc?.length > 0 ? multipleSrc?.length : 1)}
              </div>
              {multipleSrc?.length > 0 && (
                <button
                  onClick={() => {
                    resetFunction();
                    setCurrentImageIndex((prevIndex) =>
                      prevIndex === 0 ? multipleSrc?.length - 1 : prevIndex - 1
                    );
                  }}
                  className="inte-previoue__btn"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18.9365L9 12.9365L15 6.93652"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              )}

              <div className="inte-image__modal modal" ref={modalImgRef}>
                <img
                  src={
                    multipleSrc?.length > 0
                      ? multipleSrc[currentImageIndex]
                      : src
                  }
                  alt={alt}
                  style={{
                    transform: `translate3d(0px, 0px, 0px) scale3d(${leftRightScale}, ${upDownScale} ,1) rotate(${rotate}deg)`,
                    objectFit: objectFit,
                  }}
                />
              </div>

              <button className="close-button" onClick={closeModal}>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="int-image__previewFooter">
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

                <div
                  className="inte-image__rightRotate"
                  onClick={handleLeftRotate}
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="rotate-left"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"></path>
                    <path d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"></path>
                  </svg>
                </div>
                <div
                  className="inte-image__leftRotate"
                  onClick={handleRightRotate}
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="rotate-right"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"></path>
                    <path d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"></path>
                  </svg>
                </div>

                <div
                  className={`inte-image__zoomOut ${
                    upDownScale <= 1 && leftRightScale <= 1
                      ? "inte-image__zoomOut--disable"
                      : ""
                  }`}
                  onClick={() => {
                    handleZoomOut();
                  }}
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="zoom-out"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path>
                  </svg>
                </div>

                <div className="inte-image__zoomIn" onClick={handleZoomIn}>
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="zoom-in"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path>
                  </svg>
                </div>
              </div>
              {multipleSrc?.length > 0 && (
                <button
                  onClick={() => {
                    resetFunction();
                    setCurrentImageIndex((prevIndex) =>
                      prevIndex === multipleSrc?.length - 1 ? 0 : prevIndex + 1
                    );
                  }}
                  className="inte-next__btn"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18.9365L15 12.9365L9 6.93652"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
            <div
              className="modal-overlay"
              onClick={() => setModalOpen(false)}
            />
          </>,
          document.body
        )}
    </React.Fragment>
  );
};

export default Image;
