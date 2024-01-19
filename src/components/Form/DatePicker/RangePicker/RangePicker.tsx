import React, { useCallback, useEffect, useMemo, useState } from "react";
import useMobileDevice from "../../../../utilities/useMobileDevice";
import Button from "../../../Button/Button";
import Popover from "../../../Popover/Popover";
import Calendar from "../Calendar/Calender";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import Modal from "../Modal/Modal";
import TextField from "../TextField/TextField";
import TimePicker, { TimeI, formatTimeObj } from "../TimePicker/TimePicker";
import "./RangePicker.css";
import {
  ChevronLeft,
  Plus,
  X,
} from "../../../../storybook/Foundation/Icons/Icons";
import getClassNames from "../../../../utilities/getClassnames";

export interface RangePickerI {
  selectedDates?: (Date | undefined)[];
  onDateChange?: (newDates: (Date | undefined)[]) => void;
  defaultOpenDate?: Date;
  label?: string | React.ReactNode;
  showTime?: boolean;
  dateFormatter?: (date: Date) => string;
  onTextFieldChange?: (newValue: string[]) => void;
  textFieldValue?: string[];
  textFieldPlaceholder?: string[];
  selectedTime?: SelectedTimeI;
  onTimeChange?: (newTime?: SelectedTimeI) => void;
  isOnlyIcon?: boolean;
  hasError?: boolean;
  isDisabled?: boolean;
  helpText?: string | React.ReactNode;
  onStartTextFieldClear?: () => void;
  onEndTextFieldClear?: () => void;
  isDateDisable?: (testDate: Date) => boolean;
}

export interface SelectedTimeI {
  start?: TimeI;
  end?: TimeI;
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString().split(",")[0];
};

