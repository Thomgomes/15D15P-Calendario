import React, { useState } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { DaysLi } from "../components/DaysLi"
import { WeeksLi } from "../components/WeeksLi"


const months = ['January', 'February', 'March', 'April', 'may', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth(),
  currDay = date.getDate()

let setNameMonth = months[currMonth]


export const Calendar = () => {
  let [year, SetYear] = useState(`${currYear}`)
  let [month, SetMonth] = useState(`${setNameMonth}`)

  let today = new Date(),
    todayYear = today.getFullYear(),
    todayMonth = today.getMonth(),
    todayDay = today.getDate()

  let fristDaysOfMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(),
    fristDayofNextMonth = new Date(currYear, currMonth, lastDateofMonth).getDay()

  class Loop extends React.Component {
    renderRow(row) {
      return <DaysLi view={row} />
    }

    renderActiveRow(row) {
      return <DaysLi active='active' view={row} />
    }

    renderInactiveRow(row) {
      return <DaysLi inactive='inactive' view={row} />
    }

    render() {
      let liDaystag = []
      let liInactiveDaystag = []
      let liInactiveDaysofNextMonthtag = []

      for (let i = fristDaysOfMonth; i > 0; i--) {
        liInactiveDaystag.push(lastDateofLastMonth - i + 1)

      }

      for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
          && currYear === new Date().getFullYear() ? "active" : '';
        liDaystag.push(i)
      }

      for (let i = fristDayofNextMonth; i < 6; i++) {
        liInactiveDaysofNextMonthtag.push(i - fristDayofNextMonth + 1)

      }
      return (
        <ul className="days grid grid-cols-7 text-center mb-5">
          {liInactiveDaystag.map(this.renderInactiveRow)}
          {liDaystag.map(this.renderRow)}
          {liInactiveDaysofNextMonthtag.map(this.renderInactiveRow)}
        </ul>
      )
    }
  }

  function UpMonth() {
    currMonth++
    setNameMonth = months[currMonth]
    SetMonth(month = setNameMonth)
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth)
      currYear = date.getFullYear()
      SetYear(year = currYear)
      currMonth = date.getMonth()
      setNameMonth = months[currMonth]
      SetMonth(month = setNameMonth)
    } else { date = new Date() }
  }

  function DownMonth() {
    currMonth--
    setNameMonth = months[currMonth]
    SetMonth(month = setNameMonth)
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth)
      currYear = date.getFullYear()
      SetYear(year = currYear)
      currMonth = date.getMonth()
      setNameMonth = months[currMonth]
      SetMonth(month = setNameMonth)
    } else { date = new Date() }
  }

  return (
    <div className="warpper md:w-[440px] bg-white rounded-xl">
      {/* Months  */}
      <header className="flex items-center justify-between pt-6 px-7 pb-3">
        <h4 id="current-date" className="text-2xl font-medium">{month} {year} <span className="ml-3 text-xs text-red-400">{todayDay}/{todayMonth}/{todayYear}</span></h4>
        <div className="icons flex">
          <button onClick={DownMonth} className="h-9 w-9 mx-1 text-3xl cursor-pointer flex items-center justify-center rounded-full text-[#878787] hover:bg-[#f2f2f2]"><BiChevronLeft /></button>
          <button onClick={UpMonth} className="h-9 w-9 mx-1 text-3xl cursor-pointer flex items-center justify-center rounded-full text-[#878787] hover:bg-[#f2f2f2]"><BiChevronRight /></button>
        </div>
      </header>

      {/* Calendar */}
      <div className="calender p-2">
        {/* Weeks  */}
        <ul className="weeks grid grid-cols-7 text-center font-medium">
          <WeeksLi view='Sun'></WeeksLi>
          <WeeksLi view='Mon'></WeeksLi>
          <WeeksLi view='Tue'></WeeksLi>
          <WeeksLi view='Wed'></WeeksLi>
          <WeeksLi view='Thu'></WeeksLi>
          <WeeksLi view='Fri'></WeeksLi>
          <WeeksLi view='Sat'></WeeksLi>
        </ul>

        {/* Days */}
        <Loop />
      </div>
    </div>
  )
}