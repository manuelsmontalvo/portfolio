import React from "react";
import styled from "styled-components";
import Logo from "../logo/logo";
import { NavLinks } from "../navlinks/navLinks";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "../navlinks/mobileNavLinks";

const NavBarContainer = styled.div`
  width: 100vw;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f0dc;
`;

const LeftSection = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export function Nav() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavBarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <RightSection>
        {!isMobile && <NavLinks />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavBarContainer>
  );
}

export default Nav;
