import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
// Service Container
export const ServicesContainer = styled.div`
  display: flex;
  padding: 40px 0;
  align-items: start; // Align items to the top

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ServiceButtons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;

  button {
    padding: 15px 30px;
    border-radius: 10px; // Adjusted the border-radius
    border: 1px solid #e0e0e0;
    background-color: #f5f5f5; // A light gray background
    transition: background-color 0.3s ease;
    font-weight: bold;
  }
  border: 1px solid #e0e0e0 button {
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    transition: 0.3s ease-out;

    &:after {
      content: "→";
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.3s ease-out;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    gap: 10px;
    justify-content: center;
  }
`;

// Service Descriptions
export const ServiceDescriptions = styled.div`
  flex: 2;
  margin-left: 40px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05); // Subtle shadow
  height: 300px; // Fixed height
  overflow: auto; // Scroll for overflow content

  @media only screen and (max-width: 1024px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;

export const StyledHeading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); // Text shadow for better visibility on gradient
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 16px;

  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); // Text shadow for better visibility on gradient
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ServiceButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid;
  background: none;
  color: #18216d;
  position: relative;
  transition:
    background-color 0.3s ease,
    padding-right 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #18216d; // Arrow color, same as text for now
    opacity: 0;
    transition:
      opacity 0.3s ease,
      width 0.3s ease;
  }

  &:hover,
  &.active {
    padding-right: 30px;

    &::before {
      opacity: 1;
      width: 6px;
    }
  }

  // Default hover background color
  &:hover {
    background-color: #e0e0e0; // A light gray as a default hover background
  }

  // Specific background colors for each service
  &:nth-child(1):hover,
  &.active:nth-child(1) {
    background-color: #ff5733;
  }

  &:nth-child(2):hover,
  &.active:nth-child(2) {
    background-color: #33ff57;
  }

  &:nth-child(3):hover,
  &.active:nth-child(3) {
    background-color: #3357ff;
  }

  &:nth-child(4):hover,
  &.active:nth-child(4) {
    background-color: #ff33d6;
  }
`;

export const ServiceDetails = styled.div`
  flex: 2;
  border: none;
  padding: 20px;
  margin-left: 20px;
  border-radius: 15px;
  background: linear-gradient(120deg, #a052a0, #33ff57);

  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.5s forwards;
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 90%;
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const ServiceImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  border-radius: 10%;
  transition: transform 0.3s; // Smooth scale on hover
  border: 1px solid;
  border: 3px solid #fff;

  &:hover {
    transform: scale(1.1); // Scale image on hover
  }

  @media only screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
