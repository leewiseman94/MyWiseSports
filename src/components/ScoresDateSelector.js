import React, { useEffect, useState } from 'react'
import { DatePicker, Space } from 'antd';
import moment from 'moment'
import "antd/dist/antd.css";

const ScoresDateSelector = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [dateFormat, setDateFormat] = useState('DD/MM/YYYY')
  const [selectedEqualsCurrent, setSelectedEqualsCurrent] = useState(true)
  const [selectedDateInFive, setSelectedDateInFive] = useState(true)
  const [nextDays, setNextDays] = useState([])

  // This will get the 5 days 2 before, today and 2 after
  useEffect(() => {
    if (currentDate.getDate() !== (new Date().getDate())) {
      setCurrentDate(new Date())
    }
    const datesArray = []

    for (let i = -2; i < 3; i++) {
      const iDate = new Date(currentDate)
      iDate.setDate(iDate.getDate() + i)
      datesArray.push(iDate)
      setNextDays(datesArray)
    }
  }, [currentDate])

  // This will re-render when selected date is changed
  useEffect(() => {

  }, [selectedDate])

  // On click change the date to the selected date
  const handleChangeDate = (day) => {
    console.log(day)
    if (day === null) return
    if (day._d) day = day._d
    setSelectedDate(day)
    setSelectedEqualsCurrent(day.getDate() === currentDate.getDate() && day.getMonth() === currentDate.getMonth() && day.getYear() === currentDate.getYear())

    const withinFive = nextDays.some((date) => {
      return day.getDate() === date.getDate() && day.getMonth() === date.getMonth() && day.getYear() === date.getYear()
    })
    setSelectedDateInFive(withinFive)
  }

  

  const getDayInString = (date) => {
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday']
    return weekDay[date.getDay()]
  }

  const getMonthInString = (date) => {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return month[date.getMonth()]
  }

  return (
    <>
      {nextDays.length ? 
        <div className="row align-items-space-between">
          <div className="col-md-2 d-flex justify-content-center align-items-center">
            <button className="date-button todaylive-button d-flex flex-column justify-content-center align-items-center" onClick={() => handleChangeDate(currentDate)}>
              {selectedDateInFive ? 'Live' : 
              <>
                <h4 className='date-title'>Today</h4>
                <h6 className='date-subtitle'>{`${currentDate.getDate()} ${getMonthInString(currentDate).slice(0, 3)}`}</h6>
              </>
              }
            </button>
          </div>
          {selectedDateInFive ?
            nextDays.map(day => {
              let selectedDateBoolean = day.getDate() === selectedDate.getDate() && day.getMonth() === selectedDate.getMonth() && day.getYear() === selectedDate.getYear()
              return (
                <div key={day} className="col d-flex justify-content-center align-items-center p-0" onClick={() => handleChangeDate(day)}>
                  <button className="date-button d-flex flex-column justify-content-center align-items-center">
                    <h4 className={selectedDateBoolean ? 'date-title active' : 'date-title'}>{getDayInString(day).slice(0,3)}</h4>
                    <h6 className={selectedDateBoolean ? 'date-subtitle active' : 'date-subtitle'}>{`${day.getDate()} ${getMonthInString(day).slice(0, 3)}`}</h6>
                  </button>
                </div>
              )
              }) 
              :
            <div className="col d-flex justify-content-center align-items-center" onClick={() => handleChangeDate(selectedDate)}>
              <button className="date-button d-flex flex-column justify-content-center align-items-center">
                <h4 className="date-title active">{getDayInString(selectedDate)}</h4>
                <h6 className="date-subtitle active">{`${selectedDate.getDate()} ${getMonthInString(selectedDate)}`}</h6>
              </button>
            </div>
          }
          <div className="col-2 d-flex justify-content-center align-items-center">
            <Space direction="vertical">
              <DatePicker value={moment(selectedDate)}
                format={''}
                onChange={(event) => handleChangeDate(event)}
                disabledDate={d => !d || d.isAfter(moment(currentDate).add(180, 'days')) || d.isSameOrBefore("2000-01-01")}
                />
            </Space>
          </div>
        </div> 
          :
          <h2>Something went wrong</h2>
      }
      {selectedDate && <div>{selectedDate.getDate()}</div>}
    </>
  )
}

export default ScoresDateSelector