import React from "react";
import styled from "styled-components";
import purposeContent from "../../content/PurposeContent.json";

const PurposeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background: linear-gradient(135deg, #e0e0ff, #d1d1eb);
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.08);
`;

const PurposeTitle = styled.h2`
  font-size: 38px;
  color: #2e186a;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const PurposeDescription = styled.p`
  font-size: 21px;
  color: #555;
  text-align: center;
  margin-bottom: 2.5rem;
  max-width: 800px;
  line-height: 1.5;
`;

const StarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const StarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f7f7ff;
  padding: 1.5rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  width: 80%;
  max-width: 600px;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 45px;
    height: 45px;
    vertical-align: middle;
  }

  p {
    font-size: 18px;
    color: #555;
    margin: 0;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;

    p {
      font-size: 16px;
    }
  }
`;

const PurposeDrivenComponent = () => {
  const { title, description, starItems } = purposeContent;

  return (
    <PurposeContainer>
      <PurposeTitle>{title}</PurposeTitle>
      <PurposeDescription>{description}</PurposeDescription>
      <StarContainer>
        {starItems.map((item, index) => (
          <StarItem key={index}>
            <img src={item.icon} alt="Lilac Star" />
            <p>{item.text}</p>
          </StarItem>
        ))}
      </StarContainer>
    </PurposeContainer>
  );
};

export default PurposeDrivenComponent;
