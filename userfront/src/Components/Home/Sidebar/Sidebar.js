import React from 'react'
import { CloseIcon, SidebarContainer, Icon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu } from './SidebarElements'

const Sidebar = ({isOpen , toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick ={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ='about' onClick = {toggle}> A prpos </SidebarLink>
                    <SidebarLink to ='services' onClick = {toggle}> Services</SidebarLink>
                    <SidebarLink to ='contact' onClick = {toggle}> Contact</SidebarLink>
                    <SidebarLink to ='inscrit' onClick = {toggle}> S'inscrire </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = '/login'> S'identifier </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
