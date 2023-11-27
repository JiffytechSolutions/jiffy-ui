import React, {
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { Menu, Minus, X } from "../../storybook/Foundation/Icons/Icons";
import { AppContext } from "../../utilities/context/AppContext";
import getClassNames from "../../utilities/getClassnames";
import handleClickOutside from "../../utilities/handelClickOutside";
import Button from "../Button/Button";
import SideBar from "../SideBar/SideBar";
// import "./TopNavBar.css";
import Popover from "../Popover/Popover";
import AppBar from "../AppBar/AppBar";
import Carousel from "../Carousel/Carousel";

export interface SideBarI {
  onChange: (newPath: string) => void;
  logo?: React.ReactNode;
  children?:
    | React.ReactElement<SectionI>[]
    | React.ReactElement<SectionI>
    | any;
  connectLeft?: React.ReactNode;
  connectRight?: React.ReactNode;
  customClass?: string;
  isCloseOnEsc?: boolean;
  topBar?: boolean;
  stickyTop?: boolean;
}

export interface MenuI {
  id: string | number;
  label: string;
  path: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  children?: MenuI[];
}

export interface SectionI {
  menu: MenuI[];
  onChange?: (newPath: string) => void;
  type?: string;
  expandedItem?: any;
  expandIconClickHandler?: Function;
}

export interface AppBarI {
  connectLeft?: React.ReactNode;
  connectRight?: React.ReactNode;
  stickyTop?: boolean;
  topBar?: boolean;
  customClass?: string;
  children?: any;
}

const NavBar = ({
  onChange,
  connectLeft,
  connectRight,
  logo,
  stickyTop = true,
  children,
  customClass,
  isCloseOnEsc = true,
  topBar = false,
}: SideBarI) => {
  const context = useContext(AppContext);
  const toggleSideBar = () => {
    context.sideBar[1](!context.sideBar[0]);
  };
  const [expandedItem, setExpandedItem] = useState<any>({});
  const expandIconClickHandler = useCallback(
    (e: React.MouseEvent, path: string, flag: boolean) => {
      e.stopPropagation();
      setExpandedItem({ [path]: !flag });
    },
    []
  );

  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setExpandedItem({ [window.location.pathname]: true });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return () => {
      setExpandedItem({});
    };
  }, [window.location.pathname]);

  useEffect(() => {
    const handleEscapeClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSideBar();
      }
    };
    if (isCloseOnEsc) {
      window.addEventListener("keydown", handleEscapeClose, true);
    }
    return () => {
      window.removeEventListener("keydown", handleEscapeClose, true);
    };
  }, [isCloseOnEsc]);

  const closeSideBar = () => {
    context.sideBar[1](false);
  };

  const handelRouteChange = (newPath: string) => {
    onChange(newPath);
    closeSideBar();
  };

  useEffect(() => {
    const clickOutside = handleClickOutside(
      sideBarRef,
      sideBarRef,
      closeSideBar
    );
    if (context.sideBar[0]) {
      document.addEventListener("click", clickOutside, true);
    }
    return () => {
      document.removeEventListener("click", clickOutside, true);
    };
  }, [context.sideBar[0]]);

  const footerHeight = useMemo(() => {
    if (sideBarRef.current) {
      let footer = sideBarRef.current.getElementsByClassName(
        "inte-sideBar__section--footer"
      );
      if (footer.length) {
        return footer[0].clientHeight + "px";
      }
    }
    return "0";
  }, [children, sideBarRef.current]);

  const containerStyle = {
    "--footerHeight": footerHeight,
  } as React.CSSProperties;

  const AppBar = ({
    connectLeft,
    connectRight,
    stickyTop = true,
    customClass = "",
    topBar = false,
    children,
  }: AppBarI) => {
    const context = useContext(AppContext);
    const toggleSideBar = () => {
      context.sideBar[1](!context.sideBar[0]);
    };

    return (
      <header
        className={getClassNames({
          "inte-appBar--container": true,
          "inte-appBar--stickyTop": stickyTop,
          [customClass]: customClass,
        })}
      >
        <div className="inte-appBar__connectLeft">
          <div className="inte-appBar__toggleButton">
            <Button
              accessibilityLabel="toggle-button"
              icon={<Menu size={20} />}
              type={"outlined"}
              onClick={toggleSideBar}
            />
          </div>
          {connectLeft ?? null}
        </div>

        {children}
        {connectRight && topBar && (
          <div className="inte-appBar__connectRight">{connectRight}</div>
        )}
      </header>
    );
  };

  return (
    <div
      className={`inte-top__navBar ${
        topBar ? "inte-top__Bar" : "inte-nav__bar"
      }`}
    >
      {topBar && (
        <>
          <AppBar
            topBar={true}
            customClass="inte-topBar"
            connectLeft={connectLeft}
            connectRight={connectRight}
          />
        </>
      )}
      <header
        className={getClassNames({
          "inte-appBar--container": true,
          "inte-appBar--stickyTop": stickyTop,
          "inte-navBar": true,
          [customClass ?? ""]: customClass,
        })}
      >
        {!topBar && (
          <div className="inte-appBar__connectLeft">
            <div className="inte-appBar__toggleButton">
              <Button
                accessibilityLabel="toggle-button"
                icon={<Menu size={20} />}
                type={"outlined"}
                onClick={toggleSideBar}
              />
            </div>
            {connectLeft ?? null}
          </div>
        )}

        <div
          className={getClassNames({
            "inte-sideBar": true,
          })}
          style={containerStyle}
          ref={sideBarRef}
        >
          {logo && <div className="inte-sideBar__logo">{logo}</div>}

          <div className="inte-sideBar__sectionList">
            {Array.isArray(children)
              ? children?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Section
                        {...item?.props}
                        onChange={handelRouteChange}
                        expandedItem={expandedItem}
                        expandIconClickHandler={expandIconClickHandler}
                      />
                    </React.Fragment>
                  );
                })
              : children?.props.menu && (
                  <Section
                    {...children?.props}
                    onChange={handelRouteChange}
                    expandedItem={expandedItem}
                    expandIconClickHandler={expandIconClickHandler}
                  />
                )}
          </div>
        </div>

        {connectRight && !topBar && (
          <div className="inte-appBar__connectRight">{connectRight}</div>
        )}
      </header>
    </div>
  );
};

