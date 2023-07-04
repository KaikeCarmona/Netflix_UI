import styled from "styled-components";

export const Header = styled.header`
  height: 86px;
  width: 95%;
  margin: auto;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 12rem;
`;

export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const BottonLogin = styled.button`
  width: 73px;
  height: 32px;
  background-color: #e50915;
  border: none;
  border-radius: 5px; 
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 500ms;


  &:hover {
    background-color: rgb(181, 5, 14);
    transition: 500ms;
  }
`;

export const Select = styled.select`
  text-align: center;
  width: 148px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 1rem;
  color: #fff;
  border-radius: 5px;
  -webkit-appearance: none;
  -webkit-text-decoration: inherit;
`;

export const Option = styled.option`
  color: #fff;
`;
