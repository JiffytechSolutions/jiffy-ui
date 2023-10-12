import React, { useEffect, useRef, useState } from "react";
import getClassNames from "../../utilities/getClassnames";
import "./Tabs.css";

export interface TabsI {
  tabs: TabI[];
  direction?: "horizontal" | "vertical";
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
  content: React.ReactNode;
}

function getScrollableDistance() {
  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  const maxScrollDistance =
    document.documentElement.scrollHeight - windowHeight;
  return maxScrollDistance;
}

const getClassForSpacing: { [key: string]: string } = {
  extraTight: "inte-tabs--spacingExtraTight",
  mediumTight: "inte-tabs--spacingMediumTight",
  tight: "inte-tabs--spacingTight",
  loose: "inte-tabs--spacingLoose",
  mediumLoose: "inte-tabs--spacingMediumLoose",
  extraLoose: "inte-tabs--spacingExtraLoose",
  none: "",
};

const SpyTabs = ({
  tabs,
  direction = "horizontal",
  isFitted = false,
  customClass = "",
  spacing = "none",
}: TabsI) => {
  const [key, setKey] = useState(0); //to remount when window is resize
  const [activeTab, setActiveTab] = useState<string>();
  const [isScrolling, setIsScrolling] = useState(false);
  const isVertical =
    (window.innerWidth >= 768 && direction === "vertical") || customClass === "inte-filter-sheet";
  const activeTabRef = useRef<HTMLLIElement>(null);
  const tabListRef = useRef<HTMLUListElement>(null);
  const tabContentBoxRef = useRef<HTMLDivElement>(null);

  const handelTabChange = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    key: string
  ) => {
    e.preventDefault();
    setIsScrolling(true);
    setActiveTab(key);
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
    const activeTabIndex = tabs.findIndex((item) => item.key === activeTab);
    const operation = keyEventMap?.[event.key];
    if (operation) {
      const nextTabIndex = () => {
        let t = operation(activeTabIndex);
        return t;
      };
      setIsScrolling(true);
      setActiveTab(tabs[nextTabIndex()].key);
    }
  };

  const spyScroll = () => {
    if (!tabContentBoxRef.current || !tabListRef.current || isScrolling) return;
    const sectionList = Array.from(tabContentBoxRef.current.childNodes);
    const ulDim = isVertical
      ? tabListRef.current.getBoundingClientRect().top
      : tabListRef.current.getBoundingClientRect().bottom;
    for (let i = 0; i < sectionList.length; i++) {
      const currDim = (sectionList[i] as Element).getBoundingClientRect();
      if (currDim.top <= ulDim && currDim.bottom >= ulDim) {
        setActiveTab(tabs[i].key);
        break;
      }
    }
  };

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
      parentDimension.top +
      parentDimension.height / 2 +
      parent.scrollTop;
    parent.scrollTo({
      top: y,
      left: x,
      behavior: "smooth",
    });
  };

  const [scrollD, setScrollD] = useState<string>("");

  const scrollTabBody = () => {
    if (!tabContentBoxRef.current || !tabListRef.current) return;
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;
    const sectionList = Array.from(tabContentBoxRef.current.childNodes);
    let selectedIndex = 0;
    tabs.map((item, index) => {
      if (item.key === activeTab) selectedIndex = index;
    });

    const selectedSectionDim = (
      sectionList[selectedIndex] as Element
    )?.getBoundingClientRect();
    const ulDim = isVertical
      ? tabListRef.current.getBoundingClientRect().top
      : tabListRef.current.getBoundingClientRect().bottom;
    const scrollDist = Math.min(
      selectedSectionDim?.top + scrollPos - ulDim,
      getScrollableDistance()
    );
    if (scrollDist === window.scrollY) {
      setIsScrolling(false);
    } else {
      const randomNum = Math.random();
      setScrollD(`${scrollDist}-${randomNum}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        Math.ceil(window.scrollY) === Math.ceil(Number(scrollD.split("-")[0]))
      ) {
        setIsScrolling(false);
        window.removeEventListener("wheel", lockWheel);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    const lockWheel = (e: WheelEvent) => {
      e.preventDefault();
    };
    if (
      Math.ceil(window.scrollY) !== Math.ceil(Number(scrollD.split("-")[0]))
    ) {
      setIsScrolling(true);
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("wheel", lockWheel, { passive: false });
    }
    window.scrollTo({
      top: Number(scrollD.split("-")[0]),
      behavior: "smooth",
    });
    return () => {
      setIsScrolling(false);
      window.removeEventListener("wheel", lockWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollD]);

  useEffect(() => {
    const handleResize = () => {
      setKey((prevKey) => prevKey + 1);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", spyScroll);
    return () => {
      window.removeEventListener("scroll", spyScroll);
    };
  }, [isVertical, tabs, isScrolling, scrollD]);

  useEffect(() => {
    if (activeTabRef.current) {
      scrollTheTab(activeTabRef.current);
    }
    if (isScrolling) {
      scrollTabBody();
    }
  }, [activeTab, activeTabRef.current]);

  return (
    <div
      className={getClassNames({
        "inte-tabs--wrapper": true,
        "inte-tabs--vertical": isVertical,
        "inte-tabs--hasScrollSpy": true,
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
        ref={tabListRef}
      >
        {tabs.map((item, ind) => {
          const isActive = activeTab === item.key;
          return (
            <li
              ref={isActive ? activeTabRef : null}
              role="tab"
              aria-selected={activeTab === item.key}
              key={ind}
              className={getClassNames({
                "inte-tabs__item": true,
                "inte-tabs__item--active": activeTab === item.key,
              })}
              onClick={(e) => handelTabChange(e, item.key)}
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
        ref={tabContentBoxRef}
      >
        {tabs.map((item, ind) => (
          <section key={item.key} className="inte-tabsSection">
            {
              !(spacing === "none" || !spacing || isVertical) && <div className="inte-tabsSection__item--spacing"></div>
            }
            {item.content}
            {
              !(spacing === "none" || !spacing || !isVertical || ind === (tabs.length - 1)) && <div className="inte-tabsSection__item--spacing"></div>
            }
          </section>
        ))}
      </div>
    </div>
  );
};

interface KeyEventMap {
  [key: string]: (activeTabIndex: number) => number;
}

export default SpyTabs;
