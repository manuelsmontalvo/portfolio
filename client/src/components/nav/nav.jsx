import React from "react";
import styled from "styled-components";
import Logo from "../logo/logo";
import NavLinks from "../navlinks/navLinks";

const NavBarContainer = styled.div`
  min-width: 960px; // No default x-axis scroll
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
`;
const RightSection = styled.div`
  display: flex;
`;

export default function Nav() {
  return (
    <NavBarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection/>
      <RightSection>
        <NavLinks />
      </RightSection>
    </NavBarContainer>
  );
}
