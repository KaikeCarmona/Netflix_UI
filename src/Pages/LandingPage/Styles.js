import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 8, 29);
  min-height: 32rem;
  background-image: linear-gradient(
      103.24deg,
      rgba(0, 8, 29, 0.9) 23.83%,
      rgba(0, 8, 29, 0.3) 96.1%
    ),
    url(https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/06f2847e-02cc-417b-863c-40bf348046da/BR-pt-20230626-popsignuptwoweeks-perspective_alpha_website_large.jpg);
  background-repeat: no-repeat;
  width: 100%;
  min-height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  overflow: auto;
`;

export const LandingColor = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 92%;
  min-height: 60vh;
  margin: 0 auto;
`;
