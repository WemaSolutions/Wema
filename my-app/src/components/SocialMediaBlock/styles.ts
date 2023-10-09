import styled from "styled-components";

export const SocialMediaWrapper = styled("div")`
  display: flex;
  justify-content: flex-start; // adjusted from 'left'
  align-items: center; // adjusted from 'left'
  gap: 50px;
  margin-bottom: 10px;
  padding: 10px 0; // Added padding for better spacing
`;

export const Icon = styled("a")`
  display: flex;
  justify-content: center; // Center the img
  align-items: center; // Center the img
  width: 32px;
  height: 32px;
  background: linear-gradient(145deg, #ececec, #f5f5f5); // Glass effect
  box-shadow:
    6px 6px 12px #d9d9d9,
    -6px -6px 12px #ffffff; // subtle 3D effect
  transition:
    filter 0.3s ease,
    transform 0.3s ease; // Added transform to the transition

  img {
    width: 70%; // Reduced to 70% to show the glass effect border more clearly
    height: 70%; // Reduced to 70%
  }

  &:hover {
    filter: brightness(0.9) contrast(1.1); // More prominent hover effect
    transform: scale(1.05); // Slight scale up on hover
    box-shadow:
      3px 3px 6px #d9d9d9,
      -3px -3px 6px #ffffff; // Reduced shadow for 3D press effect
  }
`;
