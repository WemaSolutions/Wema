import React, { useState } from "react";
import TpxContent from "../../../content/TpxContent.json";
import {
  ServicesContainer,
  ServiceButtons,
  ServiceButton,
  ServiceDetails,
  ServiceImage,
  StyledHeading,
  StyledParagraph,
} from "./styles";

interface Service {
  title: string;
  description: string;
  image: string;
}

const servicesData: Service[] = TpxContent.services;

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<Service>(servicesData[0]);

  return (
    <ServicesContainer>
      <ServiceButtons>
        {servicesData.map((service: Service, index: number) => (
          <ServiceButton
            key={index}
            className={service.title === activeService.title ? "active" : ""}
            onMouseOver={() => setActiveService(service)}
          >
            {service.title}
          </ServiceButton>
        ))}
      </ServiceButtons>
      <ServiceDetails className={activeService ? "active" : ""}>
        <ServiceImage src={activeService.image} alt={activeService.title} />
        <StyledHeading>{activeService.title}</StyledHeading>
        <StyledParagraph>{activeService.description}</StyledParagraph>
      </ServiceDetails>
    </ServicesContainer>
  );
};

export default ServicesSection;
