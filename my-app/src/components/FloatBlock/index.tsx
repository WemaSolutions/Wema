import React from "react";
import styled from "styled-components";

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  background: #2e186a;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  margin: 3rem 0;
  background: linear-gradient(to right, #800080, #0000ff);
  animation: gradientAnimation 5s infinite;
  background-size: 200% 100%;

  @keyframes gradientAnimation {
    0% {
      background-position: 100% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
`;

const FeatureTitle = styled.h2`
  font-size: 36px;
  color: #fff;
  text-align: center;
  z-index: 1;
  @media only screen and (max-width: 1024px) {
    font-size: 28px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: center;
  max-width: 800px;
  margin-top: 1rem;
  z-index: 1;
  @media only screen and (max-width: 1024px) {
    font-size: 14px;
  }
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
      <FeatureTitle>Discover Our Premium Services</FeatureTitle>
      <FeatureDescription>
        Dive into a world of innovation with our latest offering. Experience
        unmatched efficiency, power, and elegance.
      </FeatureDescription>
    </FeatureContainer>
  );
};

export default FloatingFeatureComponent;
