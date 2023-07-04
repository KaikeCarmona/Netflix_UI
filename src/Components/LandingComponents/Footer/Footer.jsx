import { Option, Select } from "../NavBar/Style";
import { useState } from "react";

import {
  ContainerLinks,
  FooterCard,
  FooterContainer,
  Links,
  Number,
  PageName,
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
            <a href="">Perguntas frequentes</a>
          </Links>
          <Links>
            <a href="">Relações com investidores</a>
          </Links>
          <Links>
            <a href=""> Formas de assistir</a>
          </Links>
          <Links>
            <a href=""> Informações corporativas</a>
          </Links>
          <Links>
            <a href=""> Só na Netflix</a>
          </Links>
          <Links>
            <a href=""> Central de Ajuda</a>
          </Links>
          <Links>
            <a href=""> Carreiras</a>
          </Links>
          <Links>
            <a href=""> Termos de uso</a>
          </Links>
          <Links>
            <a href=""> Entre em contato</a>
          </Links>
          <Links>
            <a href=""> Conta</a>
          </Links>
          <Links>
            <a href=""> Resgatar cartão pré-pago</a>
          </Links>
          <Links>
            <a href=""> Privacidade</a>
          </Links>
          <Links>
            <a href=""> Teste de velocidade</a>
          </Links>
          <Links>
            <a href=""> Media Center</a>
          </Links>
          <Links>
            <a href=""> Comprar cartão pré-pago</a>
          </Links>
          <Links>
            <a href=""> Preferências de cookies</a>
          </Links>
          <Links>
            <a href=""> Avisos legais</a>
          </Links>
        </ContainerLinks>
        <Select style={{margin: '30px 10px 0'}} value={selectedOption} onChange={handleSelectChange}>
          <Option value="option1"> Português </Option>
          <Option value="option2">Ingles</Option>
          <Option value="option3">Frances</Option>
        </Select>
        <PageName>
            <span>Netflix Brasil</span>
        </PageName>
      </FooterCard>
    </FooterContainer>
  );
}
