import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Portfolio1.png'
import IMG2 from '../../assets/Portfolio2.jpg'
import IMG3 from '../../assets/Portfolio3.jpg'
import IMG4 from '../../assets/Portfolio4.jpg'
import IMG5 from '../../assets/Portfolio5.jpg'
import IMG6 from '../../assets/Portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: {/*Insert Name of Project*/},
    github: {/*Insert Github project link*/},
    demo: {/*Insert live demo link*/}
  },
  {
    id: 2,
    image: IMG2,
    title: {/*Insert Name of Project*/},
    github: {/*Insert Github project link*/},
    demo: {/*Insert live demo link*/}
  },
  {
    id: 3,
    image: IMG3,
    title: {/*Insert Name of Project*/},
    github: {/*Insert Github project link*/},
    demo: {/*Insert live demo link*/}
  },
  {
    id: 4,
    image: IMG4,
    title: {/*Insert Name of Project*/},
    github: {/*Insert Github project link*/},
    demo: {/*Insert live demo link*/}
  },
  {
    id: 5,
    image: IMG5,
    title: {/*Insert Name of Project*/},
    github: {/*Insert Github project link*/},
    demo: {/*Insert live demo link*/}
  },
  {
    id: 6,
    image: IMG6,
    title: {/*Insert Name of Project*/},
    github: {/*Insert Github project link*/},
    demo: {/*Insert live demo link*/}
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

        {/* 
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">Github</a>
                <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          }) 
        */}

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>React (Notes-App)</h3>
          {/*Add href="link to github project below"*/}
          <div className="portfolio_item-cta">
            <a href="https://github.com/Reginald-Pitts-1/React-Notes-App" className="btn">Github</a>
            <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/*Add href="link to github project below"*/}
          <div className="portfolio_item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/*Add href="link to github project below"*/}
          <div className="portfolio_item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/*Add href="link to github project below"*/}
          <div className="portfolio_item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/*Add href="link to github project below"*/}
          <div className="portfolio_item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/*Add href="link to github project below"*/}
          <div className="portfolio_item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio;