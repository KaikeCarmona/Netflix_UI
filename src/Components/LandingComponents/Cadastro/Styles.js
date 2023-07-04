import styled from "styled-components";

export const ContainerCadastro = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ContainerText = styled.div`
  width: 90%;
  padding: 60px 16px 0px;
  top: 50px;
  @media screen and (min-width: 600px) {
    padding: 60px 80px 0px;
  }
  @media screen and (min-width: 960px) {
    padding: 3.75rem min(10%, 6rem) 0 min(10%, 6rem);
  }
`;

export const LargeText = styled.h1`
  font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu,
    sans-serif;
  font-weight: bold;
  margin-bottom: 5px;

  @media screen and (min-width: 600px) {
    font-size: 2.5rem;
    font-weight: 700;
  }
  @media screen and (min-width: 960px) {
    font-size: 3rem;
    font-weight: 900;
  }
  @media screen and (min-width: 1280px) {
    font-size: 4rem;
    font-weight: 900;
    line: 70px;
  }
`;

export const MediumTextBold = styled.p`
  margin: 16px 0 0;
  font-size: 1.125rem;
  font-weight: 500;

  font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu,
    sans-serif;

  @media screen and (min-width: 960px) {
    font-size: 1.125rem;
    font-weight: 500;
  }
  @media screen and (min-width: 600px) {
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

export const MediumText = styled.p`
  margin: 1rem 0 0;
  font-weight: 400;
  font-size: 1.125rem;

  @media only screen and (min-width: 959.98px) {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.875rem;
  }
  @media screen and (min-width: 600px) {
    margin-top: 1rem;
  }
`;

export const Form = styled.form`
  margin: 16px 0 0;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 1rem;
  }
`;

export const InputEmail = styled.input`
  width: 55%;
  min-width: 16px;
  height: 3.3rem;
  background-color: rgba(14, 14, 14, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.8);

  &::placeholder {
    text-align: start;
    padding: 12px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
  }

  @media (max-width: 599px) {
    width: 100%;
    height: 48px;
  }
`;

export const ButtonSubmit = styled.button`
  flex: 0 0 auto;
  border-style: none;
  border-radius: 3px;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  background-color: rgb(229, 9, 20);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 173px;
  height: 3.3rem;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    background-color: rgba(181, 5, 14);
    transition: 500ms;
  }

  @media (max-width: 599px) {
    width: 130px;
    height: 3rem;
    font-size: 1.2rem;
  }
`;
