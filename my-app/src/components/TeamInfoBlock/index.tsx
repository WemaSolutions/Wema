import React from "react";
import styled from "styled-components";

const QuoteContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 20px;
  max-width: 800px;
  margin: 3rem auto;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
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

const QuoteText = styled.p`
  font-size: 24px;
  color: #fff;
  font-style: italic;
  text-align: center;
  z-index: 2;
`;

const DecorativeCircle = styled.div`
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
    animation: float 3s infinite alternate; /* Updated duration */
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

const FloatingQuote = () => {
  return (
    <QuoteContainer>
      <DecorativeCircle />
      <QuoteText>
        "Innovation is what drives our excellence, leading us to new horizons."
      </QuoteText>
      <DecorativeCircle />
    </QuoteContainer>
  );
};

export default FloatingQuote;
