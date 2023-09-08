import React from 'react'
import './Calendar.css'
import getClassNames from '../../../../utilities/getClassnames';

interface CalendarI {
  selectedDate?: Date;
  onDateClick: (newDate: Date) => void;
  openDate?: Date;
  isDateDisable?: (testDate: Date) => boolean;
  isDateInHoverRange?: (testDate: Date) => boolean;
  isDateInSelectedRange?: (testDate: Date) => boolean;
  onDateHover?: (date?: Date, event?: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
  type?: 'year' | 'month' | "day"
  selectedDates?: (Date | undefined)[]
  dateFormatter?: (date: Date) => string
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString().split(',')[0]
}

const daysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const firstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

const isSameYear = (a: Date, b: Date) => {
  return (
    a.getFullYear() === b.getFullYear()
  )
}

const isSameMonth = (a: Date, b: Date) => {
  return (
    isSameYear(a, b) &&
    a.getMonth() === b.getMonth()
  )
}

const isSameDay = (a: Date, b: Date) => {
  return (
    isSameMonth(a, b) &&
    a.getDate() === b.getDate()
  )
}

type PrevOrAfter = 'prevMonth' | 'afterMonth';


const getDates = (month: number, year: number, numOfDays: number, prevOrAfter: PrevOrAfter): Date[] => {
  const dates: Date[] = [];
  const date = new Date(year, month, 1);

  if (prevOrAfter === 'prevMonth') {
    date.setDate(0); // Move to the last day of the previous month
  } else if (prevOrAfter === 'afterMonth') {
    date.setMonth(month + 1, 1); // Move to the first day of the next month
  } else {
    throw new Error('Invalid prevOrAfter parameter. It should be "prevMonth" or "afterMonth".');
  }

  for (let i = 0; i < numOfDays; i++) {
    dates.push(new Date(date));
    if(prevOrAfter === 'prevMonth') date.setDate(date.getDate() - 1); // Move to the previous day
    else date.setDate(date.getDate() + 1)
  }

  return dates.reverse(); // Reverse the array to get the dates in ascending order
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];


const Calendar = ({
  selectedDate,
  onDateClick = () => { },
  isDateDisable = () => false,
  openDate = new Date(),
  isDateInHoverRange = () => false,
  isDateInSelectedRange = () => false,
  onDateHover = () => { },
  type = "day",
  selectedDates = [undefined, undefined],
  dateFormatter = formatDate,
}: CalendarI) => {

  const setDayInDate = (date: Date, day: number) => {
    let t = new Date(date)
    t.setDate(day)
    t.setHours(0, 0, 0)
    return t
  }

  const checkStartSelectedDate = (currDate: Date) => {
    if (selectedDates && selectedDates[0]) {
      return isSameDay(currDate, selectedDates[0])
    }
    return false
  }

  const checkEndSelectedDate = (currDate: Date) => {
    if (selectedDates && selectedDates[1]) {
      return isSameDay(currDate, selectedDates[1])
    }
    return false
  }

  const renderDayCalendar = (date: Date): JSX.Element => {
    const days = [];
    const daysInCurrentMonth = daysInMonth(date.getMonth(), date.getFullYear());
    const firstDayInCurrentMonth = firstDayOfMonth(date);

    const prevMonthCellCount = firstDayInCurrentMonth === 0 ? 7 : firstDayInCurrentMonth
    const prevDates = getDates(date.getMonth() , date.getFullYear() , prevMonthCellCount , "prevMonth")

    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < prevMonthCellCount; i++) {
      const currDate = prevDates[i]
      const isDisabledDate = isDateDisable ? isDateDisable(currDate) : false
      days.push(
        <td key={`empty-${i}`} 
          className={getClassNames({
            "inte-calendar__cell": true,
            "inte-calendar__prevCell" : true,
            'inte-calendar__cell--disabled': isDisabledDate,
          })}
          title={dateFormatter(currDate)}
          onClick={() => (!isDisabledDate) && onDateClick(currDate)}
          onMouseOver={(e) => (!isDisabledDate) && onDateHover(currDate, e)}
          onMouseLeave={(e) => (!isDisabledDate) && onDateHover(undefined, e)}
        >
          <div className='inte-calendar__cell__inner'>
            {
              currDate.getDate()
            }
          </div>
        </td>
      );
    }

    // Add days of the current month
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const currDate = setDayInDate(date, day)
      const isSelectedDay = selectedDate ? isSameDay(selectedDate, currDate) : false
      const isDisabledDate = isDateDisable ? isDateDisable(currDate) : false
      const isInSelectedRange = isDateInSelectedRange(currDate)
      const isInHoverRange = !isInSelectedRange ? isDateInHoverRange(currDate) : false
      const isStartSelected = checkStartSelectedDate(currDate)
      const isEndSelected = checkEndSelectedDate(currDate)
      days.push(
        <td
          key={day}
          className={getClassNames({
            'inte-calendar__cell': true,
            'inte-calendar__cell--selected': isSelectedDay,
            'inte-calendar__cell--inHoverRange': isInHoverRange,
            'inte-calendar__cell--inSelectedRange': isInSelectedRange,
            'inte-calendar__cell--disabled': isDisabledDate,
            'inte-calendar__cell--selected--start': isStartSelected,
            'inte-calendar__cell--selected--end': isEndSelected,
            'inte-calendar__cell--currCell': (isSameDay(currDate, new Date()))
          },
          )}
          title={dateFormatter(currDate)}
          onClick={() => (!isDisabledDate) && onDateClick(currDate)}
          onMouseOver={(e) => (!isDisabledDate) && onDateHover(currDate, e)}
          onMouseLeave={(e) => (!isDisabledDate) && onDateHover(undefined, e)}
        >
          <div className={`inte-calendar__cell__inner`}>{day}</div>
        </td>
      );
    }
    // Add next month cells for days after the last day of the month
    const nextMonthCellCount = 42 - (daysInCurrentMonth + prevMonthCellCount)
    const afterDates = getDates(date.getMonth() , date.getFullYear() , nextMonthCellCount , "afterMonth").reverse()
      for (let i = 0; i < nextMonthCellCount;  i++) {
        const currDate = afterDates[i]
        const isDisabledDate = isDateDisable ? isDateDisable(currDate) : false
        days.push(
        <td 
          key={`empty-${i}`} 
          className={getClassNames({
          "inte-calendar__cell": true,
          "inte-calendar__afterCell": true,
          'inte-calendar__cell--disabled': isDisabledDate,
          })}
          title={dateFormatter(currDate)}
          onClick={() => (!isDisabledDate) && onDateClick(currDate)}
          onMouseOver={(e) => (!isDisabledDate) && onDateHover(currDate, e)}
          onMouseLeave={(e) => (!isDisabledDate) && onDateHover(undefined, e)}
        >
          <div className='inte-calendar__cell__inner'>
            {
              currDate.getDate()
            }
          </div>
        </td>);
      }

