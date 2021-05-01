import React from "react";
import styled from "styled-components";
import ManuelMontalvoImg from "../../../assets/logo.PNG";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 20px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

const LogoSubText = styled.p`
  font-size: 12px;
  margin: 0;
  margin-bottom: -2px;
  margin-left: 4px;
  color: #222;
  font-weight: 300;
`;

export default function logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={ManuelMontalvoImg} alt="Manuel Montalvo" />
      </LogoImg>
      <LogoText>Manuel Santos Montalvo</LogoText>
      <LogoSubText>//Software Engineer</LogoSubText>
    </LogoWrapper>
  );
}