import React from "react";
import styled from "styled-components";

const QuoteContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #e6e6ff;
  border-radius: 20px;
  max-width: 800px;
  margin: 3rem auto;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const QuoteText = styled.p`
  font-size: 24px;
  color: #2e186a;
  font-style: italic;
  text-align: center;
  z-index: 2;
`;

const DecorativeCircle = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #dcdcff;
  opacity: 0.3;
  z-index: 1;

  &:first-child {
    top: -20px;
    left: -20px;
  }

  &:last-child {
    bottom: -20px;
    right: -20px;
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