    // Group days into rows of seven
    const rows = [];
    for (let i = 0; i < days.length; i += 7) {
      rows.push(
        <tr key={`row-${i / 7}`} className="inte-calendar__week">
          {days.slice(i, i + 7)}
        </tr>
      );
    }

    return <table className='inte-calendar__day'>
      <thead>
        <tr>
          {
            daysOfWeek.map((day) => (
              <th key={day} className="inte-calendar__cell">
                {day}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          rows
        }
      </tbody>
    </table>;
  };

  const renderMonthCalendar = (date: Date): JSX.Element => {
    const months: any = []
    monthsOfYear.map((month: string, ind: number) => {
      const currDate = new Date(date.getFullYear(), ind)
      const isDateSelected = selectedDate ? isSameMonth(selectedDate, currDate) : false
      const isDisabledDate = isDateDisable(currDate)
      const isInSelectedRange = isDateInSelectedRange(currDate)
      const isInHoverRange = !isInSelectedRange ? isDateInHoverRange(currDate) : false
      months.push(
        <td
          key={`month-${ind + 1}`}
          className={getClassNames({
            'inte-calendar__cell': true,
            'inte-calendar__cell--selected': isDateSelected,
            'inte-calendar__cell--inHoverRange': isInHoverRange,
            'inte-calendar__cell--inSelectedRange': isInSelectedRange,
            'inte-calendar__cell--disabled': isDisabledDate,
            'inte-calendar__cell--currCell': (isSameMonth(currDate, new Date()))
          }
          )}
          onClick={() => !isDisabledDate && onDateClick(currDate)}
          title={dateFormatter(currDate)}
          onMouseOver={() => !isDisabledDate && onDateHover(currDate)}
          onMouseLeave={() => !isDisabledDate && onDateHover()}
        >
          <div className="inte-calendar__cell__inner">
            {month}
          </div>
        </td>
      )
    })
    const rows = []
    for (let i = 0; i < months.length; i += 3) {
      rows.push(
        <tr key={`row${i}`}>
          {months.slice(i, i + 3)}
        </tr>
      )
    }
    return <table className='inte-calendar__month'>
      <tbody>
        {
          rows
        }
      </tbody>
    </table>
  }

  const renderYearCalendar = (date: Date): JSX.Element => {
    const startingYear = date.getFullYear()
    const years = []
    for (let i = 0; i < 18; i++) {
      const currDate = new Date(`${startingYear + i}`)
      const isDateSelected = selectedDate ? isSameYear(selectedDate, currDate) : false
      const isDisabledDate = isDateDisable(currDate)
      const isInSelectedRange = isDateInSelectedRange(currDate)
      const isInHoverRange = !isInSelectedRange ? isDateInHoverRange(currDate) : false

      years.push(
        <td
          key={`year-${i + 1}`}
          className={getClassNames({
            'inte-calendar__cell': true,
            'inte-calendar__cell--currCell': (isSameYear(currDate, new Date())),
            'inte-calendar__cell--selected': isDateSelected,
            'inte-calendar__cell--inHoverRange': isInHoverRange,
            'inte-calendar__cell--inSelectedRange': isInSelectedRange,
            'inte-calendar__cell--disabled': isDisabledDate,
          }
          )}
          onClick={() => !isDisabledDate && onDateClick(currDate)}
          title={dateFormatter(currDate)}
          onMouseOver={() => !isDisabledDate && onDateHover(currDate)}
          onMouseLeave={() => !isDisabledDate && onDateHover()}
        >
          <div className="inte-calendar__cell__inner">
            {currDate.getFullYear()}
          </div>
        </td>
      )
    }
    const rows = []
    for (let i = 0; i < years.length; i += 3) {
      rows.push(
        <tr key={`row${i}`}>
          {years.slice(i, i + 3)}
        </tr>
      )
    }
    return <table className='inte-calendar__year'>
      <tbody>
        {
          rows
        }
      </tbody>
    </table>
  }

  return (
    <div className='inte-calender'>
      {
        type === "day" ? renderDayCalendar(openDate) : type === 'month' ? renderMonthCalendar(openDate) : renderYearCalendar(openDate)
      }
    </div>
  );
};

export default Calendar;