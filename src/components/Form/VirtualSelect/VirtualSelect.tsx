/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  Search,
  X,
} from "../../../storybook/Foundation/Icons/Icons";
import Badge from "../../Badge/Badge";
import Skeleton from "../../Skeleton/Skeleton";
import Spinner from "../../Spinner/Spinner";
import { ClearIcon } from "../../../assets/icon/ActionIcons";
import PortalComponent from "../../../utilities/PoratalComponent";
import handleClickOutside from "../../../utilities/handelClickOutside";
import changePosition from "../../../utilities/changePosition";
import Tag from "../../Tag/Tag";
import getClassNames from "../../../utilities/getClassnames";
import handleOnDrag from "../../../utilities/handelOnDrag/useHandleOnDrag";
import useMobileDevice from "../../../utilities/useMobileDevice";
import Button from "../../Button/Button";
import useDelayUnmount from "../../../utilities/useDelayTimeout";
import TextField from "../TextField/TextField";
import { GroupedObjI, SimpleObjI } from "../Select/types/types";
import { VirtualSelectI } from "./types/types";
import useBodyLock from "../../../utilities/UseBodyLock";
import "../Form.css";
import "./VirtualSelect.css";
const VirtualSelect = ({
  id,
  helpText,
  label,
  accessibilityLabel,
  options,
  isMultiSelect = false,
  isSearchable = false,
  isRequired = false,
  helpIcon,
  isLoading = false,
  controlStates,
  isDisabled = false,
  isClearable = false,
  isCreatable = false,
  placeholder,
  customClass = "",
  onChange = () => null,
  onInputChange = () => null,
  value,
  ...props
}: VirtualSelectI): JSX.Element => {
  const memoizedConvertOptions = useMemo(() => {
    const convertOptions = (opt: any) => {
      return opt.flatMap((item: any) => {
        if (item.group) {
          return [
            { label: item.label, count: item.group.length },
            ...item.group,
          ];
        } else {
          return [item];
        }
      });
    };

    return convertOptions;
  }, []);
  const isMobile: boolean = useMobileDevice();
  const rID = useId();
  const [optionsToShow, setOptionsToShow] = useState<any>(
    memoizedConvertOptions(options)
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isSelectFocused, setisSelectFocused] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const [selectedValues, setSelectedValues] = useState<any>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [groupDataPresent, setGroupDataPresent] = useState(false);
  const [visibleItems, setVisibleItems] = useState<any>([]);
  const [translate, setTranslate] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const inputBoxRef = useRef<HTMLInputElement>(null);
  const selectBoxRef = useRef<HTMLDivElement>(null);
  const clearBtnRef = useRef<HTMLDivElement>(null);
  const dropdownListRef = useRef<any>(null);
  const scrollRef = useRef<any>();
  const showDiv = useDelayUnmount(dropdownActive, 200);
  useBodyLock(showDiv && isMobile);
  const labelHeight = isMobile ? 56 : 42;
  const descHeight = isMobile ? 82 : 68;
  const totalHeight = optionsToShow.length * labelHeight;
  let totalContentHeight = optionsToShow.length > 5 ? totalHeight : 24;
  if (optionsToShow.length < 6) {
    optionsToShow.forEach((option: any) => {
      totalContentHeight += option.description ? descHeight : labelHeight;
    });
  }
  // Getting default selected values
  const getDefaultSelectedItems = () => {
    if ("group" in options[0]) {
      const matchingLabels = (options as GroupedObjI[]).reduce(
        (acc: any, option: any) => {
          option.group.map((groupOption: any) => {
            if (isMultiSelect) {
              if (String(value)?.includes(String(groupOption?.value))) {
                acc.push(groupOption);
              }
            } else {
              if (String(groupOption.value) === String(value)) {
                acc.push(groupOption);
              }
            }
          });
          return acc;
        },
        []
      );
      setSelectedValues(matchingLabels);
    } else {
      if (isMultiSelect) {
        const opt = (options as SimpleObjI[]).filter((ele) => {
          return Array.isArray(value) && value.some((val) => val === ele.value);
        });
        setSelectedValues(opt);
      } else {
        const opt = (options as SimpleObjI[]).filter(
          (ele: any) => String(ele.value) == String(value)
        );
        setSelectedValues(opt);
      }
    }
  };
  useEffect(() => {
    if (options.length === 0) return;
    getDefaultSelectedItems();
    const handleClick = handleClickOutside(
      selectBoxRef,
      dropdownListRef,
      () => {
        setDropdownActive(false);
        setIsFocused(false);
      }
    );
    const changePos = changePosition(selectBoxRef, dropdownListRef, {
      width: true,
    });
    window.addEventListener("click", handleClick, true);
    window.addEventListener("scroll", changePos, true);
    window.addEventListener("resize", changePos, true);
    options[0] && setGroupDataPresent("group" in options[0]);
    isDisabled && setDropdownActive(false);
    return () => {
      window.removeEventListener("click", handleClick, true);
      window.removeEventListener(
        "click",
        handleClickOutside(selectBoxRef, dropdownListRef, () => {
          setDropdownActive(false);
          setIsFocused(false);
        }),
        true
      );
      window.removeEventListener(
        "scroll",
        changePosition(selectBoxRef, dropdownListRef, { width: true }),
        true
      );
      window.removeEventListener(
        "resize",
        changePosition(selectBoxRef, dropdownListRef, { width: true }),
        true
      );
    };
  }, [isDisabled]);
  useEffect(() => {
    typeof value === "string"
      ? value !== "" && setSelectedOptions([value])
      : setSelectedOptions(value);
  }, [value]);
  // Scrolling options using arrow keys
  const handleKeyDown = (event: any) => {
    if (event.key === "Tab") {
      setisSelectFocused(true);
    }
    if (isFocused && event.key === "Enter") {
      isMultiSelect
        ? setDropdownActive(true)
        : setDropdownActive((dropdownActive) => !dropdownActive);
      if (!dropdownActive && itemIndex > 3) {
        setTimeout(() => scrollToSelectedOption(), 1);
      }
    }
    if (!dropdownActive) return;
    if (event.key === "Enter") {
      const selectedItem = optionsToShow[translate + selectedIndex];
      if (selectedItem.count || selectedItem.isDisabled) return;
      dropdownItemClickHandler(selectedItem);
      return;
    }
    const container = scrollRef.current;
    const visibleItemCount = Math.ceil(250 / labelHeight);
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (itemIndex <= 0) return;
      if (selectedIndex > 0) {
        setSelectedIndex((selectedIndex) => selectedIndex - 1);
        setItemIndex((itemIndex) => itemIndex - 1);
      } else {
        const nextIndex = getNextOptionIndex(
          groupDataPresent ? itemIndex - 1 : itemIndex,
          -1,
          optionsToShow
        );
        let translateByKey =
          (nextIndex - selectedIndex - (groupDataPresent ? 0 : 1)) *
          labelHeight;
        container.scrollTo({ top: translateByKey });
        groupDataPresent
          ? setItemIndex((itemIndex) =>
              itemIndex - nextIndex === 2 && groupDataPresent
                ? itemIndex - 2
                : itemIndex - 1
            )
          : setItemIndex((itemIndex) => itemIndex - 1);
      }
    } else if (event.key === "ArrowDown" && itemIndex < optionsToShow.length) {
      event.preventDefault();
      if (selectedIndex >= visibleItemCount - 1) {
        const nextIndex = getNextOptionIndex(itemIndex, 1, optionsToShow);
        const translateByKey = (nextIndex + 1 - selectedIndex) * labelHeight;
        container.scrollTo({
          top: translateByKey + (groupDataPresent ? -24 : 24),
        });
        groupDataPresent
          ? setItemIndex((itemIndex) =>
              itemIndex === nextIndex ? itemIndex + 1 : itemIndex + 2
            )
          : setItemIndex((itemIndex) => itemIndex + 1);
      } else {
        if (selectedIndex < visibleItems.length - 1) {
          setSelectedIndex((selectedIndex) => selectedIndex + 1);
          setItemIndex((itemIndex) => itemIndex + 1);
        }
      }
    }
  };
  const getNextOptionIndex = (
    currentIndex: number,
    step: number,
    opt: any[]
  ) => {
    let nextIndex = currentIndex;
    if (opt[nextIndex].count) {
      return nextIndex + step;
    }
    return currentIndex;
  };
  const handleScroll = () => {
    const container: any = scrollRef.current;
    const totalItems = optionsToShow.length;
    const visibleItemCount = Math.ceil(250 / labelHeight);
    const scrollTop = container.scrollTop;
    const startIndex = Math.floor(scrollTop / labelHeight);
    const endIndex = Math.min(startIndex + visibleItemCount, totalItems);
    let mobileStartIndex = startIndex > 10 ? startIndex - 9 : startIndex;
    setTranslate(isMobile ? mobileStartIndex : startIndex);
    const bufferItemsAtEnd = isMobile ? 20 : 5;
    setVisibleItems(
      optionsToShow.slice(
        isMobile ? mobileStartIndex : startIndex,
        endIndex + bufferItemsAtEnd
      )
    );
  };
  // Scroll event added
  useEffect(() => {
    if (!dropdownActive) return;
    if (isMobile && !showDiv) return;
    const container: any = scrollRef.current;
    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownActive, optionsToShow, showDiv]);
  // setting position
  useEffect(() => {
    changePosition(selectBoxRef, dropdownListRef, { width: true })();
  }, [dropdownActive, selectedOptions, inputValue, optionsToShow]);
  // Calling search function
  useEffect(() => {
    isSearchable
      ? searchHandler()
      : setOptionsToShow(memoizedConvertOptions(options));
  }, [inputValue, isSearchable, options]);
  // on outside click
  const onClose = () => {
    setIsFocused(false);
    setDropdownActive(false);
  };
  // On mobile device
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = handleOnDrag(
    dropdownListRef,
    isMobile ? scrollRef : null,
    showDiv,
    onClose
  );
  // Selected items in form of tags in case of multiSelect
  const SelectedItemsInMultiSelect = () => {
    return selectedValues.map((item: any, index: number) => (
      <Tag
        key={index}
        onDestroy={() => {
          if (!isDisabled) {
            dropdownItemClickHandler(item);
            isSearchable && inputBoxRef.current?.focus();
          }
        }}
        children={item.label}
        isDisabled={isDisabled}
      />
    ));
  };
  /*Clicking on select box block starts*/
  // Render simple data like label,value
  const renderDropdownItems = (item: SimpleObjI | any, index: any) => {
    const isSelectedOption = Array.isArray(selectedOptions)
      ? selectedOptions.some((option) => option === item?.value)
      : selectedOptions === item?.value;
    const isGroupItem = "value" in item;
    return (
      <li
        role={"option"}
        className={getClassNames({
          "inte-virtualSelect__item": true,
          "inte-virtualSelect__item--active":
            isSelectedOption && !isMultiSelect,
          "inte-virtualSelect__item--disabled": item.isDisabled,
          "inte-virtualSelect__item--group inte-virtualSelect__groupHeader":
            !isGroupItem,
        })}
        key={`${item.label}.${item.value}.${index}`}
        onClick={() => {
          if (!item.isDisabled && isGroupItem) {
            dropdownItemClickHandler(item);
          }
        }}
        style={{
          backgroundColor:
            selectedIndex === index && isGroupItem && !isMobile
              ? "var(--inte-G20)"
              : "var(--inte-G0)",
        }}
        onMouseMove={() => {
          if (!item.isDisabled) {
            setSelectedIndex(index);
            const optionIndex = memoizedConvertOptions(options).findIndex(
              (o: any) => o.value === item.value
            );
            setItemIndex(optionIndex);
          }
        }}
      >
        {isMultiSelect && isGroupItem && (
          <span
            style={{
              visibility: isSelectedOption ? "visible" : "hidden",
            }}
          >
            <Check size="20" color="var(--inte-P900)" />
          </span>
        )}
        <div
          className={getClassNames({
            "inte-virtualSelect__itemInner": true,
            "inte-virtualSelect__itemInner-grouped": item.count,
          })}
        >
          {item._isNew_ ? (
            <span>Create "{item.label}"</span>
          ) : (
            <>
              <span>{item.label}</span>
              {!isMobile && item.count && (
                <Badge
                  badgeTextColor="light"
                  size="small"
                  customBgColor="var(--inte-P900)"
                >
                  {item.count}
                </Badge>
              )}
            </>
          )}
          {item.description && <span>{item.description}</span>}
        </div>
      </li>
    );
  };
  // Handle virtual select
  const handleVirtualSelect = () => {
    return (
      <div
        style={{
          height: `${totalContentHeight}px`,
        }}
      >
        <ul
          className={getClassNames({
            "inte-virtualSelect__items-container": true,
            "inte-virtualSelect__items-container--multiSelect": isMultiSelect,
          })}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            transform: `translateY(${translate * labelHeight}px)`,
          }}
        >
          {visibleItems.map((option: any, index: any) =>
            renderDropdownItems(option, index)
          )}
        </ul>
      </div>
    );
  };
  // Rendering the dropdown
  const portalDropDownList = (
    <>
      <div
        ref={dropdownListRef}
        className={getClassNames({
          "inte-virtualSelect__dropdown": !isMobile,
          "inte-mobileDevice--in inte-virtualSelect__dropdown--onMobile":
            isMobile && dropdownActive,
          "inte-mobileDevice--out inte-virtualSelect__dropdown--onMobile":
            isMobile && !dropdownActive,
          [customClass]: customClass,
        })}
        onTouchStart={(e: any) => handleTouchStart(e)}
        onTouchMove={(e: any) => handleTouchMove(e)}
        onTouchEnd={handleTouchEnd}
      >
        {isMobile && (
          <>
            <div className="inte-virtualSelect__mobileHeader__wrapper">
              <div className="inte-virtualSelect__slide"></div>
              <h3 className="inte-virtualSelect__mobile--heading">
                Select an Option
              </h3>
              <Button
                icon={<X color="#1C2433" size={20} />}
                type="textButton"
                onClick={onClose}
                size="extraThin"
                customClass="inte-virtualSelect__closeBtn"
              />
            </div>
          </>
        )}
        {isMobile && isSearchable && (
          <div className="inte-virtualSelect__dropdown-textField">
            <TextField
              placeHolder="Search"
              prefix={<Search size={20} />}
              onChange={(e) => {
                setInputValue(e);
                onInputChange(e);
                const container = scrollRef.current;
                if (container) container.scrollTop = 0;
              }}
              isClearable
              value={inputValue}
              onClear={() => {
                setInputValue("");
              }}
            />
          </div>
        )}
        {isMobile && isMultiSelect && selectedValues.length !== 0 && (
          <div className="inte-virtualSelect__dropdown-selectedItems">
            <SelectedItemsInMultiSelect />
          </div>
        )}
        <div
          ref={scrollRef}
          aria-label="inte-virtualSelect__options"
          role={"listbox"}
          className={"inte-virtualSelect__options"}
          style={{ position: "relative" }}
          onTouchStart={(e: any) => handleTouchStart(e)}
        >
          {isLoading ? (
            <li className="inte-virtualSelect__skeletonWrapper">
              <div className="inte-virtualSelect__skeleton">
                <Skeleton height="12px" line={1} type="custom" width="35%" />
                <Skeleton height="12px" line={1} type="custom" width="75%" />
              </div>
              <div className="inte-virtualSelect__skeleton">
                <Skeleton height="12px" line={1} type="custom" width="35%" />
                <Skeleton height="12px" line={1} type="custom" width="75%" />
              </div>
            </li>
          ) : optionsToShow?.length !== 0 ? (
            <>{handleVirtualSelect()}</>
          ) : (
            <li className="inte-virtualSelect-box__no-options-container">
              <div className="inte-virtualSelect-box__no-options">
                <Search size="20" color="var(--inte-G90)" />
                <span>No result Found!</span>
              </div>
              <span>Check your search term "{inputValue}"</span>
            </li>
          )}
        </div>
      </div>
      {isMobile && (
        <div
          className="inte-virtualSelect__overlay"
          onClick={() => setDropdownActive(false)}
        ></div>
      )}
    </>
  );
  // Clicking on dropdown list items
  const dropdownItemClickHandler = (item: any) => {
    if (isMultiSelect) {
      let newSelectedValues = [...selectedOptions];
      let newSelectedOpt = [...selectedValues];
      const index = selectedOptions.findIndex((ele: any) => ele === item.value);
      const optIndex = selectedValues.findIndex(
        (ele: any) => ele.value === item.value
      );
      if (optIndex !== -1) {
        newSelectedOpt.splice(index, 1);
      } else {
        newSelectedOpt.push(item);
      }
      if (index !== -1) {
        newSelectedValues.splice(index, 1);
      } else {
        newSelectedValues.push(item.value);
      }
      setSelectedValues(newSelectedOpt);
      onChange(newSelectedValues);
    } else {
      setSelectedValues([item]);
      onChange(item.value);
    }
    if (inputBoxRef.current !== null) {
      inputBoxRef.current.style.width = "0";
    }
    setInputValue("");
    !isMultiSelect && setDropdownActive(false);
    selectBoxRef.current?.focus();
    !isMobile && isSearchable && inputBoxRef.current?.focus();
    itemIndex > 3 &&
      itemIndex < optionsToShow.length - 6 &&
      !isMultiSelect &&
      setSelectedIndex(0);
  };
  const insideSelectClickHandler = (e: any) => {
    !isMobile && isSearchable && inputBoxRef.current?.focus();
    setDropdownActive((dropdownActive) => !dropdownActive);
    if (!dropdownActive && itemIndex > 3) {
      setTimeout(() => scrollToSelectedOption(), 1);
    }
  };
  const scrollToSelectedOption = () => {
    if (selectedValues.length !== 0) {
      const lastItem = selectedValues[selectedValues.length - 1];
      const optionPosition = calculateOptionPosition(lastItem);
      scrollRef.current.scrollTop = optionPosition;
    }
  };
  const calculateOptionPosition = (opt: any) => {
    const optionIndex = memoizedConvertOptions(options).findIndex(
      (o: any) => o.value === opt.value
    );
    setItemIndex(optionIndex);
    return optionIndex * labelHeight;
  };
  /* Clicking on select box block ends*/
  const inputBoxHandler = () => {
    return (
      <input
        {...(label === undefined && accessibilityLabel
          ? { "aria-label": accessibilityLabel }
          : !label &&
            !accessibilityLabel && { "aria-label": `inte-formElement-${rID}` })}
        {...(label && {
          "aria-labelledby": `inte-formElement__select-${rID}`,
        })}
        className={getClassNames({
          "inte-formElement__search": true,
          "inte-virtualSelect--disabled": isDisabled,
        })}
        style={{ minWidth: "0.1rem" }}
        spellCheck="false"
        autoComplete="off"
        onChange={(e) => {
          const container = scrollRef.current;
          if (container) container.scrollTop = 0;
          resizeInputBox(e.target);
          setInputValue(e.target.value);
          onInputChange(e.target.value);
          setSelectedIndex(0);
        }}
        onKeyDown={(e) => inputKeyPressHandler(e)}
        type={"text"}
        ref={inputBoxRef}
        value={inputValue}
        disabled={isDisabled}
      />
    );
  };
  // Checking if backspace key is pressed by user
  const inputKeyPressHandler = (e: any) => {
    if (e.key === "Backspace" && inputValue === "" && selectedOptions.length) {
      dropdownItemClickHandler(selectedValues[selectedValues.length - 1]);
    }
  };
  // Resize the input box width
  function resizeInputBox(ele: any) {
    ele.style.width =
      ele.value.length === 0
        ? ele.value.length + "ch"
        : ele.value.length + 0.5 + "ch";
  }
  // Searching implementation and input box width resize
  const searchHandler = () => {
    let filteredArray = JSON.parse(JSON.stringify(options));
    if (inputValue !== "") {
      setDropdownActive(true);
      const newOption = {
        label: inputValue,
        value: inputValue,
        _isNew_: true,
      };
      const isFound = function () {
        return options.some((i: any) => {
          if (i.group) {
            const opt = i.group.some((i: any) => {
              if (i.label.toLowerCase() === inputValue.toLowerCase())
                return true;
              return false;
            });
            return opt;
          } else {
            if (i.label.toLowerCase() === inputValue.toLowerCase()) return true;
            return false;
          }
        });
      };
      if (groupDataPresent) {
        // Making a deep copy of array , so that it does not mutted the main array
        filteredArray = filteredArray.filter((item: any) => {
          item.group = item.group.filter((obj: any) =>
            obj.label.toLowerCase().includes(inputValue.toLowerCase())
          );
          return item.group.length > 0;
        });
        isCreatable && !isFound()
          ? setOptionsToShow([
              ...memoizedConvertOptions(filteredArray),
              newOption,
            ])
          : setOptionsToShow(memoizedConvertOptions(filteredArray));
      } else {
        filteredArray = (filteredArray as SimpleObjI[])?.filter((item) => {
          return item.label.toLowerCase().includes(inputValue.toLowerCase());
        });
        isCreatable && !isFound()
          ? setOptionsToShow([...filteredArray, newOption])
          : setOptionsToShow(memoizedConvertOptions(filteredArray));
      }
    } else {
      setOptionsToShow(memoizedConvertOptions(options));
    }
  };
  // Placeholder
  const getPlaceholder = () => {
    return (
      <span className={`inte-formElement__placeholder`}>
        {placeholder ? placeholder : "Select"}
      </span>
    );
  };
  // Getting different states like warning , success
  const getcontrolStates: { [key: string]: string } = {
    success: "inte-formElement--success",
    warning: "inte-formElement--warning",
    error: "inte-formElement--error",
  };
  const controlStatesVal: any =
    controlStates && getcontrolStates[controlStates];
  // Display placeholder and selected option in case of single select
  const displayPlaceHolderAndSelectedOption = () => {
    if (inputValue === "") {
      if (selectedOptions.length === 0) {
        return getPlaceholder();
      }
      return selectedValues[0]?.label;
    }
    if (!isSearchable) {
      return selectedValues[0]?.label;
    }
  };

  return (
    <div
      className={getClassNames({
        "inte-formElement": true,
        "inte-formElement--focus": dropdownActive,
        "inte-formElement--select-focused": isFocused,
        "inte-formElement--loading": isLoading,
        "inte-formElement--clearable": isClearable,
        "inte-formElement--disabled": isDisabled,
        [controlStatesVal]: controlStates,
      })}
      {...(isRequired ? { "aria-required": "true" } : {})}
    >
      {label && (
        <label
          htmlFor={id ?? `inte-formElement__select-${rID}`}
          className={getClassNames({
            "inte-form__label": true,
            "inte--required": isRequired,
          })}
        >
          {label}
        </label>
      )}
      <div
        id={id ?? `inte-formElement__select-${rID}`}
        className={`inte-formElement__inner`}
        ref={selectBoxRef}
        onClick={(e: any) => insideSelectClickHandler(e)}
        onKeyDown={(e: any) => handleKeyDown(e)}
        tabIndex={0}
        onFocus={() => {
          if (isDisabled) return;
          setIsFocused(true);
        }}
        onBlur={() => {
          if (!isSelectFocused) return;
          setIsFocused(false);
          setDropdownActive(false);
        }}
        aria-disabled={isDisabled ? "true" : "false"}
        aria-busy={isLoading ? "true" : "false"}
      >
        <div
          className={getClassNames({
            "inte-formElement__control": true,
            "inte-formElement__select": true,
            "inte-formElement__multiSelect": isMultiSelect,
            "inte-formElement__singleSelect": !isMultiSelect,
          })}
        >
          <>
            {!isMultiSelect ? (
              <div className="inte-formElement__value inte-virtualSelect__value">
                {isSearchable && !isMobile && inputBoxHandler()}
                {displayPlaceHolderAndSelectedOption()}
              </div>
            ) : (
              <div className={`inte-formElement__selectedTags`}>
                <SelectedItemsInMultiSelect />
                {(isSearchable || selectedValues.length === 0) && (
                  <div className="inte-formElement__inputWrap">
                    {isSearchable && !isMobile && inputBoxHandler()}
                    {selectedValues.length === 0 &&
                      inputValue.length === 0 &&
                      getPlaceholder()}
                  </div>
                )}
              </div>
            )}
            {isLoading && (
              <div className="inte-formElement--loading">
                {" "}
                <Spinner color="default" size="medium" />
              </div>
            )}
            {isClearable &&
              (selectedOptions.length !== 0 || inputValue.length !== 0) && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isDisabled) {
                      onChange([]);
                      setSelectedValues([]);
                      setInputValue("");
                      if (isSearchable && inputBoxRef.current !== null) {
                        inputBoxRef.current.style.width = "0";
                        inputBoxRef.current.focus();
                      }
                    }
                  }}
                  ref={clearBtnRef}
                  className="inte-formElement--clear"
                >
                  {<ClearIcon />}
                </div>
              )}
            <div className="inte-formElement__arrow">
              <ChevronDown
                size="20"
                color={
                  dropdownActive
                    ? "var(--inte-G800)"
                    : `${isDisabled ? "var(--inte-G40)" : "var(--inte-G90)"}`
                }
              />
            </div>
          </>
        </div>
      </div>
      {(isMobile ? showDiv : dropdownActive) && (
        <PortalComponent>{portalDropDownList}</PortalComponent>
      )}
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

export default VirtualSelect;
