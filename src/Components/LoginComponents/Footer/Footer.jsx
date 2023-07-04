import { useState } from "react";
import { Option, Select } from "../../LandingComponents/NavBar/Style";

import {
  ContainerLinks,
  FooterCard,
  FooterContainer,
  Links,
  Number,
  PageName,
  Link,
} from "./Styled";

export default function Footer() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <FooterContainer>
      <FooterCard>
        <Number>
          <p>Dúvidas? Ligue 0800 591 8942</p>
        </Number>
        <ContainerLinks>
          <Links>
            <Link href="">Perguntas frequentes</Link>
          </Links>
          <Links>
            <Link href="">Preferências de cookies</Link>{" "}
          </Links>
          <Links>
            <Link href="">Central de Ajuda</Link>{" "}
          </Links>
          <Links>
            <Link href="">Informações corporativas</Link>{" "}
          </Links>
          <Links>
            <Link href="">Central de Ajuda</Link>{" "}
          </Links>
          <Links>
            <Link href="">Privacidade</Link>{" "}
          </Links>
        </ContainerLinks>
        <Select
          style={{
            margin: "30px 10px 0",
            borderRadius: "0",
            color: "#737373",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginLeft: "0"
          }}
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <Option value="option1"> Português </Option>
          <Option value="option2">Ingles</Option>
          <Option value="option3">Frances</Option>
        </Select>
      </FooterCard>
    </FooterContainer>
  );
}
