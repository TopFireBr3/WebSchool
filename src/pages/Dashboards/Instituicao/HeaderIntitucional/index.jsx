import { useContext } from "react";

import { Container, ThemeDiv, ThemeHeader, ThemeTitle } from "./style";

import { FiMenu, FiMail, FiHome } from "react-icons/fi";
import { MdInsertInvitation } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { VscBook } from "react-icons/vsc";

import { ModalContext } from "../../../../contexts/modal/ContextModal";

import Logo2 from "../../../../assets/img2.png";
import { useHistory } from "react-router-dom";

const HeaderInstitucional = () => {
  

  const history = useHistory();

  return (
    <ThemeHeader w="100%" h="100px" bc="var(--blue-1)" j="center" a="center">
      <ThemeTitle j="space-between" a="center" w="80%">
        <img src={Logo2} alt="Logo" />
        <button onClick={() => history.push("/")}>Sair</button>
      </ThemeTitle>
    </ThemeHeader>
  );
};

export default HeaderInstitucional;
