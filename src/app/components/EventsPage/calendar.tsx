'use client';
import clsx from "clsx";

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import { Fragment, useState } from 'react'

export default function Calendar() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

// Calculate all the days of the month
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

//   let selectedDayMeetings = meetings.filter((meeting) =>
//     isSameDay(parseISO(meeting.startDatetime), selectedDay)
//   )

  return (
      <div className="w-sm px-4 mx-auto sm:px-7 md:w-xl md:px-6 bg-white">
          <div className="p-5 md:p-10">
            {/* The header portion of the calendar */}
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900 text-xl md:text-3xl">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-md leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            {/* END */}

            {/* Loop through all the days of the month and assign this */}
            <div className="grid grid-cols-7 mt-2 text-sm md:text-lg">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={clsx(
                    'py-1.5',
                    {
                    [`col-start-${getDay(day)+1}`]: dayIdx === 0
                    }
                )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={clsx(
                    "mx-auto flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full",
                    {
                        "text-white": isEqual(day, selectedDay),
                        "text-red-500": isToday(day) && !isEqual(day, selectedDay),
                        "text-gray-900": isSameMonth(day, firstDayCurrentMonth) && !isToday(day),
                        "text-gray-400": !isSameMonth(day, firstDayCurrentMonth),
                        "bg-red-500": isEqual(day, selectedDay) && isToday(day),
                        "bg-gray-900": isEqual(day, selectedDay) && !isToday(day),
                        "hover:bg-gray-200": !isEqual(day, selectedDay),
                        "font-semibold": isEqual(day, selectedDay) || isToday(day),
                    }
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  {/* <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div> */}
                </div>
              ))}
            </div>
            {/* END  */}

          </div>
      </div>
  )
}