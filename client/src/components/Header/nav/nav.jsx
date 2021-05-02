import React from "react";
import styled from "styled-components";
import {Logo} from "../logo/logo";
import {NavLinks} from "../navlinks/navLinks";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../responsive";
import {MobileNavLinks} from "../navlinks/mobileNavLinks";

const NavBarContainer = styled.div`
  /* width: 100%; */
  min-width: 960px; // No default x-axis scroll
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  background-color: #f8f0dc;
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

export function Nav() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
  
  return (
    <NavBarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection />
      <RightSection>
        {!isMobile && <NavLinks />}
        {isMobile && <MobileNavLinks/>}
      </RightSection>
    </NavBarContainer>
  );
}

