import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { keyframes } from "styled-components";

const open = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 140px;
  }
`;

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
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  z-index:99;
  overflow:hidden;
  animation: ${open} 0.5s ease-in;
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
