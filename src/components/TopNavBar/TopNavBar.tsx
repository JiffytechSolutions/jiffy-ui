import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChevronRight } from "../../icons";
import getClassNames from "../../utilities/getClassnames";
import AppBar from "../AppBar/AppBar";
import useWindowResize from "../../utilities/useWindowResize";
import Popover from "../Popover/Popover";
import Carousel from "../Carousel/Carousel";
import "./TopNavBar.css";

export interface TopNavBarI {
  onChange: (newPath: string) => void;
  stickyTop?: boolean;
  slidesToShow?: number;
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
  slidesToShow = 6,
  stickyTop = true,
}: TopNavBarI) => {
  const { width } = useWindowResize();
  const [path, setPath] = useState("");
  const [toggle, setToggle] = useState(-1);
  const id = useId();
  const popoverItemRef = useRef<any>(null);
  const [storewidth, setStoreWidth] = useState();

  useEffect(() => {
    if (storewidth !== "undefined" && toggle !== -1) {
      setStoreWidth(popoverItemRef?.current?.offsetWidth);
    }
  }, [popoverItemRef?.current, toggle]);

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

  useEffect(() => {
    const appEle = document.querySelector(".inte-appWrapper");
    if (appEle?.classList) {
      document.body.classList.add("inte-topNavBar--active");
      stickyTop && document.body.classList.add("inte-topNav__sticky");
      !stickyTop && document.body.classList.remove("inte-topNav__sticky");
    }
  }, [width]);
  useLayoutEffect(() => {
    const appEle = document.querySelector(".inte-appWrapper");

    if (
      appEle?.classList &&
      appEle?.classList?.contains("inte-sideBar--active") &&
      width > 991
    ) {
      appEle?.classList?.remove("inte-sideBar--active");
    }
  }, [width]);

  const renderSlidesWithImg = () =>
    menu?.map((item: any, pIndex: number) => {
      console.log(item);
      return (
        <React.Fragment key={pIndex}>
          {item?.children ? (
            <Popover
              direction="left"
              popoverWidth={storewidth}
              isOpen={toggle === pIndex}
              onClose={() => !item?.isDisabled && setToggle(-1)}
              activator={
                <div
                  className={getClassNames({
                    "inte-top__listItem": true,
                    "inte-topNavBar--disable": item?.isDisabled,
                    "inte-active":
                      !item?.isDisabled && path === item.path + child,
                    "inte-topNavBar--toggle":
                      !item?.isDisabled && pIndex === toggle,
                  })}
                  onClick={() => {
                    !item?.isDisabled
                      ? pIndex === toggle
                        ? setToggle(-1)
                        : setToggle(pIndex)
                      : null;
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

                    {item.badge && <span className="badge">{item.badge}</span>}
                    {item.children && <ChevronRight size={20} />}
                  </div>
                </div>
              }
            >
              <div>
                {item?.children?.map((child: any, cIndex: number) => {
                  // console.log(child);
                  return (
                    <div
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
                    </div>
                  );
                })}
              </div>
            </Popover>
          ) : (
            <div
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
                  <div className="inte-top__listItem--icon">{item.icon}</div>
                )}
                <div className="inte-top__listItem--label">{item.label}</div>

                {item.badge && <span className="badge">{item.badge}</span>}
                {item.children && <ChevronRight size={20} />}
              </div>
            </div>
          )}
        </React.Fragment>
      );
    });

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
          <Carousel
            showDots={false}
            arrowPosition="horizontalCenter"
            slidesToShow={slidesToShow}
            slideUsingMouse={false}
            slideUsingTouch={false}
            spaceBetweenSlides={10}
          >
            {renderSlidesWithImg()}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default TopNavBar;
