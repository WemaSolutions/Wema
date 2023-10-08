import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  animation: ${fadeIn} 1s ease-out;
`;

const ValueItem = styled.div`
  margin: 1rem 0;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  width: 80%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }

  h4 {
    font-size: 24px;
    margin-bottom: 0.5rem;
    color: #2e186a;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    color: #555;
  }
`;

const ValuesComponent = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries to bring fresh, groundbreaking ideas to the table.",
    },
    {
      title: "Integrity",
      description:
        "We believe in doing business with honesty and uphold the highest standards of integrity in all our actions.",
    },
    {
      title: "Collaboration",
      description:
        "We foster a culture of collaboration, believing that great achievements are a result of collective efforts.",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, ensuring our clients receive the best.",
    },
  ];

  return (
    <ValuesContainer>
      {values.map((value, index) => (
        <ValueItem key={index}>
          <h4>{value.title}</h4>
          <p>{value.description}</p>
        </ValueItem>
      ))}
    </ValuesContainer>
  );
};

export default ValuesComponent;
