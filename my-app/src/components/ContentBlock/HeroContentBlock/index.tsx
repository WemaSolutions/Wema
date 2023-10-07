import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 5rem 2rem; // Increased top padding to 8rem
  background: linear-gradient(45deg, #2e186a, #2e186a);
  height: calc(40vh + 3rem); // Adjusted height to account for the added padding
  position: relative;
  overflow: hidden;
  border-radius: 70%;
  @media (max-width: 768px) {
    padding: 5rem 2rem 5rem 2rem; // Increased top padding to 8rem
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  color: #fff;
  text-align: center;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroDescription = styled.p`
  font-size: 24px;
  color: #fff;
  text-align: center;
  max-width: 900px;
  margin-top: 1rem;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 0.2rem;
  }
`;

const DynamicShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 6s infinite alternate;
  }

  &::before {
    width: 200px;
    height: 200px;
    top: 5%;
    left: 5%;
  }

  &::after {
    width: 300px;
    height: 300px;
    bottom: 10%;
    right: 5%;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }
`;

const HeroBannerComponent = () => {
  return (
    <HeroContainer>
      <DynamicShapes />
      <HeroTitle>Our Premium Services</HeroTitle>
      <HeroDescription>
        Pioneering the future of digital solutions. Let's create, innovate, and
        elevate together.
      </HeroDescription>
    </HeroContainer>
  );
};

export default HeroBannerComponent;
