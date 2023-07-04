import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  margin: 24px 0px 0px;
  padding: 0px 96px 96px;

  @media screen  and (max-width: 600px){
    padding: 0px 0px 96px 0px;
  }

`;

export const FooterCard = styled.footer`
  width: 100%;
  // height: 25rem;
  color: rgba(255, 255, 255, 0.7);
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

  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
  padding: 0;
  -webkit-padding-start: 0;
  padding-inline-start: 0;
`;

export const Links = styled.li`
  font: inherit;
  width: 256px;
  list-style: none;
  text-decoration: underline;
  font-style: normal;
  list-style-type: none;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: underline;
`;

export const PageName = styled.div`
    margin-top: 2rem;
`;
