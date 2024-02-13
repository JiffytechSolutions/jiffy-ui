import React, { useEffect, useState } from "react";
import useMobileDevice from "../../../../utilities/useMobileDevice";
import Button from "../../../Button/Button";
import Popover from "../../../Popover/Popover";
import Calendar from "../Calendar/Calender";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import Modal from "../Modal/Modal";
import TextField from "../TextField/TextField";
import TimePicker, { TimeI, formatTimeObj } from "../TimePicker/TimePicker";
import { Plus, X } from "../../../../storybook/Foundation/Icons/Icons";
import Text from "../../../Text/Text";
import "./DatePicker.css";
import getClassNames from "../../../../utilities/getClassnames";
export interface DatePickerI {
  defaultOpenDate?: Date;
  selectedDate?: Date;
  onDateChange?: (newDate: Date) => void;
  isDateDisable?: (testDate: Date) => boolean;
  showTime?: boolean;
  dateFormatter?: (date: Date) => string;
  onTextFieldChange?: (newValue: string) => void;
  textFieldValue?: string;
  textFieldPlaceholder?: string;
  selectedTime?: TimeI;
  onTimeChange?: (newTime?: TimeI) => void;
  isOnlyIcon?: boolean;
  hasError?: boolean;
  isDisabled?: boolean;
  label?: string | React.ReactNode;
  helpText?: string | React.ReactNode;
  onTextFieldClear?: () => void;
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString().split(",")[0];
};

