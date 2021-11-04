import React from 'react'

import Icon1 from '../../../Assets/Visiteur/icon1.svg'
import Icon2 from '../../../Assets/Visiteur/icon2.svg'
import Icon3 from '../../../Assets/Visiteur/icon3.svg'

import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServiceSectionElements'


const ServiceSection = () => {
    return (
        <div>
            <ServicesContainer id='services'>
                <ServicesH1>Services</ServicesH1>
                <ServicesWrapper>

                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>TitleH2</ServicesH2>
                        <ServicesP>This is a paragraph is a paragraphis a paragraphis a paragraphis a paragraphis a paragraphis a paragraph</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>TitleH2</ServicesH2>
                        <ServicesP>This is a paragraph is a paragraphis a paragraphis a paragraphis a paragraphis a paragraphis a paragraph</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>TitleH2</ServicesH2>
                        <ServicesP>This is a paragraph is a paragraphis a paragraphis a paragraphis a paragraphis a paragraphis a paragraph</ServicesP>
                    </ServicesCard>
                    
                </ServicesWrapper>
            </ServicesContainer>
        </div>
    )
}

export default ServiceSection
