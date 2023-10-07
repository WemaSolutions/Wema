import React from "react";
import styled from "styled-components";
import purposeContent from "../../content/PurposeContent.json"; // Replace with the actual path to your purposeContent.json file

const PurposeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background: #e6e6ff;
  border-radius: 15px;
  margin: 2rem 0;
`;

const PurposeTitle = styled.h2`
  font-size: 38px;
  color: #2e186a;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const PurposeDescription = styled.p`
  font-size: 20px;
  color: #555;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
`;

const StarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

// ... [Other styled components remain the same]

// ... [Other styled components remain the same]

const StarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #fff;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  width: 80%;
  max-width: 600px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }

  p {
    font-size: 18px;
    color: #555;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%; // Increase the width on mobile devices

    p {
      font-size: 16px; // Decrease the font size on mobile devices
    }
  }
`;

// ... [Rest of the component remains the same]

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
