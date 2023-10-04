import React from "react";
import { ServicesBlockWrapper } from "../ServicesBlock/styles";
import {
  SocialMediaWrapper,
  Icon,
  ContactDetailsWrapper,
  ContactDetail,
  ContactTitle,
} from "./styles";
import content from "../../content/SocialContent.json"; // Adjust the path accordingly

interface SocialMediaIconProps {
  href: string;
  icon: string;
  alt: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  href,
  icon,
  alt,
}) => {
  return (
    <Icon href={href} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={alt} width="24" height="24" />
    </Icon>
  );
};

const SocialMediaAndContact: React.FC = () => {
  return (
    <ServicesBlockWrapper>
      <SocialMediaWrapper>
        {content.socialMediaLinks.map((link) => (
          <SocialMediaIcon
            key={link.href}
            href={link.href}
            icon={link.icon}
            alt={link.alt}
          />
        ))}
      </SocialMediaWrapper>

      <ContactDetailsWrapper>
        <ContactTitle>Contact Details</ContactTitle>
        {content.contactDetails.map((detail) => (
          <ContactDetail key={detail.type}>
            {detail.type}: {detail.detail}
          </ContactDetail>
        ))}
      </ContactDetailsWrapper>
    </ServicesBlockWrapper>
  );
};

export default SocialMediaAndContact;
