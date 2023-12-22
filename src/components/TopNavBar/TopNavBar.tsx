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
  const ref1: any = useRef(null);
  const ref2: any = useRef(null);

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
      console.log(scrollAmount, newScrollLeft, "scroll");
      setScrollLeft(newScrollLeft);
    }
  };
  // new feature

  const [isPressed, setIsPressed] = useState(false);

  // useEffect(() => {
  // let interval: any;

  // const speedFunction = (id: number) => {
  //   console.log(id, "Function called");
  //   // Your code here
  // };

  // const handleMouseDown = () => {
  //   setIsPressed(true);
  //   interval = setInterval(() => {
  //     speedFunction(1);
  //   }, 100); // Adjust the interval as needed
  // };

  // const handleMouseUp = () => {
  //   setIsPressed(false);
  //   clearInterval(interval);
  // };

  // // Attach event listeners
  // document.addEventListener("mousedown", handleMouseDown);
  // document.addEventListener("mouseup", handleMouseUp);
  // document.addEventListener("touchstart", handleMouseDown);
  // document.addEventListener("touchend", handleMouseUp);

  // // Clean up event listeners
  // return () => {
  //   document.removeEventListener("mousedown", handleMouseDown);
  //   document.removeEventListener("mouseup", handleMouseUp);
  //   document.removeEventListener("touchstart", handleMouseDown);
  //   document.removeEventListener("touchend", handleMouseUp);
  //   clearInterval(interval);
  // };
  // }, []);

  useEffect(() => {
    let interval: any;

    const handleMouseDown = () => {
      setIsPressed(true);
      interval = setInterval(() => {
        speedFunction(-100);
      }, 300); // Adjust the interval as needed

      const [time, setTime] = useState(5);
      useEffect(() => {
        const t = setTimeout(() => {
          if (time > 0) {
            setTime((e) => e - 1);
          } else {
            clearTimeout(t);
          }
        }, 1000);
        return () => {
          clearTimeout(t);
        };
      }, [time]);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
      clearInterval(interval);
    };
    // Attach event listeners
    ref1?.current?.addEventListener("mousedown", handleMouseDown);
    ref1?.current?.addEventListener("mouseup", handleMouseUp);
    ref1?.current?.addEventListener("touchstart", handleMouseDown);
    ref1?.current?.addEventListener("touchend", handleMouseUp);

    // Clean up event listeners
    return () => {
      ref1?.current?.removeEventListener("mousedown", handleMouseDown);
      ref1?.current?.removeEventListener("mouseup", handleMouseUp);
      ref1?.current?.removeEventListener("touchstart", handleMouseDown);
      ref1?.current?.removeEventListener("touchend", handleMouseUp);
      clearInterval(interval);
    };
  }, []);

  const speedFunction = (id: number) => {
    handleScroll(id);
    // console.log(ref1, "Function called");
    // Your code here
  };
  // end

  return (
    <>
      <div
        id={id}
        className={getClassNames({
          "inte-TopNav": true,
          [customClass]: customClass,
        })}
      >
        {/* {showLeftButton && ( */}
        <div ref={ref1}>
          <Button
            onClick={() => {
              handleScroll(-100);
            }}
            type="outlined"
            icon={<ArrowLeft />}
            customClass="inte-arrowLeft__scroll"
          />
        </div>
        {/* // )} */}
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
          <div ref={ref2}>
            <Button
              onClick={() => handleScroll(100)}
              type="outlined"
              icon={<ArrowRight />}
              customClass="inte-arrowRight__scroll"
            />
          </div>
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
