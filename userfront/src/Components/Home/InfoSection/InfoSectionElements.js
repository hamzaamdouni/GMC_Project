import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const InfoContainer = styled.div`
color : #fff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
padding-top: 100px;
height: 90vh;

@media screen and (max-width : 768px){
    padding: 100% 0;
    margin-top: 5px;
    height: 50vh;
}
` 

export const InfoWrapper = styled.div`
display: grid;
z-index : 1;
min-height: 70vh;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
@media screen and (max-width : 768px){
    min-height: 50vh;
}
`
export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto , 1fr);
align-items : center;

grid-template-areas: ${({imgStart}) => ( imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width : 768px){
    grid-template-areas: ${({imgStart}) => ( imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`)};
}
`
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`


export const Heading = styled.h1`
margin-bottom : 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 300;
color: #EFA51F;

@media screen and (max-width : 480px){
    font-size: 32px;
}
`

export const Subtitle = styled.p`
font-family: 'Ubuntu', sans-serif;
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color : ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`
export const InfoBtn = styled(LinkR)`
border-radius: 50px;
background: #EFA51F;
white-space : nowrap;
padding : 8px 28px;
color: #000;
font-size : 14px;
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

export const ImgWrap = styled.div`
max-width: 400px;
height: 100%;
`
export const Img = styled.img`
width: 100%; 
margin: 0 0 10px 0;
padding-right: 0;
`