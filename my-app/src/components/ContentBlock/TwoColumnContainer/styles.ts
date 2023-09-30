import styled from 'styled-components';
import { Col } from 'antd';
import { icons } from 'antd/lib/image/PreviewGroup';

export const Container = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 100%;  // Ensuring it takes up the full width
  box-sizing: border-box;

`;




export const StyledColumn = styled(Col)`
  flex: 1;  // Take up available space
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
  border: 1px solid #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 500 px;
  padding: 1vw;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 2vw;
  * {
  box-sizing: border-box;
  }

  
  img {
    width: 40%;   // double the width
    margin: 2vw;
  }

  h2 {
    font-weight: bold;
    font-size: 1.5vw;
    
  }

  p {
    font-size: 1.0vw;
    text-align: center;  // Add this line to center the text
  }

  // Media query for mobile devices
  @media (max-width: 768px) {
    margin: 2.5rem;  
    padding-bottom: 8vw;
    img {
      width: 50%;   // double the width
      margin-bottom: 2vw;
    }

    h2 {
      font-size: 5vw;  // double the font size
      margin-bottom: 2vw;
    }

    p {
      font-size: 3vw;  // double the font size
      text-align: center;  // Add this line to center the text
      
    }
  }
`;