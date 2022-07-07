import Modal from "react-modal"
import GlobalStyle from "./styles/global"
import {  Router } from "./routes/index";
import { ModalContext } from "./contexts/modal/contextModal";
import { useContext } from "react";

Modal.setAppElement("#root")
function App() {
  const {modal} = useContext(ModalContext)
  return (
    
    <>
      <GlobalStyle o={modal? "hidden" : "auto"} mh={modal? "100vh" : "inherit"} />
      <Router/>
    </>
  );
}
export default App;
