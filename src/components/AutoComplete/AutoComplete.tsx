import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Search, X } from "../../storybook/Foundation/Icons/Icons";
import useDelayUnmount from "../../utilities/useDelayTimeout";
import changePosition from "../../utilities/changePosition";
import handleClickOutside from "../../utilities/handelClickOutside";
import PortalComponent from "../../utilities/PoratalComponent";
import { TextField } from "../Form";
import Skeleton from "../Skeleton/Skeleton";
import useMobileDevice from "../../utilities/useMobileDevice";
import Button from "../Button/Button";
import handleOnDrag from "../../utilities/handelOnDrag/useHandleOnDrag";
import getClassNames from "../../utilities/getClassnames";
import "./AutoComplete.css";

function AutoComplete({
  options,
  value = "",
  onChange,
  onClick,
  onEnter,
  name,
  helpText,
  setHiglighted = true,
  placeHolder,
  isLoading = false,
  customClass,
  isClearable = true,
  popoverPosition = "right",
  showPopover = false,
  ...props
}: SearchI): JSX.Element {
  const [showList, setShowList] = useState<boolean>(false);
  const [showList1, setShowList1] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [hoveredCart, setHoveredCart] = useState(-1);
  const [currentID, setCurrentID] = useState("1");
  const [selectedIndex, setSelectedIndex] = useState<any>(-1);
  const [color, setColor] = useState("var(--inte-G90)");
  const [opesheet, setOpensheet] = useState(false);
  const rId = useId();
  const myRef: any = useRef(null);
  const myReff: any = useRef(null);
  const scrollRef = useRef<any>(null);
  const ListRef = useRef<any>({});
  const popoverRef = useRef<HTMLDivElement>(null);
  const showDiv = useDelayUnmount(opesheet, 300);
  const isMobile = useMobileDevice();
  //options Filtering
  const filteredName = options.filter((val: any) => {
    if (value === "") {
      return;
    } else if (
      val.label
        ?.toLowerCase()
        .includes(
          value.toLowerCase().replace(/\s+/g, " ").trimEnd().trimStart()
        )
    ) {
      return val;
    }
  });
  //checking condition for opening dropdown list
  const renderStatementResult =
    value && value.trim().length && value !== "" && showList == true;

  // open dropdown on textfiled Focus
  function onFocus() {
    setShowList(true);
    setShowList1(true);
    setColor("var(--inte-G800)");
  }
  // Search hightlighted
  function highlight(label: string, text: string) {
    const index = label
      .toLowerCase()
      .indexOf(text.toLowerCase().replace(/\s+/g, " ").trimEnd().trimStart());
    if (index >= 0) {
      return (
        <>
          {label.substring(0, index)}
          <span style={{ color: "var(--inte-G90)" }}>
            {label.substring(
              index,
              index + text.replace(/\s+/g, " ").trimEnd().trimStart().length
            )}
          </span>

          {label.substring(
            index + text.replace(/\s+/g, " ").trimEnd().trimStart().length
          )}
        </>
      );
    }
    return label;
  }
  // Dynamic Position Calculation
  useLayoutEffect(() => {
    changePosition(myRef, myReff, { width: true })();
    window.addEventListener(
      "resize",
      changePosition(myRef, myReff, { width: true })
    );
    window.addEventListener(
      "scroll",
      changePosition(myRef, myReff, { width: true })
    );
    return () => {
      window.removeEventListener(
        "scroll",
        changePosition(myRef, myReff, { width: true })
      );
      window.removeEventListener(
        "resize",
        changePosition(myRef, myReff, { width: true })
      );
    };
  }, [value, filteredName]);

  // Close Autocomplete dropdown on outside click
  useEffect(() => {
    const onClose = () => {
      setShowList(false);
      setShowList1(false);
      setColor("var(--inte-G90)");
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside(myRef, myReff, onClose)
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside(myRef, myReff, onClose)
      );
    };
  }, [myReff.current]);

  useEffect(() => {
    function handleResize() {
      setHoveredCart(-1);
    }
    window.addEventListener("resize", handleResize);
  });

  // on Hover Popover Portal Dimensions Code
  useLayoutEffect(() => {
    const portalheight = popoverRef.current?.offsetHeight ?? 0;
    const portalWidth = popoverRef.current?.offsetWidth ?? 0;
    if (popoverRef.current !== null && ListRef.current?.[currentID] !== null) {
      const position = ListRef?.current?.[currentID]?.getBoundingClientRect();
      if (popoverPosition == "top") {
        popoverRef.current.style.left = `${position.left}px`;
        popoverRef.current.style.top = `${position.top - portalheight}px`;
      } else if (popoverPosition == "bottom") {
        popoverRef.current.style.left = `${position.left}px`;
        popoverRef.current.style.top = `${position.bottom}px`;
      } else if (popoverPosition == "left") {
        popoverRef.current.style.left = `${position.left - portalWidth}px`;
        popoverRef.current.style.top = `${position.top}px`;
      } else {
        popoverRef.current.style.left = `${position.x + position.width}px`;
        popoverRef.current.style.top = `${position.y}px`;
      }
    }
  }, [hoveredCart]);
  // Arrow up and down code
  const handleKeyDown = (event: any) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (showList1 && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
        myReff.current?.children[0].children[selectedIndex - 1].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();

      if ((showList1 && selectedIndex) < filteredName.length - 1) {
        setSelectedIndex(selectedIndex + 1);
        myReff.current?.children[0].children[selectedIndex + 1].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    } else {
      if (event.key == "Enter" && filteredName[selectedIndex]?.value) {
        setSelectedIndex(0);
        setShowList(false);
        setShowList1(false);
        onChange(filteredName[selectedIndex].label);
      }
    }
  };
  // Dropdown Code
  const autoCompletePopover = (
    <ul className={`inte-autoComplete__list`}>
      <>
        {filteredName.map((values: any, index: any) => {
          return (
            <li
              ref={(node) => {
                ListRef.current[values.id] = node;
              }}
              aria-selected={selectedIndex === index}
              id={values.id}
              key={index}
              onClick={() => {
                setShowList(false);
                setShowList1(false);
                onChange(values.label);
                onClick(values.label, values.id);
                setSelectedIndex(0);
                setOpensheet(false);
              }}
              onMouseLeave={() => setHoveredCart(-1)}
              onMouseMove={() => {
                setHoveredCart(index);
                setCurrentID(values.id);
                setSelectedIndex(index);
              }}
              style={{
                backgroundColor:
                  selectedIndex === index && !isMobile ? "var(--inte-P20)" : "",
              }}
              className="inte-autoComplete__item"
            >
              <div className="inte-autocomplete__firstvalue">
                {setHiglighted ? (
                  <span style={{ color: "var(--inte-G800)" }}>
                    {highlight(values.label, value)}
                  </span>
                ) : (
                  <span style={{ color: "var(--inte-G90)" }}>
                    {values.label}
                  </span>
                )}
              </div>
              <div className="inte-autocomplete__lastvalue">
                {values.lname !== undefined && (
                  <span style={{ color: "var(--inte-G90)" }}>
                    {values.lname}
                  </span>
                )}
              </div>
              {hoveredCart === index &&
                values.popoverContent !== undefined &&
                showPopover && (
                  <PortalComponent>
                    <div
                      ref={popoverRef}
                      id={values.id}
                      className={`inte-autoComplete__popover inte-autoComplete--position${popoverPosition}"
                  `.trim()}
                    >
                      <div className="inte-autoComplete__popover-Inner">
                        <div className="inte-autoComplete__popoverContent">
                          {values.popoverContent}
                        </div>
                      </div>
                    </div>
                  </PortalComponent>
                )}
            </li>
          );
        })}
      </>
    </ul>
  );
  // no Search Found Code
  const autoCompleteNodata = (
    <ul className={`inte-autoComplete__list `}>
      <div
        className="inte-autoComplete__list--Empty"
        style={{
          alignItems: isLoading ? "" : "center",
          width: isLoading ? "100" : "",
        }}
      >
        <div className="inte-autoComplete__emptyIcon">
          {isLoading ? "" : <Search size={20} color="#7e828b"></Search>}
        </div>

        <div>
          {isLoading ? (
            <Skeleton line={3} type="line" height="20px" />
          ) : (
            <div className="inte-autoComplete__emptyContent">
              <p className="inte__text  inte__text--light">No Results Found</p>
              <h3
                style={{ textAlign: "center" }}
                className="inte__text  inte__text--light none inte__font--normal"
              >
                Check Your Search Term{" "}
                <strong>
                  <pre style={{ display: "inline", whiteSpace: "normal" }}>
                    "{value}"
                  </pre>
                </strong>{" "}
              </h3>
            </div>
          )}
        </div>
      </div>
    </ul>
  );
  const textField = (autofocus: boolean) => {
    return (
      <TextField
        id={
          props.id
            ? `inte-autoComplete-${props.id}`
            : `inte-autoComplete-${rId}`
        }
        role="combobox"
        customClass={`inte-autoComplete `}
        ref={myRef}
        type="text"
        value={value}
        helpText={helpText}
        label={name}
        prefix={<Search size={20} color={color} />}
        placeHolder={placeHolder}
        isLoading={isLoading}
        autoFocus={autofocus}
        isClearable={isClearable}
        onClear={() => {
          props.onClear();
          setColor("var(--inte-G90)");
        }}
        onChange={(event) => {
          setShowList(true);
          setShowList1(true);
          setShow(true);
          onChange(event);
        }}
        ariaExpanded={!!(showList && showList1)}
        onFocus={() => {
          onFocus();
          setOpensheet(true);
        }}
        onBlur={() => {
          setShowList(false);
          setShowList1(false);
        }}
        ariaOwns={`inte-autoCompletePopover${rId}`}
      />
    );
  };

  const canFieldender = () => {
    if (!isMobile) return textField(false);
    else if (!opesheet) return textField(false);
    return <></>;
  };

  const renderData = (
    <>
      {renderStatementResult &&
      !isLoading &&
      filteredName.length > 0 &&
      show &&
      value.trim() ? (
        <PortalComponent>
          <div
            role="listbox"
            ref={myReff}
            className={getClassNames({
              "inte-autoComplete__container": true,
              "inte-autoComplete--mobileDevice": isMobile,
              [customClass as string]: customClass,
            })}
          >
            {autoCompletePopover}
          </div>
        </PortalComponent>
      ) : (
        <>
          {showList1 && value.length > 0 && value.trim() ? (
            <PortalComponent>
              <div
                ref={myReff}
                className={getClassNames({
                  "inte-autoComplete__container": true,
                  [customClass as string]: customClass,
                })}
              >
                {autoCompleteNodata}
              </div>
            </PortalComponent>
          ) : null}
        </>
      )}
    </>
  );

  function onClos() {
    setOpensheet(false);
  }

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = handleOnDrag(
    myReff,
    scrollRef,
    opesheet,
    onClos
  );
  return (
    <>
      <div
        className={getClassNames({
          "inte-formElement--focus": renderStatementResult,
        })}
        onKeyDown={(e) => {
          if (!showList) return;
          if (e.key === "Enter" && onEnter) {
            onEnter(value);
          }
          if (renderStatementResult) {
            handleKeyDown(e);
          }
        }}
      >
        {canFieldender()}
        {isMobile ? (
          <>
            {showDiv && (
              <PortalComponent>
                <div
                  role="listbox"
                  onTouchStart={(e: any) => handleTouchStart(e)}
                  onTouchMove={(e: any) => handleTouchMove(e)}
                  onTouchEnd={handleTouchEnd}
                  ref={myReff}
                  className={getClassNames({
                    "inte-autoComplete__container": true,
                    "inte-autoComplete--mobileDevice": isMobile,
                    "inte-mobileDevice--in": isMobile && opesheet,
                    "inte-mobileDevice--out": isMobile && !opesheet,
                    [customClass as string]: customClass,
                  })}
                >
                  {isMobile && (
                    <div className="inte-autoComplete__mobileHeader__wrapper">
                      <div className="inte-autoComplete__slide"></div>
                      <h3 className="inte-autoComplete__mobile--heading">
                        {name}
                      </h3>
                      <Button
                        icon={<X color="#1C2433" />}
                        type="textButton"
                        onClick={onClos}
                      />
                    </div>
                  )}

                  <ul
                    className={`inte-autoComplete__list`}
                    ref={isMobile ? scrollRef : null}
                    onTouchStart={(e) => handleTouchStart(e)}
                  >
                    {textField(true)}
                    {renderStatementResult &&
                    filteredName.length > 0 &&
                    show &&
                    value.trim()
                      ? autoCompletePopover
                      : showList1 && value.length > 0 && value.trim()
                      ? autoCompleteNodata
                      : null}
                  </ul>
                </div>

                {isMobile && (
                  <div onClick={onClos} className="inte-actionList__backdrop" />
                )}
              </PortalComponent>
            )}
          </>
        ) : (
          renderData
        )}
      </div>
    </>
  );
}

export interface SearchI {
  options: any[];
  id?: string;
  value?: string;
  name?: string;
  placeHolder?: string;
  helpText?: string;
  setHiglighted?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  showPopover?: boolean | any;
  popoverPosition?: "right" | "left" | "top" | "bottom";
  customClass?: string;
  onClear?: ((e: string) => void) | any;
  onEnter?: ((e: string) => void) | any;
  onChange: ((e: string) => void) | any;
  onClick: ((e: string) => void) | any;
}
export default AutoComplete;
