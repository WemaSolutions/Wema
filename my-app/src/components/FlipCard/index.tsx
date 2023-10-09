import React from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const UniverseContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  perspective: 1000px;
`;

const Planet = styled.div<{ color: string }>`
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.9em;

  // Adjusting the positioning logic
  top: ${(props) =>
    `${Math.random() * 70 + 35}%`}; // 35% to 65% of container height
  left: ${(props) =>
    `${Math.random() * 70 + 45}%`}; // 35% to 65% of container width

  transform: translateY(${(props) => `${Math.random() * -50 + 25}px`});
  animation-delay: ${(props) => `${Math.random() * 5}s`};
`;
const PlanetDescription = styled.div`
  display: none;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  padding: 5px;
  color: white;
  font-size: 12px;

  ${Planet}:hover & {
    display: block;
  }
`;

type service = {
  name: string;
  description: string;
  color: string;
};

type FloatingPlanetsProps = {
  data: service[];
};

const FloatingPlanets: React.FC<FloatingPlanetsProps> = ({ data }) => {
  return (
    <UniverseContainer>
      {data.map((service: service, index: number) => (
        <Planet
          key={index}
          color={service.color}
          style={{
            animation: `floatEffect ${5 + index}s infinite alternate`,
            transform: `translate(-50%, -50%) rotate(${
              index * 90
            }deg) translateY(-100px)`,
          }}
        >
          {service.name}
          <PlanetDescription>{service.description}</PlanetDescription>
        </Planet>
      ))}
    </UniverseContainer>
  );
};

export default FloatingPlanets;