const checkIndex = (str: string, searchStr: string, ind: number) => {
  let i = 0;
  for (i; i < searchStr.length; i++) {
    if (!str[ind + i] || str[ind + i] !== searchStr[i]) return false;
  }
  if (str[i + ind] && str[i + ind] !== "/") return false;
  return true;
};

const searchWordInString = (str: string, searchStr: string): boolean => {
  if (str.length < searchStr.length) return false;
  for (let i = 0; i <= str.length - searchStr.length; i++) {
    if (str[i] === searchStr[0]) {
      if (checkIndex(str, searchStr, i)) return true;
    }
  }
  return false;
};

const Section = ({
  menu,
  onChange = () => {},
  type,
  expandedItem,
  expandIconClickHandler = () => {},
}: SectionI) => {
  const currentPath = window.location.pathname;
  const id = useId();
  const makeMenuList = (item: MenuI, parent = "") => {
    let active = searchWordInString(currentPath, parent + item.path);
    if (currentPath !== "/" && parent + item.path === "/") active = false;
    return (
      <li
        key={item.id}
        className={getClassNames({
          "inte-sideBar__listItem": true,
          "inte-sideBar__listItem--active": active,
        })}
      >
        <div
          className="inte-sideBar__itemBody"
          onClick={() => onChange(parent + item.path)}
        >
          <div className="inte-sideBar__linkBody">
            {item.icon && <div className="inte-sideBar__Icon">{item.icon}</div>}
            <div className="inte-sideBar__label">{item.label}</div>
          </div>
          {item.badge && (
            <div className="inte-sideBar__badge">{item.badge}</div>
          )}
        </div>
      </li>
    );
  };

  const [open, setOpen] = useState(false);
  const MakeExpandableItem = (parentItem: MenuI) => {
    const active =
      Object.keys(expandedItem)[0]?.includes(parentItem.path) &&
      Object.values(expandedItem)[0];
    return (
      <li
        key={parentItem.id}
        className={getClassNames({
          "inte-sideBar__listItem": true,
          "inte-sideBar__listItem--expandable": true,
          "inte-sideBar__listItem--active": searchWordInString(
            currentPath,
            parentItem.path
          ),
          "inte-sideBar__listItem--expandable--active": active,
        })}
      >
        <Popover
          // direction="right"
          isOpen={open}
          onClose={() => setOpen(!open)}
          activator={
            <div
              className="inte-sideBar__itemBody"
              onClick={(e) => {
                setOpen(!open);
                expandIconClickHandler(e, parentItem.path, active);
              }}
            >
              <div className="inte-sideBar__linkBody">
                {parentItem.icon && (
                  <div className="inte-sideBar__Icon">{parentItem.icon}</div>
                )}
                <div className="inte-sideBar__label">{parentItem.label}</div>
              </div>

              <div
                className={getClassNames({
                  "inte-sideBar__expandIcon": true,
                  "inte-sideBar__expandIcon--active": active,
                })}
              >
                <Minus size="20" color="#1c2433" />
                <Minus size="20" color="#1c2433" />
              </div>
            </div>
          }
        >
          <ul className="inte-sideBar__childList">
            {parentItem.children?.map((item) => {
              return makeMenuList(item, parentItem.path);
            })}
          </ul>
        </Popover>
      </li>
    );
  };

  return (
    <div
      className={getClassNames({
        "inte-sideBar__section": true,
        "inte-sideBar__section--footer": type === "footer",
      })}
    >
      <nav aria-label={id}>
        <ul className="inte-sideBar__list">
          {menu.map((item) => {
            if (item.children) return MakeExpandableItem(item);
            return makeMenuList(item);
          })}
        </ul>
      </nav>
    </div>
  );
};

SideBar.Section = Section;

export default NavBar;
