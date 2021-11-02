import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import FootballDates from './ScoresDateSelector'

const FootballHome = () => {
  // Set navbar active
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link')
    const hero = document.querySelector('.hero-section')

    navLinks.forEach(link => {
      console.log(link.innerText)
      link.classList.remove('active')
      if (link.innerText === 'Football') {
        link.classList.add('active')
      }
    })

    hero.classList.remove('hero-section-home')
  }, [])


  const [currentDate, setCurrentDate] = useState(new Date())
  const [nextDays, setNextDays] = useState([])

  useEffect(() => {
    if (currentDate.getDate() !== (new Date().getDate())) {
      setCurrentDate(new Date())
    }
    const datesArray = []

    for (let i = 0; i < 5; i++) {
      const iDate = new Date(currentDate)
      iDate.setDate(iDate.getDate() + i)
      datesArray.push(iDate)
      setNextDays(datesArray)
    }
  }, [currentDate])

  console.log(nextDays)
  return (
    <section className="section">
      <div className="container">
        {nextDays.length ? 
          <div className="columns is-multiline">
            {nextDays.map(day => {
              console.log(day)
              return (
                <FootballDates key={day} date={day} />
              )
            })}
          </div> 
          :
          <h2>Something went wrong</h2>
      }


        {/* {fixtureData.length ?
          <div className="columns is-multiline">
            {fixtureData.map(fixture => {
              return (
                <WineCard key={fixture._id} {...fixture}></WineCard>
              )
            })}
          </div>
          :
          <h2 className="title has-text-centered">
            {hasError ? 'Something has gone wrong' : 'Loading...'}
          </h2>
        } */}
        
      </div>
    </section>
  )
}

export default FootballHome