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
  menu: any;
  onChange: (newPath: string) => void;
  customClass?: string;
  stickyTop?: boolean;
  connectLeft?: React.ReactNode;
  connectRight?: React.ReactNode;
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
  const [path, setPath] = useState("/");
  const [toggle, setToggle] = useState(-1);
  const id = useId();
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [storewidth, setStoreWidth] = useState(100);
  const popoverItemRef = useRef<any>(null);

  useLayoutEffect(() => {
    setStoreWidth(popoverItemRef?.current?.offsetWidth);
  }, [path]);

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
  }, [scrollLeft, menu]);

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

  // console.log("Parent: ", parent);
  // console.log("Child: ", child);
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
        stickyTop={false}
      />
      {width > 991 && (
        <div
          id={id}
          className={getClassNames({
            "inte-TopNav": true,
          })}
        >
          {showLeftButton && (
            <div>
              <Button
                onClick={() => {
                  handleScroll(-100);
                }}
                type="outlined"
                icon={<ArrowLeft />}
                customClass="inte-arrowLeft__scroll"
              />
            </div>
          )}

          <ul className="inte-top__list" ref={listRef}>
            {menu?.map((item: any, Pindex: number) => (
              <>
                {item?.children ? (
                  <Popover
                    key={Pindex}
                    popoverWidth={storewidth}
                    isOpen={toggle === Pindex}
                    onClose={() => setToggle(-1)}
                    activator={
                      <li
                        className={getClassNames({
                          "inte-top__listItem": true,
                          "inte-active": path === item.path + child,
                          "inte-topNavBar--toggle": Pindex === toggle,
                        })}
                        onClick={() => {
                          Pindex === toggle ? setToggle(-1) : setToggle(Pindex);
                        }}
                        ref={popoverItemRef}
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
                      {item?.children?.map((child: any, Cindex: number) => {
                        return (
                          <li
                            key={Cindex}
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
                    key={Pindex}
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
              </>
            ))}
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
