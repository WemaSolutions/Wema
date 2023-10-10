import styled from "styled-components";

const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  background: #2e186a;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  margin: 3rem 0;
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

const ShowcaseTitle = styled.h2`
  font-size: 40px;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
  z-index: 1;
`;

const ShowcaseDescription = styled.p`
  font-size: 22px;
  color: #fff;
  text-align: center;
  max-width: 850px;
  z-index: 1;
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 3s infinite alternate; /* Updated duration */
  }

  &::before {
    width: 100px;
    height: 100px;
    top: 10%;
    left: 10%;
  }

  &::after {
    width: 150px;
    height: 150px;
    bottom: 15%;
    right: 10%;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
    }
  }
`;

const InteractiveShowcaseComponent = () => {
  return (
    <ShowcaseContainer>
      <FloatingShapes />
      <ShowcaseTitle>Experience the Future</ShowcaseTitle>
      <ShowcaseDescription>
        Dive into the next generation of digital solutions with WEMA. We blend
        creativity with technology to deliver experiences that captivate,
        inspire, and convert.
      </ShowcaseDescription>
    </ShowcaseContainer>
  );
};

export default InteractiveShowcaseComponent;
