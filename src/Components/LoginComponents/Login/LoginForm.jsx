import {
  Button,
  CardFormContainer,
  CheckContainer,
  ContainerLogin,
  Form,
  FormContainer,
  Input,
  InputCheck,
  LoginText,
} from "./Styles";

export default function LoginForm() {
  return (
    <ContainerLogin>
      <FormContainer>
        <Form>
          <LoginText>Entrar</LoginText>
          <Input placeholder="Email ou número de telefone"></Input>
          <Input placeholder="Senha"></Input>
          <Button>Entrar</Button>
          <CheckContainer>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <InputCheck type="checkbox" name="checkbox" />
              <span>Lembre-se de mim</span>
            </div>
            <a href=""  style={{ textDecoration: "none"}}>Precisa de ajuda?</a>
          </CheckContainer>
        </Form>
        <CardFormContainer>
          <div style={{}}>
            <span style={{color: '#737373'}}>Novo por aqui?</span>
            <a href={`/`} style={{ textDecoration: "none", color: "#fff" }}>
              {" "}
              Assine agora.
            </a>
          </div>
          <span style={{color: '#737373', fontSize: '0.85rem', marginTop: 10}}>
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô. <a href="" style={{color: 'blue', textDecoration: 'none'}}>Saiba mais</a>
          </span>
        </CardFormContainer>
      </FormContainer>
    </ContainerLogin>
  );
}
