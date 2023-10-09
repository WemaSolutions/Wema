import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: #2e186a;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #443d89;
  }
`;

const Form = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  margin-top: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 5px;
  background-color: #f4f4f9;

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #2e186a;
    border-radius: 4px;
    margin-top: 5px;
    font-size: 16px;
  }

  button {
    display: block;
    margin-top: 15px;
    padding: 10px 15px;
    background-color: #2e186a;
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #443d89;
    }
  }
`;

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Button onClick={toggleForm}>Contact Us</Button>
      <Form isOpen={isOpen}>
        <label>
          Your Name:
          <input type="text" placeholder="Enter your name" />
        </label>
        <label>
          Your Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Your Message:
          <textarea rows={4} placeholder="Enter your message"></textarea>
        </label>
        <button>Send</button>
      </Form>
    </Container>
  );
};

export default ContactForm;
