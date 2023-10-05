import React from "react";
import { ContentWrapper } from "../ServicesBlock/styles";
import { SocialMediaWrapper, Icon } from "./styles";
import content from "../../content/SocialContent.json"; // Adjust the path accordingly
import { Row, Col } from "antd";

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
      <img
        src={icon}
        alt={alt}
        width="24"
        height="24"
        title={`Follow Us On ${alt.replace(" Icon", "")} `}
      />
    </Icon>
  );
};

const SocialMediaAndContact: React.FC = () => {
  return (
    <ContentWrapper>
      <Row justify="center">
        <Col span={24}>
          <h4 style={{ textAlign: "center" }}>Follow Us</h4>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
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
        </Col>
      </Row>
    </ContentWrapper>
  );
};

export default SocialMediaAndContact;
