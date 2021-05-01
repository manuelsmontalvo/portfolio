import React from "react";
import styled from "styled-components";

const Splash = styled.div`
  display: flex;
  min-width: 960px;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-color: #454241;
`;

const WhoIAm = styled.h1`
  font-size: 35px;
  margin: 0;
  color: #d2a5b0;
  font-weight: 500;
`;

const Name = styled.h1`
  font-size: 45px;
  margin: 0;
  color: #f8f0dc;
  font-weight: 500;
`;



export default function AboutMe() {
  return (
    <div>
      <Splash>
        <WhoIAm>Hello, I'm <Name>Manuel Santos Montalvo</Name></WhoIAm>
      </Splash>
    </div>
  );
}
