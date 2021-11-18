import React from "react";
import { useSelector } from "react-redux";

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServiceSectionElements";

const ServiceSection = () => {
  const isload = useSelector((state) => state.visiteurReducer.isload);
  const services = useSelector((state) => state.visiteurReducer.services);

  return (
    <div>
      <ServicesContainer id="services">
        <ServicesH1>Services</ServicesH1>
        <ServicesWrapper>
          {isload
            ? null
            : services.map((el) => (
                <ServicesCard>
                  <ServicesIcon src={`uploads/${el.imageName}`} />
                  <ServicesH2>{el.nom}</ServicesH2>
                  <ServicesP>{el.description}</ServicesP>
                </ServicesCard>
              ))}
        </ServicesWrapper>
      </ServicesContainer>
    </div>
  );
};

export default ServiceSection;
