import React, { useEffect, useId, useRef, useState } from "react";
import PortalComponent from "../../utilities/PoratalComponent";
import handleClickOutside from "../../utilities/handelClickOutside";
import changePosition from "../../utilities/changePosition";
import useDelayUnmount from "../../utilities/useDelayTimeout";
import { ArrowLeft, ArrowRight, ChevronRight } from "../../icons";
import Button from "../Button/Button";
import "./TopNavBar.css";
import getClassNames from "../../utilities/getClassnames";

export interface TopNavBarI {
  menu: any;
  onChange?: any;
  customClass?: string;
}

const TopNavBar = ({ menu, onChange, customClass = "" }: TopNavBarI) => {
  const [path, setPath] = useState("/");
  const [isOpen, setOpen] = useState(false);
  const id = useId();
  const parentRef: any = useRef(null);
  const popoverRef: any = useRef(null);
  const showDiv = useDelayUnmount(isOpen, 100);
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const handelPopoverRefEle = (ele: any) => {
    if (!ele) return;
    popoverRef.current = ele;
    changePosition(parentRef, popoverRef)();
  };

  useEffect(() => {
    const clickOutsideFun = handleClickOutside(parentRef, popoverRef, () =>
      setOpen(false)
    );
    const changePos = changePosition(parentRef, popoverRef);

    if (parentRef?.current) {
      const addAttr = parentRef?.current?.children[0];
      addAttr?.setAttribute("aria-expanded", isOpen);
      addAttr?.setAttribute("aria-controls", `inte-popover--wrapper${id}`);
      addAttr?.setAttribute("aria-owns", `inte-popover--wrapper${id}`);
    }
    if (showDiv) {
      window.addEventListener("resize", changePos, true);
      document.addEventListener("scroll", changePos, true);
      document.addEventListener("click", clickOutsideFun, true);
    }
    return () => {
      window.removeEventListener("scroll", changePos, true);
      window.removeEventListener("resize", changePos, true);
      document.removeEventListener("click", clickOutsideFun, true);
    };
  }, [showDiv]);

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

  return (
    <>
      <div
        id={id}
        className={getClassNames({
          "inte-TopNav": true,
          [customClass]: customClass,
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
          {menu?.map((item: any, Pindex: number) => (
            <li
              key={Pindex}
              className={getClassNames({
                "inte-top__listItem": true,
                "inte-topNav--active": path === item.path,
              })}
              onClick={() => {
                onChange(item.path);
                setOpen(!isOpen);
                // handleItemClick(Pindex);
                setPath(item.path);
                // console.log(path, item.path);
              }}
              ref={item?.children && path == item?.path ? parentRef : null}
            >
              <div className="inte-topNav__listItemWrapper">
                {item?.icon && (
                  <div className="inte-top__listItem--icon">{item.icon}</div>
                )}
                <div className="inte-top__listItem--label">{item.label}</div>

                {item.badge && <span className="badge">{item.badge}</span>}
                {item.children && <ChevronRight size={20} />}
              </div>

              {item?.children && showDiv && path === item.path && (
                <PortalComponent>
                  <ul
                    ref={handelPopoverRefEle}
                    className={getClassNames({
                      "inte-top__listPopup": true,
                      "inte-topNav--in": isOpen,
                      "inte-topNav--out": !isOpen,
                    })}
                  >
                    {item?.children?.map((child: any, Cindex: number) => (
                      <li key={Cindex} className="inte-top__itemPopup">
                        {child.label}
                      </li>
                    ))}
                  </ul>
                </PortalComponent>
              )}
            </li>
          ))}
        </ul>
        {showRightButton && (
          <Button
            onClick={() => handleScroll(100)}
            type="outlined"
            icon={<ArrowRight />}
            customClass="inte-arrowRight__scroll"
          />
        )}
      </div>
    </>
  );
};

export default TopNavBar;

// const handleItemClick = (index: number) => {
//   if (listRef.current) {
//     const listItem = listRef.current.children[index] as
//       | HTMLLIElement
//       | undefined;
//     if (listItem) {
//       listItem.scrollIntoView({ behavior: "smooth", inline: "center" });
//     }

//   const item = listRef.current.children[index] as HTMLLIElement | undefined;
//   if (item) {
//     const itemWidth = item.offsetWidth;
//     handleScroll(itemWidth);
//   }
//   }
// };
