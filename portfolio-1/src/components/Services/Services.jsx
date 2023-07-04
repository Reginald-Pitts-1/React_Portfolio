import React from 'react'
import './Services.css'
import {LiaCheckCircle} from 'react-icons/lia'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className ="service">
          
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>
          </ul>

        </article>
        {/* END OF UI/UX */}

        <article className ="service">
          
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

          </ul>

        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className ="service">
          
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>List Details Here</p>
            </li>
          </ul>

        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services;