import React from "react";
import styled from "styled-components";

const HighlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 2rem 0;
  background-color: #e6e6ff; // A subtle background to differentiate from other sections
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const HighlightTitle = styled.h2`
  font-size: 34px;
  margin-bottom: 1.5rem;
  color: #2e186a;
`;

const HighlightDescription = styled.p`
  font-size: 21px;
  text-align: center;
  max-width: 850px; // To ensure the text doesn't stretch too wide on larger screens
`;

const TeamHighlightComponent = () => {
  return (
    <HighlightContainer>
      <HighlightTitle>Meet the Minds Behind Wema Solutions</HighlightTitle>
      <HighlightDescription>
        Our team is a blend of seasoned experts and passionate innovators. With
        diverse backgrounds and a shared vision, we come together to create
        digital magic. From developers to designers, each member brings a unique
        skill set, ensuring that WeMa Solutions remains at the forefront of
        technological advancements.
      </HighlightDescription>
    </HighlightContainer>
  );
};

export default TeamHighlightComponent;
