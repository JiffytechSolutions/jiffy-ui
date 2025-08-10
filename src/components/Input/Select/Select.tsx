import { useEffect, useRef, useState } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import { Check, ChevronDown } from "react-feather";
import {
  classnames,
  getMatchingGroupLabels,
  getMatchingLabels,
} from "../../../utilities/globalFunction";

import "./Select.css";
import Tag from "../../Tag/Tag";
import React from "react";
import Checkbox from "../Checkbox/Checkbox";
export interface SelectI {
  open?: boolean;
  options: any[];
  value?: string | string[];
  onChange: (e: string | string[], i?: any) => void;
  selectionType?: "single" | "multiple";
  type?: "select" | "autoComplete";
  isDisabled?: boolean;
  label?: string;
  placeholder?: string;
  helpText?: string;
  inputValue?: string;
  onInputValueChange?: (e: any) => void;
}

const Select = (props: SelectI) => {
  const {
    options,
    value = "",
    onChange,
    selectionType = "single",
    label,
    placeholder,
    helpText,
    type = "select",
  } = props;
  const [optionsToShow, setOptionsToShow] = useState<any>(options);
  const selectRef = useRef<any>(null);
  const inputBoxRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any>();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const val: any = value;
    type === "autoComplete" && inputBoxRef?.current?.focus();
    const containsGroupKey = options?.some((opt) =>
      opt.hasOwnProperty("group")
    );
    if (containsGroupKey) {
      const selectedVal = getMatchingGroupLabels(
        options,
        val,
        selectionType === "multiple"
      );
      setSelectedValue(selectedVal);
    } else {
      const selectedVal = getMatchingLabels(
        options,
        selectionType === "single" ? [val] : val
      );
      setSelectedValue(selectedVal);
    }
  }, [value]);

  const handleOutsideClick = (event: any) => {
    const container = document.querySelector(".pixel-sc__container");
    if (container && !container.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleFilteroptions = (text: any) => {
    let filteredArray = JSON.parse(JSON.stringify(options));
    const containsGroupKey = options?.some((opt) =>
      opt.hasOwnProperty("group")
    );
    if (containsGroupKey) {
      filteredArray = filteredArray.filter((item: any) => {
        item.group = item.group.filter((obj: any) =>
          obj.label.toLowerCase().includes(text.toLowerCase())
        );
        return item.group.length > 0;
      });
      setOptionsToShow(filteredArray);
    } else {
      let newOpts = options?.filter((item) => {
        return item.label.toLowerCase().includes(text.toLowerCase());
      });
      setOptionsToShow(newOpts);
    }
  };
  const handleItemClick = (item: any) => {
    selectionType === "single"
      ? onChange(item.value)
      : Array.isArray(value) && onChange([...value, item.value], item.value);
    if (selectionType === "multiple") return;
    setIsOpen(false);
  };
  function resizeInputBox(e: any) {
    setIsOpen(true);
    const elem = e.target;
    const value = e.target.value;
    if (value.length < 2) {
      elem.style.width = "100%";
    } else {
      elem.style.width = value.length + 1 + "ch";
    }
  }
  return (
    <div className="pixel-sc">
      {label ? (

        <label className="jiffyui-form__label">
          {label}
        </label>

      ) : null}
      <div className="pixel-sc__container" ref={selectRef}>
        <div
          className="pixel-sc__activator c-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
            type === "autoComplete" && inputBoxRef?.current?.focus();
          }}
          role="none"
        >
          {Array.isArray(value) && value.length > 0 ? (
            <div className="pixel-sc__tags flex-row gap-8 align-center">
              {selectedValue.map((tag: any, ind: number) => {
                return (
                  <Tag
                    key={ind}
                    onDismis={(e: any) => {
                      e.stopPropagation();
                      onChange(value, tag.value);
                    }}
                  >
                    {tag.label}
                  </Tag>
                );
              })}
            </div>
          ) : (
            <>
              {type === "select" && (
                <button>
                  {selectedValue?.length === 0
                    ? placeholder || "Select"
                    : selectedValue?.[0]?.label}
                </button>
              )}
              {type === "autoComplete" && selectionType === "single" && (
                <input
                  placeholder={placeholder || "Search"}
                  ref={inputBoxRef}
                  className="pixel-autocomplete w-full border-none outline-none bg-transparent font-size-14"
                  value={inputText}
                  onChange={(e: any) => {
                    !isOpen && setIsOpen(true);
                    setInputText(e.target.value);
                    handleFilteroptions(e.target.value);
                  }}
                />
              )}
            </>
          )}
          {type === "autoComplete" && selectionType === "multiple" && (
            <input
              ref={inputBoxRef}
              placeholder={placeholder || "Search"}
              className="pixel-autocomplete w-full border-none outline-none bg-transparent font-size-14"
              value={inputText}
              onChange={(e: any) => {
                resizeInputBox(e);
                setInputText(e.target.value);
                handleFilteroptions(e.target.value);
              }}
              style={{ minWidth: "0.1rem" }}
            />
          )}
        </div>
        <div className="pixel-sc__icon">
          <span className="flex-row">
            <ChevronDown height={16} width={16} />
          </span>
        </div>
      </div>
      <Dropdown
        open={isOpen}
        ref={selectRef}
        isWidthEqual={true}
        resizeDependency={selectedValue}
        padding={8}
        onOutsideClick={handleOutsideClick}
      >
        <ul className="pixel-ac__container">
          {(type === "select" ? options : optionsToShow).map(
            (item: any, index: any) => {
              return (
                <li
                  role="none"
                  key={item + index}
                  className={classnames({
                    "pixel-ac__item": true,
                    "pixel-ac__item--group": item.group,
                    "pixel-ac__multiItem flex-row gap-8":
                      selectionType === "multiple" && !item.group,
                    "pixel-sc__item--selected":
                      selectionType === "single" && item.value === value,
                    "pixel-sc__item--multiSelected":
                      Array.isArray(value) && value.indexOf(item.value) !== -1,
                  })}
                  onClick={() => {
                    if (item.group) return;
                    selectionType === "single" &&
                      type === "autoComplete" &&
                      setInputText(item.label);
                    handleItemClick(item);
                  }}
                >
                  {selectionType === "multiple" && !item.group && (
                    <>
                      {/* <span
                        className={`${Array.isArray(value) && value.indexOf(item.value) !== -1
                          ? "v-visible"
                          : "v-hidden"
                          }`}
                      >
                        <Check size={16} stroke="rgb(12, 50, 189)" />
                      </span> */}
                      <span onClick={(e) => e.stopPropagation()}>
                        <Checkbox  checked={Array.isArray(value) && value.indexOf(item.value) !== -1 ? true : false} onChange={() => {
                          if (item.group) return;

                          type === "autoComplete" &&
                            setInputText(item.label);
                          handleItemClick(item);

                        }} />
                      </span>
                    </>
                  )}
                  <div>{item.label}</div>
                  {item.group && (
                    <ul>
                      {item.group.map((child: any, childIndex: any) => {
                        return (
                          <li
                            role="none"
                            className={classnames({
                              "pixel-ac__item": true,
                              "pixel-sc__item--selected": child.value === value,
                              "pixel-ac__multiItem flex-row gap-8":
                                selectionType === "multiple",
                            })}
                            key={child + childIndex}
                            onClick={() => {
                              selectionType === "single" &&
                                type === "autoComplete" &&
                                setInputText(child.label);
                              handleItemClick(child);
                            }}
                          >
                            {selectionType === "multiple" && (
                              <>
                                {/* <span
                                  className={`${Array.isArray(value) &&
                                    value.indexOf(child.value) !== -1
                                    ? "v-visible"
                                    : "v-hidden"
                                    }`}
                                >
                                  <Check size={16} stroke="rgb(12, 50, 189)" />
                                </span> */}
                                <span onClick={(e) => e.stopPropagation()}>
                                  <Checkbox
                                    onChange={() => {
                                      if (child.group) return;

                                      type === "autoComplete" &&
                                        setInputText(child.label);
                                      handleItemClick(child);

                                    }}
                                    checked={Array.isArray(value) && value.indexOf(child.value) !== -1 ? true : false} />
                                </span>
                              </>
                            )}
                            <div>{child.label}</div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            }
          )}
          {optionsToShow.length === 0 && (
            <li>
              <div className="text-center">No search result found</div>
            </li>
          )}
        </ul>
      </Dropdown>
      <div className="jiffyui-formElement__itemHelp">
        {helpText && <span className="pixel-ac__helpText">{props.helpText}</span>}
      </div>
    </div>
  );
};

export default Select;
