import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    margin: 2rem 0;
    background-color: #f4f4f9;  // A light background to make it stand out
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const IntroTitle = styled.h2`
    font-size: 32px;
    margin-bottom: 1rem;
    color: #2E186A;
`;

const IntroDescription = styled.p`
    font-size: 21px;
    text-align: center;
    max-width: 800px;  // To ensure the text doesn't stretch too wide on larger screens
`;

const ValuesIntroComponent = () => {
    return (
        <IntroContainer>
            <IntroTitle>Discover Our Core Values</IntroTitle>
            <IntroDescription>
                At WeMa Solutions, our values are the pillars that uphold our vision and mission. They guide our actions, decisions, and shape the culture that drives our excellence. Dive in to explore what we stand for.
            </IntroDescription>
        </IntroContainer>
    );
};

export default ValuesIntroComponent;
