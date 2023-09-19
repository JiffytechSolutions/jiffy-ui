/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useRef, useEffect, useMemo, useId } from "react";
import getClassNames from "../../utilities/getClassnames";
import useMobileDevice from "../../utilities/useMobileDevice";
import "./RangeSlider.css";
export interface RangeSliderI {
  min: number;
  max: number;
  step?: number;
  isRange?: boolean;
  label: string;
  isDisabled?: boolean;
  toolTip?: boolean;
  id?: string | number;
  customClass?: string;
  value: [number, number] | number | any;
  onChange: (values: [number, number] | any) => void;
}

const RangeSlider: FC<RangeSliderI> = ({
  min,
  max,
  value,
  step = 1,
  isRange = false,
  label = "label",
  isDisabled = false,
  id,
  onChange,
  customClass = "",
  toolTip = false,
}) => {
  const [singleRangeValue, setSingleRangeValue] = useState(value);
  const [isTouchActive, setIsTouchActive] = useState(false);
  const singleRangeRef = useRef<HTMLDivElement>(null);
  const doubleRangeRef = useRef<HTMLDivElement>(null);
  const [leftValue, setLeftValue] = useState(value[0]);
  const [rightValue, setRightValue] = useState(value[1]);
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useMobileDevice();
  const [draggedThumb, setDraggedThumb] = useState<
    "leftThumb" | "rightThumb" | null
  >(null);
  const [tooltip, setTooltip] = useState({ dir: "", display: "" });
  const rId = useId();

  // Single Range Slider
  const handleSliderChange = (clientX: number) => {
    const sliderWidth = singleRangeRef.current?.clientWidth || 0;
    const clickPosition =
      clientX - (singleRangeRef.current?.getBoundingClientRect().left || 0);
    const percentage = clickPosition / sliderWidth;
    const range = max - min;
    let newValue = min + Math.round((percentage * range) / step) * step;
    newValue = Math.min(Math.max(newValue, min), max); // Clamp the value between min and max
    setSingleRangeValue(newValue);
    onChange(newValue);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsTouchActive(true);
    handleSliderChange(event.touches[0].clientX);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsTouchActive(true);
    handleSliderChange(event.clientX);
  };

  const handleTouchEnd = () => {
    setIsTouchActive(false);
  };

  useEffect(() => {
    if (!isTouchActive && toolTip) {
      setTooltip({
        dir: "",
        display: "none",
      });
    }
  }, [isTouchActive]);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isTouchActive) {
        event.preventDefault();
        handleSliderChange(event.clientX);
      }
    };

    const handleMouseUp = () => {
      setIsTouchActive(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    const handleTouchMove = (event: TouchEvent) => {
      if (isTouchActive) {
        event.preventDefault();
        handleSliderChange(event.touches[0].clientX);
      }
    };
    const trackElement = singleRangeRef.current;
    if (trackElement) {
      trackElement.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      if (trackElement) {
        trackElement.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [isTouchActive]);

  // Double Range Slider
  useEffect(() => {
    setLeftValue(value[0]);
    setRightValue(value[1]);
  }, [value]);

  const handleSliderMouseDown = (e: React.MouseEvent | TouchEvent) => {
    e.preventDefault();

    const thumb = e.target as HTMLDivElement;
    if (thumb.classList.contains("inte-doubleRange__leftThumb")) {
      setDraggedThumb("leftThumb");
    } else if (thumb.classList.contains("inte-doubleRange__rightThumb")) {
      setDraggedThumb("rightThumb");
    }
    setIsDragging(true);
  };
  const handleSliderMouseMove = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    if (isDragging && doubleRangeRef.current) {
      const sliderWidth = doubleRangeRef.current.offsetWidth;
      const minPosition = doubleRangeRef.current.getBoundingClientRect().left;
      const currentPosition = isMobile
        ? (e as TouchEvent)?.touches[0]?.clientX
        : (e as MouseEvent).clientX;

      let value =
        min +
        Math.round(
          (((currentPosition - minPosition) / sliderWidth) * (max - min)) / step
        ) *
          step;
      value = value < min ? min : value > max ? max : value;

      if (draggedThumb === "leftThumb") {
        setLeftValue(value);
        onChange([value, rightValue]);
      } else if (draggedThumb === "rightThumb") {
        setRightValue(value);
        onChange([leftValue, value]);
      }
    }
  };

  const handleSliderMouseUp = () => {
    setIsDragging(false);
    setDraggedThumb(null);
    setTooltip({
      dir: "",
      display: "none",
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleSliderMouseMove);
    document.addEventListener("mouseup", handleSliderMouseUp);
    const trackElement = doubleRangeRef?.current;
    if (trackElement && !isDisabled) {
      trackElement.addEventListener("touchstart", handleSliderMouseDown, {
        passive: false,
      });
      trackElement.addEventListener("touchmove", handleSliderMouseMove, {
        passive: false,
      });
      trackElement.addEventListener("touchend", handleSliderMouseUp, {
        passive: false,
      });
    }
    return () => {
      document.removeEventListener("mousemove", handleSliderMouseMove);
      document.removeEventListener("mouseup", handleSliderMouseUp);
      if (trackElement && !isDisabled) {
        trackElement.removeEventListener("touchstart", handleSliderMouseDown);
        trackElement.removeEventListener("touchmove", handleSliderMouseMove);
        trackElement.removeEventListener("touchend", handleSliderMouseUp);
      }
    };
  }, [
    doubleRangeRef.current,
    handleSliderMouseDown,
    handleSliderMouseMove,
    handleSliderMouseUp,
  ]);

  const [width, left] = useMemo(() => {
    const leftPercentage = Math.floor(((leftValue - min) / (max - min)) * 100);
    const rightPercentage = Math.floor(
      ((rightValue - min) / (max - min)) * 100
    );
    const calculatedWidth =
      leftValue > rightValue
        ? leftPercentage - rightPercentage
        : rightPercentage - leftPercentage;
    const calculatedLeft =
      leftValue > rightValue ? rightPercentage : leftPercentage;
    return [calculatedWidth, calculatedLeft];
  }, [leftValue, rightValue, min, max]);

  return (
    <div
      className={getClassNames({
        "inte-rangeSlider": true,
        "inte-rangeSlider--disable": isDisabled,
        [customClass]: customClass,
      })}
    >
      <div className="inte-label__wrapper">
        {label && (
          <label
            id={
              id
                ? `inte-rangeSliderLabel-${id}`
                : `inte-rangeSliderLabel-${rId}`
            }
            htmlFor={id ? `inte-rangeSlider${id}` : `inte-rangeSlider${rId}`}
            className="inte-range__label"
          >
            {label}
          </label>
        )}

        <div className="inte-label__value__wrapper">
          {isRange
            ? leftValue > rightValue
              ? value[1].toLocaleString() + " - " + value[0].toLocaleString()
              : value[0].toLocaleString() + " - " + value[1].toLocaleString()
            : value.toLocaleString()}
        </div>
      </div>
      {toolTip && !isDisabled && (
        <div
          className="inte-rangeSlider__tooltip"
          role="tooltip"
          style={{
            display: tooltip.display,
            left:
              tooltip.dir === ""
                ? `${Math.ceil(
                    ((singleRangeValue - min) / (max - min)) * 100
                  )}%`
                : tooltip.dir === "leftThumb"
                ? `${Math.floor(((leftValue - min) / (max - min)) * 100)}%`
                : `${Math.floor(((rightValue - min) / (max - min)) * 100)}%`,
          }}
        >
          <div className="inte-rangeSlider__toolTip--text">
            {isRange &&
              (draggedThumb === "leftThumb" || tooltip.dir === "leftThumb") &&
              value[0].toLocaleString()}

            {isRange &&
              (draggedThumb === "rightThumb" || tooltip.dir === "rightThumb") &&
              value[1].toLocaleString()}
            {!isRange && value.toLocaleString()}
          </div>
        </div>
      )}

      {isRange ? (
        <div
          className="inte-doubleRange"
          ref={doubleRangeRef}
          onMouseDown={(e) => !isDisabled && handleSliderMouseDown(e)}
        >
          <div
            className="inte-doubleRange__fill"
            style={{
              left: `${left}%`,
              width: `${width}%`,
            }}
          />

          <div
            onMouseEnter={() =>
              setTooltip({ dir: "leftThumb", display: "block" })
            }
            onMouseLeave={() =>
              setTooltip({
                dir: "leftThumb",
                display: draggedThumb === "leftThumb" ? "block" : "none",
              })
            }
            className={getClassNames({
              "inte-doubleRange__thumb inte-doubleRange__leftThumb": true,
              "inte-range__thumb--active":
                draggedThumb === "leftThumb" && !isDisabled,
            })}
            style={{
              left: `${Math.floor(((leftValue - min) / (max - min)) * 100)}%`,
            }}
            role="slider"
            aria-orientation="horizontal"
            aria-label="slider thumb"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value[0]}
            aria-valuetext={value[0]}
            aria-disabled={isDisabled}
          />
          <div
            onMouseEnter={() =>
              setTooltip({ dir: "rightThumb", display: "block" })
            }
            onMouseLeave={() =>
              setTooltip({
                dir: "rightThumb",
                display: draggedThumb === "rightThumb" ? "block" : "none",
              })
            }
            className={getClassNames({
              "inte-doubleRange__thumb inte-doubleRange__rightThumb": true,
              "inte-range__thumb--active":
                draggedThumb === "rightThumb" && !isDisabled,
            })}
            style={{
              left: `${Math.floor(((rightValue - min) / (max - min)) * 100)}%`,
            }}
            role="slider"
            aria-orientation="horizontal"
            aria-label="slider thumb"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value[1]}
            aria-valuetext={value[1]}
            aria-disabled={isDisabled}
          />
        </div>
      ) : (
        <div
          className="inte-singleRange"
          onMouseDown={(e) => !isDisabled && handleMouseDown(e)}
          onTouchStart={(e) => !isDisabled && handleTouchStart(e)}
          onTouchEnd={() => !isDisabled && handleTouchEnd()}
          ref={singleRangeRef}
          role="slider"
          aria-orientation="horizontal"
          aria-label="range slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-disabled={isDisabled}
        >
          <div
            className="inte-singleRange__fill"
            style={{
              width: `${Math.ceil(
                ((singleRangeValue - min) / (max - min)) * 100
              )}%`,
            }}
          />
          <div
            onMouseEnter={() => setTooltip({ dir: "", display: "block" })}
            onMouseLeave={() =>
              setTooltip({
                dir: "",
                display: isTouchActive ? "block" : "none",
              })
            }
            className={`inte-singleRange__thumb ${
              isTouchActive && !isDisabled ? "inte-range__thumb--active" : ""
            }`}
            style={{
              left: `${Math.ceil(
                ((singleRangeValue - min) / (max - min)) * 100
              )}%`,
            }}
          />
        </div>
      )}
      <div className="inte-footerLabel">
        <p className="inte-footerLabel--text">{min.toLocaleString()}</p>
        <p className="inte-footerLabel--text">{max.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default RangeSlider;
