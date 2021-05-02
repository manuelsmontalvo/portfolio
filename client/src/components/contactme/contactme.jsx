import React from 'react'
import ContactUs from './sendemail'
import styled from "styled-components";

const ContactMeContainer = styled.div`
  display: block;
  flex-flow: column;
  box-sizing: border-box;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 650px;
  padding: 6% 5% 30%;
  background-color: #f8f0dc;
`;



export default function ContactMe() {
  return (
    <ContactMeContainer>
      <ContactUs/>
    </ContactMeContainer>
  )
}
