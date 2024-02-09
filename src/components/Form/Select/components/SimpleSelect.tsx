/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useId, useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  Search,
  X,
} from "../../../../storybook/Foundation/Icons/Icons";
import Badge from "../../../Badge/Badge";
import Skeleton from "../../../Skeleton/Skeleton";
import Spinner from "../../../Spinner/Spinner";
import { ClearIcon } from "../../../../assets/icon/ActionIcons";
import PortalComponent from "../../../../utilities/PoratalComponent";
import handleClickOutside from "../../../../utilities/handelClickOutside";
import changePosition from "../../../../utilities/changePosition";
import Tag from "../../../Tag/Tag";
import getClassNames from "../../../../utilities/getClassnames";
import handleOnDrag from "../../../../utilities/handelOnDrag/useHandleOnDrag";
import useMobileDevice from "../../../../utilities/useMobileDevice";
import Button from "../../../Button/Button";
import { GroupedObjI, SelectI, SimpleObjI } from "../types/types";
import useDelayUnmount from "../../../../utilities/useDelayTimeout";
import TextField from "../../TextField/TextField";
import useBodyLock from "../../../../utilities/UseBodyLock";
import "./Select.css";
import "../../Form.css";

const SimpleSelect = ({
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
  placeHolder,
  customClass = "",
  onChange = () => null,
  onInputChange = () => null,
  value,
  heading,
  width,
}: SelectI): JSX.Element => {
  const isMobile: boolean = useMobileDevice();
  const rID = useId();
  const [optionsToShow, setOptionsToShow] = useState<any>(options);
  const [inputValue, setInputValue] = useState<string>("");
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedValues, setSelectedValues] = useState<any>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [groupDataPresent, setGroupDataPresent] = useState(false);
  const [isSelectFocused, setisSelectFocused] = useState(false);
  // Using it because at a single time onmouseover and onkeydown works , so if only one work at a time this state is made
  const [indexSetByKeyPress, setIndexSetByKeyPress] = useState(false);
  const inputBoxRef = useRef<HTMLInputElement>(null);
  const selectBoxRef = useRef<HTMLDivElement>(null);
  const clearBtnRef = useRef<HTMLDivElement>(null);
  const dropdownListRef = useRef<any>(null);
  const scrollRef = useRef<any>();
  const showDiv = useDelayUnmount(dropdownActive, 300);
  useBodyLock(showDiv && isMobile);
  useEffect(() => {
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
    window.addEventListener("click", clickingInsideSelectBox, true);
    window.addEventListener("scroll", changePos, true);
    window.addEventListener("resize", changePos, true);
    options[0] && setGroupDataPresent("group" in options[0]);
    isDisabled && setDropdownActive(false);
    return () => {
      window.removeEventListener(
        "click",
        handleClickOutside(selectBoxRef, dropdownListRef, () => {
          setDropdownActive(false);
          setIsFocused(false);
        }),
        true
      );
      window.removeEventListener("click", clickingInsideSelectBox, true);
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
    const addOptions = (opt: any) => {
      if (isCreatable) {
        const nonMatchingValues: any = (Array.isArray(value) ? value : [value])
          .filter(
            (option: any) => !opt.some((item: any) => item.value === option)
          )
          .map((option) => ({ label: option, value: option }));
        setSelectedValues([...opt, ...nonMatchingValues]);
      } else {
        setSelectedValues(opt);
      }
    };
    if (options.length === 0) return;
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
      if (isCreatable) {
        if (!value) return;
        const nonMatchingValues: any = (Array.isArray(value) ? value : [value])
          .filter(
            (option: any) =>
              !matchingLabels.some((item: any) => item.value === option)
          )
          .map((option) => ({ label: option, value: option }));
        setSelectedValues([...matchingLabels, ...nonMatchingValues]);
      } else {
        setSelectedValues(matchingLabels);
      }
    } else {
      if (isMultiSelect) {
        const opt = (options as SimpleObjI[]).filter((ele) => {
          return Array.isArray(value) && value.some((val) => val === ele.value);
        });
        if (!value) return;
        addOptions(opt);
      } else {
        const opt = (options as SimpleObjI[]).filter(
          (ele: any) => String(ele.value) == String(value)
        );
        if (!value) return;
        addOptions(opt);
      }
    }
  }, [value, options]);
  useEffect(() => {
    // Calling resize input function
    if (!isMobile) {
      inputBoxRef.current?.addEventListener("input", resizeInputBox);
      isSearchable && resizeInputBox.call(inputBoxRef.current);
    }
    isSearchable ? searchHandler() : setOptionsToShow(options);
  }, [inputValue, options]);
  useEffect(() => {
    if (!dropdownActive || isMobile || isLoading || optionsToShow.length < 1)
      return;
    if (!groupDataPresent) {
      optionsToShow.length === selectedIndex + 1
        ? dropdownListRef.current?.children[0].children[
            selectedIndex
          ]?.scrollIntoView({
            block: "end",
          })
        : dropdownListRef.current?.children[0].children[
            selectedIndex + 1
          ]?.scrollIntoView({
            block: "end",
          });
    } else {
      const isLastElementOfGroup = optionsToShow.some(
        (item: any, index: any) => {
          if (
            selectedGroupIndex === index &&
            selectedIndex === item.group.length - 1
          ) {
            return true;
          }
          return false;
        }
      );
      isLastElementOfGroup
        ? dropdownListRef.current?.children[0].children[
            selectedGroupIndex
          ].children[1].children[selectedIndex].scrollIntoView({
            block: "end",
          })
        : dropdownListRef.current?.children[0].children[
            selectedGroupIndex
          ].children[1].children[selectedIndex + 1].scrollIntoView({
            block: "end",
          });
    }
  }, [dropdownActive]);
  // setting position
  useEffect(() => {
    changePosition(selectBoxRef, dropdownListRef, { width: true })();
  }, [dropdownActive, inputValue, selectedValues, optionsToShow]);
  // Clicking on dropdown list items
  const dropdownItemClickHandler = (item: any) => {
    if (isMultiSelect) {
      let newSelectedValues = [...selectedValues];
      const ind = selectedValues.findIndex(
        (ele: any) => ele.value === item.value
      );
      if (ind !== -1) {
        newSelectedValues.splice(ind, 1);
      } else {
        newSelectedValues.push(item);
      }
      onChange(newSelectedValues.map((ele) => ele.value));
    } else {
      onChange(item.value);
    }
    !isMultiSelect && setDropdownActive(false);
    selectBoxRef.current?.focus();
    !isMobile && isSearchable && inputBoxRef.current?.focus();
    setInputValue("");
  };
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
          "inte-select--disabled": isDisabled,
        })}
        style={{ minWidth: "0.1rem" }}
        spellCheck="false"
        autoComplete="off"
        onKeyDown={(e) => inputKeyPressHandler(e)}
        type={"text"}
        ref={inputBoxRef}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          onInputChange(e.target.value);
        }}
        disabled={isDisabled}
      />
    );
  };
  // Selected items in form of tags in case of multiSelect
  const selectedItemsInMultiSelect = () => {
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
  // Clicking inside of select box
  const clickingInsideSelectBox = (e: any) => {
    function handleDestroyClick() {
      if (!isMultiSelect) return false;
      let path = e.composedPath();
      const isClearButtonClicked = path.some((el: any) =>
        el?.classList?.contains("inte-tag__clear")
      );
      return isClearButtonClicked;
    }
    if (
      !isDisabled &&
      selectBoxRef.current?.contains(e.target) &&
      !clearBtnRef.current?.contains(e.target) &&
      !handleDestroyClick()
    ) {
      setDropdownActive((prev) => !prev);
    }
  };
  // Go to particular option in case of simple options
  const goToScrollingElementSimpleData = (index: number) => {
    setSelectedIndex(index);
    const ifMobile = isMobile ? 1 : 0;
    dropdownListRef.current?.children[ifMobile].children[index].scrollIntoView({
      block: "nearest",
    });
  };
  // Go to particular option in case of group options
  const goToScrollingElementGroupedData = (
    groupIndex: number,
    index: number
  ) => {
    setSelectedIndex(index);
    setSelectedGroupIndex(groupIndex);
    const ifMobile = isMobile ? 1 : 0;
    dropdownListRef.current?.children[ifMobile]?.children[
      groupIndex
    ]?.children[1]?.children[index]?.scrollIntoView({
      block: "nearest",
    });
  };
  // In case of creatable select
  const handleCreatable = () => {
    const lastGroupIndex = optionsToShow.length - 2;
    const lastGroup = optionsToShow[lastGroupIndex]?.group;
    if (
      (selectedGroupIndex === lastGroupIndex &&
        selectedIndex === lastGroup?.length) ||
      optionsToShow.length === 1
    ) {
      dropdownItemClickHandler(optionsToShow[selectedIndex]);
    } else {
      handleSelectingGroupOptions();
    }
  };
  // Select group option
  const handleSelectingGroupOptions = () => {
    const selectedOption =
      optionsToShow[selectedGroupIndex]?.group[selectedIndex];
    if (selectedOption && !selectedOption.isDisabled) {
      dropdownItemClickHandler(selectedOption);
    }
  };
  // Arrow-Up , Arrow-Down and Enter Key press
  const handleKeyDown = (event: any) => {
    if (event.key === "Tab") {
      setisSelectFocused(true);
    }
    if (isFocused && event.key === "Enter") {
      isMultiSelect
        ? setDropdownActive(true)
        : setDropdownActive((dropdownActive) => !dropdownActive);
    }
    if (!dropdownActive || isLoading) return;
    if (groupDataPresent) {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        let newIndex = selectedIndex;
        let newGroupIndex = selectedGroupIndex;
        while (newIndex > 0) {
          newIndex--;
          if (!optionsToShow[newGroupIndex]?.group[newIndex]?.isDisabled) {
            break;
          }
        }
        if (newIndex === selectedIndex && newGroupIndex > 0) {
          while (newGroupIndex > 0) {
            newGroupIndex--;
            newIndex = optionsToShow[newGroupIndex].group.length - 1;
            if (!optionsToShow[newGroupIndex].group[newIndex].isDisabled) {
              break;
            }
          }
        }
        setIndexSetByKeyPress(true);
        goToScrollingElementGroupedData(newGroupIndex, newIndex);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        let currentGroup =
          optionsToShow.length !== 0 && optionsToShow[selectedGroupIndex].group;
        let nextIndex = selectedIndex;
        let nextGroupIndex = selectedGroupIndex;
        let skipDisabledOption = true;
        // find the next not disabled option
        while (skipDisabledOption) {
          if (nextIndex === currentGroup?.length - 1) {
            if (nextGroupIndex === optionsToShow.length - 1) {
              // reached end of the last group, stop skipping
              skipDisabledOption = false;
              nextIndex = currentGroup?.length - 1;
            } else {
              // move to the next group and reset index
              nextGroupIndex += 1;
              nextIndex = 0;
              currentGroup = optionsToShow[nextGroupIndex].group;
            }
          } else {
            // move to the next index within the same group
            nextIndex += 1;
          }
          if (
            isCreatable &&
            optionsToShow.length - 2 === nextGroupIndex &&
            currentGroup[nextIndex]?.isDisabled
          ) {
            // continue skipping if next option is disabled
            continue;
          } else if (!isCreatable && currentGroup[nextIndex]?.isDisabled) {
            continue;
          } else {
            // stop skipping if next option is not disabled
            skipDisabledOption = false;
          }
        }
        setIndexSetByKeyPress(true);
        const creatableIndex = optionsToShow.findIndex(
          (ele: any) => ele.value === inputValue
        );
        if (
          isCreatable &&
          inputValue !== "" &&
          optionsToShow.length - 1 === nextGroupIndex
        ) {
          goToScrollingElementSimpleData(creatableIndex);
        } else if (nextIndex < currentGroup.length) {
          goToScrollingElementGroupedData(nextGroupIndex, nextIndex);
        }
      } else if (event.key === "Enter") {
        setIndexSetByKeyPress(false);
        isCreatable ? handleCreatable() : handleSelectingGroupOptions();
      }
    } else {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        const nextIndex = getNextEnabledOptionIndex(
          selectedIndex,
          "up",
          optionsToShow
        );
        setSelectedIndex(nextIndex);
        goToScrollingElementSimpleData(nextIndex);
        setIndexSetByKeyPress(true);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = getNextEnabledOptionIndex(
          selectedIndex,
          "down",
          optionsToShow
        );
        setSelectedIndex(nextIndex);
        goToScrollingElementSimpleData(nextIndex);
        setIndexSetByKeyPress(true);
      } else if (event.key === "Enter") {
        optionsToShow.length !== 0 &&
          dropdownItemClickHandler(optionsToShow[selectedIndex]);
        setIndexSetByKeyPress(false);
      }
    }
  };
  // In case of simple options
  const getNextEnabledOptionIndex = (
    currentIndex: number,
    direction: "up" | "down",
    options: any[]
  ) => {
    const step = direction === "up" ? -1 : 1;
    let nextIndex = currentIndex + step;
    while (
      nextIndex >= 0 &&
      nextIndex < options.length &&
      options[nextIndex].isDisabled
    ) {
      nextIndex += step;
    }
    return nextIndex >= 0 && nextIndex < options.length
      ? nextIndex
      : currentIndex;
  };
  // Group Options
  const handleGroupOptions = (group: SimpleObjI[], index: any) => {
    return group.map((opt, groupIndex: any) => {
      const isSelectedOption = Array.isArray(selectedValues)
        ? selectedValues.some((i) => i.value === opt?.value)
        : selectedValues.value === opt?.value;
      return (
        <li
          role={"option"}
          className={getClassNames({
            "inte-select__item": true,
            "inte-select__item--disabled": opt.isDisabled,
            "inte-select__item--active": isSelectedOption && !isMultiSelect,
          })}
          key={opt.value}
          value={opt.value}
          onClick={() => {
            if (!opt.isDisabled) {
              dropdownItemClickHandler(opt);
              setIndexSetByKeyPress(false);
              setSelectedIndex(groupIndex);
              setSelectedGroupIndex(index);
            }
          }}
          style={{
            background:
              !isMobile &&
              index === selectedGroupIndex &&
              groupIndex === selectedIndex
                ? "var(--inte-G20)"
                : "var(--inte-G0)",
          }}
          onMouseMove={() => {
            if (!opt.isDisabled) {
              if (!indexSetByKeyPress) {
                setSelectedIndex(groupIndex);
                setSelectedGroupIndex(index);
              }
              setIndexSetByKeyPress(false);
            }
          }}
        >
          {isMultiSelect && (
            <span
              style={{ visibility: isSelectedOption ? "visible" : "hidden" }}
            >
              <Check size="20" color="var(--inte-P900)" />
            </span>
          )}
          <div className={`inte-select__itemInner`}>
            <span>{opt.label}</span>
            {opt.description && <span>{opt.description}</span>}
          </div>
        </li>
      );
    });
  };
  // Render group data like label , group
  const renderGroupData = (item: any, index: any) => {
    return (
      <li
        role={"listitem"}
        key={`${item.label}.${item.value}.${index}`}
        className={getClassNames({
          "inte-select__item--group": item.group,
          "inte-select__item": !item.group,
        })}
      >
        <div className="inte-select__groupHeader">
          <span>{item.label}</span>
          {!isMobile && (
            <Badge
              badgeTextColor="light"
              size="small"
              customBgColor="var(--inte-P900)"
            >
              {item.group.length}
            </Badge>
          )}
        </div>
        <ul role={"listbox"} className="inte-select__groupedItem">
          {handleGroupOptions(item.group, index)}
        </ul>
      </li>
    );
  };
  // Render simple data like label,value
  const renderSimpleData = (item: SimpleObjI | any, index: any) => {
    const isSelectedOption = Array.isArray(selectedValues)
      ? selectedValues.some((option) => option.value === item?.value)
      : selectedValues.value === item?.value;
    return (
      <li
        role={"option"}
        className={getClassNames({
          "inte-select__item": true,
          "inte-select__item--active": isSelectedOption && !isMultiSelect,
          "inte-select__item--disabled": item.isDisabled,
        })}
        key={`${item.label}.${item.value}.${index}`}
        onClick={() => {
          if (!item.isDisabled) {
            dropdownItemClickHandler(item);
            setIndexSetByKeyPress(false);
          }
        }}
        style={{
          backgroundColor:
            !isMobile && selectedIndex === index
              ? "var(--inte-G20)"
              : "var(--inte-G0)",
        }}
        onMouseMove={() => {
          if (!item.isDisabled) {
            if (!indexSetByKeyPress) {
              setSelectedIndex(index);
            }
            setIndexSetByKeyPress(false);
          }
        }}
      >
        {isMultiSelect && (
          <span
            style={{
              visibility: isSelectedOption ? "visible" : "hidden",
            }}
          >
            <Check size="20" color="var(--inte-P900)" />
          </span>
        )}
        <div className={`inte-select__itemInner`}>
          {item._isNew_ ? (
            <span>Create "{item.label}"</span>
          ) : (
            <span>{item.label}</span>
          )}
          {item.description && <span>{item.description}</span>}
        </div>
      </li>
    );
  };
  const onClose = () => {
    setIsFocused(false);
    setDropdownActive(false);
  };
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = handleOnDrag(
    dropdownListRef,
    scrollRef,
    showDiv,
    onClose
  );
  // Rendering the dropdown
  const portalDropDownList = (
    <>
      <div
        ref={dropdownListRef}
        className={getClassNames({
          "inte-select__dropdown": !isMobile,
          "inte-mobileDevice--in inte-select__dropdown--onMobile":
            isMobile && dropdownActive,
          "inte-mobileDevice--out inte-select__dropdown--onMobile":
            isMobile && !dropdownActive,
          [customClass]: customClass,
        })}
        onTouchStart={(e: any) => handleTouchStart(e)}
        onTouchMove={(e: any) => handleTouchMove(e)}
        onTouchEnd={handleTouchEnd}
      >
        {isMobile && (
          <div className="inte-popover__mobileHeading__wrapper">
            <div className="inte-popover__handelBar" />
            <h3 className="inte-popover__mobileHeading">{heading}</h3>
            <Button
              icon={<X color="#1C2433" />}
              type="textButton"
              onClick={onClose}
            />
          </div>
        )}

        {isMobile && isSearchable && (
          <div className="inte-select__dropdown-textField">
            <TextField
              placeHolder="Search"
              prefix={<Search size={20} />}
              onChange={(e) => {
                setInputValue(e);
                onInputChange(e);
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
          <div className="inte-select__dropdown-selectedItems">
            {selectedItemsInMultiSelect()}
          </div>
        )}
        <ul
          ref={isMobile ? scrollRef : null}
          aria-label="inte-select__options"
          role={"listbox"}
          className={getClassNames({
            "inte-select__options": true,
            "inte-select__options--onMobile": isMobile,
          })}
          onTouchStart={(e: any) => handleTouchStart(e)}
          {...(isMobile && {
            style: {
              maxHeight:
                selectedValues.length === 0
                  ? "calc(100vh - 20.2rem)"
                  : "calc(100vh - 23.4rem)",
            },
          })}
        >
          {isLoading ? (
            <li className="inte-select__skeletonWrapper">
              <div className="inte-select__skeleton">
                <Skeleton height="12px" line={1} type="custom" width="35%" />
                <Skeleton height="12px" line={1} type="custom" width="75%" />
              </div>
              <div className="inte-select__skeleton">
                <Skeleton height="12px" line={1} type="custom" width="35%" />
                <Skeleton height="12px" line={1} type="custom" width="75%" />
              </div>
            </li>
          ) : optionsToShow?.length !== 0 ? (
            optionsToShow.map((item: any, index: any) => {
              return item.group
                ? renderGroupData(item, index)
                : renderSimpleData(item, index);
            })
          ) : (
            <li className="inte-select-box__no-options-container">
              <div className="inte-select-box__no-options">
                <Search size="20" color="var(--inte-G90)" />
                <span>No result Found!</span>
              </div>
              <span>Check your search term "{inputValue}"</span>
            </li>
          )}
        </ul>
      </div>
      {isMobile && (
        <div
          className="inte-select__overlay"
          onClick={() => setDropdownActive(false)}
        ></div>
      )}
    </>
  );
  /* Clicking on select box block ends*/
  // Checking if backspace key is pressed by user
  const inputKeyPressHandler = (e: any) => {
    if (e.key === "Backspace" && inputValue === "" && selectedValues.length) {
      dropdownItemClickHandler(selectedValues[selectedValues.length - 1]);
    }
  };
  // Resize the input box width
  function resizeInputBox(this: any) {
    this.style.width =
      this.value.length === 0
        ? this.value.length + "ch"
        : this.value.length + 0.5 + "ch";
  }
  // Searching implementation and input box width resize
  const searchHandler = () => {
    let filteredArray = JSON.parse(JSON.stringify(options));
    if (inputValue !== "") {
      const newOption = {
        label: inputValue,
        value: inputValue,
        _isNew_: true,
      };
      setDropdownActive(true);
      setSelectedIndex(0);
      setSelectedGroupIndex(0);
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
          ? setOptionsToShow([...filteredArray, newOption])
          : setOptionsToShow(filteredArray);
      } else {
        let newOpts = (options as SimpleObjI[])?.filter((item) => {
          return item.label.toLowerCase().includes(inputValue.toLowerCase());
        });
        isCreatable && !isFound()
          ? setOptionsToShow([...newOpts, newOption])
          : setOptionsToShow(newOpts);
      }
    } else {
      setOptionsToShow(options);
    }
  };
  // Placeholder
  const getPlaceholder = () => {
    return (
      <span className={`inte-formElement__placeholder`}>
        {placeHolder ?? "Select"}
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
      if (selectedValues.length === 0) {
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
        "inte-formElement ": true,
        "inte-formElement--focus": dropdownActive,
        "inte-formElement--select-focused": isFocused,
        "inte-formElement--loading": isLoading,
        "inte-formElement--clearable": isClearable,
        "inte-formElement--disabled": isDisabled,
        [controlStatesVal]: controlStates,
      })}
      {...(isRequired ? { "aria-required": "true" } : {})}
      style={{ width: width + "px" }}
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
        className="inte-formElement__inner"
        ref={selectBoxRef}
        onClick={() =>
          !isMobile && isSearchable && inputBoxRef.current?.focus()
        }
        tabIndex={0}
        onFocus={() => {
          if (isDisabled) return;
          setisSelectFocused(false);
          setIsFocused(true);
        }}
        onBlur={() => {
          if (!isSelectFocused) return;
          setIsFocused(false);
          setDropdownActive(false);
        }}
        onKeyDown={handleKeyDown}
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
          <React.Fragment>
            {!isMultiSelect ? (
              <div className="inte-formElement__value inte-select__value">
                {isSearchable && !isMobile && inputBoxHandler()}
                {displayPlaceHolderAndSelectedOption()}
              </div>
            ) : (
              <div className={`inte-formElement__selectedTags`}>
                {selectedItemsInMultiSelect()}
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
              (selectedValues.length !== 0 || inputValue.length !== 0) && (
                <div
                  onClick={() => {
                    if (!isDisabled) {
                      onChange([]);
                      setInputValue("");
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
            {(isMobile ? showDiv : dropdownActive) && (
              <PortalComponent>{portalDropDownList}</PortalComponent>
            )}
          </React.Fragment>
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

export default SimpleSelect;
