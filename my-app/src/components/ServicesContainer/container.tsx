import React from "react";
import ServicesBlock from "../ServicesBlock";
import ServicesSection from "../../content/ServicesSection.json";
import webExpContent from "../../content/webExpContent.json";

const ServicesContainer: React.FC = () => {
  return (
    <div>
      {ServicesSection.map((service, index) => {
        const expertiseContent = webExpContent.find(
          (expContent) => expContent.serviceTitle === service.title,
        );

        return (
          <ServicesBlock
            key={index}
            title={service.title}
            iconSrc={service.iconSrc}
            description={service.description}
            offerings={service.offerings}
            Exp={expertiseContent ? expertiseContent.content : []}
          />
        );
      })}
    </div>
  );
};

export default ServicesContainer;
