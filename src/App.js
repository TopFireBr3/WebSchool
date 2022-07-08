import { useContext } from "react";

import GlobalStyle from "./styles/global";

import { ModalContext } from "./contexts/modal/ContextModal";

import { Routes } from "./routes";

import "react-image-gallery/styles/css/image-gallery.css";
import Instituicao from "./pages/Dashboards/Instituicao";
import ModalProfessor from "./pages/Dashboards/Instituicao/Modal/Professor";
import ModalAluno from "./pages/Dashboards/Instituicao/Modal/Aluno";

function App() {
  const { modal } = useContext(ModalContext);

  return (
    <>
      <GlobalStyle
        o={modal  ? "hidden" : "auto"}
        mh={modal ? "100vh" : "inherit"}
      />
      <Instituicao/>
    </>
  );
}
export default App;
