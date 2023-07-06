import React from 'react'
import './Footer.css'
import {GrFacebook} from 'react-icons/gr'
import {GrLinkedin} from 'react-icons/gr'
import {TfiInstagram} from 'react-icons/tfi'


const Footer = () => {
  return (
    <footer>

      <a href="#" className="footer_logo">Reginald Pitts</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/reginald-pitts-248073229/" target="_blank">< GrLinkedin /></a>
        <a href="https://www.instagram.com/reggiep_93/" target="_blank"><TfiInstagram /></a>
        <a href="https://www.facebook.com/truthsrebirth" target="_blank"><GrFacebook /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; React Portfolio. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer;