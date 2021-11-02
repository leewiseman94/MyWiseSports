import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FootballDates from './ScoresDateSelector'

const FootballHome = () => {

  const [fixtureData, setFixtureData] = useState([])
  const [currentDate, setCurrentDate] = useState(new Date())
  const [nextDays, setNextDays] = useState([])
  
  const [hasError, setHasError] = useState(false)

  const [options, setOptions] = useState({
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {
      league: '39',
      season: '2020',
      timezone: 'Europe/London'
    },
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': 'adf983d0fdmsh896f269f2c092bfp1d1d95jsndada3947b89f'
    }
  })



  useEffect(() => {
    if (currentDate.getDate() !== (new Date().getDate())) {
      setCurrentDate(new Date())
    }

    for (let i = 0; i < 5; i++) {
      const iDate = new Date(currentDate)
      iDate.setDate(iDate.getDate() + i)

      nextDays.push(iDate)
      setNextDays(nextDays)
    }
  }, [currentDate, nextDays])


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.request(options)
        setFixtureData(response)
        
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [options])

  console.log(fixtureData)
  console.log(nextDays)
  return (
    <section className="section">
      <div className="container">
        {nextDays.length ? 
          <div className="columns is-multiline">
            {nextDays.map(day => {
              return (
                <FootballDates key={day} { ...day } />
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