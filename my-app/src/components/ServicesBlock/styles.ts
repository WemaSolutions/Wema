import styled from "styled-components";

export const ServicesBlockWrapper = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const ExpandableListWrapper = styled("div")`
  margin-bottom: 20px;
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const MinTitle = styled("p")`
  font-size: 3.5 em;
  font-weight: bold;
`;
export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