const DatePicker = ({
  defaultOpenDate = new Date(),
  selectedDate,
  onDateChange = () => {},
  isDateDisable,
  showTime = false,
  dateFormatter = formatDate,
  onTextFieldChange = () => {},
  textFieldValue = "",
  textFieldPlaceholder = "",
  selectedTime,
  onTimeChange = () => {},
  hasError = false,
  isDisabled = false,
  isOnlyIcon = false,
  label,
  helpText,
  onTextFieldClear = () => {},
}: DatePickerI) => {
  const [calendarDate, setCalendarDate] = useState(defaultOpenDate);
  const [calendarType, setCalendarType] =
    useState<"day" | "year" | "month">("day");
  const [prevCalendarType, setPrevCalendarType] =
    useState<"day" | "year" | "month">("day");
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState(selectedDate);
  const [time, setTime] = useState<TimeI>();
  const isMobile = useMobileDevice();

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

  const goToNextYear = () => {
    setCalendarDate((prev) => {
      const newDate = new Date(prev);
      newDate.setFullYear(newDate.getFullYear() + 1);
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

  const changeCalanderType = () => {
    if (calendarType === "month") {
      setCalendarType("day");
    } else if (calendarType === "year") {
      setCalendarType("month");
    }
  };

  const handelDateClick = (date: Date) => {
    if (calendarType === "day" && !isMobile) onDateChange(date);
    else setDate(date);
    changeCalanderType();
  };

  const handelMonthClick = () => {
    setPrevCalendarType(calendarType);
    setCalendarType("month");
  };

  const handelYearClick = () => {
    setPrevCalendarType(calendarType);
    setCalendarType("year");
  };

  const handelBack = () => {
    setCalendarType(prevCalendarType);
    if (prevCalendarType === "month") setPrevCalendarType("day");
  };

  const handelFooterButtonClick = () => {
    if (calendarType !== "day") {
      handelBack();
    } else if (modalOpen) {
      setModalOpen(false);
      onTimeChange(time);
    } else {
      if (Object.keys(time ?? {}).length) {
        !isMobile ? onTimeChange(undefined) : setTime(undefined);
      } else setModalOpen(true);
    }
  };

  const activator = (
    <TextField
      onFocus={() => setIsOpen(true)}
      value={[textFieldValue]}
      placeholder={[textFieldPlaceholder]}
      onChange={(inputValues) => onTextFieldChange(inputValues[0])}
      isFocused={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
      isTime={showTime}
      isOnlyIcon={isOnlyIcon}
      hasError={hasError}
      isDisabled={isDisabled}
      onStartClear={onTextFieldClear}
    />
  );

  useEffect(() => {
    setDate(selectedDate);
  }, [selectedDate, isOpen]);

  useEffect(() => {
    if (date) {
      setCalendarDate(date);
    }
  }, [date, isOpen]);

  useEffect(() => {
    setTime(selectedTime);
  }, [selectedTime, isOpen]);

  return (
    <div
      className={getClassNames({
        "inte-textField--forDatePicker": true,
        "inte-textField--forDatePicker--hasOnlyIcon": isOnlyIcon,
      })}
    >
      {label &&
        (typeof label === "string" ? (
          <Text as="label" type="T-7" customClass="inte-datePicker__label">
            {label}
          </Text>
        ) : (
          <>{label}</>
        ))}
      <Popover
        heading="Select Date"
        activator={activator}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        customClass={"inte-datePicker--popover"}
      >
        <>
          <div className="inte-datePicker">
            {(!modalOpen || isMobile) && (
              <CalendarHeader
                calendarDate={calendarDate}
                onMonthClick={handelMonthClick}
                onNextYear={goToNextYear}
                onNextMonth={goToNextMonth}
                onPrevMonth={goToPreviousMonth}
                onPrevYear={goToPreviousYear}
                onPrevYearSlot={goToPreviousYearSlot}
                onNextYearSlot={goToNextYearSlot}
                onYearClick={handelYearClick}
                headerType={calendarType}
                onBack={handelBack}
                isTime={showTime}
              />
            )}
            {(!modalOpen || isMobile) && (
              <Calendar
                selectedDate={isMobile ? date : selectedDate}
                openDate={calendarDate}
                onDateClick={handelDateClick}
                isDateDisable={isDateDisable}
                type={calendarType}
                dateFormatter={dateFormatter}
              />
            )}
            {modalOpen && !isMobile && (
              <TimePicker
                selectedTime={time}
                onChange={(newTime) => setTime(newTime)}
                onClose={() => {
                  setModalOpen(false);
                  setTime(selectedTime);
                }}
              />
            )}

            {showTime && (
              <>
                <div className="inte-datePicker__timeSelect">
                  <Button
                    onClick={handelFooterButtonClick}
                    type="outlined"
                    isFullWidth
                    halign={
                      modalOpen || calendarType !== "day"
                        ? "center"
                        : "spaceBetween"
                    }
                    size="extraThin"
                    icon={
                      calendarType !== "day" ? (
                        ""
                      ) : modalOpen ? (
                        ""
                      ) : time ? (
                        <X size={20} />
                      ) : (
                        <Plus size={20} />
                      )
                    }
                    iconAlign={modalOpen ? "left" : "right"}
                  >
                    {modalOpen
                      ? "Done"
                      : calendarType !== "day"
                      ? "Back"
                      : time
                      ? formatTimeObj(time)
                      : "Add Time"}
                  </Button>
                </div>
                {isMobile && (
                  <Modal
                    content={
                      <TimePicker
                        selectedTime={time}
                        onChange={(newTime) => setTime(newTime)}
                        onClose={() => setModalOpen(false)}
                        hasFooter
                      />
                    }
                    isOpen={modalOpen}
                    onClose={() => {
                      setModalOpen(false);
                      setTime(selectedTime);
                    }}
                  />
                )}
              </>
            )}
          </div>
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
                  date && onDateChange(date);
                  onTimeChange(time);
                  setIsOpen(false);
                }}
              />
            </div>
          )}
        </>
      </Popover>
      {helpText &&
        (typeof helpText === "string" ? (
          <p className="inte-datePicker__helpText">{helpText}</p>
        ) : (
          <>{helpText}</>
        ))}
    </div>
  );
};

export default DatePicker;
