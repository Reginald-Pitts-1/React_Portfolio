import React from 'react'
import './Experience.css'
import {BiCheckCircle} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">

        <div className="experience_frontend">
          <h3>Front-End Development</h3>

          <div className="experience_content">
            <article className="experience_details">
              <BiCheckCircle className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BiCheckCircle className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BiCheckCircle className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <BiCheckCircle className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF FRONT END*/}

        
      </div>
    </section>
  )
}

export default Experience;