import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../../JS/actions/visiteur'
import { Link as LinkR} from 'react-router-dom'
import Video from '../../Assets/Visiteur/video.mp4'
import './Login.css'

const Login = () => {
    
    const [user, setUser] = useState({ email:'', password:'',})

    const history = useHistory()
    const dispatch = useDispatch()
      
    const handleUser = (e) =>{
        setUser({...user, [e.target.name] : e.target.value})
    }
      
    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(login(user , history))
        setUser({
          email:'',
          password:''
        })
    }
      
    return (
        <div>
            <div className='IdentifiyContainer'>
                <div className='IdentifiyBg'>
                    <video className='VideoBg' autoPlay loop muted src={Video} type ='video/mp4' />
                </div>
                <div className='IdentifiyContent'>
                    <div className="containerLogin">
                        <form action="#">
                            <div className="title">Login</div>
                            <div className="input-box underline">
                                <input type="email"
                                    placeholder="Enter votre email" 
                                    required 
                                    name ='email' 
                                    onInput = {handleUser}
                                    value = {user.email}/>
                                <div className="underline" />
                            </div>
                            <div className="input-box">
                                <input type="password"
                                    placeholder="Enter votre mot de passe" 
                                    required 
                                    name = 'password' 
                                    onInput = {handleUser}
                                    value = {user.password}
                                    />
                                <div className="underline" />
                            </div>
                            <div className="input-box button">
                                <input type="submit" name defaultValue="Continue"  onClick = {handleLogin}/>
                            </div>
                        </form>
                        <div className="option" ><LinkR to = '/register' className="toregister"> ou incrivez vous</LinkR></div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Login