import React from 'react'
import logo from '../assets/img/CACAO-DE-LILIO-logo.png'

const Navbar = () => {
  return (
    <React.Fragment>
      <a href="#">
      <img className="logo" src={logo} alt="logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
            <li><a className="main-nav-link" href="#">How it works</a></li>
            <li><a className="main-nav-link" href="#">Meals</a></li>
            <li><a className="main-nav-link" href="#">Testimonials</a></li>
            <li><a className="main-nav-link" href="#">Pricing</a></li>
            <li><a className="main-nav-link nav-cta" href="#">Try for free</a></li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Navbar