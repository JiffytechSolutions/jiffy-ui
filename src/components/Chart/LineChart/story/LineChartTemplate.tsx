import React, { useEffect, useMemo, useState } from 'react'
import dataString from '../../BTC-USD'
import RangePicker, { SelectedTimeI } from '../../../Form/DatePicker/RangePicker/RangePicker';
import { TimeI } from '../../../Form/DatePicker/TimePicker/TimePicker';
import { Card } from '../../../Card';
import LineChart, { LineChartI } from '../LineChart';
import { FlexLayout } from '../../../FlexLayout';
import Badge from '../../../Badge/Badge';

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


const LineChartTemplate = () => {

  const [data, setData] = useState<{ date: Date, value: number }[]>([]);

  const [textFieldValue, setTextFieldValue] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<(Date | undefined)[]>([]);
  const [selectedTime, setSelectedTime] = useState<SelectedTimeI>();
  const [isTyping, setIsTyping] = useState(false);
  const [chartData, setChartData] = useState<LineChartI>({
    labels: {
      x: ["a", "b", "c"],
      y: 10
    },
    dataSet: [
      {
        name: "dummy",
        color: "blue",
        points: [10, 20, 30],
        animationDuration: 300,
        beginAtOrigin: false,
      }
    ],
    backgroundGrid: {}
  })
  const [badgeSelect, setBadgeSelect] = useState(0)

  const handelDateChange = (newDates: (Date | undefined)[]) => {
    setIsTyping(false);
    setSelectedDate([...newDates]);
    setBadgeSelect(0)
  };

  const handelTextFieldValueChange = (newValues: string[]) => {
    setIsTyping(true);
    setTextFieldValue([...newValues]);
    checkDateAndTime(newValues[0], "start");
    checkDateAndTime(newValues[1], "end");
  };

  const textFieldPlaceHolder = useMemo(() => {
    return "dd/mm/yyyy";
  }, []);

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

  useEffect(() => {
    let res: any = []
    const dataS = dataString.split('\n');
    const keys = dataS[0].split(",")
    for (let i = 1; i < dataS.length; i++) {
      let currObj: any = {}
      const currVal = dataS[i].split(",")
      for (let j = 0; j < keys.length; j++) {
        currObj[keys[j]] = currVal[j]
      }
      res.push(currObj)
    }
    const newData = res.map((item: any) => ({ date: new Date(item.Date), value: isNaN(item.High) ? 0 : Number(item.High) * 82.89 }))
    setData(newData)
    setSelectedDate([newData[0].date, newData[newData.length - 1].date])
    setBadgeSelect(0)
  }, [])

  useEffect(() => {
    if (selectedDate[0] && selectedDate[1]) {
      let startDate = new Date(selectedDate[0])
      const endDate = new Date(selectedDate[1])
      const differenceInTime: number = endDate.getTime() - startDate.getTime();
      const daysInBetween: number = Math.ceil(differenceInTime / (1000 * 3600 * 24)) + 1;

      let xLabels: string[] = []
      let points: number[] = []

      if (daysInBetween <= 14) { // for day Wise
        while (startDate.getDate() <= endDate.getDate()) {
          xLabels.push(startDate.toLocaleDateString())
          const currData = data.filter(item => item.date.toLocaleDateString() === startDate.toLocaleDateString())
          points.push(currData[0].value)
          startDate.setDate(startDate.getDate() + 1);
        }
      }
      else if (daysInBetween <= 14 * 7) { // for week wise
        while (startDate.getTime() <= endDate.getTime()) {
          const currDate = new Date(startDate)
          const dummy = new Date(startDate)
          const currEndDate = new Date(dummy.setDate(startDate.getDate() + 7))

          xLabels.push(`${currDate.toLocaleDateString()} - ${currEndDate.toLocaleDateString()}`)

          const currData = data.filter(item => {
            const testTime = item.date.getTime()
            const startTime = currDate.getTime()
            const endTime = currEndDate.getTime()
            if (testTime >= startTime && testTime <= endTime) return true
            else return false
          }).reduce((acc, item) => Math.max(acc, Number.isNaN(item.value) ? 0 : item.value), 0)
          points.push(currData)
          startDate = currEndDate;
        }

      }
      else if (daysInBetween <= 14 * 30) { // for months Wise
        while (startDate.getTime() <= endDate.getTime()) {
          const currDate = new Date(startDate)
          const dummy = new Date(startDate)
          const currEndDate = new Date(dummy.setDate(startDate.getDate() + 30))

          xLabels.push(`${currDate.toLocaleDateString()} - ${currEndDate.toLocaleDateString()}`)

          const currData = data.filter(item => {
            const testTime = item.date.getTime()
            const startTime = currDate.getTime()
            const endTime = currEndDate.getTime()
            if (testTime >= startTime && testTime <= endTime) return true
            else return false
          }).reduce((acc, item) => Math.max(acc, Number.isNaN(item.value) ? 0 : item.value), 0)

          points.push(currData)
          startDate = currEndDate;
        }
      }
      else { // for years wise
        while (startDate.getTime() <= endDate.getTime()) {
          const currDate = new Date(startDate)
          const dummy = new Date(startDate)
          const currEndDate = new Date(dummy.setFullYear(startDate.getFullYear() + 1))

          xLabels.push(`${currDate.toLocaleDateString()} - ${currEndDate.toLocaleDateString()}`)

          const currData = data.filter(item => {
            const testTime = item.date.getTime()
            const startTime = currDate.getTime()
            const endTime = currEndDate.getTime()
            if (testTime >= startTime && testTime <= endTime) return true
            else return false
          })
            .reduce((acc, item) => Math.max(acc, Number.isNaN(item.value) ? 0 : item.value), 0)
          points.push(currData)
          startDate = currEndDate;
        }
      }

      if (xLabels.length && points.length) {
        setChartData(prev => ({
          ...prev, dataSet: [{
            color: "#F79F36",
            name: "BTC",
            points: points
          }],
          labels: {
            x: xLabels,
            y: 10
          }
        }))
      }

    }
  }, [selectedDate])

  const handelBadgeClick = (days: number) => {
    setBadgeSelect(days)
    const startDate = new Date(data[data.length - 1].date)
    const endDate = new Date(startDate.setDate(startDate.getDate() - days))
    setSelectedDate([endDate, new Date(data[data.length - 1].date)])
  }

  return (
    <Card title="Bitcoin price" cardType='filled'>
      <FlexLayout direction='vertical' spacing='extraLoose'>
        <RangePicker
          selectedDates={selectedDate}
          onDateChange={handelDateChange}
          textFieldValue={textFieldValue}
          textFieldPlaceholder={[textFieldPlaceHolder, textFieldPlaceHolder]}
          onTextFieldChange={handelTextFieldValueChange}
          label="Select Date"
          selectedTime={selectedTime}
          onStartTextFieldClear={handelStartTextFieldClear}
          onEndTextFieldClear={handelEndTextFieldClear}
          isDateDisable={(testDate) => {
            if (data.length) {
              if (testDate < data[0].date || testDate > data[data.length - 1].date) return true;
              else return false;
            } else return true
          }}
        />
        <FlexLayout spacing='mediumLoose'>
          <span style={{ cursor: "pointer" }} onClick={() => handelBadgeClick(365)}> <Badge variant={badgeSelect === 365 ? "filled" : 'accent'}>Last 365 days</Badge></span>
          <span style={{ cursor: "pointer" }} onClick={() => handelBadgeClick(120)}><Badge variant={badgeSelect === 120 ? "filled" : 'accent'}>Last 120 days</Badge></span>
          <span style={{ cursor: "pointer" }} onClick={() => handelBadgeClick(30)}><Badge variant={badgeSelect === 30 ? "filled" : 'accent'}>Last 30 days</Badge></span>
          <span style={{ cursor: "pointer" }} onClick={() => handelBadgeClick(7)}><Badge variant={badgeSelect === 7 ? "filled" : 'accent'}>Last 7 days</Badge></span>
        </FlexLayout>
        <Card>
          <LineChart
            {...chartData}
            height={500}
          />
        </Card>
      </FlexLayout>

    </Card>
  )
}

export default LineChartTemplate