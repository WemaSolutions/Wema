import React from "react";
import ServicesBlock from "../ServicesBlock";
import ContentBlock from "../../components/ContentBlock";

interface Service {
  title: string;
  description: string;
  iconSrc?: string; 
  offerings?: any[]; 
}

interface ExpertiseContent {
  serviceTitle: string;
  content: any[]; 
}

interface ServicesContainerProps {
  services: Service[];
  icons?: string[];
  webExpContents?: ExpertiseContent[];
}

const ServicesContainer: React.FC<ServicesContainerProps> = ({ services, icons = [], webExpContents = [] }) => {
  return (
    <div>
      {services.map((service, index) => {
        const expertiseContent = webExpContents.find(
          (expContent) => expContent.serviceTitle === service.title
        );

        return (
          <React.Fragment key={index}>
            {index !== services.length - 1 && (
              <ContentBlock
                type="left"
                title={service.title}
                content={service.description}
                icon={icons[index] || ''}
                id={`service-${index}`}
              />
            )}
            <ServicesBlock
              title={service.title}
              iconSrc={service.iconSrc || ''}
              description={service.description}
              offerings={service.offerings || []}
              Exp={expertiseContent ? expertiseContent.content : []}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ServicesContainer;