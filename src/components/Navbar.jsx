import React, { useState } from 'react'
import logo from '../assets/img/CACAO-DE-LILIO-logo.png'

const Navbar = () => {
  const [isOpen, setOpen] = useState(true)
  // const allLinks = document.querySelectorAll('a:link');



  function handleChange(e) {
    setOpen(!isOpen);
    e.preventDefault();
    const targetId = e.target.getAttribute("href").slice(1); // get the id of the target element
    const targetElement = document.getElementById(targetId); // find the target element
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // scroll to the target element smoothly
    }
  }
  


  return (
    <header className={`${isOpen ? "header":"header nav-open"}`}> 
      <a href="#">
      <img className="logo" src={logo} alt="logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
            <li><a  onClick={handleChange} className="main-nav-link" href="#how">How it works</a></li>
            <li><a  onClick={handleChange} className="main-nav-link" href="#meals">Meals</a></li>
            <li><a  onClick={handleChange} className="main-nav-link" href="#testimonials">Testimonials</a></li>
            <li><a  onClick={handleChange} className="main-nav-link" href="#pricing">Pricing</a></li>
            <li><a  onClick={handleChange} className="main-nav-link nav-cta" href="#cta">Try for free</a></li>
        </ul>
      </nav>
      <button onClick={handleChange} className="btn-mobile-nav mobile-icon">
    {isOpen ? <ion-icon name="menu-outline"></ion-icon>: <ion-icon name="close-outline"></ion-icon>}  
     
      </button>
      
    </header>
  )
}

export default Navbar