import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  box-sizing: border-box;
  flex-flow: column;
  width: 100%;
`;

const Subject = styled.input`
  font-family: inherit;
  width: 30%;
  margin: 10px 0;
  align-self: center;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: #454241;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &:placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
  }
  @media (max-width: 778px) {
    width: 100%;
  }
`;

const Name = styled.input`
  align-self: center;
  font-family: inherit;
  width: 30%;
  margin: 10px 0;
  align-self: center;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: #454241;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &:placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
  }
  @media (max-width: 778px) {
    width: 100%;
  }
`;

const Email = styled.input`
  align-self: center;
  font-family: inherit;
  width: 30%;
  margin: 15px 0;
  align-self: center;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: #454241;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &:placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
  }
  @media (max-width: 778px) {
    width: 100%;
  }
`;

const Message = styled.textarea`
  font-family: inherit;
  margin-bottom: 25px;
  width: 50%;
  height: 200px;
  align-self: center;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: #454241;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &:placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
  }

  @media (max-width: 778px) {
    width: 100%;
  }
`;

const Button = styled.input`
  background: #996063;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  width: fit-content;
  font-size: 1.6em;
  align-self: center;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  border-radius: 40px;

  &:hover {
    background: #454241;
    color: #996063;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #996063;
    transition: 400ms ease all;
  }
  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;

const Title = styled.h2`
  color: #454241;
  font-size: 35px;
  font-weight: 600;
  font-family: "open sans";

  @media (max-width: 778px) {
    font-size: 25px;
    margin: 25px 0 35px 0;
  }
`;

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q0rnvcn",
        "template_9t3tmjr",
        e.target,
        "user_b2EY1jTpwUaSqvHyNF3Jl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Form onSubmit={sendEmail}>
      <Title>Contact Me</Title>
      <Subject type="text" name="subject" placeholder="Subject..." />
      <Name type="text" name="name" placeholder="Name..." />
      <Email type="email" name="email" placeholder="Email..." />
      <Message name="message" placeholder="Message..." />
      <Button type="submit" value="Send" />
    </Form>
  );
}
