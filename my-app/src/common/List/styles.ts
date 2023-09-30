import styled from "styled-components";

export const OfferingsSection = styled("section")`
  padding: 6rem 0 5rem; // Adjusted from the Hero for variety, you can modify as needed
  background-color: #f7f7f7; // Giving it a light gray background for a neutral look, modify as needed
  color: #333; // Assuming dark text since it's a neutral background

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 3rem;
  }
`;


export const OfferingsList = styled("ul")`
  list-style-type: disc; // Using disc for traditional bullet points
  padding-left: 1.5rem; // Indentation for the bullet points
`;

export const OfferingItem = styled("li")`
  font-size: 0.8rem; // Sized down from the HeroSubTitle for readability in list format
  margin-bottom: 1rem; // Spacing between items

  @media only screen and (max-width: 575px) {
    font-size: 1rem;
  }
`;


export const MinTitle = styled("h6")`
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem; // Adjusted spacing

  @media only screen and (max-width: 575px) {
    font-size: 2rem;
  }
`;