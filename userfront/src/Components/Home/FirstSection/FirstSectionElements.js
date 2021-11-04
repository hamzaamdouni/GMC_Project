import styled from "styled-components";
import { MdArrowForward , MdKeyboardArrowRight } from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom'

export const FirstContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
position: relative;
z-index: 1;

:before{
   position : absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(180deg, rgba(0,0,0,0.2) 0% , rgba(0,0,0,0.6) 100%),
   linear-gradient(180deg, rgba(0,0,0,0.2) 0% , transparent 100%);
   z-index : 2;
}

`

export const FirstBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit : cover;
object-fit: cover;
background: #232a34;
`

export const FirstContent = styled.div`
z-index: 3;
max-width: 800px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const FirstH1 = styled.h1`
color :#fff;
font-size : 62px;
text-align : center;

@media screen and(max-width : 768px){
    font-size : 40px;  
}
 
@media screen and(max-width : 480px){
    font-size : 32px;  
}
`

export const FirstImg = styled.img`
height: 160px;
margin-top: 20px;

`

export const FirstBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`

export const FrirstBtnLink = styled(LinkR)`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
background: #EFA51F;
white-space : nowrap;
padding : 10px 48px;
color: #000;
font-size : 16px;
font-weight: bold;
outline: none;
border: 2px solid #EFA51F;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;


&:hover{
    transition: all 0.2s ease-in-out;
    background: transparent;
    color: #EFA51F;
}
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`