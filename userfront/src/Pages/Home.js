import React, { useState } from 'react'
import FirstSection from '../Components/Home/FirstSection/FirstSection'
import Footer from '../Components/Home/Footer/Footer'
import { homeObjOne, homeObjThree, homeObjTwo } from '../Components/Home/InfoSection/Data'
import InfoSection from '../Components/Home/InfoSection/InfoSection'
import Navbar from '../Components/Home/Navbar/Navbar'
import ServiceSection from '../Components/Home/ServiceSection/ServiceSection'
import Sidebar from '../Components/Home/Sidebar/Sidebar'

const Home = ({setLogOrReg}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle} setLogOrReg={setLogOrReg}/>
            <FirstSection/>
            <InfoSection {...homeObjOne} />
            <ServiceSection/>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Footer/>
        </div>
    )
}

export default Home
