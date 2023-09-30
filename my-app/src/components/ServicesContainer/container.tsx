import React from 'react';
import ServicesBlock from '../ServicesBlock';
import ServicesSection from "../../content/ServicesSection.json"

const ServicesContainer: React.FC = () => {
    return (
        <div>
            {ServicesSection.map((service, index) => (
                <ServicesBlock
                    key={index}
                    title={service.title}
                    iconSrc={service.iconSrc}
                    description={service.description}
                    Offerings={service.offerings}
                />
            ))}
        </div>
    );
}

export default ServicesContainer;
