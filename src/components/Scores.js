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
      <section className="section date-picker">
        <div className="container-fluid justify-content-center">
          <ScoresDateSelector />
        </div>
      </section>
      <div className="container-fluid p-5"></div>
    </>
  )
}

export default Scores