import styled from "styled-components";

export const SocialMediaWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Icon = styled("a")`
  display: flex;
  width: 32px; // Adjust based on your icon size
  height: 32px;
  transition: filter 0.3s ease;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: brightness(0.8); // This will slightly darken the image on hover
  }
`;
