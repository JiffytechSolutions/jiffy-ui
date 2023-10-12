import React, { useEffect, useState } from "react";
import { Card } from "../../../Card";
import DatePicker from "../DatePicker/DatePicker";
import { TimeI } from "../TimePicker/TimePicker";

export default {
  title: "Components/Form/DatePicker/SingleDatePicker",
  component: DatePicker,
  argTypes: {
    defaultOpenDate: {
      description: "Set the default open calendar date",
      control: {
        disable: true,
      },
    },
    selectedDate: {
      description: "Set the selected date of calendar",
      control: {
        disable: true,
      },
    },
    isDateDisable: {
      description:
        "Takes a callback function which receives a date and returns true or false ( return true if you want to disable the date which was received in callback fun )",
      control: {
        disable: true,
      },
    },
    textFieldValue: {
      description: "Set the textField value of datePicker",
      control: {
        disable: true,
      },
    },
    textFieldPlaceholder: {
      description: "Set the textField placeholder value of datePicker",
      control: {
        disable: true,
      },
    },
    selectedTime: {
      description: `Set the time of datePicker <br> <strong>Takes an object of key value pair</strong><br>
                      <table>
                        <thead>
                          <tr>
                            <th>Key</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>hh</td>
                            <td> <code> selected hour : number</code> </td>
                          </tr>
                          <tr>
                            <td>mm</td>
                            <td> <code> selected min : number</code> </td>
                          </tr>
                          <tr>
                            <td>meridian</td>
                            <td> <code> selected meridian : "AM"|"PM"</code> </td>
                          </tr>
                        </tbody>
                      </table>`,
      control: {
        disable: true,
      },
    },
    dateFormatter: {
      description: "To set the format of date when user hover on calender date",
      control: {
        disable: true,
      },
    },
    showTime: {
      description: "Show Time Picker",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isOnlyIcon: {
      description: "Show only calendar icon in textField",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    hasError: {
      description: "Make the datePicker in error state",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isDisabled: {
      description: "disable the datePicker",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    label: {
      description: "label of the datePicker",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    helpText: {
      description: "helptext of the datePicker",
      control: {
        type: "text",
      },
      defaultValue: "HelpText",
    },
  },
};

const make2Words = (n: number) => {
  return n < 10 ? "0" + n : `${n}`;
};

const makeTextString = (date: Date | undefined, time: TimeI | undefined) => {
  let res = "";
  if (date)
    res += `${make2Words(date.getDate())}/${make2Words(
      date.getMonth() + 1
    )}/${date.getFullYear()}`;
  if (time)
    res += `, ${make2Words(time.hh)}:${make2Words(time.mm)} ${time.meridian}`;
  return res;
};

const Template = ({ ...rest }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<TimeI | undefined>();
  const [textFieldValue, setTextFieldValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);

  const handelDateChange = (newDate: Date) => {
    setIsTyping(false);
    setSelectedDate(newDate);
  };

  const handelTimeChange = (newTime: TimeI | undefined) => {
    setIsTyping(false);
    setSelectedTime(newTime);
  };

  const checkDateAndTime = (str: string) => {
    let dateFlag = true;
    let timeFlag = true;
    str = str.trim();
    const [date, time] = str.split(",");
    if (date) {
      const [day, month, year] = date.split("/");
      if (Number(day) && Number(month) && Number(year) && year.length === 4) {
        setSelectedDate(new Date(Number(year), Number(month) - 1, Number(day)));
        dateFlag = false;
      }
    }
    if (time) {
      const [hour, minute] = time.split(":");
      if (minute) {
        const [m, meridian] = minute.split(" ");
        if (
          Number(hour) &&
          Number(m) &&
          (meridian === "AM" || meridian === "PM") &&
          Number(hour) < 13 &&
          Number(m) < 59
        ) {
          setSelectedTime({
            hh: Number(hour),
            mm: Number(m),
            meridian: meridian,
          });
          timeFlag = false;
        }
      }
    }

    if (dateFlag) setSelectedDate(undefined);
    if (timeFlag) setSelectedTime(undefined);
  };

  const handelTextFieldValueChange = (newValue: string) => {
    setIsTyping(true);
    setTextFieldValue(newValue);
    checkDateAndTime(newValue);
  };

  const handelValueClear = () => {
    setIsTyping(false);
    setSelectedTime(undefined);
    setSelectedDate(undefined);
    setTextFieldValue("");
  };

  useEffect(() => {
    if (isTyping) return;
    else setTextFieldValue(makeTextString(selectedDate, selectedTime));
  }, [selectedDate, selectedTime]);

  return (
    <Card>
      <DatePicker
        {...rest}
        selectedDate={selectedDate}
        onDateChange={handelDateChange}
        onTextFieldChange={handelTextFieldValueChange}
        selectedTime={selectedTime}
        onTimeChange={handelTimeChange}
        textFieldValue={textFieldValue}
        onTextFieldClear={handelValueClear}
        textFieldPlaceholder={
          rest.showTime ? "dd/mm/yyyy, hh:mm AM" : "dd/mm/yyyy"
        }
      />
    </Card>
  );
};

export const primary: any = Template.bind({});

export const datePickerWithDisableDates = ({ ...rest }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<TimeI | undefined>();
  const [textFieldValue, setTextFieldValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);

  const handelDateChange = (newDate: Date) => {
    setIsTyping(false);
    setSelectedDate(newDate);
  };

  const handelTimeChange = (newTime: TimeI | undefined) => {
    setIsTyping(false);
    setSelectedTime(newTime);
  };

  const checkDateAndTime = (str: string) => {
    let dateFlag = true;
    let timeFlag = true;
    str = str.trim();
    const [date, time] = str.split(",");
    if (date) {
      const [day, month, year] = date.split("/");
      if (Number(day) && Number(month) && Number(year) && year.length === 4) {
        setSelectedDate(new Date(Number(year), Number(month) - 1, Number(day)));
        dateFlag = false;
      }
    }
    if (time) {
      const [hour, minute] = time.split(":");
      if (minute) {
        const [m, meridian] = minute.split(" ");
        if (
          Number(hour) &&
          Number(m) &&
          (meridian === "AM" || meridian === "PM") &&
          Number(hour) < 13 &&
          Number(m) < 59
        ) {
          setSelectedTime({
            hh: Number(hour),
            mm: Number(m),
            meridian: meridian,
          });
          timeFlag = false;
        }
      }
    }

    if (dateFlag) setSelectedDate(undefined);
    if (timeFlag) setSelectedTime(undefined);
  };

  const handelTextFieldValueChange = (newValue: string) => {
    setIsTyping(true);
    setTextFieldValue(newValue);
    checkDateAndTime(newValue);
  };

  const handelValueClear = () => {
    setIsTyping(false);
    setSelectedTime(undefined);
    setSelectedDate(undefined);
  };

  const handelIsDateDisable = (testDate: Date) => {
    let startDate = new Date();
    if (
      testDate.getFullYear() <= startDate.getFullYear() &&
      testDate.getMonth() <= startDate.getMonth()
    ) {
      if (testDate.getMonth() === startDate.getMonth())
        return testDate.getDate() < startDate.getDate();
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!isTyping) {
      let res = "";
      if (selectedDate) {
        res += `${make2Words(selectedDate.getDate())}/${make2Words(
          selectedDate.getMonth() + 1
        )}/${selectedDate.getFullYear()}`;
        if (selectedTime)
          res += `, ${make2Words(selectedTime.hh)}:${make2Words(
            selectedTime.mm
          )} ${selectedTime.meridian}`;
      }
      setTextFieldValue(res);
    }
  }, [selectedDate, selectedTime]);

  return (
    <Card>
      <DatePicker
        {...rest}
        label="DatePicker with Disabled Dates"
        selectedDate={selectedDate}
        isDateDisable={handelIsDateDisable}
        onDateChange={handelDateChange}
        onTextFieldChange={handelTextFieldValueChange}
        selectedTime={selectedTime}
        onTimeChange={handelTimeChange}
        textFieldValue={textFieldValue}
        helpText="Date Picker with disable dates till today"
        onTextFieldClear={handelValueClear}
        textFieldPlaceholder={
          rest.showTime ? "dd/mm/yyyy, hh:mm AM" : "dd/mm/yyyy"
        }
      />
    </Card>
  );
};

export const datePickerWithShowTime = ({ ...rest }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<TimeI | undefined>();
  const [textFieldValue, setTextFieldValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);

  const handelDateChange = (newDate: Date) => {
    setIsTyping(false);
    setSelectedDate(newDate);
  };

  const handelTimeChange = (newTime: TimeI | undefined) => {
    setIsTyping(false);
    setSelectedTime(newTime);
  };

  const checkDateAndTime = (str: string) => {
    let dateFlag = true;
    let timeFlag = true;
    str = str.trim();
    const [date, time] = str.split(",");
    if (date) {
      const [day, month, year] = date.split("/");
      if (Number(day) && Number(month) && Number(year) && year.length === 4) {
        setSelectedDate(new Date(Number(year), Number(month) - 1, Number(day)));
        dateFlag = false;
      }
    }
    if (time) {
      const [hour, minute] = time.split(":");
      if (minute) {
        const [m, meridian] = minute.split(" ");
        if (
          Number(hour) &&
          Number(m) &&
          (meridian === "AM" || meridian === "PM") &&
          Number(hour) < 13 &&
          Number(m) < 59
        ) {
          setSelectedTime({
            hh: Number(hour),
            mm: Number(m),
            meridian: meridian,
          });
          timeFlag = false;
        }
      }
    }

    if (dateFlag) setSelectedDate(undefined);
    if (timeFlag) setSelectedTime(undefined);
  };

  const handelTextFieldValueChange = (newValue: string) => {
    setIsTyping(true);
    setTextFieldValue(newValue);
    checkDateAndTime(newValue);
  };

  const handelValueClear = () => {
    setIsTyping(false);
    setSelectedTime(undefined);
    setSelectedDate(undefined);
  };

  const handelIsDateDisable = (testDate: Date) => {
    let startDate = new Date();
    if (
      testDate.getFullYear() <= startDate.getFullYear() &&
      testDate.getMonth() <= startDate.getMonth()
    ) {
      if (testDate.getMonth() === startDate.getMonth())
        return testDate.getDate() < startDate.getDate();
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!isTyping) {
      let res = "";
      if (selectedDate) {
        res += `${make2Words(selectedDate.getDate())}/${make2Words(
          selectedDate.getMonth() + 1
        )}/${selectedDate.getFullYear()}`;
        if (selectedTime)
          res += `, ${make2Words(selectedTime.hh)}:${make2Words(
            selectedTime.mm
          )} ${selectedTime.meridian}`;
      }
      setTextFieldValue(res);
    }
  }, [selectedDate, selectedTime]);

  return (
    <Card>
      <DatePicker
        {...rest}
        label="DatePicker with Time selection"
        selectedDate={selectedDate}
        isDateDisable={handelIsDateDisable}
        onDateChange={handelDateChange}
        onTextFieldChange={handelTextFieldValueChange}
        selectedTime={selectedTime}
        onTimeChange={handelTimeChange}
        textFieldValue={textFieldValue}
        helpText="Date Picker"
        onTextFieldClear={handelValueClear}
        textFieldPlaceholder={
          rest.showTime ? "dd/mm/yyyy, hh:mm AM" : "dd/mm/yyyy"
        }
        showTime={true}
      />
    </Card>
  );
};
