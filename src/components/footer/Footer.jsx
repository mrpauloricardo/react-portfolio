import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>LOGO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="http://facebook.com" target="_blank"><FaFacebookF /></a>
        <a href="http://instagram.com" target="_blank"><FiInstagram /></a>
        <a href="http://twitter.com" target="_blank"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; LOGO. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer