import styled from "styled-components";

export const ContainerCadastro = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ContainerText = styled.div`
  padding: 60px 60px 0px 80px;
  width: 800px;
  top: 50px;
`;

export const LargeText = styled.h1`
  font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu,
    sans-serif;
  font-weight: bold;
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 5px;
`;

export const MediumTextBold = styled.p`
  margin: 16px 0 0;
  font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu,
    sans-serif;
  font-size: 1.5rem;
  font-weight: bold;

  font-weight: 500px;
`;

export const MediumText = styled.p`
  margin: 2rem 0 0;
  font-size: 1.3rem;
`;

export const Form = styled.form`
  margin: 16px 0 0;

  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const InputEmail = styled.input`
  width: 406px;
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
`;

export const ButtonSubmit = styled.button`
  //   margin: 0;
  padding: 0;
  border-style: none;
  border-radius: 3px;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  background-color: rgb(229, 9, 20);
  padding: 0.75rem 1.5rem;
  width: 173px;
  height: 3.59rem;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    background-color: ;
    transition: 500ms;
  }
`;
