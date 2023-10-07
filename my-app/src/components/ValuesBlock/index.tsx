import React from 'react';
import styled from 'styled-components';

const ValuesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border: 2px solid #2E186A;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin: 2rem 0;
`;

const ValueItem = styled.div`
    margin: 1rem 0;
    text-align: center;

    h4 {
        font-size: 24px;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 18px;
    }
`;

const ValuesComponent = () => {
    const values = [
        { title: "Innovation", description: "We constantly push boundaries to bring fresh, groundbreaking ideas to the table." },
        { title: "Integrity", description: "We believe in doing business with honesty and uphold the highest standards of integrity in all our actions." },
        { title: "Collaboration", description: "We foster a culture of collaboration, believing that great achievements are a result of collective efforts." },
        { title: "Excellence", description: "We strive for excellence in everything we do, ensuring our clients receive the best." }
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
