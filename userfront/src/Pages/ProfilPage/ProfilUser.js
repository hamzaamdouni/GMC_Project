import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ProfilUser.css'

import ProfilImage from '../../Assets/User/profil.jpg'

import { FaUserCheck , FaMapMarkedAlt , FaUserGraduate } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { AiFillCaretDown , AiFillCaretUp} from 'react-icons/ai'



import { currentAgent, onecategory, oneservice } from '../../JS/actions/visiteur'

const ProfilUser = () => {

    const [isOpen, setIsOpen] = useState(true)

    const handleOpen = () =>{
        setIsOpen(!isOpen) 
    }

    const user = useSelector(state => state.visiteurReducer.user)
    const agent = useSelector(state => state.visiteurReducer.agent)
    const service = useSelector(state => state.visiteurReducer.service)
    const category = useSelector(state => state.visiteurReducer.category)
    
    const id = user._id;
    const idService = agent.id_service
    const idcategory = agent.id_category

    console.log('Profiluser',id)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(currentAgent(id));
    }, [dispatch,id])
    
    useEffect(() => {
        dispatch(oneservice(idService));
    }, [dispatch,idService])

    useEffect(() => {
        dispatch(onecategory(idcategory));
    }, [dispatch,idcategory])

    

    return (
        <div className='ProfilUserContainer'>

            <div className='InfoContainer'>
                <div className='ImageCentent'>
                    <img src={ProfilImage} alt='' className='ProfilImg' />
                </div>
                
                {
                    user.role === 'Agent' ?
                        <div className='ServiceCentent'>
                            <div className='InformationService'>
                                <span>{service.nom}  -  {category.nom}</span>
                            </div>
                        </div> 
                    : null
                }

                {
                    user.role === 'Agent' ?
                        <div className='ServiceDescription'>
                            <div className='InformationDescription'>
                                <span>{agent.description}</span>
                            </div>
                        </div> 
                    : null
                }

                <div className ='InfoCentent'>
                    
                    <div className='Information'>
                        <FaUserCheck className='UserIcon'/>
                        <span>{user.nom} {user.prenom}</span>
                    </div>
                    <div className='Information'>
                        <FaMapMarkedAlt className='UserIcon'/>
                        <span>{user.adress}</span>
                    </div>
                    <div className='Information'>
                        <IoIosMail className='UserIcon'/>
                        <span>{user.email}</span>
                    </div>
                    <div className='Information'>
                        <BsFillTelephoneFill className='UserIcon'/>
                        <span>{user.phone}</span>
                    </div>

                </div>
                { user.role === 'Agent' ? 
                    <div className ='InfoCentent'> 
                        <div className='Information'>
                            <FaUserGraduate className='UserIcon'/>
                            <span>{agent.calification}</span>
                        </div>
                        <div className='Information'>
                            <MdWork className='UserIcon'/>
                            <span>{agent.experience} ans</span>
                        </div>
                        
                        <div className='Information'>
                        <span>Note : {agent.note}/5</span>
                        </div>

                </div>: null}


                <div className='ButtonCentent'>
                    <button className="ModifBtn">Modifier</button>
                    <button className="DeleteBtn">Effacer</button>
                </div>
            </div>


            <div className='DiverContainer'>


                <div className='DemandeContainer'>
                    <div className='DemandeHeader'>
                        <span> Liste des Demande </span>
                        {isOpen ? <AiFillCaretDown onClick={handleOpen}/> : <AiFillCaretUp onClick={handleOpen}/>}
                    </div>
                    {isOpen ? <div>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                        <p>zefzrgererherh</p>
                    </div> : null}

                </div>



                <div className='CommentContainer'>gjsgjfgjfg</div>
            </div>
        </div>
    )
}

export default ProfilUser
