import React from "react";
import styled from "styled-components";

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  margin: 4rem 0;
  background: #f4f4f9;
  border-radius: 15px;
`;

const TestimonialTitle = styled.h2`
  font-size: 38px;
  color: #2e186a;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 1.5rem 0;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  width: 100%;
  max-width: 600px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
  }

  p {
    font-style: italic;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 20px;
    color: #555;
  }

  h4 {
    color: #2e186a;
    font-size: 22px;
    font-weight: bold;
    margin-top: 1rem;
  }
`;

const TestimonialsComponent = () => {
  const testimonials = [
    {
      quote:
        "WeMa Solutions transformed our digital presence. Their expertise and dedication are evident in all aspects of our website.",
      name: "John Doe, ABC Corp",
    },
    {
      quote:
        "The team at WeMa Solutions is knowledgeable and works with great precision. Our mobile app has never been better!",
      name: "Jane Smith, XYZ Inc.",
    },
  ];

  return (
    <TestimonialsContainer>
      <TestimonialTitle>What Our Clients Say</TestimonialTitle>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index}>
          <p>"{testimonial.quote}"</p>
          <h4>- {testimonial.name}</h4>
        </TestimonialCard>
      ))}
    </TestimonialsContainer>
  );
};

export default TestimonialsComponent;
