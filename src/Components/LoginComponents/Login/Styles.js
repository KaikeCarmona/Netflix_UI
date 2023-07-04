import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 739px) {
    height: 75vh;
  }
`;

export const FormContainer = styled.div`
  width: 450px;
  height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;

  flex-direction: column;
  margin: 0;
  min-height: 515px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 739px) {
    width: 100%;
  }
`;
export const Form = styled.form`
  width: 70%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  @media (max-width: 739px) {
    width: 90%;
    height: 35rem;
    padding-top: 25px;
  }
  @media (max-width: 440px) {
    height: 27rem;
  }
`;

export const LoginText = styled.h1``;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  margin-top: 20px;
  background: #333;
  border-radius: 4px;
  &::placeholder {
    text-align: start;
    padding: 19px;
    color: rgba(255, 255, 255, 0.4);
    font-size: 1rem;
    font-weight: 400px;
    max-width: 100%;
  }
  @media only screen and (max-width: 300px){
    &::placeholder{
      font-size: 14px;
      line-width: 20px;

    }
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 4px;
  margin: 35px 0px 12px;
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const CheckContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #b3b3b3;
  font-size: 0.8rem;
`;

export const InputCheck = styled.input`
  border-style: none;
  height: 16px;
  left: -20px;
  width: 16px;
  margin-right: 5px;
  color: rgba(255, 255, 255, 0.4);
`;

export const CardFormContainer = styled.div`
  width: 70%;
  height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 739px) {
    margin-top: 1.5rem;
    width: 90%;
    height: 15rem;
  }
`;
