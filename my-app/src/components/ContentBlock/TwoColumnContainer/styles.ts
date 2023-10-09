import styled from "styled-components";
import { Col } from "antd";

export const Container = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 100%;
  padding-top: 2vw;
`;

export const StyledColumn = styled(Col)`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
  border-radius: 10px;
  background: #f6f3ec;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1);
  width: 500px;
  padding: 1vw;
  margin-left: 20px;
  margin-right: 20px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 15px;
    z-index: -1;
    background: linear-gradient(45deg, #e0dedb, #f6f3ec, #e0dedb, #f6f3ec);
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
    &::before {
      opacity: 1;
    }
  }

  img {
    width: 30%;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  h2 {
    font-weight: bold;
    font-size: 1.5vw;
  }

  p {
    font-size: 1vw;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin: 2.5rem;
    padding-bottom: 8vw;

    img {
      width: 50%;
      margin-bottom: 2vw;
    }

    h2 {
      font-size: 5vw;
      margin-bottom: 2vw;
    }

    p {
      font-size: 3vw;
      text-align: center;
    }
  }
`;
