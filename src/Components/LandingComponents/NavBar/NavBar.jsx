import { Header, BottonLogin, Select, Option, Logo, Botoes } from "./Style";
import { useState } from "react";
import image from "../../../../src/assets/download.svg";

 
 
export default function NavBar() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Header>
        <Logo src={image} />
        <Botoes>
          <Select value={selectedOption} onChange={handleSelectChange}>
            <Option value="option1">🌐 Português </Option>
            <Option value="option2">Ingles</Option>
            <Option value="option3">Frances</Option>
          </Select>
          <BottonLogin>
            <a href={`/Login`} style={{margin: '0 auto', color: '#fff', textDecoration: 'none'}} >Entrar</a>
          </BottonLogin>
        </Botoes>
      </Header>
    </div>
  );
}
