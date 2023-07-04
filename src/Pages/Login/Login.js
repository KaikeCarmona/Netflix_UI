import styled from "styled-components";

export const LoginPage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: linear-gradient(
      103.24deg,
      rgba(0, 0, 0, 0.5) 90%,
      rgba(0, 8, 29, 0.3)
    ),
    url(https://assets.nflxext.com/ffe/siteui/vlv3/39f3c979-c105-4948-9c51-611eedf3a6fd/36ddf343-62a3-41a5-8da6-7745fc668cac/BR-pt-20230612-popsignuptwoweeks-perspective_alpha_website_large.jpg);

  color: white;
  margin: 0px;

  @media (max-width: 739px) {
     background-image: none;
     background-color: rgba(0, 0, 0);
  }

`;
