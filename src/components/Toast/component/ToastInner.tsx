/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../../Button/Button";
import getClassNames from "../../../utilities/getClassnames";
import useMobileDevice from "../../../utilities/useMobileDevice";
import { AppContext } from "../../../utilities/context/AppContext";
import { ClearIcon } from "../../../assets/icon/ActionIcons";
import "../Toast.css";

function ToastInner({
  message,
  description,
  type = "default",
  hasDestroyIcon = true,
  isPauseOnHover = false,
  timeout = 3000,
  icon,
  showProgressBar = false,
  onUndo,
  customClass = "",
}: ToastI): JSX.Element {
  const [flag, setFlag] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [animationState, setAnimationState] = useState("running");
  const [newTime, setNewTime] = useState(timeout);
  const [timeCheck, setTimeCheck] = useState(Date.now());
  const timerRef: any = useRef<number>();
  const mouseLeaveRef: any = useRef<number>();
  const toastRef = useRef<any>();
  const context = useContext(AppContext);
  const isMobile = useMobileDevice();
  // Checking type of toast
  const checkType: any = {
    success: "inte-toast--success",
    error: "inte-toast--error",
  };
  const controlStates = checkType[type];

  // Deleting toast after particular timeout
  const handleDeleteToast = () => {
    clearTimeout(timerRef.current);
    clearTimeout(mouseLeaveRef.current);
    setIsVisible(false);
    setTimeout(() => {
      setFlag(false);
      toastRef.current &&
        context.toast.handleClearToastItems(toastRef.current.parentElement);
    }, 100);
  };

  useEffect(() => {
    timerRef.current = setTimeout(handleDeleteToast, timeout);
    return () => clearTimeout(timerRef.current);
  }, [timeout]);

  function handleMouseEnter() {
    let currentTime = Date.now() - timeCheck;
    setNewTime(newTime - currentTime);
    setAnimationState("paused");
    clearTimeout(timerRef.current);
    clearTimeout(mouseLeaveRef.current);
  }
  function handleMouseLeave() {
    setTimeCheck(Date.now());
    setAnimationState("running");
    mouseLeaveRef.current = setTimeout(handleDeleteToast, newTime);
  }
  const clearBtn = () => {
    return (
      <span
        role="button"
        onClick={() => {
          handleDeleteToast();
        }}
        className="inte-toast__close"
        aria-label="Close"
      >
        <ClearIcon />
      </span>
    );
  };
  const handleUndo = () => {
    if (onUndo) {
      onUndo();
      handleDeleteToast();
    }
  };
  return (
    <>
      {flag && (
        <div
          ref={toastRef}
          onMouseEnter={() => isPauseOnHover && handleMouseEnter()}
          onMouseLeave={() => isPauseOnHover && handleMouseLeave()}
          className={getClassNames({
            "inte-toast": true,
            "inte-toast--in": isVisible,
            "inte-toast--out": !isVisible,
            "inte-toast--mobileDevice": isMobile,
            [controlStates]: controlStates,
            [customClass]: customClass,
          })}
        >
          <div className="inte-toast__contentWrapper">
            {icon && icon}
            <p className="inte-toast__msg">
              <span>{message}</span>
              {description && <span>{description}</span>}
            </p>
          </div>
          {onUndo ? (
            <div
              className="inte-toast__undo"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                size="thin"
                type="textButton"
                onClick={handleUndo}
                content="Undo"
              />
              {hasDestroyIcon && clearBtn()}
            </div>
          ) : (
            hasDestroyIcon && clearBtn()
          )}
          {showProgressBar && (
            <div className="inte-toast__progressContainer">
              <div
                className="inte-toast__progressBar"
                style={{
                  animationDuration: `${timeout}ms`,
                  animationPlayState: `${animationState}`,
                }}
              ></div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
export interface ToastI {
  message: string;
  description?: string;
  icon?: React.ReactNode;
  hasDestroyIcon?: boolean;
  showProgressBar?: boolean;
  isPauseOnHover?: boolean;
  timeout?: number;
  onUndo?: () => void;
  type?: "success" | "error" | "default";
  customClass?: string;
}
export default ToastInner;
