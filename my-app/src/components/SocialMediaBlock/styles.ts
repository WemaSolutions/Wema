import styled from "styled-components";

export const SocialMediaWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Icon = styled("a")`
  display: inline-block;
  width: 24px; // Adjust based on your icon size
  height: 24px;
  transition: filter 0.3s ease;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: brightness(0.8); // This will slightly darken the image on hover
  }
`;

export const ContactDetailsWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px; // Increased gap for better spacing between items
  margin-bottom: 20px; // Added margin for spacing from the next section
`;

export const ContactTitle = styled("h2")`
  font-size: 1.5em;
  font-weight: bold;
  margin-right: 10px; // Added margin for spacing from the details
`;

export const ContactDetail = styled("p")`
  font-size: 1em;
  margin: 0; // Remove default margins
`;
