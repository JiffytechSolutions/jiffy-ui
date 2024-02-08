import React, { useEffect, useRef } from "react";
import { ClearIcon } from "../../../../assets/icon/ActionIcons";
import { Calender } from "../../../../storybook/Foundation/Icons/Icons";
import getClassNames from "../../../../utilities/getClassnames";
import useMobileDevice from "../../../../utilities/useMobileDevice";
import "./TextField.css";
interface TextFieldI {
  onFocus?: (e: any) => void;
  id?: string | number;
  value?: string[];
  onClick?: () => void;
  placeHolder?: string[];
  changeControl?: (currControl: "start" | "end") => void;
  onChange?: (inputValues: string[]) => void;
  currControl?: "start" | "end";
  isRange?: boolean;
  isFocused?: boolean;
  isTime: boolean;
  isOnlyIcon?: boolean;
  hasError?: boolean;
  isDisabled?: boolean;
  onStartClear: () => void;
  onEndClear?: () => void;
}

const TextField = ({
  onFocus = () => {},
  currControl,
  value = ["", ""],
  placeHolder = ["", ""],
  onClick = () => {},
  changeControl = () => {},
  onChange = () => {},
  isRange = false,
  isFocused = false,
  isTime,
  isOnlyIcon,
  hasError,
  isDisabled,
  onStartClear,
  onEndClear,
}: TextFieldI) => {
  const startInput = useRef<HTMLInputElement>(null);
  const endInput = useRef<HTMLInputElement>(null);
  const isMobile = useMobileDevice();

  const handelFirstInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange([e.target.value, value[1]]);
  };

  const handelSecondInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange([value[0], e.target.value]);
  };

  const handleStartInputClick = () => {
    !isMobile && startInput.current?.focus();
    changeControl("start");
  };

  const handleEndInputClick = () => {
    !isMobile && endInput.current?.focus();
    changeControl("end");
  };

  useEffect(() => {
    if (isFocused) {
      if (currControl === "end") !isMobile && endInput.current?.focus();
      else !isMobile && startInput.current?.focus();
    }
  }, [isFocused, currControl]);
  const textFieldRef = useRef<any>();
  return (
    <div
      className={getClassNames({
        "inte-textField__inputContainer": true,
        "inte-textField__inputContainer--active": isFocused,
        "inte-textField__inputContainer--hasTime": isTime,
        "inte-textField__inputContainer--onlyIcon": isOnlyIcon,
        "inte-textField__inputContainer--hasError": hasError,
        "inte-textField__inputContainer--disabled": isDisabled,
      })}
    >
      <div
        className="inte-dateInput__container"
        onClick={() => {
          if (!isDisabled) {
            console.log("click");
            onFocus(true);
            handleStartInputClick();
          }
        }}
      >
        <Calender
          size="20"
          color={isDisabled ? "var(--inte-G40)" : "var(--inte-G90)"}
        />
        {!isOnlyIcon && (
          <>
            <input
              className="inte-dateInput"
              ref={startInput}
              onFocus={(e) => {
                if (isMobile) e.target.blur();
                onFocus(e);
              }}
              disabled={isDisabled}
              type="text"
              autoComplete="off"
              value={value[0] ?? ""}
              onChange={handelFirstInputValueChange}
              placeholder={placeHolder[0]}
            />
            <span
              className={getClassNames({
                "inte-textField__clearBtn": true,
                "inte-textField__clearBtn--active": value[0]?.length,
              })}
              onClick={onStartClear}
            >
              <ClearIcon />
            </span>
          </>
        )}
      </div>
      {isRange && (
        <>
          <div className="inte-textField__inputContainer--seperator"></div>
          <div
            className="inte-dateInput__container"
            ref={textFieldRef}
            onClick={() => {
              if (!isDisabled) {
                console.log("click");
                onFocus(true);
                handleStartInputClick();
              }
            }}
          >
            <Calender
              size="20"
              color={isDisabled ? "var(--inte-G40)" : "var(--inte-G90)"}
            />
            {!isOnlyIcon && (
              <>
                <input
                  className="inte-dateInput"
                  ref={endInput}
                  onFocus={(e) => {
                    if (isMobile) e.target.blur();
                    onFocus(e);
                  }}
                  disabled={isDisabled}
                  autoComplete="off"
                  value={value[1] ?? ""}
                  onChange={handelSecondInputValueChange}
                  placeholder={placeHolder[1] ?? ""}
                />
                <div
                  className={getClassNames({
                    "inte-textField__clearBtn": true,
                    "inte-textField__clearBtn--active": value[1]?.length,
                  })}
                  onClick={onEndClear}
                >
                  <ClearIcon />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TextField;
