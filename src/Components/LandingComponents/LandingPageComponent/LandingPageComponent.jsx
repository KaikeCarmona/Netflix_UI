import {
  Container,
  ContainerCard,
  LineSeparator,
  Separator,
  LeftCard,
  RightCard,
  LeftCardText1,
  LeftCardText2,
} from "./Style";

import image1 from "../../../assets/en1.png";
import image2 from "../../../assets/en2.png";
import image3 from "../../../assets/en3.png";
import image4 from "../../../assets/en4.png";

export default function LandingPage() {
  return (
    <Container>
      <ContainerCard>
        <LeftCard>
          <LeftCardText1>Aproveite na TV</LeftCardText1>
          <LeftCardText2>
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </LeftCardText2>
        </LeftCard>
        <RightCard src={image1} />
      </ContainerCard>
      <LineSeparator>
        <Separator></Separator>
      </LineSeparator>
      <ContainerCard  className="row-reverse">
        <RightCard src={image2} />
        <LeftCard>
          <LeftCardText1>Assista onde quiser</LeftCardText1>
          <LeftCardText2>
            Assista a quantos filmes e séries quiser no celular, tablet, laptop
            e TV.
          </LeftCardText2>
        </LeftCard>
      </ContainerCard>
      <LineSeparator>
        <Separator></Separator>
      </LineSeparator>
      <ContainerCard >
        <LeftCard>
          <LeftCardText1>Crie perfis para crianças</LeftCardText1>
          <LeftCardText2>
            Deixe as crianças se aventurarem com seus personagens favoritos em
            um espaço feito só para elas, sem pagar a mais por isso.
          </LeftCardText2>
        </LeftCard>
         <RightCard src={image3} />
      </ContainerCard>
      <LineSeparator>
        <Separator></Separator>
      </LineSeparator>
      <ContainerCard  className="row-reverse">
        <RightCard src={image4} />
        <LeftCard>
          <LeftCardText1> Baixe séries para assistir offline</LeftCardText1>
          <LeftCardText2>
            Disponíveis somente em planos sem anúncios.
          </LeftCardText2>
        </LeftCard>
      </ContainerCard>
    </Container>
  );
}
