import React from 'react'
import './About.css'
import ME from '../../assets/Image4.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>15+ Months</small>
              <h6>Full Stack Coding Bootcamp Certificate</h6>
              <h6>-- University of Texas at Austin --</h6>
            </article>

            <article className="about_card">
              <VscFolderActive className="about_icon"/>
              <a href="#portfolio"><h5>Projects</h5></a>
              <small>{/*Insert number of completed projects here */}</small>
            </article>
          </div>

          <p>
            Hello! I'm Reggie, a software developer based in Austin, TX who has entry level knowledge of creating front end applications from scratch to production. Highly driven beginner software developer with growing knowledge in browser based technologies, including HTML, CSS, Javascript, as well as React.js framework. As a certified full stack development program graduate, I'm ready to to contribute my passion and skills to help drive innovation as a web developer.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;