import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WineCard from './WineCard'

const WineList = () => {

  const [wineData, setWineData] = useState([])
  const [hasError, setHasError] = useState(false)
 
  useEffect(() => {
    const getWineData = async () => {
      try {
        const { data } = await axios.get('https://ga-winebored.herokuapp.com/wines')
        setWineData(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getWineData()
  }, [])


  return (
    <section className="section">
      <div className="container">
        {wineData.length ?
          <div className="columns is-multiline">
            {wineData.map(wine => {
              return (
                <WineCard key={wine._id} {...wine}></WineCard>
              )
            })}
          </div>
          :
          <h2 className="title has-text-centered">
            {hasError ? 'Something has gone wrong' : 'Loading...'}
          </h2>
        }
        
      </div>
    </section>
  )
}

export default WineList