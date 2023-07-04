import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(
    333.08deg,
    #000235 29.2%,
    #010f42 71.93%,
    #e40913 111.25%
  );
  padding: 3rem 0;
  border-radius: 8px;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px min(10%, 6.25rem);

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 12px min(10%, 1rem);
    &.row-reverse {
      display: inline-flex;
      flex-direction: column-reverse;
    }
  }

  @media screen and (min-width: 960px) {
    display: flex;
    flex-direction: row;
    padding: 12px min(10%, 6.25rem);
    margin-top: -0;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    padding: 12px min(10%, 6.25rem);
    margin-top: -0;
  }


`;

export const LeftCard = styled.div`
  width: 50.5%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const LeftCardText1 = styled.p`
  color: #fff;
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 700;

  @media screen and (min-width: 600px) {
    font-size: 2rem;
    font-weight: 700;
  }
  @media screen and (min-width: 960px) {
    font-size: 2rem;
    font-weight: 700;
  }
  @media screen and (min-width: 1280px) {
    font-size: 3rem;
    font-weight: 900;
  }
`;

export const LeftCardText2 = styled.p`
  color: #fff;
  font-weight: 500;

  @media screen and (min-width: 600px) {
    font-size: 1rem;
    font-weight: 400;
  }
  @media screen and (min-width: 960px) {
    font-size: 1rem;
    font-weight: 400;
  }
  @media screen and (min-width: 1280px) {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const RightCard = styled.img`
  width: 50.4%;
  border-style: none;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const LineSeparator = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.div`
  width: 85%;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 600px) {
    width: 93%;
  }
`;
