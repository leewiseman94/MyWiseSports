import React from 'react'
import { Link } from 'react-router-dom'

const WineCard = (wine) => {
  
  return (
    <div key={wine._id} className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`wines/${wine._id}`} >
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{wine.name}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={wine.image} alt={wine.name} height="360"/>
            </figure>
          </div>
          <div className="card-content">
            <h5>{wine.origin}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default WineCard