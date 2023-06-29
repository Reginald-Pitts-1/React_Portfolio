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
          <h3>Frontend Development</h3>

          <div className="experience_content">
            <article className="experience_details">
              <BiCheckCircle />
              <h4>HTML</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience_details">
              <BiCheckCircle />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience_details">
              <BiCheckCircle />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience_details">
              <BiCheckCircle />
              <h4>Bootstrap</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience_details">
              <BiCheckCircle />
              <h4>Tailwind</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience_details">
              <BiCheckCircle />
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>

          </div>
        </div>
        {/* END OF FRONT END*/}

        <div className="experience_backend">
          <h3>Backend Development</h3>
          
          <div className="experience_content">
            <article className="experience_details">
              <BiCheckCircle />
              <h4>Node.js</h4>
              <small className="text-light">Basic</small>
            </article>

            <article className="experience_details">
              <BiCheckCircle />
              <h4>MongoDB</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience_details">
              <BiCheckCircle />
              <h4>MySQL</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience_details">
              <BiCheckCircle />
              <h4>Express.js</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience_details">
              <BiCheckCircle />
              <h4>Progressive Web Applications</h4>
              <small className="text-light">Beginner</small>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;