import React, { useEffect, useRef, useState } from "react";
import getClassNames from "../../utilities/getClassnames";
import "./Tabs.css";

export interface TabsI {
  tabs: TabI[];
  value: any;
  onChange: (newTabKey: string) => void;
  direction?: "horizontal" | "vertical";
  children?: React.ReactNode;
  isFitted?: boolean;
  customClass?: string;
  spacing?:
    | "none"
    | "tight"
    | "mediumTight"
    | "extraTight"
    | "loose"
    | "mediumLoose"
    | "extraLoose";
}

export interface TabI {
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  label: string;
  key: string;
  isDisabled?: boolean;
}

const Tabs = ({
  tabs,
  value,
  onChange,
  direction = "horizontal",
  children,
  isFitted = false,
  customClass = "",
  spacing = "loose",
}: TabsI) => {
  const [key, setKey] = useState(0); //to remount when window is resize
  const isVertical =
    (window.innerWidth >= 768 && direction === "vertical") ||
    customClass === "inte-filter-sheet";
  const activeTabRef = useRef<HTMLLIElement>(null);

  const getClassForSpacing: { [key: string]: string } = {
    extraTight: "inte-tabs--spacingExtraTight",
    mediumTight: "inte-tabs--spacingMediumTight",
    tight: "inte-tabs--spacingTight",
    loose: "inte-tabs--spacingLoose",
    mediumLoose: "inte-tabs--spacingMediumLoose",
    extraLoose: "inte-tabs--spacingExtraLoose",
    none: "",
  };

  const keyEventMap: KeyEventMap = {
    ArrowRight: (activeTabIndex: number) =>
      activeTabIndex < tabs.length - 1 ? activeTabIndex + 1 : 0,
    ArrowLeft: (activeTabIndex: number) =>
      activeTabIndex > 0 ? activeTabIndex - 1 : tabs.length - 1,
    ArrowUp: (activeTabIndex: number) =>
      activeTabIndex > 0 ? activeTabIndex - 1 : tabs.length - 1,
    ArrowDown: (activeTabIndex: number) =>
      activeTabIndex < tabs.length - 1 ? activeTabIndex + 1 : 0,
  };

  const handleTabHeaderKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>
  ) => {
    if (isVertical && (event.key === "ArrowRight" || event.key === "ArrowLeft"))
      return;
    if (!isVertical && (event.key === "ArrowDown" || event.key === "ArrowUp"))
      return;
    event.preventDefault();
    const activeTabIndex = tabs.findIndex((item) => item.key === value);
    const operation = keyEventMap?.[event.key];
    if (operation) {
      const nextTabIndex = () => {
        let t = operation(activeTabIndex);
        while (tabs[t].isDisabled) {
          t = operation(t);
        }
        return t;
      };
      onChange(tabs[nextTabIndex()].key);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setKey((prevKey) => prevKey + 1);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollTheTab = (ele: HTMLLIElement) => {
    const parent = ele.parentElement;
    if (!parent) return;
    const parentDimension = parent.getBoundingClientRect();
    const childDimension = ele.getBoundingClientRect();
    const x =
      childDimension.left +
      childDimension.width / 2 -
      (parentDimension.left + parentDimension.width / 2) +
      parent.scrollLeft;
    const y =
      childDimension.top +
      childDimension.height / 2 -
      (parentDimension.top + parentDimension.height / 2) +
      parent.scrollTop;
    parent.scrollTo({
      top: y,
      left: x,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (activeTabRef.current) {
      scrollTheTab(activeTabRef.current);
    }
  }, [activeTabRef.current]);

  return (
    <div
      className={getClassNames({
        "inte-tabs--wrapper": true,
        "inte-tabs--vertical": isVertical,
        [getClassForSpacing[spacing]]: spacing,
        [customClass]: customClass,
      })}
    >
      <ul
        role="tablist"
        className={getClassNames({
          "inte-tabs": true,
          "inte-tabs--fitted": isFitted,
        })}
      >
        {tabs.map((item, ind) => {
          const isActive = value === item.key;
          return (
            <li
              ref={isActive ? activeTabRef : null}
              role="tab"
              aria-selected={value === item.key}
              key={ind}
              className={getClassNames({
                "inte-tabs__item": true,
                "inte-tabs__item--active": value === item.key,
                "inte-tabs__item--disable": item.isDisabled,
              })}
              onClick={() => !item.isDisabled && onChange(item.key)}
              onKeyDown={handleTabHeaderKeyDown}
              tabIndex={0}
            >
              <div className="inte-tabs__body">
                {item.icon && (
                  <span className="inte-tabs__icon">{item.icon}</span>
                )}
                <span className="inte-tabs__title">{item.label}</span>
              </div>
              {item.badge && (
                <div className="inte-tabs__badge">{item.badge}</div>
              )}
            </li>
          );
        })}
      </ul>
      <div
        className="inte-tabs__contentBox"
        role="tabpanel"
        aria-labelledby={`tab-${value}`}
      >
        {children}
      </div>
    </div>
  );
};

interface KeyEventMap {
  [key: string]: (activeTabIndex: number) => number;
}

export default Tabs;
