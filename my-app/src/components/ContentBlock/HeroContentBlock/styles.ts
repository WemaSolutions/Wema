import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  padding: 40px 0;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ServiceButtons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 15px;
`;
export const StyledHeading = styled.h2`
  font-size: 36px; /* Default font size for desktop */

  @media (max-width: 768px) {
    font-size: 28px; /* Font size for mobile view */
  }
`;

export const StyledParagraph = styled.p`
  font-size: 20px; /* Default font size for desktop */

  @media (max-width: 768px) {
    font-size: 16px; /* Font size for mobile view */
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
  border: 1px solid #e0e0e0;
  padding: 15px;
  margin-left: 20px;
  border-radius: 5px;
`;

export const ServiceImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 20px;
`;
