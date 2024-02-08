import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ChevronDown,
  ChevronUp,
} from "../../../storybook/Foundation/Icons/Icons";
import { ClearIcon } from "../../../assets/icon/ActionIcons";
import Spinner from "../../Spinner/Spinner";
import getClassNames from "../../../utilities/getClassnames";
import "./TextField.css";
import "../Form.css";

const TextField = React.forwardRef(
  (
    {
      onChange = () => {
        return "";
      },
      label = "",
      prefix,
      suffix,
      autocomplete = "off",
      isClearable = false,
      hasStrength = false,
      helpIcon,
      isDisabled = false,
      isRequired = false,
      controlStates,
      step = 1,
      customClass = "",
      ariaOwns,
      ariaControls,
      ariaExpanded,
      ariaActiveDescendant,
      hasSpellCheck,
      role,
      ...props
    }: TextfieldI,
    ref: any
  ): JSX.Element => {
    const [color, setColor] = useState("");
    const [per, setPer] = useState<number>(0);
    const [innerIconWidth, SetInnericonWidth] = useState(0);
    const [innerIconWidthSuf, SetInnericonWidthSuff] = useState(0);
    const rId = useId();
    const myRef = useRef<any>();
    const inputRef: any = useRef(null);
    const innerPreref: any = useRef(null);
    const innerSufrefWidth: any = useRef(null);

    const stepperColor: { [key: string]: string } = {
      Poor: "inte-formElement__strength--poor",
      weak: "inte-formElement__strength--weak",
      Strong: "inte-formElement__strength--strong",
    };
    const strengthColor = color && stepperColor[color];
    const getcontrolStates: { [key: string]: string } = {
      success: "inte-formElement--success",
      warning: "inte-formElement--warning",
      error: "inte-formElement--error",
    };
    const controlStatesVal = controlStates && getcontrolStates[controlStates];
    const passwordStrength = (evnt: any) => {
      const passwordValue = evnt;
      const passwordLength = passwordValue.length;
      const poorRegExp = /[a-z]/;
      const AllRegExp = /[A-Z]/;
      const weakRegExp = /(?=.*?[0-9])/;
      const strongRegExp = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
      const All = AllRegExp.test(passwordValue);
      const poorPassword = poorRegExp.test(passwordValue);
      const weakPassword = weakRegExp.test(passwordValue);
      const strongPassword = strongRegExp.test(passwordValue);
      const space = /^\S*$/.test(passwordValue);
      if (passwordValue === "") return;
      // to check poor password
      if (poorPassword || All || weakPassword || strongPassword || !space) {
        setColor("Poor");
        setPer(15);
      }
      // to check weak password
      if ((poorPassword || All) && (weakPassword || strongPassword)) {
        setColor("weak");
        setPer(50);
      }
      // to check strong Password
      if (
        (passwordLength >= 8 &&
          poorPassword &&
          All &&
          weakPassword &&
          strongPassword) ||
        (passwordLength >= 8 &&
          poorPassword &&
          All &&
          weakPassword &&
          strongPassword &&
          space)
      ) {
        setColor("Strong");
        setPer(100);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleKeyPress = (e: any) => {
      if (e.key === "Enter" && e.keyCode === 13 && props.onEnter) {
        props.onEnter();
      }
      if (e.key === "Backspace" && e.keyCode === 8 && props.onBackspace) {
        props.onBackspace();
      }

      if (props.onKeyUp) {
        props.onKeyUp();
      }
    };
    const callBlur = () => {
      if (props.onBlur) {
        props.onBlur();
      }
    };

    const innerPreIconClass = prefix ? "inte-formElement--hasInnerIconPre" : "";
    const innerSufIconClass = suffix ? "inte-formElement--hasInnerIconSuf" : "";

    // Manage padding space of Inner Prefix icon from left
    useLayoutEffect(() => {
      prefix && SetInnericonWidth(innerPreref?.current?.offsetWidth);
    }, [innerPreref, prefix]);
    const innerPreIConWidth = prefix ? innerIconWidth + 26 : 12;

    // Manage padding  of Inner Prefix icon from right
    useLayoutEffect(() => {
      suffix && SetInnericonWidthSuff(innerSufrefWidth?.current?.offsetWidth);
    }, [innerSufrefWidth, suffix]);
    const clearIconWidth = isClearable ? 28 : 0;
    const innerPreIConWidthSuf = suffix ? innerIconWidthSuf + 22 : 12;
    const numberSpinnerwidth = props.type == "number" ? 20 : 0;

    const getInput = () => (
      <>
        <input
          ref={inputRef}
          style={{
            paddingLeft: innerPreIConWidth + "px",
            paddingRight: innerPreIConWidthSuf + clearIconWidth + "px",
          }}
          id={props.id ? props.id : `inte-textField-${rId}`}
          type={props.type}
          disabled={isDisabled && isDisabled}
          value={props.value}
          readOnly={props.IsReadOnly}
          onChange={(e) => {
            if (props.type == "password") {
              passwordStrength(e.target.value);
              onChange(e.target.value);
            } else {
              onChange(e.target.value);
            }
          }}
          autoComplete={autocomplete}
          onBlur={callBlur}
          onKeyUp={handleKeyPress}
          onFocus={props.onFocus}
          min={props.min}
          max={props.max}
          step={step}
          placeholder={props.placeHolder}
          tabIndex={props.tabIndex}
          autoFocus={props.autoFocus}
          className="inte-formElement__control inte-formElement__textField"
          maxLength={props.maxlength}
          spellCheck={hasSpellCheck}
          {...(isDisabled ? { "aria-disabled": "true" } : {})}
          {...(ariaActiveDescendant
            ? { " aria-activedescendant": ariaActiveDescendant }
            : {})}
          {...(ariaControls ? { "aria-controls": ariaControls } : {})}
          {...(ariaOwns ? { "aria-owns": ariaOwns } : {})}
          {...(isRequired ? { "aria-required": "true" } : {})}
          {...(props.isLoading ? { "aria-busy": "true" } : {})}
          aria-expanded={ariaExpanded}
          aria-describedby={`inte-textFiled__description-${
            props.id ? props.id : rId
          }`}
          {...(label
            ? { "aria-labelledby": `inte-textField__label-${rId}` }
            : {})}
          {...(!label && !props.accessbilityLabel
            ? { "aria-label": `inte-textField__label-${rId}` }
            : {})}
          {...(!label && props.accessbilityLabel
            ? { "aria-label": props.accessbilityLabel }
            : {})}
          role={role}
        />
        {props.type == "number" ? (
          <div className="inte-formElement--spinner">
            <span
              onClick={() => {
                if (!!props.max) {
                  if (Number(props.value) < props.max) {
                    Number(props.value) < props.max;
                    if (
                      props.value === "" &&
                      !isNaN(Number(String(props.min)))
                    ) {
                      onChange(Number(props.min));
                    } else {
                      const update =
                        Number(props.value) + Number(step.toString());
                      if (update <= props.max) {
                        onChange(update);
                      } else {
                        onChange(props.value);
                      }
                    }
                  }
                } else {
                  const temp: any =
                    props.value == ""
                      ? props.min?.toString() == ""
                        ? 0
                        : props.min
                      : Number(props.value as string) || 0;
                  const returnvalue = Number(temp) + Number(step.toString());
                  if (
                    props.value === "" &&
                    !isNaN(parseInt(String(props.min)))
                  ) {
                    onChange(Number(props.min));
                  } else {
                    onChange(returnvalue.toString());
                  }
                }
              }}
              className="inte-formElement--spinnerTop"
            >
              <ChevronUp size={20} color="#1c2433" />
            </span>
            <span
              onClick={() => {
                if (!!props.min) {
                  const temp: number =
                    props.value == ""
                      ? 0
                      : parseInt(props.value as string) || 0;
                  const returnvalue = temp - parseInt(step.toString());
                  props.min != undefined
                    ? props.min <= returnvalue
                      ? onChange(returnvalue.toString())
                      : onChange(props.min.toString())
                    : onChange(returnvalue.toString());
                } else {
                  const temp: number =
                    props.value == ""
                      ? 0
                      : parseInt(props.value as string) || 0;
                  const returnvalue = temp - parseInt(step.toString());
                  onChange(returnvalue.toString());
                }
              }}
              className="inte-formElement--spinnerBottom"
            >
              <ChevronDown size={20} color="#1c2433" />
            </span>
          </div>
        ) : (
          ""
        )}
        {props.type == "password" && hasStrength && props.value !== "" && (
          <div className={`inte-formElement__passwordStrenth`}>
            <div
              className={`inte-formElement__strength ${strengthColor}`}
            ></div>
          </div>
        )}
        {isClearable && props.value ? (
          <div
            className="inte-formElement--clear"
            style={{ right: numberSpinnerwidth + innerPreIConWidthSuf + "px" }}
            onClick={props.onClear}
          >
            {<ClearIcon />}
          </div>
        ) : null}
        {props.isLoading ? (
          <div
            className="inte-formElement--loading"
            style={{ right: innerPreIConWidthSuf + "px" }}
          >
            <Spinner color="default" size="medium"></Spinner>
          </div>
        ) : null}
      </>
    );

    const getConnectedField = () => (
      <div className="inte-form--connectedField">
        {props.connectLeft && (
          <div className="inte-form--connectLeft">{props.connectLeft}</div>
        )}
        <div className="inte-formElement__inner" ref={handleRef}>
          {getInput()}
          {innerSufIconClass != "" ? (
            <span
              ref={innerSufrefWidth}
              className={"inte-formElement__innericSuffix"}
            >
              {suffix}
            </span>
          ) : null}
        </div>
        {props.connectRight && (
          <div className="inte-form--connectRight">{props.connectRight}</div>
        )}
      </div>
    );

    useEffect(() => {
      const handleFocus = (e: any) => {
        if (!myRef.current) return;
        if (myRef.current?.contains(e.target)) {
          myRef.current?.classList.add("inte-formElementtextField--focus");
        }
        if (e.key === "Tab" && myRef.current) {
          myRef.current.focus();
        }
        if (e.key === "\\" && myRef.current) {
          myRef.current
            .getElementsByClassName("inte-formElement__textField")[0]
            .focus();
        } else {
          myRef.current?.classList.remove("inte-formElementtextField--focus");
        }
      };
      window.addEventListener("keydown", handleFocus, false);
      return () => {
        window.removeEventListener("keydown", handleFocus, false);
      };
    }, []);

    const handleRef = (ele: any) => {
      if (ref) ref.current = ele;
      if (ele) {
        myRef.current = ele;
      }
    };

    return (
      <div
        className={getClassNames({
          "inte-formElement": true,
          "inte-formElement--loading": props.isLoading,
          "inte-formElement--hasClear": isClearable,
          [controlStatesVal as string]: controlStatesVal,
          [innerPreIconClass]: innerPreIconClass,
          [innerSufIconClass]: innerSufIconClass,
          "inte-formElement--disabled": isDisabled,
          [customClass]: customClass,
        })}
      >
        {label ? (
          <label
            htmlFor={
              props.id ? `${props.id}`.trim() : `inte-textField-${rId}`.trim()
            }
            id={
              props.id
                ? `inte-textField__label-${props.id}`
                : `inte-textField__label-${rId}`
            }
            className={`inte-form__label ${isRequired ? "inte--required" : ""}`
              .replace(/\s\s+/g, " ")
              .trim()}
          >
            {label}
          </label>
        ) : null}
        {props.connectLeft || props.connectRight ? (
          getConnectedField()
        ) : (
          <div className={`inte-formElement__inner`} ref={handleRef}>
            {getInput()}
            {innerPreIconClass != "" ? (
              <span
                onClick={() => inputRef.current.focus()}
                ref={innerPreref}
                className={"inte-formElement__innericPrefix"}
              >
                {prefix}
              </span>
            ) : null}
            {innerSufIconClass != "" ? (
              props.type == "number" ? (
                ""
              ) : (
                <span
                  onClick={() => inputRef.current.focus()}
                  ref={innerSufrefWidth}
                  className={"inte-formElement__innericSuffix"}
                >
                  {suffix}
                </span>
              )
            ) : null}
          </div>
        )}

        {props.helpText && (
          <span
            id={`inte-textFiled__description-${props.id ? props.id : rId}`}
            className={getClassNames({
              "inte-formElement__itemHelp": true,
              "inte-formElement__itemHelp--hasHelpIcon": helpIcon,
            })}
          >
            {helpIcon && <span style={{ display: "flex" }}>{helpIcon}</span>}
            <span>{props.helpText}</span>
          </span>
        )}
      </div>
    );
  }
);

export interface TextfieldI {
  value?: string | number;
  label?: string | React.ReactNode;
  type?: "text" | "number" | "password" | "tel" | "url" | "email";
  placeHolder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  connectLeft?: React.ReactNode;
  connectRight?: React.ReactNode;
  helpText?: string;
  helpIcon?: React.ReactNode;
  customClass?: string;
  IsReadOnly?: boolean;
  id?: string;
  controlStates?: "success" | "warning" | "error" | "default";
  isLoading?: boolean;
  autocomplete?: "on" | "off" | "new-password";
  isClearable?: boolean;
  isRequired?: boolean;
  min?: number;
  max?: number;
  step?: number;
  tabIndex?: number;
  maxlength?: number | string | any;
  hasStrength?: boolean;
  isDisabled?: boolean;
  autoFocus?: boolean;
  hasSpellCheck?: boolean;
  role?: string;
  ariaOwns?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  accessbilityLabel?: string;
  ariaActiveDescendant?: string | any;
  onEnter?: () => void;
  onBlur?: () => void;
  onKeyUp?: () => void;
  onFocus?: () => void;
  onBackspace?: () => void;
  onChange?: (e: any) => void;
  onClear?: () => void;
}

export default TextField;
