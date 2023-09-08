import React, {
  FC,
  useEffect,
  useLayoutEffect,
  useRef,
  useId,
  useState,
} from "react";
import changePosition from "../../utilities/changePosition";
import handleClickOutside from "../../utilities/handelClickOutside";
import PortalComponent from "../../utilities/PoratalComponent";
import useDelayUnmount from "../../utilities/useDelayTimeout";
import handleOnDrag from "../../utilities/handelOnDrag/useHandleOnDrag";
import Button from "../Button/Button";
import { X } from "../../storybook/Foundation/Icons/Icons";
import handleShadowOnScroll from "../../utilities/handleShadowOnScroll/handleShadowOnScroll";
import getClassNames from "../../utilities/getClassnames";
import useBodyLock from "../../utilities/UseBodyLock";
import useMobileDevice from "../../utilities/useMobileDevice";
import "./ActionList.css";
export interface ActionListI {
  isOpen: boolean;
  activator: React.ReactNode;
  options: ActionListObjI[];
  onClose: () => void;
  customClass?: string;
  customRef?: (element: HTMLElement) => void;
  direction?: "left" | "right" | "auto";
  isCloseOnEsc?: boolean;
  heading?: string;
  footer?: React.ReactNode;
}
export interface ActionListObjI {
  title?: string;
  id?: number | string;
  items: ActionListItemsI[];
}
export interface ActionListItemsI {
  id?: number | string;
  content?: string;
  destructive?: boolean;
  description?: string;
  onClick?: () => void;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  disabled?: boolean;
}

