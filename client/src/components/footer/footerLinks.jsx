import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const FooterLinkContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 778px) {
    padding: 0;
    justify-content: space-around;
  }
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 0.9em;
  color: #f8f0dc;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  cursor: pointer;
`;

const FooterText = styled.h2`
  font-size: 20px;
  margin: 0;
  color: #f8f0dc;
  font-weight: 500;
`;

export function FooterLinks() {
  return (
    <FooterLinkContainer>
      <FooterText>© Manuel Montalvo</FooterText>
      <LinksWrapper>
        <LinkItem>
          <Link href="https://github.com/manuelsmontalvo" target="_blank">
            <GitHubIcon />
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://www.linkedin.com/in/manuelsmontalvo/" target="_blank">
            <LinkedInIcon />
          </Link>
        </LinkItem>
      </LinksWrapper>
    </FooterLinkContainer>
  );
}
