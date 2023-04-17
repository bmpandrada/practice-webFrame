import React, { useState } from 'react'
import logo from '../assets/img/CACAO-DE-LILIO-logo.png'

const Navbar = () => {
  const [isOpen, setOpen] = useState(true)
  const handleChange = () => {
    setOpen(!isOpen)
  }
  return (
    <header className={`${isOpen ? "header":"header nav-open"}`}> 
      <a href="#">
      <img className="logo" src={logo} alt="logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
            <li><a  onClick={handleChange} className="main-nav-link" href="#">How it works</a></li>
            <li><a  onClick={handleChange} className="main-nav-link" href="#">Meals</a></li>
            <li><a  onClick={handleChange} className="main-nav-link" href="#">Testimonials</a></li>
            <li><a  onClick={handleChange} className="main-nav-link" href="#">Pricing</a></li>
            <li><a  onClick={handleChange} className="main-nav-link nav-cta" href="#">Try for free</a></li>
        </ul>
      </nav>
      <button onClick={handleChange} className="btn-mobile-nav mobile-icon">
    {isOpen ? <ion-icon name="menu-outline"></ion-icon>: <ion-icon name="close-outline"></ion-icon>}  
     
      </button>
      
    </header>
  )
}

export default Navbar