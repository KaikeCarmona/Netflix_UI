import { Header, Logo } from "./Styles";

import image from "../../../../src/assets/download.svg";

export default function NavBar() {
  return (
    <Header>
      <Logo src={image} />
    </Header>
  );
}
