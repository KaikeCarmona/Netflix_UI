import styled from "styled-components";

export const FooterContainer = styled.div`
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  margin: 0px 0px 0px;
  padding: 0px 0px 0px;

  @media (max-width: 600px) {
     height: 19rem;
  }

  @media (max-width: 739px) {
    border-top: 1px solid #737373;
  }
`;

export const FooterCard = styled.footer`
  width: 70%;
  height: 14.5rem;
  color: #737373;
  display: flex;
  flex-direction: column;
  padding: 25px 0px 0px;
  margin: 0 auto;
  @media (max-width: 739px) {
    padding: 30px 0px;
    width: 90%;
  }
`;

export const Number = styled.div`
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 20px;
`;

export const ContainerLinks = styled.ul`

  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 1.3125rem;
  gap: 1rem;
  width:100%;

  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
  padding: 0;
  -webkit-padding-start: 0;
  padding-inline-start: 0;
  font-size: 13px;
`;

export const Links = styled.li`
  box-sizing: border-box;
  display: inline-block;
  min-width: 100px; 
  padding: 0 12px 0 0;
  vertical-align: top;
  width: 20%;

  font: inherit;
  list-style: none;
  text-decoration: none;
  font-style: normal;
  list-style-type: none;
   color: #737373;
  @media (max-width: 740px) {
    width: 30%;
  }
  @media (max-width: 500px) {
    width: 40%;
    padding:0px;
 
  }
`;

export const PageName = styled.div`
  margin-top: 2rem;
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
`;

export const Link = styled.a`
  text-decoration: none;
  color: #737373;
`;
