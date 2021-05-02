import React from "react";
import AppearOnScroll from "../../animation/appearOnScroll";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-flow: column;
  min-width:990px;
  height: 800px;
  justify-content: center;
  align-items: center;
  background-color: #f8f0dc;
`;

const Title = styled.h2`
  font-size: 45px;
  margin-top: 8%;
  color: #454241;
  font-weight: 700;
  font-family: "Open Sans";
`;

const About = styled.p`
  font-size: 40px;
  color: #454241;
  font-weight: 500;
  width: 55%;
  font-family: "Open Sans";
  line-height: 75px;
  text-align: center;
`;

export function Bio() {
  return (
    <AppearOnScroll>
      <AboutContainer id="about-me">
        <Title>About Me</Title>
        <About>
        I'm an enthusiastic and determined problem solver who strives to put nothing but my best into every endeavor I'm involved in. I desire to develop unique solutions based on strategic planning and my proven ingenuity.
        </About>
      </AboutContainer>
    </AppearOnScroll>
  );
}
