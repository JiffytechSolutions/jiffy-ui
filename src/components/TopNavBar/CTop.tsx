import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "../../icons";
import Button from "../Button/Button";
import getClassNames from "../../utilities/getClassnames";
import AppBar from "../AppBar/AppBar";
import useWindowResize from "../../utilities/useWindowResize";
import Popover from "../Popover/Popover";
import "./TopNavBar.css";

export interface TopNavBarI {
  onChange: (newPath: string) => void;
  stickyTop?: boolean;
  connectLeft?: React.ReactNode;
  connectRight?: React.ReactNode;
  customClass?: string;
  menu: MenuI[];
}
export interface MenuI {
  id: string | number;
  label: string;
  path: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  children?: MenuI[];
}

const TopNavBar = ({
  menu,
  onChange,
  customClass = "",
  connectLeft,
  connectRight,
  stickyTop = true,
}: TopNavBarI) => {
  const { width } = useWindowResize();
  const [path, setPath] = useState("");
  const [toggle, setToggle] = useState(-1);
  const id = useId();
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const popoverItemRef = useRef<any>(null);
  const [storewidth, setStoreWidth] = useState();

  useEffect(() => {
    if (storewidth !== "undefined" && toggle !== -1) {
      setStoreWidth(popoverItemRef?.current?.offsetWidth);
    }
  }, [popoverItemRef?.current, toggle]);

  // button click scroll

  useEffect(() => {
    if (listRef.current) {
      const containerWidth = listRef.current.clientWidth;
      const contentWidth = listRef.current.scrollWidth;
      const isOverflowing = contentWidth > containerWidth;

      setShowLeftButton(isOverflowing && scrollLeft > 0);
      setShowRightButton(
        isOverflowing && scrollLeft < contentWidth - containerWidth
      );
    }
  }, [scrollLeft, menu, width]);

  const handleScroll = (scrollAmount: number) => {
    if (listRef.current) {
      const newScrollLeft = scrollLeft + scrollAmount;
      listRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  };

  // get parent path
  function getParentAndChildPaths(fullPath: any) {
    const pathSegments = fullPath
      .split("/")
      .filter((segment: any) => segment !== "");

    if (pathSegments.length === 0) {
      return { parent: null, child: null };
    }

    const parentPath = "/" + pathSegments.slice(0, -1).join("/");
    const childPath = "/" + pathSegments[pathSegments.length - 1];

    return { parent: parentPath, child: childPath };
  }

  const { parent, child } = getParentAndChildPaths(path);

  useLayoutEffect(() => {
    const appEle = document.querySelector(".inte-appWrapper");
    if (!appEle?.classList?.contains("inte-topNavBar--active")) {
      appEle?.classList?.add("inte-topNavBar--active");
    }
  }, [width]);

  return (
    <div
      className={getClassNames({
        "inte-TopNav__wrapper": true,
        "inte-TopNav--stickyTop": stickyTop,
        [customClass]: customClass,
      })}
    >
      <AppBar
        connectLeft={connectLeft}
        connectRight={connectRight}
        stickyTop={stickyTop}
      />
      {width > 991 && (
        <div
          id={id}
          className={getClassNames({
            "inte-TopNav": true,
          })}
        >
          {showLeftButton && (
            <Button
              onClick={() => {
                handleScroll(-100);
              }}
              type="outlined"
              icon={<ArrowLeft />}
              customClass="inte-arrowLeft__scroll"
            />
          )}

          <ul className="inte-top__list" ref={listRef}>
            {menu?.map((item: any, pIndex: number) => {
              return (
                <React.Fragment key={pIndex}>
                  {item?.children ? (
                    <Popover
                      direction="left"
                      popoverWidth={storewidth}
                      isOpen={toggle === pIndex}
                      onClose={() => setToggle(-1)}
                      activator={
                        <li
                          className={getClassNames({
                            "inte-top__listItem": true,
                            "inte-active": path === item.path + child,
                            "inte-topNavBar--toggle": pIndex === toggle,
                          })}
                          onClick={() => {
                            pIndex === toggle
                              ? setToggle(-1)
                              : setToggle(pIndex);
                          }}
                          ref={toggle === pIndex ? popoverItemRef : null}
                        >
                          <div className="inte-topNav__listItemWrapper">
                            {item?.icon && (
                              <div className="inte-top__listItem--icon">
                                {item.icon}
                              </div>
                            )}
                            <div className="inte-top__listItem--label">
                              {item.label}
                            </div>

                            {item.badge && (
                              <span className="badge">{item.badge}</span>
                            )}
                            {item.children && <ChevronRight size={20} />}
                          </div>
                        </li>
                      }
                    >
                      <ul>
                        {item?.children?.map((child: any, cIndex: number) => {
                          return (
                            <li
                              key={cIndex}
                              className={getClassNames({
                                "inte-top__itemPopup": true,
                                "inte-topNav--childActive":
                                  path === item.path + child.path,
                              })}
                              onClick={() => {
                                onChange(item.path + child.path);
                                setPath(item.path + child.path);
                                setToggle(-1);
                              }}
                            >
                              {child.label}
                            </li>
                          );
                        })}
                      </ul>
                    </Popover>
                  ) : (
                    <li
                      className={getClassNames({
                        "inte-top__listItem": true,
                        "inte-topNav--active": path === item.path,
                      })}
                      onClick={() => {
                        if (!item?.children) {
                          onChange(item.path);
                          setPath(item.path);
                        }
                      }}
                    >
                      <div className="inte-topNav__listItemWrapper">
                        {item?.icon && (
                          <div className="inte-top__listItem--icon">
                            {item.icon}
                          </div>
                        )}
                        <div className="inte-top__listItem--label">
                          {item.label}
                        </div>

                        {item.badge && (
                          <span className="badge">{item.badge}</span>
                        )}
                        {item.children && <ChevronRight size={20} />}
                      </div>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>

          {showRightButton && (
            <div>
              <Button
                onClick={() => handleScroll(100)}
                type="outlined"
                icon={<ArrowRight />}
                customClass="inte-arrowRight__scroll"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopNavBar;
