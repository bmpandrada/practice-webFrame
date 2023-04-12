import React from 'react'
import logo from '../assets/img/CACAO-DE-LILIO-logo-gold.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container grid grid-footer">
            <div className="logo-col">
            <a href="#" className='footer-logo'>
                <img className="logo" src={logo} alt="logo" />
            </a>

            <ul className="social-links">
                <li><a className='footer-link' href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a className='footer-link' href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a className='footer-link' href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
            </ul>


            <p className="copyright">Copyright &copy; 2027 by cacao delilio</p>
            </div>
            <div className="address-col">
                <p className="footer-heading">Contact us</p>
                <address className='contacts'>
                    <p className='address'>
                    Address. Municipal Building, Gat Tayaw Street, Liliw, Laguna.
                    </p>
                    <p>
                        <a className='footer-link' href="#"> +124 456 123</a><br />
                        <a className='footer-link' href="mailto">cacaodelilio@gmail.com </a>
                    </p>
                </address>
            </div>
            <nav className='nav-col'>
                <p className="footer-heading">Account</p>
                <ul className="footer-nav">
                    <li><a className='footer-link' href="">Create Account</a></li>
                    <li><a className='footer-link' href="">Sign In</a></li>
                    <li><a className='footer-link' href="">iOS App</a></li>
                    <li><a className='footer-link' href="">Addroid App</a></li>
                </ul>
            </nav>
            <nav className='nav-col'>
                <p className="footer-heading">Company</p>
                <ul className="footer-nav">
                    <li><a className='footer-link' href="">About Cacao</a></li>
                    <li><a className='footer-link' href="">Cooking Partners</a></li>
                    <li><a className='footer-link' href="">For Business</a></li>
                    <li><a className='footer-link' href="">Careers</a></li>
                </ul>
            </nav>

            <nav className='nav-col'>
                <p className="footer-heading">Resuarces</p>
                <ul className="footer-nav">
                    <li><a className='footer-link' href="">Help Center</a></li>
                    <li><a className='footer-link' href="">Recipe Directory</a></li>
                    <li><a className='footer-link' href="">Privacy & Terms</a></li>
                </ul>
            </nav>
           
        </div>
    </footer>
  )
}

export default Footer