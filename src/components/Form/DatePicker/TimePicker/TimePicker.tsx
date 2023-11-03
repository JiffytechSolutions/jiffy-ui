import React, { useEffect, useRef, useState } from 'react'
import useMobileDevice from '../../../../utilities/useMobileDevice'
import './TimePicker.css'
import Button from '../../../Button/Button'
import { ChevronLeft, X } from '../../../../storybook/Foundation/Icons/Icons'
import getClassNames from '../../../../utilities/getClassnames'

interface TimePickerI {
  selectedTime?: TimeI
  onChange: (newTime?: TimeI) => void,
  heading?: string
  onClose: () => void
  hasFooter?: boolean
}

export interface TimeI {
  hh: number
  mm: number
  meridian: "AM" | 'PM'
}

export const formatTimeObj = (selectedTime: TimeI) => {
  const h = selectedTime.hh < 10 ? `0${selectedTime.hh}` : selectedTime.hh
  const m = selectedTime.mm < 10 ? `0${selectedTime.mm}` : selectedTime.mm
  const me = selectedTime.meridian
  return `${h}:${m}:${me}`
}

const roundToNearest = (num: number): number => {
  const decimalPart = Math.abs(num) - Math.floor(Math.abs(num)); // Get the decimal part of the absolute value of the number
  if (decimalPart < 0.5) {
    return Math.sign(num) * Math.floor(Math.abs(num));
  } else {
    return Math.sign(num) * Math.ceil(Math.abs(num));
  }
};


