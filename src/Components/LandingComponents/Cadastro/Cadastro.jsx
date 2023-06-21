import {
  ContainerCadastro,
  LargeText,
  MediumTextBold,
  MediumText,
  ContainerText,
  InputEmail,
  ButtonSubmit,
  Form,
} from "./Styles";

export default function Cadastro() {
  return (
    <ContainerCadastro>
      <ContainerText>
        <LargeText>
          Filmes, séries e muito <br /> mais, sem limites
        </LargeText>
        <MediumTextBold>
          Assista onde quiser. Cancele quando quiser.
        </MediumTextBold>
        <MediumText>
          Quer assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </MediumText>

        <Form>
          <InputEmail placeholder="Email" />
          <ButtonSubmit>Vamos lá > </ButtonSubmit>
        </Form>
      </ContainerText>
    </ContainerCadastro>
  );
}