const ActionList: FC<ActionListI> = ({
  options,
  activator,
  isOpen = false,
  onClose = () => {
    //
  },
  customRef = () => {},
  customClass = "",
  direction = "auto",
  isCloseOnEsc = true,
  footer,
  heading,
}: ActionListI): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [indexSetByKeyPress, setIndexSetByKeyPress] = useState(false);
  const isMobile = useMobileDevice();
  const animateData = useDelayUnmount(isOpen, 100);
  const id = useId();
  const parentRef = useRef<any>(null);
  const popoverRef = useRef<any>(null);
  const scrollRef = useRef<any>(null);
  handleShadowOnScroll(scrollRef, animateData && isMobile);
  useBodyLock(isOpen && isMobile);

  const handelPopoverRefEle = (ele: HTMLDivElement | null) => {
    if (!ele) return;
    customRef(ele);
    popoverRef.current = ele;
  };

  useLayoutEffect(() => {
    if (isOpen)
      changePosition(parentRef, popoverRef, { direction: direction })();
  }, [animateData]);

  const handleClose = () => {
    onClose();
    setSelectedIndex(-1);
    setSelectedGroupIndex(0);
  };

  useEffect(() => {
    const clickOutsideFun = handleClickOutside(
      parentRef,
      popoverRef,
      handleClose
    );
    const changePos = changePosition(parentRef, popoverRef);
    const addAttr = parentRef.current.children[0];
    addAttr.setAttribute("aria-expanded", isOpen);
    addAttr.setAttribute("aria-controls", `inte-actionList${id}`);
    addAttr.setAttribute("aria-owns", `inte-actionList${id}`);

    const keyEscHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isCloseOnEsc && animateData) handleClose();
    };
    if (isOpen) {
      window.addEventListener("resize", changePos, true);
      window.addEventListener("scroll", changePos, true);
      window.addEventListener("click", clickOutsideFun, true);
      window.addEventListener("keydown", keyEscHandler);
    }
    return () => {
      window.removeEventListener("scroll", changePos, true);
      window.removeEventListener("resize", changePos, true);
      window.removeEventListener("click", clickOutsideFun, true);
      window.removeEventListener("keydown", keyEscHandler);
    };
  }, [animateData]);

  const handleKeyDown = (event: any) => {
    event.preventDefault();
    const { key } = event;
    if (!["ArrowUp", "ArrowDown", "Enter"].includes(key)) {
      return;
    }
    let currentInd = selectedIndex;
    let currentGroupInd = selectedGroupIndex;
    setIndexSetByKeyPress(true);
    const groupItems = options[currentGroupInd]?.items;
    const isLastItem = groupItems && currentInd === groupItems.length - 1;
    const isFirstItem = currentInd === 0 && currentGroupInd === 0;
    if (key === "ArrowUp") {
      if (isFirstItem) {
        currentGroupInd = options.length - 1;
        currentInd = options[currentGroupInd].items.length - 1;
      } else if (currentInd > 0) {
        currentInd -= 1;
      } else {
        currentGroupInd =
          (currentGroupInd - 1 + options.length) % options.length;
        currentInd = options[currentGroupInd].items.length - 1;
      }
      setSelectedIndex(currentInd);
      setSelectedGroupIndex(currentGroupInd);
    } else if (key === "ArrowDown") {
      if (isLastItem) {
        currentInd = 0;
        currentGroupInd =
          currentGroupInd === options.length - 1 ? 0 : currentGroupInd + 1;
      } else {
        currentInd += 1;
      }
      setSelectedIndex(currentInd);
      setSelectedGroupIndex(currentGroupInd);
    } else if (key === "Enter") {
      const item = groupItems?.[currentInd];
      if (item?.onClick) {
        item.onClick();
      }
      handleClose();
    }
    const currentItem =
      popoverRef.current?.children?.[0]?.children?.[currentGroupInd]
        ?.children?.[1]?.children?.[currentInd];
    if (currentItem) {
      currentItem.scrollIntoView({
        block: "center",
      });
    }
  };

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = handleOnDrag(
    popoverRef,
    scrollRef,
    isOpen,
    onClose
  );

  return (
    <div
      ref={parentRef}
      className="inte-actionList"
      onKeyDown={(e) => isOpen && handleKeyDown(e)}
    >
      {activator}
      <>
        {animateData && (
          <PortalComponent>
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              ref={handelPopoverRefEle}
              id={`inte-actionList${id}`}
              className={getClassNames({
                "inte-actionList__wrapper": true,
                "inte-actionList--mobileDevice": isMobile,
                "inte-actionList--in": !isMobile && isOpen,
                "inte-actionList--out": !isMobile && !isOpen,
                "inte-mobileDevice--in": isMobile && isOpen,
                "inte-mobileDevice--out": isMobile && !isOpen,
                [customClass]: customClass,
              })}
            >
              {isMobile && (
                <div className="inte-actionList__mobileHeading__wrapper">
                  <div className="inte-actionList__handelBar"></div>
                  <h3 className="inte-actionList__mobile--heading">
                    {heading}
                  </h3>
                  <Button
                    icon={<X color="#1C2433" />}
                    type="textButton"
                    onClick={onClose}
                  />
                </div>
              )}

              <ul
                ref={isMobile ? scrollRef : null}
                className={getClassNames({
                  "inte-actionList__sectionContainer": true,
                  "inte-actionList__inFooter": footer,
                })}
                onTouchStart={(e) => handleTouchStart(e)}
              >
                {options?.map((items: any, groupIndex: any) => {
                  return (
                    <li
                      id={items.id}
                      key={groupIndex}
                      className={getClassNames({
                        "inte-actionList__groupSection": true,
                        "inte-actionList__noTitle": items.title == undefined,
                      })}
                    >
                      {items.title && (
                        <div className="inte-actionList__heading">
                          {items.title}
                        </div>
                      )}
                      <ul className="inte-actionList__groupItem">
                        {items.items?.map((item: any, index: any) => {
                          return (
                            <li
                              id={item.id}
                              key={index}
                              style={{
                                backgroundColor: !isMobile
                                  ? index === selectedIndex &&
                                    groupIndex === selectedGroupIndex
                                    ? item.destructive
                                      ? "var(--inte-R30)"
                                      : "var(--inte-P30)"
                                    : "var(--inte-G0)"
                                  : "",
                              }}
                              className={getClassNames({
                                "inte-actionList__item": true,
                                "inte-actionList__item--destrctive":
                                  item.destructive,
                                "inte-actionList--disabled": item.disabled,
                              })}
                              onClick={() => {
                                if (item.disabled) return;
                                item.onClick();
                                handleClose();
                              }}
                              onMouseOver={() => {
                                if (!indexSetByKeyPress) {
                                  setSelectedGroupIndex(groupIndex);
                                  setSelectedIndex(index);
                                }
                                setIndexSetByKeyPress(false);
                              }}
                            >
                              <div className="inte-actionList__content">
                                {item.prefixIcon && (
                                  <div className="inte-actionList__icon">
                                    {item.prefixIcon}
                                  </div>
                                )}

                                <div className="inte-actionList__contentText">
                                  <p className="inte-actionList__title">
                                    {item.content}
                                  </p>
                                  {item.description && (
                                    <p className="inte-actionList__description">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                                {item.suffixIcon && (
                                  <div className="inte-actionList__icon">
                                    {item.suffixIcon}
                                  </div>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
              {footer && (
                <div className="inte-actionList__footer">{footer}</div>
              )}
            </div>
            {isMobile && (
              <div onClick={onClose} className="inte-actionList__backdrop" />
            )}
          </PortalComponent>
        )}
      </>
    </div>
  );
};

export default ActionList;
