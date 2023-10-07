import React from "react";
import styled from "styled-components";

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: #2e186a;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  margin: 3rem 0;
`;

const FeatureTitle = styled.h2`
  font-size: 36px;
  color: #fff;
  text-align: center;
  z-index: 1;
`;

const FeatureDescription = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: center;
  max-width: 800px;
  margin-top: 1rem;
  z-index: 1;
`;

const FloatingElements = styled.div`
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
    width: 100px;
    height: 100px;
    top: 10%;
    left: 10%;
  }

  &::after {
    width: 150px;
    height: 150px;
    bottom: 10%;
    right: 10%;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
    }
  }
`;

const FloatingFeatureComponent = () => {
  return (
    <FeatureContainer>
      <FloatingElements />
      <FeatureTitle>Discover Our Latest Feature</FeatureTitle>
      <FeatureDescription>
        Dive into a world of innovation with our latest offering. Experience
        unmatched efficiency, power, and elegance.
      </FeatureDescription>
    </FeatureContainer>
  );
};

export default FloatingFeatureComponent;
