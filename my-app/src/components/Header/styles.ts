import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { keyframes } from "styled-components";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem 0;
  background: linear-gradient(to right, #800080, #0000ff);

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
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

  @media only screen and (max-width: 411px) {
    padding-top: 1rem 0.5rem 0;
  }
`;

// Define the 360-degree flip animation
const flip360 = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  padding: 5px;
  transition: box-shadow 0.3s ease-in-out;

  // Apply the animation
  animation: ${flip360} 1s forwards; // 1s duration for the flip

  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 52px;
    height: 32px;
  }

  @media only screen and (max-width: 768px) {
    svg {
      width: 42px;
      height: 22px;
    }
    padding-bottom: 15px;
  }
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;
  @media only screen and (max-width: 411px) {
    width: 150px;
  }
  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }
  display: none;
  svg {
    fill: #ffffff;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #ffffff;
  transition:
    color 0.2s ease-in,
    transform 0.3s ease-out;
  margin: 0.5rem 2rem;
  position: relative;
  &:hover {
    transform: translateY(-2px);
  }
  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #ff8c00;
    transition:
      width 0.3s ease,
      left 0.3s ease;
  }
  &:hover::before {
    width: 100%;
    left: 0;
  }
  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
    color: #000000;
  }
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: #ffc542;
  }
`;

export const Button = styled.button`
  background-color: #ffc542;
  color: #222;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease-out;
  box-shadow: 0px 4px 14px rgba(255, 197, 66, 0.5);
  &:hover {
    background-color: #ffa120;
    transform: scale(1.05);
  }
`;

export const FocusOutline = styled.div`
  &:focus-within {
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const AccessibleButton = styled.div`
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;
