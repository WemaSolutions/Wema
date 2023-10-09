import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: #2e186a;
  padding: 2.5rem 0;
  color: #fff; // White text for contrast against the dark background
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #fff; // White for contrast

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  color: #fff; // Default link color as white for visibility

  &:hover,
  &:active,
  &:focus {
    color: #ff825c; // Secondary color on hover for better UX
  }
`;

export const Extra = styled("section")`
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
  background: linear-gradient(to right, #800080, #0000ff);
  animation: gradientAnimation 5s infinite;
  background-size: 200% 100%;

  @keyframes gradientAnimation {
    0% {
      background-position: 100% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #fff; // White for better contrast
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)<any>`
  font-size: 16px;
  
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  color: #FFF;  // Default link color as white for visibility

  &:hover {
    color: #FF825C;  // Secondary color on hover for better UX
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
`;

export const Chat = styled("p")`
  max-width: fit-content;
  border-bottom: 1px solid #18216d;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  color: #fff; // White for contrast

  &:hover {
    border-bottom: 1px solid #ff825c; // Secondary color on hover
    color: #ff825c; // Secondary color on hover
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    color: #FFF; // Making the default color of links white

    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      color: #FF825C;  // Secondary color on hover
    }
  }
  }

  @media screen and (max-width: 769px) {
    //   width: auto;

    //   a:not(:last-child) {
    //     display: none;
    //   }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #fff; // White for contrast

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #fff; // White for contrast
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  color: #fff; // White for the default color

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    color: #ff825c; // Secondary color on hover
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
