import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  margin: 2rem 0;
  background: linear-gradient(
    135deg,
    #e6e6ff,
    #c3cfe2
  ); // A gradient background to match the ValuesComponent
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
  }
`;

const IntroTitle = styled.h2`
  font-size: 36px; // Slightly larger to make it more prominent
  margin-bottom: 1.5rem;
  color: #2e186a;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const IntroDescription = styled.p`
  font-size: 20px;
  text-align: center;
  max-width: 800px; // To ensure the text doesn't stretch too wide on larger screens
  color: #555;
`;

const ValuesIntroComponent = () => {
  return (
    <IntroContainer>
      <IntroTitle>Discover Our Core Values</IntroTitle>
      <IntroDescription>
        At WeMa Solutions, our values are the pillars that uphold our vision and
        mission. They guide our actions, decisions, and shape the culture that
        drives our excellence. Dive in to explore what we stand for.
      </IntroDescription>
    </IntroContainer>
  );
};

export default ValuesIntroComponent;
