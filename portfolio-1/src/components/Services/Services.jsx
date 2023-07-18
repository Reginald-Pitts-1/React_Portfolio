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
              <p>Utilize Pseudo-classes & Pseudo-elements</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Wireframing</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Layout using Flexbox & Grid</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Targeting Different Devices with Media Queries</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Positioning</p>
            </li>
          </ul>

        </article>
        {/* END OF UI/UX */}

        <article className ="service">
          
          <div className="service_head">
            <h3>JS Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Clean Functional Code</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Data Structure</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>DOM Manipulation</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Testing/Debugging</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Framework</p>
            </li>

          </ul>

        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className ="service">
          
          <div className="service_head">
            <h3>React.js</h3>
          </div>

          <ul className="service_list">
            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>JSX Components</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Function Declarations & Arrow Functions</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Array Methods</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Importing & Exporting</p>
            </li>

            <li>
              <LiaCheckCircle className="service_list-icon" />
              <p>Object Creation</p>
            </li>
          </ul>

        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services;