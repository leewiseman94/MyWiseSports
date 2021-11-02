import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const [navbar, setNavbar] = useState(document.querySelector('.navbar-section'))
  const [stickyPosition, setStickyPosition] = useState(null)
  
  useEffect(() => {
    if (navbar) {
      setStickyPosition(navbar.offsetTop)
  
      window.onscroll = () => {
        setSticky()
      }
    }
    
  
  }, [navbar])
  
  const setSticky = () => {
    if (window.pageYOffset >= stickyPosition) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  

 
  
  return (
    <header>
      <section className="hero-section position-relative">
        <div className="hero container-fluid d-flex flex-column justify-content-end align-items-start">
          <h1 className="title text-white">MyWiseSports</h1>
          <h5 className="sub-title text-white">Football live scores & pre-match betting predictions</h5>
        </div>
      </section>
      <section className="navbar-section">
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="navbar-container container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/football">Football</Link>
                <Link className="nav-link" to="/football/predictions">Predictions</Link>
                <Link className="nav-link" to="/">Guidelines</Link>
                <Link className="nav-link" to="/">Register</Link>
                <Link className="nav-link" to="/">Login</Link>
                <Link className="nav-link" to="/">Contact Us</Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
      
    </header>
  )
}

export default NavBar