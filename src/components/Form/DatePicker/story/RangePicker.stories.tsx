import React, { useEffect, useMemo, useState } from "react";
import { Card } from "../../../Card";
import RangePicker, { SelectedTimeI } from "../RangePicker/RangePicker";
import { TimeI } from "../TimePicker/TimePicker";

export default {
  title: "Components/Form/DatePicker/RangePicker",
  component: RangePicker,
  argTypes: {
    selectedDates: {
      description:
        "Set the selected dates. It takes an array of <code>date|undefined</code> of length 2",
      control: {
        disable: true,
      },
    },
    selectedTime: {
      description: `Set the selected time <br> <strong>Takes an object of key value pair</strong><br>
                        <table>
                        <thead>
                          <tr>
                            <th>Key</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>start</td>
                            <td> <code>TimeI</code> </td>
                          </tr>
                          <tr>
                            <td>end</td>
                            <td> <code>TimeI</code> </td>
                          </tr>
                        </tbody>
                      </table>
                      <table>
                        <thead>
                          <tr>
                            <th colspan="2">
                              interface of TimeI
                            </th>
                          </tr>
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
        type: "boolean",
      },
      defaultValue: false,
    },
    showTime: {
      description: "Show Time Picker",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    defaultOpenDate: {
      description: "Set the default open calendar date",
      control: {
        disable: true,
      },
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
      description: "Label of the rangePicker",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    dateFormatter: {
      description: "To set the format of date when user hover on calender date",
      control: {
        disable: true,
      },
    },
    helpText: {
      description: "disable the datePicker",
      control: {
        type: "text",
      },
      defaultValue: "HelpText",
    },
    isDateDisable: {
      description:
        "Takes a callback function which receives a date and returns true or false ( return true if you want to disable the date which was received in callback fun )",
      control: {
        disable: true,
      },
    },
    textFieldValue: {
      description:
        "Set the textField value of rangePicker. It takes an array of string",
      control: {
        disable: true,
      },
    },
    textFieldPlaceholder: {
      description:
        "Set the textField placeholder value of rangePicker. It takes an array of string",
      control: {
        disable: true,
      },
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
  const [textFieldValue, setTextFieldValue] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<(Date | undefined)[]>([]);
  const [selectedTime, setSelectedTime] = useState<SelectedTimeI>();
  const [isTyping, setIsTyping] = useState(false);

  const handelDateChange = (newDates: (Date | undefined)[]) => {
    setIsTyping(false);
    setSelectedDate([...newDates]);
  };

  const handelTextFieldValueChange = (newValues: string[]) => {
    setIsTyping(true);
    setTextFieldValue([...newValues]);
    checkDateAndTime(newValues[0], "start");
    checkDateAndTime(newValues[1], "end");
  };

  const handelTimeChange = (newTime: SelectedTimeI | undefined) => {
    setIsTyping(false);
    setSelectedTime(newTime);
  };

  const textFieldPlaceHolder = useMemo(() => {
    return rest.showTime ? "dd/mm/yyyy, hh:mm AM" : "dd/mm/yyyy";
  }, [rest.showTime]);

  const handelStartTextFieldClear = () => {
    setSelectedDate((prev) => [undefined, prev[1]]);
    setSelectedTime((prev) => ({ ...prev, start: undefined }));
    setTextFieldValue((prev) => ["", prev[1]]);
  };

  const handelEndTextFieldClear = () => {
    setSelectedDate((prev) => [prev[0], undefined]);
    setSelectedTime((prev) => ({ ...prev, end: undefined }));
    setTextFieldValue((prev) => [prev[0], ""]);
  };

  const checkDateAndTime = (str: string, pos: "start" | "end") => {
    let dateFlag = true;
    let timeFlag = true;
    str = str.trim();
    const [date, time] = str.split(",");
    if (date) {
      const [day, month, year] = date.split("/");
      if (Number(day) && Number(month) && Number(year) && year.length === 4) {
        setSelectedDate((prev) => {
          if (pos === "start")
            return [
              new Date(Number(year), Number(month) - 1, Number(day)),
              prev[1],
            ];
          else
            return [
              prev[0],
              new Date(Number(year), Number(month) - 1, Number(day)),
            ];
        });
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
          setSelectedTime((prev) => ({
            start:
              pos === "start"
                ? {
                    hh: Number(hour),
                    mm: Number(m),
                    meridian: meridian,
                  }
                : prev?.start,
            end:
              pos === "end"
                ? {
                    hh: Number(hour),
                    mm: Number(m),
                    meridian: meridian,
                  }
                : prev?.end,
          }));
          timeFlag = false;
        }
      }
    }

    if (dateFlag)
      setSelectedDate((prev) => {
        if (pos === "start") return [undefined, prev[1]];
        else return [prev[0], undefined];
      });
    if (timeFlag)
      setSelectedTime((prev) => ({
        start: pos === "start" ? undefined : prev?.start,
        end: pos === "end" ? undefined : prev?.end,
      }));
  };

  useEffect(() => {
    if (isTyping) return;
    let newValues = [
      makeTextString(selectedDate[0], selectedTime?.start),
      makeTextString(selectedDate[1], selectedTime?.end),
    ];
    setTextFieldValue([...newValues]);
  }, [selectedDate, selectedTime]);

  return (
    <Card>
      <RangePicker
        {...rest}
        selectedDates={selectedDate}
        onDateChange={handelDateChange}
        textFieldValue={textFieldValue}
        textFieldPlaceholder={[textFieldPlaceHolder, textFieldPlaceHolder]}
        onTextFieldChange={handelTextFieldValueChange}
        label="Select Date"
        selectedTime={selectedTime}
        onTimeChange={handelTimeChange}
        onStartTextFieldClear={handelStartTextFieldClear}
        onEndTextFieldClear={handelEndTextFieldClear}
      />
    </Card>
  );
};

export const primary: any = Template.bind({});
