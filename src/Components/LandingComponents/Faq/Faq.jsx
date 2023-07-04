import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { ButtonSubmit, Form, InputEmail } from "../Cadastro/Styles";

export default function Faq() {
  return (
    <div className="containerFaq">
      <h1>Perguntas Frequentes</h1>
      <Accordion className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span>O que é a Netflix?</span>
            <span className="plus">+</span>
          </Accordion.Header>
          <Accordion.Body>
            <span>
              A Netflix é um serviço de streaming que oferece uma ampla
              variedade de séries, filmes e documentários premiados em milhares
              de aparelhos conectados à internet.
            </span>
            <br />
            <br />
            <span>
              Você pode assistir a quantos filmes e séries quiser, quando e onde
              quiser – tudo por um preço mensal acessível. Aqui você sempre
              encontra novidades. A cada semana, adicionamos novas séries e
              filmes.
            </span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span>Quanto custa a Netflix?</span>
            <span className="plus">+</span>
          </Accordion.Header>
          <Accordion.Body>
            <span>
              Assista à Netflix no seu celular, tablet, Smart TV, notebook ou
              aparelho de streaming por uma taxa mensal única. Os planos variam
              de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.
            </span>
            Assista à Netflix no seu celular, tablet, Smart TV, notebook ou
            aparelho de streaming por uma taxa mensal única. Os planos variam de
            R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span>Onde posso assistir?</span>
            <span className="plus">+</span>
          </Accordion.Header>
          <Accordion.Body>
            <span>
              Assista onde quiser, quando quiser. Faça login com sua conta
              Netflix em netflix.com para começar a assistir no computador ou em
              qualquer aparelho conectado à Internet compatível com o aplicativo
              Netflix, como Smart TVs, smartphones, tablets, aparelhos de
              streaming e videogames.
            </span>
            <br />
            <br />
            <span>
              Você também pode baixar a sua série favorita com o aplicativo
              Netflix para iOS, Android ou Windows 10. Use downloads para levar
              a Netflix para onde quiser sem precisar de conexão com a Internet.
              Leve a Netflix com você para qualquer lugar.
            </span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <span>Como faço para cancelar?</span>
            <span className="plus">+</span>
          </Accordion.Header>
          <Accordion.Body>
            A Netflix é flexível. Não há contratos nem compromissos. Você pode
            cancelar a sua conta na internet com apenas dois cliques. Não há
            taxa de cancelamento – você pode começar ou encerrar a sua
            assinatura a qualquer momento.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <span>O que eu posso assistir na Netflix?</span>
            <span className="plus">+</span>
          </Accordion.Header>
          <Accordion.Body>
            A Netflix tem um grande catálogo de filmes, documentários, séries,
            originais Netflix premiados e muito mais. Assista o quanto quiser,
            quando quiser.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <span>A Netflix é adequada para crianças?</span>
            <span className="plus">+</span>
          </Accordion.Header>
          <Accordion.Body>
            <span>
              A experiência infantil da Netflix faz parte da sua assinatura para
              que as crianças se divirtam em seu próprio espaço com séries e
              filmes familiares sob a supervisão dos responsáveis.
            </span>
            <span>
              O recurso de controle parental, incluso nos perfis para crianças e
              protegido por PIN, permite restringir a classificação etária do
              conteúdo que as crianças podem ver e bloquear títulos específicos
              que você não quer que elas assistam.
            </span>
          </Accordion.Body>
        </Accordion.Item>
        <span style={{ fontSize: "1.3rem" }}>
          Quer assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </span>
        <Form>
          <InputEmail placeholder="Email" />
          <ButtonSubmit>Vamos lá > </ButtonSubmit>
        </Form>
      </Accordion>
    </div>
  );
}
