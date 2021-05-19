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

const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 300px;

  @media (max-width: 778px) {
    gap: 25px;
  }
`;

export default function Project() {
  return (
      <ProjectContainer id="projects">
        <Title>Projects</Title>
        <MainContainer>
          <Projectcard
            Site="https://elegant-allen-e97c72.netlify.app/"
            Repo="https://github.com/manuelsmontalvo/github-finder"
            Title="GitHub Finder"
            Description="This is a Github profile application made with Reactjs using the GitHub API. It utilizes context hooks for state management "
            Img="https://imgur.com/vCrO26u"
          />
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
        </MainContainer>
      </ProjectContainer>
  );
}
