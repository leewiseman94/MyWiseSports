import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import ScoresDateSelector from './ScoresDateSelector'

const Scores = () => {
  // Set navbar active
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link')
    const hero = document.querySelector('.hero-section')

    navLinks.forEach(link => {
      console.log(link.innerText)
      link.classList.remove('active')
      if (link.innerText === 'Home') {
        link.classList.add('active')
      }
    })

    hero.classList.add('hero-section-home')
  }, [])


  return (
    <>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-2">
          1 of 3
        </div>
        <div class="col">
          <div className="scores-page container-fluid justify-content-center p-0">
            <ScoresDateSelector />
          </div>
        </div>
        <div class="col-md-3">
          3 of 3
        </div>
      </div>
    </div>

      <section className="section date-picker">
        
      </section>
      <div className="container-fluid p-5"></div>
    </>
  )
}

export default Scores