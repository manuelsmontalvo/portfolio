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
          Description='This project is a Github profile application made with ReactJS using the GitHub API. It utilizes context hooks for state management.'
          Img='https://imgur.com/vCrO26u.png'
        />
        <Projectcard
          Site='https://mighty-castle-20773.herokuapp.com/'
          Repo='https://github.com/manuelsmontalvo/contact-manager'
          Title='Contact Manager'
          Description='A contact manager application utilizing ReactJS, useContext for state management, NodeJS, MongoDB, and Express'
          Img='https://imgur.com/w1T3IEK.png'
        />
        <Projectcard
          Site='https://collaboreatery.netlify.app/'
          Repo='https://github.com/manuelsmontalvo/collaboreatery'
          Title='Collaboreatery'
          Description='Collboreatery is a community-based directory for restaurants focusing on price, location, and cuisine. This application is made with ReactJS, Express, MongoDB, and NodeJS.'
          Img='https://imgur.com/SKioqik.png'
        />
      </MainContainer>
    </ProjectContainer>
  );
}
