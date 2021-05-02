import React from "react";
import styled from "styled-components";

const NavLinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 .9em;
  color: #454241;
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
  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;
  
  &:hover {
    border-bottom: 2px solid #996063;
  }
`;

export function NavLinks() {
  return (
    <NavLinkContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#about-me">About Me</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#projects">Projects</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Resume</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Contact Me</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinkContainer>
  );
}
