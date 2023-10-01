import styled from "styled-components";

export const OfferingsSection = styled("section")`
  padding: 6rem 0 5rem;
  background-color: #f7f7f7;
  color: #000; // This sets the text color to black for this section

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 3rem;
  }
`;

export const OfferingsList = styled("ul")`
  list-style-type: disc;
  padding-left: 1.5rem;

  color: #000; // Setting the text color to black for list items
  @media only screen and (max-width: 575px) {
    padding-bottom: 1rem;
  }
`;

export const OfferingItem = styled("li")`
  font-size: 0.8 rem;
  margin-bottom: 1rem;

  color: #000; // Setting the text color to black for individual items

  @media only screen and (max-width: 575px) {
    font-size: 0.8rem;
  }
`;

export const MinTitle = styled("h6")`
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000; // Making sure the title color is also black
  font-family: "Motiva Sans Light", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 575px) {
    font-size: 2rem;
  }
`;
