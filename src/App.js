import GlobalStyle from "./styles/global";

import { useContext } from "react";
import { ModalContext } from "./contexts/modal/ContextModal";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "react-image-gallery/styles/css/image-gallery.css";
import Instituicao from "./pages/Dashboards/Instituicao";
import ModalProfessor from "./pages/Dashboards/Instituicao/Modal/Professor";
import ModalAluno from "./pages/Dashboards/Instituicao/Modal/Aluno";

import { Routes } from "./routes";

function App() {
  const { modal } = useContext(ModalContext);

  return (
    <>
      <GlobalStyle
        o={modal  ? "hidden" : "auto"}
        mh={modal ? "100vh" : "inherit"}
      />
<<<<<<< HEAD

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

      <Routes />
=======
      <Instituicao/>
>>>>>>> 6316ae7aa58ba52b7e82e833405112f91f3c6f72
    </>
  );
}
export default App;
