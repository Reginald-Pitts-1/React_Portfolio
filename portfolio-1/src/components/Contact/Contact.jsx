import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>reginaldpitts1@gmail.com</h5>
            <a href="mailto:reginaldpitts1@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerFill className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>reginaldpitts1@gmail.com</h5>
            <a href="https://m.me/truthsrebirth" target="_blank">Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}

        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact;