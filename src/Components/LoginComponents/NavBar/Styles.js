import styled from "styled-components";

export const Header = styled.header`
  height: 90px;
  width: 100%;
  background-color: transparent;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 440px) {
    height: 45px;
  }
`;

export const Logo = styled.img`
  width: 13rem;
  padding: 20px;
  @media (max-width: 739px) {
    padding: 10px;
  }
  @media (max-width: 440px) {
    width: 6rem;
  }
`;
