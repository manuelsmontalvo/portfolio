import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";

const NavLinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  position: fixed;
  height: fit-content;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: absolute;
  top: 55px;
  left: 0;
  z-index:99;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  display: flex;
  font-weight: 500;
  font-size: 16px;
  list-style: none;

  margin-bottom:10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-bottom: 2px solid #7eca9c;
  }
`;

const Marginer = styled.div`
  height: 1em;
`;

export function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinkContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <Marginer />
          <LinkItem>
            <Link onClick={() => setOpen(!isOpen)} href="#about-me">About Me</Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={() => setOpen(!isOpen)} href="#">Projects</Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={() => setOpen(!isOpen)} href="#">Resume</Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={() => setOpen(!isOpen)} href="#">Contact Me</Link>
          </LinkItem>
        </LinksWrapper>
      )}
    </NavLinkContainer>
  );
}
