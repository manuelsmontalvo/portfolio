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
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  list-style:none;
  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-bottom: 2px solid #7eca9c;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export default function NavLinks() {
  return (
    <NavLinkContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#">About Me</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Projects</Link>
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
