import React from "react";
import AppearOnScroll from "../../animation/appearOnScroll";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 100vw;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-color: #f8f0dc;
`;

const Title = styled.h2`
  font-size: 35px;
  margin: 0;
  font-weight: 600;
  font-family: "open sans";
  color: #454241;
`;

const About = styled.p`
  margin: 0;
  font-size: 35px;
  font-weight: 500;
  font-family: "open sans";
  color: #454241;
  padding: 5px;
  text-align: center;
`;

export function Bio() {
  return (
    <AppearOnScroll>
      <AboutContainer id="about-me">
        <Title>About Me</Title>
        <About>
          I'm an enthusiastic and determined problem solver who strives to put
          nothing but my best into every endeavor I'm involved in. I desire to
          develop unique solutions based on strategic planning and my proven
          ingenuity.
        </About>
      </AboutContainer>
    </AppearOnScroll>
  );
}
