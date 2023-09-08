import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChevronDown, X } from "../../storybook/Foundation/Icons/Icons";
import changePosition from "../../utilities/changePosition";
import handleClickOutside from "../../utilities/handelClickOutside";
import PortalComponent from "../../utilities/PoratalComponent";
import useDelayUnmount from "../../utilities/useDelayTimeout";
import useMobileDevice from "../../utilities/useMobileDevice";
import Button from "../Button/Button";
import getClassNames from "../../utilities/getClassnames";
import handleShadowOnScroll from "../../utilities/handleShadowOnScroll/handleShadowOnScroll";
import useHandleOnDrag from "../../utilities/handelOnDrag/useHandleOnDrag";
import "./Switcher.css";
export interface SwitcherI {
  options: any;
  value: any;
  label?: string;
  optionDescription?: string;
  isDisabled?: boolean;
  customClass?: string;
  isRequired?: boolean;
  direction?: "left" | "right" | "auto";
  ariaLabelledBy?: string;
  closeOnEsc?: boolean;
  onChange: (value: any) => void;
  heading?: string | React.ReactNode;
}
const getModulus = (a: number, b: number) => ((a % b) + b) % b;

const Switcher: React.FC<SwitcherI> = ({
  options,
  value,
  onChange,
  closeOnEsc = false,
  label,
  optionDescription,
  isDisabled = false,
  customClass = "",
  isRequired = false,
  direction = "auto",
  ariaLabelledBy,
  heading,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [select, setSelect] = useState<any>(value);
  const rId = useId();
  const isMobile = useMobileDevice();
  const [current, setCurrent] = useState(() => {
    let result = -1;
    options.map((i: any, index: number) => {
      if (i === value) result = index;
    });
    return result;
  });
  const showDiv = useDelayUnmount(isOpen, 400);
  const switcherRef: any = useRef();
  const scrollRef = useRef<any>(null);
  const parentRef: any = useRef();
  handleShadowOnScroll(scrollRef, showDiv);
  //set the open true or false
  const keyEscHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape" && closeOnEsc && isOpen) {
      onClose();
    }
  };
  function onClose() {
    setIsFocused(false);
    setIsOpen(false);
  }
  useEffect(() => {
    const clickOutsideFun = handleClickOutside(parentRef, switcherRef, onClose);
    const changePos = changePosition(parentRef, switcherRef, { direction });
    if (showDiv) {
      window.addEventListener("keydown", keyEscHandler, true);
      window.addEventListener("resize", changePos, true);
      window.addEventListener("scroll", changePos, true);
      window.addEventListener("click", clickOutsideFun, true);
    }
    return () => {
      window.addEventListener("keydown", keyEscHandler, true);
      window.removeEventListener("scroll", changePos, true);
      window.removeEventListener("resize", changePos, true);
      window.removeEventListener("click", clickOutsideFun, true);
    };
  }, [showDiv]);
  // handle keyup and keyDown codes
  const handelKeyDown = (e: any) => {
    if (isDisabled) return;
    if (isFocused && e.key === "Enter") {
      setIsOpen((isOpen) => !isOpen);
    }
    if (!isOpen) return;
    let currentInd = current;
    const listItem: any = Array.from(
      switcherRef.current.getElementsByClassName(
        "inte-switcherDropdown__item"
      ) ?? []
    );
    if (e.key === "Enter") {
      onHandleChange(options[currentInd]);
      return;
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      currentInd = getModulus(currentInd + 1, listItem.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      currentInd = getModulus(currentInd - 1, listItem.length);
    } else return;
    while (options[currentInd]?.disable) {
      if (e.key === "ArrowDown")
        currentInd = getModulus(currentInd + 1, listItem.length);
      else if (e.key === "ArrowUp") {
        currentInd = getModulus(currentInd - 1, listItem.length);
      }
    }
    setCurrent(currentInd);
  };
  useEffect(() => {
    if (switcherRef.current) {
      const listItem: any = Array.from(
        switcherRef.current.getElementsByClassName(
          "inte-switcherDropdown__item"
        ) ?? []
      );
      listItem[current]?.scrollIntoView({
        block: "nearest",
      });
    }
  }, [current, switcherRef.current]);
  // calculating Dynamic  dimension.
  useLayoutEffect(() => {
    if (showDiv) changePosition(parentRef, switcherRef, { direction })();
  }, [showDiv]);
  // selecting value from dropdown
  const onHandleChange = (value: any) => {
    setSelect(value);
    onChange(value);
    setIsOpen(false);
  };
  // adding class on hover on listItem
  const handelMouseMove = (ind: number) => {
    setCurrent(ind);
  };
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useHandleOnDrag(
    switcherRef,
    scrollRef,
    showDiv,
    onClose
  );

  return (
    <div className={`inte-formElement `}>
      {label ? (
        <label
          id={`inte-switcher__label-${rId}`}
          className={`inte-form__label ${isRequired ? "inte--required" : ""} `
            .replace(/\s\s+/g, " ")
            .trim()}
        >
          {label}
        </label>
      ) : null}
      <div
        ref={parentRef}
        role="button"
        aria-labelledby={`inte-switcher__label-${rId}`}
        {...(isOpen ? { "aria-expanded": "true" } : {})}
        {...(isDisabled ? { "aria-disabled": "true" } : {})}
        {...(isOpen ? { "aria-controls": `inte-switcher${rId}` } : {})}
        className={getClassNames({
          "inte-switcher__current": true,
          "inte-formElement__control": true,
          "inte-switcher--focus": isFocused,
          "inte-switcher--disabled": isDisabled,
        })}
        tabIndex={isDisabled ? -1 : 0}
        onFocus={() => {
          if (isDisabled) return;
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
          setIsOpen(false);
        }}
        onKeyDown={handelKeyDown}
        onClick={() => {
          isDisabled ? setIsOpen(false) : setIsOpen(!isOpen);
        }}
      >
        <div className="inte-switcher__contentWrapper">
          {value.icon && (
            <span className="inte-switcher__icon"> {value?.icon}</span>
          )}
          {value.label && (
            <span className="inte-switcher__content">{value?.label}</span>
          )}
        </div>
        <div className="inte-switcher__arrow">
          <ChevronDown
            size="20"
            color={
              isOpen
                ? "var(--inte-G800)"
                : `${isDisabled ? "var(--inte-G40)" : "var(--inte-G90)"}`
            }
          />
        </div>
      </div>
      <>
        {showDiv && (
          <PortalComponent>
            <div
              onTouchStart={(e: any) => handleTouchStart(e)}
              onTouchMove={(e: any) => handleTouchMove(e)}
              onTouchEnd={handleTouchEnd}
              role="listbox"
              aria-labelledby={ariaLabelledBy}
              aria-activedescendant={select.label}
              id={`inte-switcher${rId}`}
              className={getClassNames({
                "inte-switcherDropdown": true,
                "inte-switcher--mobile": isMobile,
                [customClass]: customClass,
                "inte-switcher--in": !isMobile && isOpen,
                "inte-switcher--out": !isMobile && !isOpen,
                "inte-mobileDevice--in": isMobile && isOpen,
                "inte-mobileDevice--out": isMobile && !isOpen,
              })}
              ref={switcherRef}
              onClick={() => parentRef.current.focus()}
            >
              {isMobile && (
                <div className="inte-switcher__labelWrapper">
                  <div className="inte-switcher__slide"></div>
                  <h3 className="inte-actionList__mobile--heading">
                    {heading || label}
                  </h3>
                  <Button
                    icon={<X color="#1C2433" />}
                    type="textButton"
                    onClick={onClose}
                  />
                </div>
              )}
              <div
                className="inte-switcher__options--group"
                ref={isMobile ? scrollRef : null}
                onTouchStart={(e: any) => handleTouchStart(e)}
              >
                <ul className="inte-switcher__options">
                  {optionDescription && (
                    <li className="inte-switcher__optionDescription">
                      {optionDescription.toUpperCase()}
                    </li>
                  )}
                  {options.map((e: any, index: any) => {
                    const isSelectedOption = select?.label === e.label;
                    return (
                      <li
                        className={getClassNames({
                          "inte-switcherDropdown__item": true,
                          "inte-switcherDropdown__item--selected":
                            isSelectedOption,
                          "inte-switcherDropdown__item--disabled": e.disable,
                          "inte-switcher--hovered": current === index,
                        })}
                        key={e.label}
                        onMouseMove={() => !e.disable && handelMouseMove(index)}
                        onClick={() => {
                          if (!e.disable) {
                            onHandleChange(e);
                          }
                        }}
                      >
                        <div
                          key={index}
                          className={getClassNames({
                            "inte-switcher__itemContent": true,
                          })}
                        >
                          {e.icon && (
                            <span key={index} className="inte-switcher__icon">
                              {e.icon}
                            </span>
                          )}
                          {e.label && (
                            <span className={`inte-switcher__label `}>
                              {" "}
                              {e.label}
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {isMobile && (
              <div onClick={onClose} className="inte-switcher__backdrop" />
            )}
          </PortalComponent>
        )}
      </>
    </div>
  );
};

export default Switcher;
