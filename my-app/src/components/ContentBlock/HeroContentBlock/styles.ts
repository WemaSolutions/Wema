import styled from "styled-components";

export const HeroSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
  background-image: url('/path-to-your-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff; // Assuming white text for contrast
  background-image: url('/path/to/your/image.jpg');
  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const HeroTitle = styled("h1")`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  @media only screen and (max-width: 575px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubTitle = styled("p")`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;

  @media only screen and (max-width: 575px) {
    font-size: 1.2rem;
  }
`;

