import React, { useEffect, useMemo, useState } from 'react'
import dataString from '../../BTC-USD'
import RangePicker, { SelectedTimeI } from '../../../Form/DatePicker/RangePicker/RangePicker';
import { TimeI } from '../../../Form/DatePicker/TimePicker/TimePicker';
import { Card } from '../../../Card';
import { FlexLayout } from '../../../FlexLayout';
import { DonutChart, DonutChartI } from '../DonutChart';
import PieChart from '../../PieChart/PieChart';
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


const DonutChartTemplate = () => {

    const [data, setData] = useState<any>([]);

    const [textFieldValue, setTextFieldValue] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<(Date | undefined)[]>([]);
    const [selectedTime, setSelectedTime] = useState<SelectedTimeI>();
    const [isTyping, setIsTyping] = useState(false);
    const [chartData, setChartData] = useState<{ label: string, value: number, color: string }[]>([
        {
            "label": "Open",
            "color": "red",
            "value": 67550
        },
        {
            "label": "High",
            "color": "green",
            "value": 68790
        },
        {
            "label": "Low",
            "color": "blue",
            "value": 66383
        },
        {
            "label": "Close",
            "color": "yellow",
            "value": 67567
        }
    ])

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
                if (keys[j] !== "Date") currObj[keys[j]] = isNaN(Number(currVal[j])) ? 0 : Number(currVal[j])
                else currObj[keys[j]] = currVal[j]

            }
            res.push(currObj)
        }
        setData(res)
        setSelectedDate([new Date(res[0].Date), new Date(res[res.length - 1].Date)])
        setBadgeSelect(0)
    }, [])
    useEffect(() => {
        if (selectedDate[0] && selectedDate[1]) {
            let startDate = new Date(selectedDate[0]).getTime()
            const endDate = new Date(selectedDate[1]).getTime()

            const currData = data.filter((item: any) => {
                const currTime = new Date(item.Date).getTime()
                if (currTime >= startDate && currTime <= endDate) return true
                return false
            }).reduce((acc: any, item: any) => {
                return {
                    "Open": Math.max(acc.Open, Number(item.Open)) % 100,
                    "High": Math.max(acc.High, Number(item.High)) % 100,
                    "Low": Math.max(acc.Low, Number(item.Low)) % 100,
                    "Close": Math.max(acc.Close, Number(item.Close)) % 100,
                }
            }, {
                "Open": 0,
                "High": 0,
                "Low": 0,
                "Close": 0,
            })

            const colors = ["red", "green", "blue", "yellow", "magenta", "cyan"]



            setChartData(Object.keys(currData).map((key, i) => ({
                "label": key,
                "color": colors[i],
                "value": Math.ceil(currData[key])
            })))
        }
    }, [selectedDate])

    const [badgeSelect , setBadgeSelect] = useState(0)

    const handelBadgeClick = (days:number) => {
        setBadgeSelect(days)
        const startDate = new Date(data[data.length - 1].Date)
        const endDate = new Date(startDate.setDate(startDate.getDate() - days))
        setSelectedDate([endDate , new Date(data[data.length - 1].Date)])
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
                    <span style={{cursor:"pointer"}} onClick={()=>handelBadgeClick(365)}> <Badge variant={badgeSelect === 365 ? "filled" : 'accent'}>Last 365 days</Badge></span>
                    <span style={{cursor:"pointer"}} onClick={()=>handelBadgeClick(120)}><Badge variant={badgeSelect === 120 ? "filled" : 'accent'}>Last 120 days</Badge></span>
                    <span style={{cursor:"pointer"}} onClick={()=>handelBadgeClick(30)}><Badge variant={badgeSelect === 30 ? "filled" : 'accent'}>Last 30 days</Badge></span>
                    <span style={{cursor:"pointer"}} onClick={()=>handelBadgeClick(7)}><Badge variant={badgeSelect === 7 ? "filled" : 'accent'}>Last 7 days</Badge></span>
                </FlexLayout>
                <FlexLayout spacing='extraLoose' childWidth='fullWidth'>
                    <Card>
                        <DonutChart
                            size={300}
                            tooltip
                            chartData={chartData}
                            animationDuration={300}
                            legend={{}}
                        />
                    </Card>
                    <Card>
                        <PieChart
                            size={300}
                            chartData={chartData}
                            legend={{}}
                        />
                    </Card>
                </FlexLayout>

            </FlexLayout>

        </Card>
    )
}

export default DonutChartTemplate