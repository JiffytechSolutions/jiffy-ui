import React from 'react'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from '../../../../storybook/Foundation/Icons/Icons'
import useMobileDevice from '../../../../utilities/useMobileDevice'
import Button from '../../../Button/Button'
import './CalendarHeader.css'
import getClassNames from '../../../../utilities/getClassnames'

interface CalendarHeaderI {
  onNextMonth?: (date: Date) => void
  onNextYear?: (date: Date) => void
  onNextYearSlot?: (date: Date) => void
  onPrevMonth?: (date: Date) => void
  onPrevYear?: (date: Date) => void
  onPrevYearSlot?: (date: Date) => void
  selectedDates?: (Date | undefined)[]
  onStartDateClick?: () => void
  onEndDateClick?: () => void
  currControl?: 'start' | 'end'
  headerType?: 'day' | 'month' | 'year',
  calendarDate?: Date,
  onMonthClick?: (isSecond?: boolean) => void
  onYearClick?: (isSecond?: boolean) => void,
  onYearSlotClick?: () => void
  isRange?: boolean,
  onBack?: () => void,
  isTime?: boolean
}

const getYearSlot = (date: Date) => {
  const startingYear = date.getFullYear()
  return `${startingYear}-${startingYear + 17}`
}

const getNextMonth = (date: Date) => {
  let month = date.getMonth()
  if (month + 1 > 11) return monthsOfYear[0]
  else return monthsOfYear[month + 1]
}

const getNextMonthYear = (date: Date) => {
  let month = date.getMonth()
  if (month + 1 > 11) return date.getFullYear() + 1
  else return date.getFullYear()
}

const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CalendarHeader = ({
  isRange = false,
  onNextMonth = () => { },
  onNextYear = () => { },
  onNextYearSlot = () => { },
  onPrevMonth = () => { },
  onPrevYear = () => { },
  onPrevYearSlot = () => { },
  selectedDates = [],
  onStartDateClick = () => { },
  onEndDateClick = () => { },
  currControl = 'start',
  headerType = "day",
  calendarDate = new Date(),
  onMonthClick = () => { },
  onYearClick = () => { },
  onYearSlotClick = () => { },
  onBack = () => { },
  isTime = false
}: CalendarHeaderI) => {

  const isMobile = useMobileDevice()

  const handelBackButton = () => {
    if (headerType === 'day') {
      onPrevYear(calendarDate)
    }
    else if (headerType === 'month') {
      onPrevYear(calendarDate)
    }
    else {
      onPrevYearSlot(calendarDate)
    }
  }

  const handelNextButton = () => {
    if (headerType === 'day') {
      onNextYear(calendarDate)
    }
    else if (headerType === 'month') {
      onNextYear(calendarDate)
    }
    else {
      onNextYearSlot(calendarDate)
    }
  }

  return (
    <div className={getClassNames({
      'inte-calendarHeader': true,
      'inte-calendarHeader--range': isRange,
    }
    )}>
      {
        (isRange && isMobile) ? (
          <div className='inte-calendarHeader__selectedDates'>
            <span
              className={getClassNames({
                'inte-calendarHeader__date': true,
                'inte-calendarHeader__date--active': currControl === "start"
              }
              )}
              onClick={() => onStartDateClick()}
            >
              {(!selectedDates.length || !selectedDates[0]) ? 'Start' : `${selectedDates[0].getDate()} ${monthsOfYear[selectedDates[0].getMonth()]}`}
            </span>
            <span>-</span>
            <span
              className={getClassNames({
                'inte-calendarHeader__date': true,
                'inte-calendarHeader__date--active': currControl === "end"
              }
              )}
              onClick={() => onEndDateClick()}
            >
              {(!selectedDates.length || !selectedDates[1]) ? 'End' : `${selectedDates[1].getDate()} ${monthsOfYear[selectedDates[1].getMonth()]}`}
            </span>
          </div>
        ) : null
      }

      <div className='inte-calendarHeader__controls'>
        {
          headerType === 'day' ? (
            <>
              <div className='inte-calendarHeader__prevControls'>
                <Button
                  type='textButton'
                  icon={<ChevronsLeft size="16" />}
                  size='extraThin'
                  onClick={() => onPrevYear(calendarDate)}
                />
                <Button
                  type='textButton'
                  icon={<ChevronLeft size="16" />}
                  size='extraThin'
                  onClick={() => onPrevMonth(calendarDate)}
                />
              </div>
              <div className={getClassNames({
                'inte-calendarHeader__showDetail' : true,
                'inte-calendarHeader__showDetail--range' : isRange,
                "inte-calendarHeader__showDetail--hasSecondCalendar" : isRange && !isMobile
              })}>
                {
                  !isRange ? (
                    <>
                      <Button
                        type='textButton'
                        onClick={onMonthClick}
                      >
                        {
                          monthsOfYear[calendarDate.getMonth()]
                        }
                      </Button>
                      <Button
                        type='textButton'
                        onClick={onYearClick}
                      >
                        {
                          calendarDate.getFullYear()
                        }
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className='inte-calendarHeader__firstCalanderDetails'>
                        <Button
                          type='textButton'
                          onClick={onMonthClick}
                        >
                          {
                            monthsOfYear[calendarDate.getMonth()]
                          }
                        </Button>
                        <Button
                          type='textButton'
                          onClick={onYearClick}
                        >
                          {
                            calendarDate.getFullYear()
                          }
                        </Button>
                      </div>
                      {
                        !isMobile && (
                          <div className='inte-calendarHeader__secondCalanderDetails'>
                            <Button
                              type='textButton'
                              onClick={() => onMonthClick(true)}
                            >
                              {
                                getNextMonth(calendarDate)
                              }
                            </Button>
                            <Button
                              type='textButton'
                              onClick={() => onYearClick(true)}
                            >
                              {
                                getNextMonthYear(calendarDate)
                              }
                            </Button>
                          </div>
                        )
                      }
                    </>
                  )

                }
              </div>
              <div className='inte-calendarHeader__nextControls'>
                <Button
                  type='textButton'
                  icon={<ChevronRight size="16" />}
                  size='extraThin'
                  onClick={() => onNextMonth(calendarDate)}
                />
                <Button
                  type='textButton'
                  icon={<ChevronsRight size="16" />}
                  size='extraThin'
                  onClick={() => onNextYear(calendarDate)}
                />
              </div>
            </>
          ) : (
            <>
              {
                !isTime && <Button
                  icon={<ChevronLeft size={16} />}
                  type='textButton'
                  size='extraThin'
                  onClick={onBack}
                >
                  Back
                </Button>
              }
              <div className={getClassNames({
                "inte-calendarHeader__currDetails": true,
                "inte-calendarHeader__currDetails--noBack": isTime
              })}>
                <Button
                  type='textButton'
                  size='extraThin'
                  icon={<ChevronLeft size={16} />}
                  onClick={handelBackButton}
                />
                <Button
                  type='textButton'
                  onClick={() => headerType === 'month' && onYearClick()}
                >
                  {
                    headerType === 'month' ? calendarDate.getFullYear() : getYearSlot(calendarDate)
                  }
                </Button>
                <Button
                  type='textButton'
                  size='extraThin'
                  icon={<ChevronRight size={16} />}
                  onClick={handelNextButton}
                />
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default CalendarHeader
