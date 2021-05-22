import React from "react";
import Projectcard from "./projectcard";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  position: relative;
  justify-content: center;
  padding-bottom: 10%;
  width: 100%;
  height: fit-content;
  background-color: #454241;
`;

const Title = styled.h2`
  color: #f8f0dc;
  font-size: 35px;
  font-weight: 600;
  font-family: "open sans";
  margin-top: 50px;
  margin-bottom: 30px;

  @media (max-width: 778px) {
    font-size: 25px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 100px;

  @media (max-width: 778px) {
    gap: 25px;
  }
`;

export default function Project() {
  return (
    <ProjectContainer id='projects'>
      <Title>Projects</Title>
      <MainContainer>
        <Projectcard
          Site='https://elegant-allen-e97c72.netlify.app/'
          Repo='https://github.com/manuelsmontalvo/github-finder'
          Title='GitHub Finder'
          Description='This project is a Github profile search application made with ReactJS using the GitHub API. It utilizes context hooks for state management and follows React architecture best practices.'
          Img='https://imgur.com/vCrO26u.png'
        />
        <Projectcard
          Site='https://collaboreatery.netlify.app/'
          Repo='https://github.com/manuelsmontalvo/collaboreatery'
          Title='Collaboreatery'
          Description='Collboreatery is a community-based directory for restaurants focusing on price, location, and cuisine. This application is made with ReactJS, Express, MongoDB, and NodeJS.'
          Img='https://imgur.com/SKioqik.png'
        />
        <Projectcard
          Site='https://www.manuelsmontalvo.com/'
          Repo='https://github.com/manuelsmontalvo/portfolio'
          Title='Portfolio Site'
          Description='This portfolio site utilizes ReactJS, Styled components, Framer Motion, and other animation and CSS libraries.'
          Img='https://imgur.com/J4Dtgtd.png'
        />
      </MainContainer>
    </ProjectContainer>
  );
}
