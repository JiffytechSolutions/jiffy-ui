import React, { useEffect, useId, useRef, useState } from "react";
import "./Top.css";
import PortalComponent from "../../utilities/PoratalComponent";
import handleClickOutside from "../../utilities/handelClickOutside";
import changePosition from "../../utilities/changePosition";
import useDelayUnmount from "../../utilities/useDelayTimeout";
import { ChevronRight } from "../../icons";
import useWindowResize from "../../utilities/useWindowResize";
import getClassNames from "../../utilities/getClassnames";

export interface TabsI {
  menu: any;
  onChange: (newTabKey: string) => void;
  customClass?: string;
}
export interface TabI {
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  label: string;
  isDisabled?: boolean;
}

const Top = ({ menu, onChange, customClass = "" }: TabsI) => {
  const [isOpen, setOpen] = useState(false);
  const id = useId();
  const showDiv = useDelayUnmount(isOpen, 100);
  const [value, setValue] = useState("");
  const [key, setKey] = useState(0);
  const parentRef: any = useRef(null);
  const popoverRef: any = useRef(null);
  const activeTabRef = useRef<HTMLLIElement>(null);

  // Auto  scroll
  const keyEventMap: KeyEventMap = {
    ArrowRight: (activeTabIndex: number) =>
      activeTabIndex < menu.length - 1 ? activeTabIndex + 1 : 0,
    ArrowLeft: (activeTabIndex: number) =>
      activeTabIndex > 0 ? activeTabIndex - 1 : menu.length - 1,
    ArrowUp: (activeTabIndex: number) =>
      activeTabIndex > 0 ? activeTabIndex - 1 : menu.length - 1,
    ArrowDown: (activeTabIndex: number) =>
      activeTabIndex < menu.length - 1 ? activeTabIndex + 1 : 0,
  };

  const handleTabHeaderKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>
  ) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") return;
    event.preventDefault();
    const activeTabIndex = menu.findIndex((item: any) => item.label === value);
    const operation = keyEventMap?.[event.key];
    if (operation) {
      const nextTabIndex = () => {
        let t = operation(activeTabIndex);
        while (menu[t].isDisabled) {
          t = operation(t);
        }
        return t;
      };
      onChange(menu[nextTabIndex()].label);
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
  // popover

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

  return (
    <div
      className={getClassNames({
        "inte-TopNav": true,
        [customClass]: customClass,
      })}
    >
      <ul
        role="tablist"
        className={getClassNames({
          "inte-top__list": true,
        })}
      >
        {menu.map((item: any, ind: any) => {
          const isActive = value === item.label;

          return (
            <li
              ref={isActive ? activeTabRef : null}
              role="tab"
              aria-selected={value === item.label}
              key={ind}
              // ref={parentRef}

              className={getClassNames({
                "inte-top__listItem": true,
                " inte-topNav--active": value === item.label,
              })}
              onClick={() => {
                !item.isDisabled && onChange(item.label);
                setValue(item.label);
              }}
              onKeyDown={handleTabHeaderKeyDown}
              tabIndex={0}
            >
              <>
                {item.icon && (
                  <div className="inte-top__listItem--icon">{item.icon}</div>
                )}
                <div className="inte-top__listItem--label">{item.label}</div>

                {item.badge && <span className="badge">{item.badge}</span>}
                {item.children && <ChevronRight size={20} />}
              </>
              {item.children && showDiv && (
                <PortalComponent>
                  <ul
                    ref={handelPopoverRefEle}
                    className={`inte-top__listPopup ${
                      isOpen ? "inte-topNav--in" : "inte-topNav--out"
                    }`}
                  >
                    {item.children.map((child: any, Cindex: number) => (
                      <li key={Cindex} className="inte-top__itemPopup">
                        {child.label}
                      </li>
                    ))}
                  </ul>
                </PortalComponent>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface KeyEventMap {
  [label: string]: (activeTabIndex: number) => number;
}

export default Top;

// start tabs

// import React, { useEffect, useId, useRef, useState } from "react";
// import "./Top.css";
// import PortalComponent from "../../utilities/PoratalComponent";
// import handleClickOutside from "../../utilities/handelClickOutside";
// import changePosition from "../../utilities/changePosition";
// import useDelayUnmount from "../../utilities/useDelayTimeout";
// import { ChevronRight } from "../../icons";
// import useWindowResize from "../../utilities/useWindowResize";

// export interface TabsI {
//   menu: any;
//   onChange: any;
//   children?: React.ReactNode;
//   customClass?: string;
// }
// export interface TabI {
//   icon?: React.ReactNode;
//   badge?: React.ReactNode;
//   label: string;
//   isDisabled?: boolean;
// }

// const Top = ({ menu, onChange }: TabsI) => {
//   const [value, setValue] = useState("");
//   const activeTabRef = useRef<any>(null);
//   const [isOpen, setOpen] = useState(false);
//   const id = useId();
//   const parentRef: any = useRef(null);
//   const popoverRef: any = useRef(null);
//   const showDiv = useDelayUnmount(isOpen, 100);
//   const [key, setKey] = useState(0);

//   const handelPopoverRefEle = (ele: any) => {
//     if (!ele) return;
//     popoverRef.current = ele;
//     changePosition(parentRef, popoverRef)();
//   };

//   useEffect(() => {
//     const clickOutsideFun = handleClickOutside(parentRef, popoverRef, () =>
//       setOpen(false)
//     );
//     const changePos = changePosition(parentRef, popoverRef);

//     if (parentRef?.current) {
//       const addAttr = parentRef?.current?.children[0];
//       addAttr?.setAttribute("aria-expanded", isOpen);
//       addAttr?.setAttribute("aria-controls", `inte-popover--wrapper${id}`);
//       addAttr?.setAttribute("aria-owns", `inte-popover--wrapper${id}`);
//     }
//     if (showDiv) {
//       window.addEventListener("resize", changePos, true);
//       document.addEventListener("scroll", changePos, true);
//       document.addEventListener("click", clickOutsideFun, true);
//     }
//     return () => {
//       window.removeEventListener("scroll", changePos, true);
//       window.removeEventListener("resize", changePos, true);
//       document.removeEventListener("click", clickOutsideFun, true);
//     };
//   }, [showDiv]);

//   //   scroll

//   const keyEventMap: KeyEventMap = {
//     ArrowRight: (activeTabIndex: number) =>
//       activeTabIndex < menu.length - 1 ? activeTabIndex + 1 : 0,
//     ArrowLeft: (activeTabIndex: number) =>
//       activeTabIndex > 0 ? activeTabIndex - 1 : menu.length - 1,
//     ArrowUp: (activeTabIndex: number) =>
//       activeTabIndex > 0 ? activeTabIndex - 1 : menu.length - 1,
//     ArrowDown: (activeTabIndex: number) =>
//       activeTabIndex < menu.length - 1 ? activeTabIndex + 1 : 0,
//   };

//   const handleTabHeaderKeyDown = (
//     event: React.KeyboardEvent<HTMLLIElement>
//   ) => {
//     if (event.key === "ArrowRight" || event.key === "ArrowLeft") return;
//     if (event.key === "ArrowDown" || event.key === "ArrowUp") return;
//     event.preventDefault();
//     const activeTabIndex = menu.findIndex((item: any) => item.label === value);
//     const operation = keyEventMap?.[event.key];
//     if (operation) {
//       const nextTabIndex = () => {
//         let t = operation(activeTabIndex);
//         while (menu[t].isDisabled) {
//           t = operation(t);
//         }
//         return t;
//       };
//       onChange(menu[nextTabIndex()].label);
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setKey((prevKey) => prevKey + 1);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const scrollTheTab = (ele: HTMLLIElement) => {
//     const parent = ele.parentElement;
//     if (!parent) return;
//     const parentDimension = parent.getBoundingClientRect();
//     const childDimension = ele.getBoundingClientRect();
//     const x =
//       childDimension.left +
//       childDimension.width / 2 -
//       (parentDimension.left + parentDimension.width / 2) +
//       parent.scrollLeft;
//     const y =
//       childDimension.top +
//       childDimension.height / 2 -
//       (parentDimension.top + parentDimension.height / 2) +
//       parent.scrollTop;
//     parent.scrollTo({
//       top: y,
//       left: x,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (parentRef.current) {
//       scrollTheTab(parentRef.current);
//     }
//   }, [parentRef.current]);

//   return (
//     <div id={id} className="inte-TopNav">
//       <ul className="inte-top__list">
//         {menu.map((item: any, Pindex: number) => (
//           <li
//             key={Pindex}
//             ref={parentRef}
//             className="inte-top__listItem"
//             onClick={() => {
//               onChange(Pindex);
//               setOpen(!isOpen);
//               setValue(item.label);
//               console.log(item.path, Pindex, "index");
//             }}
//             onKeyDown={handleTabHeaderKeyDown}
//           >
// <>
//   {item.icon && (
//     <div className="inte-top__listItem--icon">{item.icon}</div>
//   )}
//   <div className="inte-top__listItem--label">{item.label}</div>

//   {item.badge && <span className="badge">{item.badge}</span>}
//   {item.children && <ChevronRight size={20} />}
// </>
// {item.children && showDiv && (
//   <PortalComponent>
//     <ul
//       ref={handelPopoverRefEle}
//       className={`inte-top__listPopup ${
//         isOpen ? "inte-topNav--in" : "inte-topNav--out"
//       }`}
//     >
//       {item.children.map((child: any, Cindex: number) => (
//         <li key={Cindex} className="inte-top__itemPopup">
//           {child.label}
//         </li>
//       ))}
//     </ul>
//   </PortalComponent>
// )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// interface KeyEventMap {
//   [label: string]: (activeTabIndex: number) => number;
// }
// export default Top;
