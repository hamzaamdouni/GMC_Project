import React , {useState , useEffect}from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import{IconContext} from 'react-icons/lib'

import Logo from '../../../Assets/Logo.png'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavImg, NavItem, NavLinks, Navlogo, NavMenu } from './NavbarElements'

const Navbar = ({toggle}) => {
 const [scrollNav, setScrollNav] = useState(false)

 const changeNav = () =>{
     if(window.scrollY>= 120){
         setScrollNav(true)
     }else{
        setScrollNav(false)
     }
 } 

 useEffect(() => {
     window.addEventListener('scroll' , changeNav)
 }, [])
 
 const toggleHome = () =>{
    scroll.scrollToTop();
}

    return (
        <IconContext.Provider value={{color : '#EFA51F'}}>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer >
                <Navlogo to='/' onClick={toggleHome}>
                <NavImg src={Logo}/>
                </Navlogo>
                <MobileIcon onClick = {toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to = 'about'
                        smooth ={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-75}
                        >
                        A prpos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to = 'services'
                        smooth ={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-75}
                        >
                        Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to = 'contact'
                        smooth ={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-72}
                        >
                        Contact</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to = 'inscrit'
                        smooth ={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-70}
                        >
                        S'inscrire</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to = '/login'> S'identifier </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    )
}

export default Navbar
