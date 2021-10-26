import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <h1>
            <Link to="/" className="title is-1 is has-text-white">Winebored</Link>
          </h1>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/wines" className="is-6 is has-text-white">Wine List</Link>
          </div>
        </div>
        <div className="navbar-end">
          <Link to="/register" className="navbar-item">Register</Link>
          <Link to="/login" className="navbar-item">Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar