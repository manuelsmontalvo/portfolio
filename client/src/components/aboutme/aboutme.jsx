import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Splash = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-color: #454241;

  @media (max-width: 778px) {
    height: 350px;
  }
`;

const WhoIAm = styled.h1`
  font-size: 35px;
  margin: 0;
  color: #d2a5b0;
  font-weight: 500;
  font-family: "open sans";
`;

const Name = styled.h1`
  font-size: 45px;
  margin: 0;
  color: #f8f0dc;
  font-weight: 500;

  @media (max-width: 778px) {
    font-size: 25px;
  }
`;

const Blink = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Typing = styled.h1`
  position: relative;
  font-size: 35px;
  margin: 0;
  margin-left: 4%;
  color: #d2a5b0;
  font-weight: 500;
  font-family: "open sans";

  &::after {
    content: "";
    position: absolute;
    margin-top: 1%;
    width: 1px;
    height: 90%;
    border-right: 2px solid #d2a5b0;
    animation: ${Blink} 0.5s infinite ease;
  }

  @media (max-width: 778px) {
    font-size: 20px;
  }
`;

export function AboutMe() {
  return (
    <Splash>
      <WhoIAm>
        Hello, I'm <Name>Manuel Santos Montalvo</Name>
        <Typing>Software Engineer.</Typing>
      </WhoIAm>
    </Splash>
  );
}

export default AboutMe;
