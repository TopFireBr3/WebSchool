import { useContext } from "react";

import { Container, ThemeDiv, ThemeHeader, ThemeTitle } from "./style";

import { FiMenu, FiMail, FiHome } from "react-icons/fi";
import { MdInsertInvitation } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { VscBook } from "react-icons/vsc";

import { ModalContext } from "../../contexts/modal/ContextModal";

import Logo2 from "../../assets/img2.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { modal, openModal } = useContext(ModalContext);

  const history = useHistory();

  return (
    <ThemeHeader w="100%" h="100px" bc="var(--blue-1)" j="center" a="center">
      <ThemeTitle j="space-between" a="center" w="80%">
        <img src={Logo2} alt="Logo" />

        <FiMenu onClick={() => openModal()} className="button1" />

        <ThemeDiv
          className="nav"
          f="row"
          w="340px"
          a="center"
          g="20px"
          m="0px 20px 0px 0px"
        >
          <button onClick={() => history.push("/")}>Home</button>

          <button>Login</button>

          <button>Cadastrar escola</button>

          <button onClick={() => history.push("/notices")}>Notícias</button>
        </ThemeDiv>
      </ThemeTitle>
      <div
        style={{
          display: modal ? "block" : "none",
          overflow: modal ? "hidden" : "auto",
          minHeight: "100vh",
          maxHeight: "100vh",
          position: "absolute",
          top: "100px",
          left: "0",
          minWidth: "100%",
          backgroundColor: "var(--bg-modal)",
        }}
      >
        <Container d="flex" f="column" bc="var(--white)">
          <ThemeDiv
            a="center"
            g="20px"
            p="20px 0px  20px 20px"
            b="1px solid var(--blue-1)"
            bt="2px solid var(--blue-1)"
            bch="var(--blue-0)"
            onClick={() => {
              history.push("/");
              openModal();
            }}
          >
            <FiHome className="icon" /> <h2>Home</h2>
          </ThemeDiv>

          <ThemeDiv
            a="center"
            g="20px"
            p="20px 0px  20px 20px"
            b="1px solid var(--blue-1)"
            bch="var(--blue-0)"
          >
            <BiUserCircle className="icon" /> <h2>Login</h2>
          </ThemeDiv>

          <ThemeDiv
            a="center"
            g="20px"
            p="20px 0px 20px 20px"
            b="1px solid var(--blue-1)"
            bch="var(--blue-0)"
          >
            <VscBook className="icon" /> <h2>Cadastrar escola</h2>
          </ThemeDiv>

          <ThemeDiv
            a="center"
            g="20px"
            p="20px 0px 20px 20px"
            b="1px solid var(--blue-1)"
            bch="var(--blue-0)"
            onClick={() => {
              history.push("/notices");
              openModal();
            }}
          >
            <MdInsertInvitation className="icon" />
            <h2>Notícias</h2>
          </ThemeDiv>

          <ThemeDiv
            a="center"
            g="20px"
            p="20px 0px 20px 20px"
            b="1px solid var(--blue-1)"
            bb="2px solid var(--blue-1)"
            bch="var(--blue-0)"
          >
            <FiMail className="icon" /> <h2>Email para contato</h2>
          </ThemeDiv>
        </Container>{" "}
      </div>
    </ThemeHeader>
  );
};

export default Header;
