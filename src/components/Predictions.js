import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Predictions = () => {

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link')
    const hero = document.querySelector('.hero-section')

    navLinks.forEach(link => {
      console.log(link.innerText)
      link.classList.remove('active')
      if (link.innerText === 'Predictions') {
        link.classList.add('active')
      }
    })

    hero.classList.remove('hero-section-home')
  }, [])
  

  return (
    <>
      <section>
        <div className="container pt-5 pb-5">
          <h2 className="text-center page-title">Sports Live Scores & Predictions<br/>which are made using several algorithms</h2>
        </div>
        <div className="container pt-5 pb-4">
          <h5 className="text-center page-subtitle">Powered by Artificial Intelligence</h5>
        </div>
        <div className="container">
          <hr />
        </div>
      </section>
      <section>
        <div className="container pt-4 pb-3">
          <div class="row align-items-start">
            <div class="col-md-6">
              <h3 className="page-subtitle mb-2 ">Soccer Predictions</h3>
              <p>
              We share probabilities for each potential match result (Home Wins, Tie or Away Wins) and Over/Under 2.5 Goals. We also make odds available for each prediction so that you can evaluate predictions by looking at odds offered by bookmakers as well.
              </p>
              <p>
              Since we openly share our past prediction results, you can analyze which leagues or teams are more predictable and develop your own betting strategy by getting help from past prediction results.
              </p>
              <div className="button-container">
                <Link className="past-predictions-button">Our Past Prediction Statistics</Link>
                <Link className="access-button">Access Predictions</Link>
              </div>
              
            </div>
            <div class="col-md-6">
              One of three columns
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
        </div>
      </section>
    </>
    
    
  )
}

export default Predictions