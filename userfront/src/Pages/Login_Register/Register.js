import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../JS/actions/visiteur'

import './Register.css'
import Video from '../../Assets/Visiteur/video.mp4'


const Register = () => {
  
    const [user, setUser] = useState({
        nom :'',
        prenom:'',
        adress:'',
        phone:'',
        email:'',
        password:'',
        role:''
        }
    )
    const dispatch = useDispatch()
        
    const handleUser = (e) =>{
        setUser({...user, [e.target.name] : e.target.value})
    }
        
    const handleRegister = (e) =>{
        if(user.role ==='' ){
            alert('Choisir un role')
        }else{
            dispatch(register(user))
        setUser({
            nom :'',
            prenom:'',
            adress:'',
            phone:'',
            email:'',
            password:'',
            role:''
        })
        }
        
        e.preventDefault(); 
    }
        
    return (
        <div>
            <div className='IdentifiyContainer'>
                <div className='IdentifiyBg'>
                    <video className='VideoBg' autoPlay loop muted src={Video} type ='video/mp4' />
                </div>
                <div className='IdentifiyContent'>
                    <div className="wrapper">
                        <div className="title">
                            Registration Form
                        </div>
                        <div className="form">
                            <div className="inputfield">
                                <label>Nom : </label>
                                <input
                                    class="input"
                                    type="text" 
                                    placeholder="Enter votre nom" 
                                    required 
                                    name ='nom' 
                                    onInput = {handleUser}
                                    value = {user.nom}
                                />
                            </div>  
                            <div className="inputfield">
                                <label>Prénom : </label>
                                <input
                                    class="input"
                                    type="text" 
                                    placeholder="Enter votre prénom" 
                                    required 
                                    name ='prenom' 
                                    onInput = {handleUser}
                                    value = {user.prenom}
                                />
                            </div>  
                            <div className="inputfield">
                                <label>Adresse : </label>
                                <input
                                    class="input"
                                    type="text" 
                                    placeholder="Enter votre adresse" 
                                    required 
                                    name = 'adress' 
                                    onInput = {handleUser}
                                    value = {user.adress}
                                />
                            </div>  
                            <div className="inputfield">
                                <label>Numéro de téléphone : </label>
                                <input
                                    class="input"
                                    type="number" 
                                    placeholder="Enter your number" 
                                    required 
                                    name = 'phone' 
                                    onInput = {handleUser}
                                    value = {user.phone}
                                />
                            </div>
                            <div className="inputfield">
                                <label>Email : </label>
                                <input
                                    class="input"
                                    type="email" 
                                    placeholder="Enter votre email" 
                                    required name ='email' 
                                    onInput = {handleUser}
                                    value = {user.email}
                                />
                            </div>
                            <div className="inputfield">
                                <label>Mot de passe : </label>
                                <input
                                    class="input"
                                    type="password" 
                                    placeholder="Enter votre mot de passe" 
                                    required 
                                    name = 'password' 
                                    onInput = {handleUser}
                                    value = {user.password}
                                />
                            </div>
                            <div className="inputfield">
                                <label>Role</label>
                                <div className="custom_select">
                                    <select name = 'role'  onInput = {handleUser}>
                                    <option value="Client"></option>
                                        <option value="Client">Client</option>
                                        <option value="Agent">Agent</option>
                                    </select>
                                </div>
                            </div>  
                            <div className="inputfield">
                                <input type="submit" defaultValue="Register" className="btn" onClick = {handleRegister}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Register