const TimePicker = ({ onChange, selectedTime, heading, onClose, hasFooter = false }: TimePickerI) => {

  const [time, setTime] = useState<TimeI | undefined>()

  const timePickerRef = useRef<HTMLDivElement>(null)

  const isMobile = useMobileDevice()

  const scrollTimeList = (listContainer: HTMLDivElement) => {
    const defaultScrollNumber = isMobile ? 40 : 130
    const timeList = listContainer.getElementsByTagName('ul')
    for (let i = 0; i < 3; i++) {
      const currEle = timeList[i].getElementsByClassName('inte-timePicker__item--selected')[0] as HTMLElement
      if (currEle && time) {
        const scrollDist = currEle.offsetTop - timeList[i].offsetTop
        const originalScrollHandler = timeList[i].onscroll;
        timeList[i].onscroll = null
        timeList[i].scrollTo({
          top: scrollDist - defaultScrollNumber,
          behavior: 'smooth'
        })
        setTimeout(() => {
          timeList[i].onscroll = originalScrollHandler;
        }, 1000)
      }
    }
  }


  const listScrollTimer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    listScrollTimer.current = setTimeout(() => {
      timePickerRef.current && scrollTimeList(timePickerRef.current)
    }, 100)
    return () => {
      clearTimeout(listScrollTimer.current)
    }
  }, [timePickerRef.current, time])


  const handelAMClick = () => {
    isMobile ? setTime({
      hh: time?.hh ?? 12,
      mm: time?.mm ?? 0,
      meridian: "AM"
    }) : onChange({
      hh: time?.hh ?? 12,
      mm: time?.mm ?? 0,
      meridian: "AM"
    })
  }

  const handelPMClick = () => {
    isMobile ? setTime({
      hh: time?.hh ?? 12,
      mm: time?.mm ?? 0,
      meridian: "PM"
    }) : onChange({
      hh: time?.hh ?? 12,
      mm: time?.mm ?? 0,
      meridian: "PM"
    })
  }

  const handelHourClick = (hour: number) => {
    let newTime = {
      hh: hour,
      mm: time?.mm ?? 0,
      meridian: time?.meridian ?? "AM"
    }
    isMobile ? setTime(newTime) : onChange(newTime)
  }

  const handelMinuteClick = (min: number) => {
    let newTime = {
      hh: time?.hh ?? 12,
      mm: min,
      meridian: time?.meridian ?? "AM"
    }
    isMobile ? setTime(newTime) : onChange(newTime)
  }

  const handelHourListScroll = (e: React.UIEvent<HTMLUListElement>) => {
    if (!isMobile) return
    const ele = e.target as HTMLElement
    const eleToScroll = roundToNearest((ele.scrollTop / 40))
    handelHourClick(eleToScroll)
  }

  const handelMinListScroll = (e: React.UIEvent<HTMLUListElement>) => {
    if (!isMobile) return
    const ele = e.target as HTMLElement
    const eleToScroll = roundToNearest((ele.scrollTop / 40))
    handelMinuteClick(eleToScroll)
  }

  const handelMeridianListScroll = (e: React.UIEvent<HTMLUListElement>) => {
    if (!isMobile) return
    const ele = e.target as HTMLElement
    const eleToScroll = roundToNearest((ele.scrollTop / 40))
    if (eleToScroll >= 1) handelPMClick()
    else handelAMClick()
  }

  useEffect(() => {
    setTime(selectedTime)
  }, [selectedTime])

  return (
    <div className="inte-timePicker">
      <div className="inte-timePicker__header">
        {
          !isMobile && (
            <Button
              type='textButton'
              icon={<ChevronLeft size={16} />}
              iconAlign='left'
              onClick={onClose}
            >
              Back
            </Button>
          )
        }
        {
          !selectedTime ? <span>{heading ? heading : 'Select Time'}</span> : (
            <span>
              {
                formatTimeObj(selectedTime)
              }
            </span>
          )
        }
        {
          isMobile && <Button type='textButton' onClick={onClose} icon={<X size={20} />} />
        }
      </div>
      <div className={getClassNames({
        "inte-timePicker__lists" : true,
        "inte-timePicker__lists--hasSelectedTime" : selectedTime
      })} ref={timePickerRef}>
        <ul className={"inte-timePicker__hour"} onScroll={handelHourListScroll}>
          {
            Array(12).fill(0).map((item: number, ind: number) => {
              const selectedHour = time?.hh
              return (
                <li
                  key={`${ind}-hh`}
                  className={`inte-timePicker__item ${(selectedHour === ind || ((selectedHour === 12) && (ind === 0))) ? 'inte-timePicker__item--selected' : ''}`}
                  onClick={() => handelHourClick(ind === 0 ? 12 : ind)}
                >
                  {
                    (ind + 1) < 10 ? (ind === 0 ? 12 : "0" + ind) : ind
                  }
                </li>
              )
            })
          }
        </ul>
        <ul className="inte-timePicker__min" onScroll={handelMinListScroll}>
          {
            Array(60).fill(0).map((item: number, ind: number) => {
              const selectedMin = time?.mm
              return (
                <li
                  key={`${ind}-min`}
                  className={`inte-timePicker__item ${(selectedMin === ind) ? 'inte-timePicker__item--selected' : ''}`}
                  onClick={() => handelMinuteClick(ind)}
                >
                  {
                    ind < 10 ? "0" + ind : ind
                  }
                </li>
              )
            })
          }
        </ul>
        <ul className="inte-timePicker__meridian" onScroll={handelMeridianListScroll}>
          <li onClick={handelAMClick} className={`inte-timePicker__item ${time?.meridian === 'AM' ? 'inte-timePicker__item--selected' : ''}`}>AM</li>
          <li onClick={handelPMClick} className={`inte-timePicker__item ${time?.meridian === 'PM' ? 'inte-timePicker__item--selected' : ''}`}>PM</li>
        </ul>
        {
          isMobile && <span className='inte-timePicker__range'></span>
        }
      </div>
      {
        hasFooter && (
          <div className='inte-timePicker__footer'>
            <Button
              type='primary'
              size='thin'
              onClick={() => {
                onChange(time)
                onClose()
              }}
            >
              Done
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default TimePicker