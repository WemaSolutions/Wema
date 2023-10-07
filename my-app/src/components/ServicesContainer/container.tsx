import React from "react";
import ServicesBlock from "../ServicesBlock";
import ContentBlock from "../../components/ContentBlock"; // Adjust to the correct import path
import ServicesSection from "../../content/ServicesSection.json";
import webExpContent from "../../content/webExpContent.json";

const ServicesContainer: React.FC = () => {
  const icons = ["chat-bot.png", "development.png", "diagram.png"]; // Make sure these paths are correct

  return (
    <div>
      {ServicesSection.map((service, index) => {
        const expertiseContent = webExpContent.find(
          (expContent) => expContent.serviceTitle === service.title,
        );

        return (
          <React.Fragment key={index}>
            {index !== ServicesSection.length && (
              <ContentBlock
                type="left"
                title={service.title}
                content={service.description}
                icon={icons[index]}
                id={`service-${index}`}
              />
            )}
            <ServicesBlock
              title={service.title}
              iconSrc={service.iconSrc}
              description={service.description}
              offerings={service.offerings}
              Exp={expertiseContent ? expertiseContent.content : []}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ServicesContainer;
