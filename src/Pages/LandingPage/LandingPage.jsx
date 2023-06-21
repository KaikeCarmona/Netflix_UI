import NavBar from "../../Components/LandingComponents/NavBar/NavBar";
import Cadastro from "../../Components/LandingComponents/Cadastro/Cadastro";
import Landing from "../../Components/LandingComponents/LandingPageComponent/LandingPageComponent";
import Faq from "../../Components/LandingComponents/Faq/Faq";
import Footer from "../../Components/LandingComponents/Footer/Footer";

import { Background, Container, Teste,   } from "./Styles";

export default function LandingPage() {
  return (
    <Background>
      <NavBar />
      <Container>
        <Cadastro />
        <Landing />
        <Faq />
        <Footer />
      </Container>
      <Teste/>
     </Background>
  );
}
