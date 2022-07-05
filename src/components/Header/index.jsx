import Logo2 from "../../assets/img2.png";
import { ThemeDiv, ThemeHeader } from "./style";
const Header = () => {
  return (
    <ThemeHeader w="100%" h="100px" bc="#68DAD8" j="space-between" a="center">
      <img src={Logo2} alt="Logo" />
      <ThemeDiv f="row" w="340px" a="center" g="10px">

          <button>Home</button>

          <button>Login</button>

          <button>Cadastrar escola</button>

          <button>Eventos</button>

      </ThemeDiv>
    </ThemeHeader>
  );
};

export default Header;
