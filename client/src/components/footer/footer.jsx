import React from "react";
import styled from "styled-components";
import {FooterLinks} from "./footerLinks"

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  position: static;
  bottom: 0;
  padding: 0 15px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  background-color: #454241;
  z-index: 999;
`;


export function Footer() {
  return <FooterContainer>
<FooterLinks/>
  </FooterContainer>;
}

export default Footer;
