import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Home/Footer/Footer'
import Navbar from '../../Components/ServicesElements/Navbar/Navbar'
import SearchDropdown from '../../Components/ServicesElements/SearchDropdown/SearchDropdown'
import AgentCard from '../../Components/ServicesElements/Agent Card/AgentCard'
import './ServicesPage.css'
import { useDispatch } from 'react-redux'
import { getCategory } from '../../JS/actions/visiteur'

const ServicesPage = () => {

    const [service, setService] = useState('')

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getCategory(service))
    },[dispatch,service])

    return (
        <div className='ServicesPage'>
            <Navbar/>
            <div className='ServicesPageContent'>
                <SearchDropdown  setService={setService}/>
                <div className='AgentCards'>
                    <AgentCard/>
                    <AgentCard/>
                    <AgentCard/>
                    <AgentCard/>
                    <AgentCard/>
                    <AgentCard/>
                    <AgentCard/>
                    <AgentCard/>
                    <AgentCard/>
                    <AgentCard/>
                
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default ServicesPage
