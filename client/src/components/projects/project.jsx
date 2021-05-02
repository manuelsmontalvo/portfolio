import React from "react";
import Projectcard from "./projectcard";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  position: relative;
  justify-content: space-around;
  padding-bottom: 10%;
  width: 100%;
  height: 900px;
  background-color: #454241;
`;

const Title = styled.h2`
  color: #f8f0dc;
  font-size: 35px;
  font-weight: 600;
  font-family: "open sans";
  margin-top: 50px;

  @media (max-width: 778px) {
    font-size: 25px;
  }
`;

export default function Project() {
  return (
    <ProjectContainer id="projects">
      <Title>Projects</Title>
      <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-around"}}>
        <Projectcard
          Site="https://collaboreatery.netlify.app/"
          Repo="https://github.com/manuelsmontalvo/collaboreatery"
          Title="Collaboreatery"
          Description="Collboreatery is community fed database for restaraunts based price, location, and cuisine. This apllication was made with React, Express, MongoDB, and NodeJS."
          Img="https://imgur.com/SKioqik.png"
        />
        <Projectcard
          Site="https://www.manuelsmontalvo.com/"
          Repo="https://github.com/manuelsmontalvo/portfolio"
          Title="Portfolio Site"
          Description="This portfolio site was made with React, Styled components, Framer Motion, and other animations made from scratch."
          Img="https://imgur.com/J4Dtgtd.png"
        />
      </div>
    </ProjectContainer>
  );
}
