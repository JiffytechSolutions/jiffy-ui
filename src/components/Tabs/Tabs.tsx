import React, { useEffect, useState } from "react";
import { classnames } from "../../utilities/globalFunction";
import "./Tabs.css";

export interface TabsI {
  tabs: TabI[];
  value: any;
  onChange: (newTabKey: string) => void;
  filled?: boolean;
  direction?: "horizontal" | "vertical";
  children?: React.ReactNode;
}

export interface TabI {
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  label: string;
  key: string;
  isDisabled?: boolean;
}

const Tabs = (props: TabsI) => {
  const {
    tabs,
    value,
    onChange,
    direction = "horizontal",
    filled,
    children,
  } = props;
  const [key, setKey] = useState(0);
  const isVertical = window.innerWidth >= 768 && direction === "vertical";
  useEffect(() => {
    const handleResize = () => {
      setKey((prevKey) => prevKey + 1);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={classnames({
        "pixel-tabs__wrapper": true,
        "pixel-tabs__vertical flex": isVertical,
      })}
    >
      <div
        className={classnames({
          "pixel-tabs__vertical flex": isVertical,
        })}
      >
        <div className="pixel-tabs__container">
          <ul
            aria-label="tablist"
            className={classnames({
              "pixel-tabs": true,
              "pixel-tabs-filled": filled,
              "pixel-tabs--vertical": isVertical,
            })}
          >
            {tabs.map((item) => {
              return (
                <li
                  role="none"
                  key={item.label}
                  className={classnames({
                    "pixel-tabs__item": true,
                    "pixel-tabs__item--active": value === item.key,
                    "pixel-tabs__item--disable": item.isDisabled,
                  })}
                  onClick={() => !item.isDisabled && onChange(item.key)}
                >
                  <div className="pixel-tabs__body">
                    {item.icon && (
                      <span className="pixel-tabs__icon">{item.icon}</span>
                    )}
                    <span className="pixel-tabs__title">{item.label}</span>
                  </div>
                  {item.badge && (
                    <div className="pixel-tabs__badge">{item.badge}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pixel-tab__border"></div>
      </div>
      <div
        className="pixel-tabs__contentBox"
        role="tabpanel"
        aria-labelledby={`tab-${value}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Tabs;
