import React from "react";
import AppearOnScroll from "../../animation/appearOnScroll";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  width: 100%;
  padding: 100px;
  height: 600px;
  margin-top:5px;
  justify-content: center;
  align-items: center;
  background-color: #f8f0dc;
`;

const Title = styled.h2`
  font-size: 35px;
  margin: 10px 0 20px 0;
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
