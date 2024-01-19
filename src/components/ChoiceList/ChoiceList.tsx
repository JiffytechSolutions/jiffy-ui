import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CheckboxGroup from "../Form/ChoiceGroup/CheckboxGroup/CheckboxGroup";
import RadioGroup from "../Form/ChoiceGroup/RadioGroup/RadioGroup";
import Popover from "../Popover/Popover";
import getClassNames from "../../utilities/getClassnames";
import getModulus from "../../utilities/getModulus";
import "./ChoiceList.css";
import useMobileDevice from "../../utilities/useMobileDevice";
export interface OptionsI {
  label: string | React.ReactNode;
  description?: string | React.ReactNode;
  value: any;
  customClass?: string;
}
export interface ChoiceListI {
  activator: React.ReactNode;
  options: OptionsI[];
  title?: string | React.ReactNode;
  isMulti?: boolean;
  isOpen: boolean;
  onChange?: (newVal: any) => void;
  onClose: () => void;
  isCloseOnEsc?: boolean;
  customClass?: string;
  value: string[] | string;
  heading?: string;
}

const ChoiceList = ({
  activator,
  options,
  title,
  isMulti = false,
  isOpen,
  isCloseOnEsc = true,
  onChange = () => {},
  onClose,
  customClass,
  value,
  heading,
}: ChoiceListI) => {
  const [radioGroupValue, setRadioGroupValue] = useState<string | number>("");
  const [checkBoxGroupValue, setCheckBoxGroupValue] = useState<any[]>([]);
  const [checkClass, setCheckClass] = useState(false);
  const [curr, setCurr] = useState(0);
  const parentRef = useRef<any>(null);
  const isMobileDevice = useMobileDevice();

  const handleRadioGroupChange = useCallback((val: string | number) => {
    onChange(val);
  }, []);

  const handleCheckBoxGroupChange = useCallback((val: any[]) => {
    onChange(val);
  }, []);

  const handelKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.preventDefault();
      let currentInd = curr;
      if (e.key === "ArrowDown") currentInd = currentInd + 1;
      else if (e.key === "ArrowUp") currentInd = currentInd - 1;
      else if (e.key === "Tab" || (isCloseOnEsc && e.key === "Escape")) {
        onClose();
        handleFocusOut();
      } else return;
      setCurr(getModulus(currentInd, options.length));
    },
    [curr]
  );

  const handelMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const ele = e?.currentTarget as HTMLElement;
    const liTags = Array.from(ele.querySelectorAll("li") ?? []);
    let newInd = -1;
    liTags.forEach((item, ind) => {
      if (item.contains(e.target as Node)) {
        newInd = ind;
      }
    });
    setCurr(newInd);
  }, []);

  const handelPopoverRef = useCallback(
    (ele: HTMLElement) => {
      const liTags = Array.from(ele.querySelectorAll("li") ?? []);
      if (curr === 0) {
        liTags[curr]?.scrollIntoView({ block: "center" });
      } else liTags[curr]?.scrollIntoView({ block: "nearest" });
      (liTags[curr]?.getElementsByTagName("input")[0] as HTMLElement)?.focus();
    },
    [curr]
  );

  const newOptions = useMemo(() => {
    return options.map((item: OptionsI, ind: number) => {
      if (ind === curr) item.customClass = "inte-choiceList__item--hovered";
      else item.customClass = undefined;
      return item;
    });
  }, [curr, options]);
  // Setting value
  useEffect(() => {
    if (isMulti) {
      setCheckBoxGroupValue(
        typeof value === "object" && Array.isArray(value) ? value : []
      );
    } else {
      setRadioGroupValue(typeof value === "string" ? value : "");
    }
  }, [value]);
  //adding custom focus
  const handleFocus = (e: any) => {
    if (checkClass) return;
    setCheckClass(false);
    const { key } = e;
    if (!["ArrowUp", "ArrowDown", "Enter"].includes(key)) {
      return;
    }
    const ele = e.currentTarget.firstChild?.firstChild;
    ele.classList.add("inte-choiceList__activator--focus");
  };
  const handleFocusOut = () => {
    setCheckClass(true);
    const ele = parentRef.current.firstChild.firstChild;
    ele?.classList?.remove("inte-choiceList__activator--focus");
  };
  return (
    <div
      className="inte-choicelist__mainWrapper"
      ref={parentRef}
      onKeyDown={isMobileDevice ? (e) => handleFocus(e) : undefined}
    >
      <Popover
        heading={heading}
        activator={activator}
        isOpen={isOpen}
        customClass={getClassNames({
          "inte-choiceList": true,
          [customClass as string]: customClass,
        })}
        onClose={onClose}
        customRef={!isMobileDevice ? handelPopoverRef : undefined}
        isCloseOnEsc={isCloseOnEsc}
      >
        <div
          className="inte-choiceList__wrapper"
          onKeyDown={!isMobileDevice ? handelKeyDown : undefined}
          onMouseMove={handelMouseMove}
          onBlur={!isMobileDevice ? handleFocusOut : undefined}
        >
          {!isMulti ? (
            <RadioGroup
              title={title}
              value={radioGroupValue}
              onChange={handleRadioGroupChange}
              options={newOptions}
              isClickableFullItem
            />
          ) : (
            <CheckboxGroup
              title={title}
              value={checkBoxGroupValue}
              onChange={handleCheckBoxGroupChange}
              options={newOptions}
              isClickableFullItem
            />
          )}
        </div>
      </Popover>
    </div>
  );
};

export default ChoiceList;
