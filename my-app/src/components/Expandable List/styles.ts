import styled from 'styled-components';
import { Row } from 'antd';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 30%; /* Set the Row width to 100% only on screens with a maximum width of 768px (mobile view) */
  
  flex-direction: column;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%; /* Set the Row width to 100% only on screens with a maximum width of 768px (mobile view) */
  }
  
`;


export const FullWidthRow = styled(Row)`
  display: flex;
  flex-direction: row;
  width: 100%; /* Set the Row width to 100% only on screens with a maximum width of 768px (mobile view) */

  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%; 
  }
`;



  export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  
  cursor: pointer;
  margin-bottom: 16px; /* Add margin at the bottom of each index */
`;

export const Content = styled.div`
  align-self: center;
  line-height: 1.2;
  font-weight: bold;
`;

export const MinTitle = styled.p`
  margin: 3px; /* Adjust margin as needed */
  font-size: 1.5em; /* Adjust font size as needed */
  
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  padding: 5px;
`;
