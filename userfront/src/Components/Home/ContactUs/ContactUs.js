import React from 'react'
import './ContactUs.css'
import contact from '../../../Assets/Visiteur/Contact.svg'

const ContactUs = () => {
    return (
        <div className='ContactUS' id='contact'>
        <div className="ContactUsContainer">
  <div className="content">
    <div className="image-box">
      <img src={contact} alt=""/>
    </div>
    <form action="#">
      <div className="topic">Envoyer une reclamation</div>
      <div className="input-box">
        <input type="text" required />
        <label>Enter your name</label>
      </div>
      <div className="input-box">
        <input type="text" required />
        <label>Enter your email</label>
      </div>
      <div className="message-box">
      <textarea required></textarea>
      <label>Enter your email</label>
      </div>
      <div className="input-box">
        <input type="submit" defaultValue="Send Message" />
      </div>
    </form>
  </div>
</div>
</div>
    )
}

export default ContactUs
