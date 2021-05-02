import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: block;
  flex-flow: column;
  box-sizing: border-box;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 650px;
  padding: 10% 5% 30%;
  background-color: #f8f0dc;
`;

const Title = styled.h2`
  margin: 20px 0 25px 0;
  color: #454241;
  font-size: 35px;
  font-weight: 600;
  font-family: "open sans";

  @media (max-width: 778px) {
    font-size: 25px;
    margin: 25px 0 35px 0;
  }
`;

const About = styled.p`
  margin: 0;
  color: #454241;
  text-align: center;
  font-size: 35px;
  font-weight: 500;
  font-family: "open sans";

  @media (max-width: 778px) {
    font-size: 20px;
  }
`;

const Me = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-bottom: 5px;
  margin-top: 15px;
`;

export function Bio() {
  return (
    <AboutContainer id="about-me">
      <Me
        src="https://pbs.twimg.com/profile_images/1373402812344897537/yL-6E1PO_400x400.jpg"
        alt="Manuel Montalvo"
      />
      <Title>About Me</Title>
      <About>
        I'm an enthusiastic and determined problem solver who strives to put
        nothing but my best into every endeavor I'm involved in. I desire to
        develop unique solutions based on strategic planning and my proven
        ingenuity.
      </About>
    </AboutContainer>
  );
}
