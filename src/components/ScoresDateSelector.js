import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

const ScoresDateSelector = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedEqualsCurrent, setSelectedEqualsCurrent] = useState(true)
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
    setSelectedDate(day)
    setSelectedEqualsCurrent(day.getDay() === currentDate.getDay() && day.getMonth() === currentDate.getMonth() && day.getYear() === currentDate.getYear())
  }

  const getDayInString = (date) => {
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday']
    return weekDay[date.getDay()]
  }

  const getMonthInString = (date) => {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return month[date.getMonth()]
  }

  console.log(selectedDate)
  return (
    <>
      {nextDays.length ? 
        <div className="row align-items-center p-5">
          <div className="col d-flex justify-content-center align-items-center">
            <button className="live-button d-flex flex-column justify-content-center align-items-center">{selectedEqualsCurrent ? 'Live' : 'Today'}</button>
          </div>
          {nextDays.map(day => {
            let selectedDateBoolean = day.getDay() === selectedDate.getDay() && day.getMonth() === selectedDate.getMonth() && day.getYear() === selectedDate.getYear()
            return (
              <div key={day} className="col d-flex justify-content-center align-items-center" onClick={() => handleChangeDate(day)}>
                <button className="date-button d-flex flex-column justify-content-center align-items-center">
                  <h4 className={selectedDateBoolean ? 'active' : ''}>{getDayInString(day).slice(0,3)}</h4>
                  <h6 className={selectedDateBoolean ? 'active' : ''}>{`${day.getDate()} ${getMonthInString(day).slice(0, 3)}`}</h6>
                </button>
              </div>
            )
          })}
          </div> 
          :
          <h2>Something went wrong</h2>
      }
      {selectedDate && <div>{selectedDate.getDate()}</div>}
    </>
  )
}

export default ScoresDateSelector