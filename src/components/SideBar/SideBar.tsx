import React, {
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { AppContext } from "../../utilities/context/AppContext";
import { classnames } from "../../utilities/globalFunction";
import { ChevronDown, ChevronLeft, LogOut } from "react-feather";
import { searchWordInString } from "./globalFunc";

import "./sidebar.css";

export interface SideBarI {
  onChange: (newPath: string) => void;
  logo?: React.ReactNode;
  children: React.ReactElement<ItemI>[] | React.ReactElement<ItemI>;
  isCloseOnEsc?: boolean;
  className?: string;
  isLogoutAction?: boolean;
  onLogoutClick?: () => void;
}

export interface MenuI {
  id: string | number;
  label: string;
  path: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  children?: MenuI[];
  isDisabled?: boolean;
}

export interface ItemI {
  title?: string | React.ReactNode;
  menu: MenuI[];
  onChange?: (newPath: string) => void;
  type?: string;
  expandedItem?: any;
  expandIconClickHandler?: Function;
}

const SideBar = ({
  onChange,
  logo = <img src={''} className="sidebar-logo" />,
  children,
  isCloseOnEsc = true,
  className,
  isLogoutAction,
}: SideBarI) => {
  const context = useContext(AppContext);
  const [expandedItem, setExpandedItem] = useState<any>({});
  const expandIconClickHandler = useCallback(
    (e: React.MouseEvent, path: string, flag: boolean) => {
      e.stopPropagation();
      setExpandedItem({ [path]: !flag });
    },
    []
  );

  const sideBarRef = useRef<HTMLElement>(null);

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

  const footerHeight = useMemo(() => {
    if (sideBarRef.current) {
      let footer = sideBarRef.current.getElementsByClassName(
        "Pixel-sideBar__Item--footer"
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

  return (
    <>
      <aside
        className={classnames({
          "Pixel-sideBar": true,
          [className as string]: className,
        })}
        style={containerStyle}
        ref={sideBarRef}
      >
        {logo ??
          <div className="sidebar-header">
            <div className="Pixel-sideBar__logo">{logo}</div>
            {/* {context.sideBar[0] && ( */}
            {/* <button className="Pixel-sideBar__closeButton" onClick={closeSideBar}>
            <ChevronLeft color={"#000"} />
          </button> */}
            {/* )} */}
          </div>
        }

        <div className="Pixel-sideBar__ItemList">
          {Array.isArray(children)
            ? children?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Item
                    {...item?.props}
                    onChange={handelRouteChange}
                    expandedItem={expandedItem}
                    expandIconClickHandler={expandIconClickHandler}
                  />
                </React.Fragment>
              );
            })
            : children?.props.menu && (
              <Item
                {...children?.props}
                onChange={handelRouteChange}
                expandedItem={expandedItem}
                expandIconClickHandler={expandIconClickHandler}
              />
            )}
        </div>
        {/* {isLogoutAction && ( */}
        <div className="sidebar-footer">
          <div className="Pixel-sideBar--logout__Item">
            <div className="Pixel-sideBar__Icon">
              <LogOut size={16} />
            </div>
            <div className="Pixel-sideBar__label">Logout</div>
          </div>
        </div>
        {/* )} */}

      </aside>
    </>
  );
};

const Item = ({
  title,
  menu,
  onChange = () => { },
  type,
  expandedItem,
  expandIconClickHandler = () => { },
}: ItemI) => {
  const currentPath = window.location.pathname;
  const id = useId();
  const makeMenuList = (item: MenuI, parent = "") => {
    let active = searchWordInString(currentPath, parent + item.path);
    if (currentPath !== "/" && parent + item.path === "/") active = false;
    return (
      <li
        key={item.id}
        className={classnames({
          "Pixel-sideBar__listItem": true,
          "Pixel-sideBar__listItem--active": active,
          "Pixel-sideBar__listItem--disabled": item.isDisabled,
        })}
      >
        <div
          role="none"
          className="Pixel-sideBar__itemBody"
          onClick={() => onChange(parent + item.path)}
        >
          <div className="Pixel-sideBar__linkBody">
            {item.icon && (
              <div className="Pixel-sideBar__Icon">{item.icon}</div>
            )}
            <div className="Pixel-sideBar__label">{item.label}</div>
          </div>
          {item.badge && (
            <div className="Pixel-sideBar__badge">{item.badge}</div>
          )}
        </div>
      </li>
    );
  };

  const MakeExpandableItem = (parentItem: MenuI) => {
    const active =
      Object.keys(expandedItem)[0]?.includes(parentItem.path) &&
      Object.values(expandedItem)[0];
    return (
      <li
        key={parentItem.id}
        className={classnames({
          "Pixel-sideBar__listItem": true,
          "Pixel-sideBar__listItem--expandable": true,
          "Pixel-sideBar__listItem--active": searchWordInString(
            currentPath,
            parentItem.path
          ),
          "Pixel-sideBar__listItem--expandable--active": active,
          "Pixel-sideBar__listItem--disabled": parentItem.isDisabled,
        })}
      >
        <div
          role="none"
          className="Pixel-sideBar__itemBody"
          onClick={(e) => expandIconClickHandler(e, parentItem.path, active)}
        >
          <div className="Pixel-sideBar__linkBody">
            {parentItem.icon && (
              <div className="Pixel-sideBar__Icon">{parentItem.icon}</div>
            )}
            <div className="Pixel-sideBar__label">{parentItem.label}</div>
          </div>

          <div className={classnames({
            "Pixel-sideBar__expandIcon": true,
            "Pixel-sideBar__expandIcon--active": active,
          })}
          >
            <ChevronDown size="16" color="rgb(64, 86, 109)" />
          </div>
        </div>
        {
          <ul className="Pixel-sideBar__childList">
            {parentItem.children?.map((item) => {
              return makeMenuList(item, parentItem.path);
            })}
          </ul>
        }
      </li>
    );
  };

  return (
    <div
      className={classnames({
        "Pixel-sideBar__Item": true,
        "Pixel-sideBar__Item--footer": type === "footer",
      })}
    >
      {title && <div className="Pixel-sideBar__title">{title}</div>}
      <nav aria-label={id}>
        <ul className="Pixel-sideBar__list">
          {menu.map((item) => {
            if (item.children) return MakeExpandableItem(item);
            return makeMenuList(item);
          })}
        </ul>
      </nav>
    </div>
  );
};

SideBar.Item = Item;

export default SideBar;
