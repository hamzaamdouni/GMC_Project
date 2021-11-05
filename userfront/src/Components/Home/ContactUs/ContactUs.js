import React, { useState } from 'react'
import './ContactUs.css'
import contact from '../../../Assets/Visiteur/Contact.svg'
import { useDispatch } from 'react-redux'
import { reclamation } from '../../../JS/actions/visiteur'

const ContactUs = () => {

    const [reclam, setReclamation] = useState({nom:'', email:'', message:'',})
    const dispatch = useDispatch()

    const handleReclamation = (e) =>{
        setReclamation({...reclam, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(reclamation( reclam ))
        setReclamation({nom:'', email:'', message:'',})
        alert('Votre reclamation bien reçu !!!')
    }

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
        <input type="text" required name ='nom' onInput = {handleReclamation} value = {reclam.nom}/>
        <label>Enter votre nom et prenom</label>
      </div>
      <div className="input-box">
        <input type="text" required name ='email' onInput = {handleReclamation} value = {reclam.email}/>
        <label>Enter votre email</label>
      </div>
      <div className="message-box">
      <textarea required name ='message' onInput = {handleReclamation} value = {reclam.message}/>
      <label>Enter votre message</label>
      </div>
      <div className="input-box">
        <input type="submit" defaultValue="Send Message" onClick = {handleSubmit}/>
      </div>
    </form>
  </div>
</div>
</div>
    )
}

export default ContactUs
