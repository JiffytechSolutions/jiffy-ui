import React, { useEffect, useId, useRef, useState } from "react";
import getClassNames from "../../../utilities/getClassnames";
import TextField from "../TextField/TextField";
import { defaultCountries } from "./data/CountryData";
import { ChevronDown, ChevronUp, Search } from "../../../icons";
import { useAddEventListener } from "../../../utilities/useAddEventListener";
import { PhoneInputI } from "./types/types";
import "./PhoneInput.css";
const PhoneInput = ({
  label,
  id,
  placeholder,
  helpText,
  helpIcon,
  isRequired = false,
  isSearchable = false,
  isDisabled = false,
  controlStates,
  onChange = () => null,
  customClass,
}: PhoneInputI) => {
  const [data, setData] = useState(defaultCountries());
  const [width, setWidth] = useState();
  const [searchText, setSearchText] = useState("");
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>({});
  const inputBoxRef: any = useRef();
  const flagContainerRef: any = useRef();
  const rID = useId();
  // Click outside
  const handleClickOutside = (event: any) => {
    if (
      flagContainerRef.current &&
      !flagContainerRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };
  // Adding event on window resize
  useAddEventListener("resize", () =>
    setWidth(inputBoxRef.current.offsetWidth + 25)
  );
  useAddEventListener("click", handleClickOutside, true);
  // Scroll into view
  useEffect(() => {
    if (!open) return;
    const selectedElement = document.querySelector(
      ".inte-phoneInput__country--selected"
    );
    selectedElement?.scrollIntoView(false);
  }, [open]);
  // Click on dropdown options
  const handleItemClick = (item: any) => {
    let ele = "+" + item.dialCode + " ";
    setOpen(false);
    setSelectedItem(item);
    setValue(ele);
    onChange(ele, item);
    inputBoxRef.current.focus();
  };
  // Function call when input text in input box
  const handleInputValueChange = (e: any) => {
    const val = e.target.value;
    const abc = val[val.length - 1];
    if (
      e.nativeEvent.inputType !== "deleteContentBackward" &&
      !/^[0-9+]+$/.test(abc)
    )
      return;
    const flag = val.startsWith("+");
    if (e.nativeEvent.inputType === "deleteContentBackward") {
      onChange(val, selectedItem);
      setValue(val);
      return;
    }
    const countryNumLen = selectedItem.format?.split(".")?.length - 1 || 12;
    const dialCodeLength = selectedItem.dialCode?.length;
    const inputLength = val.replace(/[+\s]/g, "")?.length - 1;
    if (countryNumLen + dialCodeLength === inputLength) return;
    // adding sub-country code
    const checkAreaCodes = val.replace(/^\+| .*/g, "");
    const hasAreaCodes = data.filter(
      (ele: any) => ele.dialCode === checkAreaCodes
    );
    const characterAfterSpace = val.split(" ")[1];
    const findMatchAreaCode = hasAreaCodes.find((ele: any) =>
      ele.areaCodes?.some((item: any) => item === characterAfterSpace)
    );
    if (findMatchAreaCode && val.split(" ").length - 1 < 2) {
      const updatedValue = val + " ";
      setSelectedItem(findMatchAreaCode);
      setValue(updatedValue);
      onChange(updatedValue, findMatchAreaCode);
      return;
    }
    const matchedItem = data.find(
      (ele: any) =>
        ele.dialCode === (flag ? val.slice(1) : val) && ele.priority === 0
    );
    if (matchedItem) {
      setSelectedItem(matchedItem);
      const updatedValue = val.replace(
        matchedItem.dialCode,
        matchedItem.dialCode + " "
      );
      setValue(flag ? updatedValue : "+" + updatedValue);
      onChange(flag ? updatedValue : "+" + updatedValue, matchedItem);
    } else {
      // adding default value
      setValue(flag ? val : "+" + val);
      onChange(flag ? val : "+" + val, selectedItem);
    }
  };
  // search
  const handleSearch = (val: any) => {
    setSearchText(val);
    const lowercaseVal = val.toLowerCase();
    const newData = defaultCountries().filter((ele: any) =>
      ele.name.toLowerCase().includes(lowercaseVal)
    );
    setData(newData);
  };
  // Getting different states like warning , success
  const getcontrolStates: { [key: string]: string } = {
    success: "inte-formElement--success",
    warning: "inte-formElement--warning",
    error: "inte-formElement--error",
  };
  const controlStatesVal: any =
    controlStates && getcontrolStates[controlStates];
  return (
    <div
      className={getClassNames({
        "inte-formElement": true,
        "inte-phoneInput__wrapper": true,
        "inte-formElement--disabled": isDisabled,
        [customClass as string]: customClass,
        [controlStatesVal]: controlStates,
      })}
      {...(isRequired ? { "aria-required": "true" } : {})}
    >
      {label && (
        <label
          htmlFor={id ?? `inte-formElement__phoneInput-${rID}`}
          className={getClassNames({
            "inte-form__label": true,
            "inte--required": isRequired,
          })}
        >
          {label}
        </label>
      )}
      <div
        className={getClassNames({
          "inte-phoneInput": true,
          "inte-phoneInput--searchable": isSearchable,
        })}
      >
        <input
          className="inte-phoneInput__textfield"
          placeholder={placeholder}
          ref={inputBoxRef}
          type="tel"
          value={value}
          onChange={(e) => {
            handleInputValueChange(e);
          }}
          {...(isDisabled ? { disabled: true } : {})}
        />
        <div
          className="inte-phoneInput__flagContainer"
          onClick={() => {
            if (isDisabled) return;
            setOpen((open) => !open);
          }}
          ref={flagContainerRef}
        >
          <div
            className="inte-phoneInput__selectedFlag"
            title={
              selectedItem.name
                ? `${selectedItem.name} : +${selectedItem.dialCode}`
                : "select country from here"
            }
          >
            <div
              className={getClassNames({
                "inte-phoneInput__flag": true,
                "inte-phoneInput__flag--default": !selectedItem.iso2,
                [selectedItem.iso2]: selectedItem.iso2,
              })}
            ></div>
            <div className="inte-phoneInput__arrow">
              {open ? <ChevronUp size="20" /> : <ChevronDown size="20" />}
            </div>
          </div>
          {open && (
            <ul
              className="inte-phoneInput__countryList"
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{
                width: width || inputBoxRef?.current?.offsetWidth + 25,
              }}
            >
              {isSearchable && (
                <li className="inte-phoneInput__item--searchable">
                  <TextField
                    placeholder="Search by country name"
                    value={searchText}
                    prefix={<Search size={16} />}
                    // customClass="inte-phoneInput__searchField"
                    onChange={(e) => handleSearch(e)}
                    isClearable
                    onClear={() => {
                      setSearchText("");
                      setData(defaultCountries());
                    }}
                  />
                </li>
              )}
              {data?.map((ele: any, ind: number) => {
                return (
                  <li
                    key={ind}
                    className={getClassNames({
                      "inte-phoneInput__country": true,
                      "inte-phoneInput__country--selected":
                        ele.iso2 === selectedItem.iso2,
                    })}
                    onClick={() => handleItemClick(ele)}
                  >
                    <div
                      className={getClassNames({
                        "inte-phoneInput__flag": true,
                        [ele.iso2]: ele.iso2,
                      })}
                    ></div>
                    <span className="inte-phoneInput__countryName">
                      {ele.name}
                    </span>
                    <span className="inte-phoneInput__dialCode">
                      +{ele.dialCode}
                    </span>
                  </li>
                );
              })}
              {data?.length === 0 && (
                <li className="inte-phoneInput__noResult">No country found</li>
              )}
            </ul>
          )}
        </div>
      </div>
      {helpText && (
        <span
          className={getClassNames({
            "inte-formElement__itemHelp": true,
            "inte-formElement__itemHelp--hasHelpIcon": helpIcon,
          })}
        >
          {helpIcon ?? null}
          <span>{helpText}</span>
        </span>
      )}
    </div>
  );
};
export default PhoneInput;