const RangePicker = ({
  selectedDates = [undefined, undefined],
  onDateChange = () => {},
  defaultOpenDate = new Date(),
  label,
  showTime = false,
  dateFormatter = formatDate,
  textFieldValue,
  onTextFieldChange,
  textFieldPlaceholder,
  selectedTime,
  onTimeChange = () => {},
  isDateDisable,
  isOnlyIcon,
  hasError = false,
  isDisabled = false,
  helpText,
  onStartTextFieldClear = () => {},
  onEndTextFieldClear = () => {},
}: RangePickerI) => {
  const [currControl, setCurrControl] = useState<"start" | "end">("start");
  const [calendarDate, setCalendarDate] = useState(defaultOpenDate);
  const [hoveredDate, setHoveredDate] = useState<Date | undefined>();
  const [selectedDate, setSelectedDate] = useState<(Date | undefined)[]>([]);
  const [calendarType, setCalendarType] = useState<"day" | "year" | "month">(
    "day"
  );
  const [prevCalendarType, setPrevCalendarType] = useState<
    "day" | "year" | "month"
  >("day");
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [time, setTime] = useState<SelectedTimeI>();
  const [isSecondCalendarClick, setIsSecondCalendarClick] = useState(false);

  const isMobile = useMobileDevice();

  const handelCalendarDisableDate = useCallback(
    (testDate: Date) => {
      if (isDateDisable) {
        if (isDateDisable(testDate)) return true;
      }
      if (selectedDate[1] && selectedDate[0]) return false;
      if (currControl === "start") {
        if (selectedDate[1] && testDate > selectedDate[1]) return true;
        return false;
      } else {
        if (selectedDate[0] && testDate < selectedDate[0]) return true;
        return false;
      }
    },
    [selectedDate, currControl, isDateDisable]
  );

  const handelDateHover = useCallback(
    (
      date?: Date | undefined,
      event?: React.MouseEvent<HTMLTableCellElement, MouseEvent>
    ) => {
      const ele = event?.currentTarget;
      if (ele && !date) {
        ele.classList.remove(
          "inte-calander__cell--rangeStart",
          "inte-calander__cell--rangeEnd",
          "inte-calander__cell--rangeSingle"
        );
      }
      if (ele && date && selectedDate[0] && selectedDate[1]) {
        if (currControl === "start") {
          if (date > selectedDate[1])
            ele.classList.add(`inte-calander__cell--rangeSingle`);
          else ele.classList.add("inte-calander__cell--rangeStart");
        } else {
          if (date < selectedDate[0])
            ele.classList.add("inte-calander__cell--rangeSingle");
          else ele.classList.add("inte-calander__cell--rangeEnd");
        }
      }
      setHoveredDate(date);
    },
    [selectedDate, currControl]
  );

  const isDateInHoverRange = useCallback(
    (currDate: Date) => {
      if (!hoveredDate || isMobile) return false;
      if (selectedDate[0] && selectedDate[1]) {
        let t = true;
        if (currControl === "start") {
          if (hoveredDate > selectedDate[1]) t = false;
          else if (currDate > selectedDate[1] || currDate < hoveredDate)
            t = false;
        } else {
          if (hoveredDate < selectedDate[0]) t = false;
          else if (currDate > hoveredDate || currDate < selectedDate[0])
            t = false;
        }
        return t;
      } else if (selectedDate[0]) {
        if (currControl === "start") return false;
        if (currDate > selectedDate[0] && currDate <= hoveredDate) return true;
      } else if (selectedDate[1]) {
        if (currControl === "end") return false;
        if (selectedDate[1] > currDate && currDate >= hoveredDate) return true;
      }
      return false;
    },
    [selectedDate, hoveredDate]
  );

  const isDateInSelectedRange = useCallback(
    (currDate: Date) => {
      if (
        selectedDate[0] &&
        selectedDate[1] &&
        selectedDate[0] < currDate &&
        selectedDate[1] > currDate
      )
        return true;
      return false;
    },
    [selectedDate]
  );

  const changeCalanderType = () => {
    if (calendarType === "month") {
      setCalendarType("day");
    } else if (calendarType === "year") {
      setCalendarType("month");
    }
  };

  const handelDateClick = useCallback(
    (newDate: Date) => {
      if (currControl === "start") {
        if (calendarType === "day") {
          if (selectedDate[1] && newDate > selectedDate[1]) {
            !isMobile
              ? onDateChange([newDate, undefined])
              : setSelectedDate([newDate, undefined]);
          } else {
            !isMobile
              ? onDateChange([newDate, selectedDate[1]])
              : setSelectedDate([newDate, selectedDate[1]]);
          }
          if (!selectedDate[1] || newDate >= selectedDate[1])
            setCurrControl("end");
          else !isMobile && setIsOpen(false);
        } else {
          changeCalanderType();
          if (isSecondCalendarClick) {
            const nD = new Date(newDate);
            nD.setMonth(newDate.getMonth() - 1);
            if (calendarType === "month") {
              setCalendarDate(nD);
              setIsSecondCalendarClick(false);
            } else setCalendarDate(newDate);
          } else setCalendarDate(newDate);
        }
      } else {
        if (calendarType === "day") {
          if (selectedDate[0] && newDate < selectedDate[0]) {
            !isMobile
              ? onDateChange([undefined, newDate])
              : setSelectedDate([undefined, newDate]);
          } else {
            !isMobile
              ? onDateChange([selectedDate[0], newDate])
              : setSelectedDate([selectedDate[0], newDate]);
          }
          if (!selectedDate[0] || newDate <= selectedDate[0])
            setCurrControl("start");
          else !isMobile && setIsOpen(false);
        } else {
          changeCalanderType();
          if (isSecondCalendarClick) {
            const nD = new Date(newDate);
            nD.setMonth(newDate.getMonth() - 1);
            if (calendarType === "month") {
              setCalendarDate(nD);
              setIsSecondCalendarClick(false);
            } else setCalendarDate(newDate);
          } else setCalendarDate(newDate);
        }
      }
    },
    [currControl, selectedDate, calendarType]
  );

  const secondCalendarDate = useMemo(() => {
    let d = new Date(calendarDate);
    d.setDate(1);
    d.setMonth(d.getMonth() + 1);
    return d;
  }, [calendarDate]);

  const goToNextYear = () => {
    setCalendarDate((prev) => {
      const newDate = new Date(prev);
      newDate.setFullYear(newDate.getFullYear() + 1);
      return newDate;
    });
  };

  const goToPreviousYearSlot = () => {
    setCalendarDate((prev) => {
      const newDate = new Date(prev);
      newDate.setFullYear(newDate.getFullYear() - 18);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCalendarDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const goToNextYearSlot = () => {
    setCalendarDate((prev) => {
      const newDate = new Date(prev);
      newDate.setFullYear(newDate.getFullYear() + 18);
      return newDate;
    });
  };

  const goToPreviousMonth = () => {
    setCalendarDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const goToPreviousYear = () => {
    setCalendarDate((prev) => {
      const newDate = new Date(prev);
      newDate.setFullYear(newDate.getFullYear() - 1);
      return newDate;
    });
  };

  const handelMonthClick = (isSecond = false) => {
    setPrevCalendarType(calendarType);
    setCalendarType("month");
    if (isSecond) setIsSecondCalendarClick(true);
  };

  const handelYearClick = (isSecond = false) => {
    setPrevCalendarType(calendarType);
    setCalendarType("year");
    if (isSecond) setIsSecondCalendarClick(true);
  };

  const handelBack = () => {
    setCalendarType(prevCalendarType);
    if (prevCalendarType === "month") setPrevCalendarType("day");
  };

  const handleTimeChange = (newTime: TimeI | undefined) => {
    setTime({
      start: currControl === "start" ? newTime : time?.start,
      end: currControl === "end" ? newTime : time?.end,
    });
  };

  useEffect(() => {
    setSelectedDate(selectedDates);
  }, [selectedDates, isOpen]);

  useEffect(() => {
    if (selectedDate && selectedDate[0]) {
      setCalendarDate(selectedDate[0]);
    } else if (selectedDate && selectedDate[1]) {
      const nD = new Date(selectedDate[1]);
      nD.setMonth(nD.getMonth() - 1);
      setCalendarDate(nD);
    }
  }, []);

  useEffect(() => {
    setHoveredDate(undefined);
  },[selectedDate])

  useEffect(() => {
    setTime(selectedTime);
  }, [selectedTime, isOpen]);

  const activator = (
    <TextField
      onFocus={() => setIsOpen(true)}
      value={textFieldValue}
      placeHolder={textFieldPlaceholder}
      changeControl={(newControl: "start" | "end") =>
        setCurrControl(newControl)
      }
      onChange={onTextFieldChange}
      currControl={currControl}
      isRange
      isTime={showTime}
      isFocused={isOpen}
      isOnlyIcon={isOnlyIcon}
      hasError={hasError}
      isDisabled={isDisabled}
      onStartClear={onStartTextFieldClear}
      onEndClear={onEndTextFieldClear}
    />
  );

  return (
    <div className={getClassNames({
      "inte-textField--forDatePicker":true,
      "inte-textField--forDatePicker--hasOnlyIcon" : isOnlyIcon
    })}>
      {label && <div>{label}</div>}
      <Popover
        heading={
          currControl === "start" ? "Select Start Date" : "Select End Date"
        }
        activator={activator}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        customClass={"inte-rangePicker--popover"}
      >
        <>
          <div className="inte-rangePicker">
            {(!modalOpen || isMobile) && (
              <CalendarHeader
                calendarDate={calendarDate}
                currControl={currControl}
                headerType={calendarType}
                selectedDates={selectedDate}
                onNextMonth={() => goToNextMonth()}
                onNextYear={() => goToNextYear()}
                onNextYearSlot={() => goToNextYearSlot()}
                onPrevMonth={() => goToPreviousMonth()}
                onPrevYear={() => goToPreviousYear()}
                onPrevYearSlot={() => goToPreviousYearSlot()}
                onStartDateClick={() => {
                  setCurrControl("start")
                  if(selectedDate[0]) setCalendarDate(selectedDate[0])
                }}
                onEndDateClick={() => {
                  setCurrControl("end");
                  if(selectedDate[1]) setCalendarDate(selectedDate[1])
                }}
                onMonthClick={handelMonthClick}
                onYearClick={handelYearClick}
                onBack={handelBack}
                isRange
                isTime={showTime}
              />
            )}
            {(!modalOpen || isMobile) && (
              <div
                className={`inte-rangePicker__calanderContainer inte-rangePicker--control-${currControl}`}
              >
                <Calendar
                  openDate={calendarDate}
                  selectedDates={selectedDate}
                  onDateClick={handelDateClick}
                  isDateDisable={handelCalendarDisableDate}
                  isDateInSelectedRange={isDateInSelectedRange}
                  isDateInHoverRange={isDateInHoverRange}
                  onDateHover={handelDateHover}
                  type={calendarType}
                  dateFormatter={dateFormatter}
                />
                {!isMobile && calendarType === "day" && (
                  <Calendar
                    openDate={secondCalendarDate}
                    selectedDates={selectedDate}
                    onDateClick={handelDateClick}
                    isDateDisable={handelCalendarDisableDate}
                    isDateInSelectedRange={isDateInSelectedRange}
                    isDateInHoverRange={isDateInHoverRange}
                    onDateHover={handelDateHover}
                    dateFormatter={dateFormatter}
                  />
                )}
              </div>
            )}
            {!isMobile && modalOpen && (
              <TimePicker
                selectedTime={currControl === "start" ? time?.start : time?.end}
                onChange={handleTimeChange}
                onClose={() => setModalOpen(false)}
                heading={
                  currControl === "start"
                    ? "Select Start Time"
                    : "Select End Time"
                }
              />
            )}
          </div>
          {showTime && (
            <>
              <div className="inte-datePicker__timeSelect">
                {!modalOpen && (calendarType === "day" || !showTime) ? (
                  <>
                    <Button
                      onClick={() => {
                        if (time?.start) {
                          !isMobile
                            ? onTimeChange({
                                start: undefined,
                                end: time?.end,
                              })
                            : setTime({
                                start: undefined,
                                end: time?.end,
                              });
                        } else setModalOpen((prev) => !prev);
                        setCurrControl("start");
                      }}
                      type="outlined"
                      isFullWidth
                      halign="spaceBetween"
                      iconAlign="right"
                      icon={time?.start ? <X size={20} /> : <Plus size={20} />}
                    >
                      {time?.start ? formatTimeObj(time.start) : "Start Time"}
                    </Button>
                    <Button
                      onClick={() => {
                        if (time?.end) {
                          !isMobile
                            ? onTimeChange({
                                start: time?.start,
                                end: undefined,
                              })
                            : setTime({
                                start: time?.start,
                                end: undefined,
                              });
                        } else setModalOpen((prev) => !prev);
                        setCurrControl("end");
                      }}
                      icon={time?.end ? <X size={20} /> : <Plus size={20} />}
                      type="outlined"
                      iconAlign="right"
                      halign="spaceBetween"
                      isFullWidth
                    >
                      {time?.end ? formatTimeObj(time.end) : "End Time"}
                    </Button>
                  </>
                ) : calendarType !== "day" ? (
                  <Button
                    type="outlined"
                    isFullWidth
                    halign="center"
                    onClick={handelBack}
                    icon={<ChevronLeft size={20} />}
                    iconAlign="left"
                  >
                    Back
                  </Button>
                ) : (
                  <Button
                    type="outlined"
                    isFullWidth
                    halign="center"
                    onClick={() => {
                      modalOpen && setModalOpen(false);
                      onTimeChange(time);
                    }}
                    iconAlign="left"
                  >
                    Done
                  </Button>
                )}
              </div>
            </>
          )}
          {isMobile && (
            <div className="inte-datePicker__footer">
              <Button
                type="outlined"
                isFullWidth
                halign="center"
                content="Close"
                onClick={() => setIsOpen(false)}
              />
              <Button
                type="primary"
                isFullWidth
                halign="center"
                content="Apply"
                onClick={() => {
                  onDateChange(selectedDate);
                  onTimeChange(time);
                  setIsOpen(false);
                }}
              />
            </div>
          )}
        </>
      </Popover>
      <Modal
        content={
          <TimePicker
            onClose={() => setModalOpen(false)}
            selectedTime={currControl === "start" ? time?.start : time?.end}
            onChange={handleTimeChange}
            heading={
              currControl === "start" ? "Select Start Time" : "Select End Time"
            }
            hasFooter
          />
        }
        isOpen={isMobile && modalOpen}
        onClose={() => setModalOpen(false)}
      />
      {helpText && <div className="inte-datePicker__helpText">{helpText}</div>}
    </div>
  );
};

export default RangePicker;
