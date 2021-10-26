import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


const WineDetails = () => {
  const [wine, setWine] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://ga-winebored.herokuapp.com/wines/${id}`)
        setWine(data)
      } catch (err) {
        setHasError(true)
      } 
    }
    getData()
  }, [id])

  return (
    <section className="section">
      <div className="container">
        {wine ? 
          <div>
            <h2 className="title has-text-centered">{wine.name}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <img src={wine.image} alt={wine.name}/>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">Origin</h4>
                <p>{wine.origin}</p>
                <hr />
                <h4 className="title is-4">Grape</h4>
                <p>{wine.grape}</p>
                <hr />
                <h4 className="title is-4">Price: £<span>{wine.price}</span></h4>
                <p className="title is-6">Added by: {wine.user.username}</p>
              </div>
            </div>
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
export default WineDetails