import Modal from "react-modal"
import GlobalStyle from "./styles/global"
import {  Router } from "./routes/index";
import { ModalContext } from "./contexts/modal/contextModal";
import { useContext } from "react";
import Notices from './pages/Notices'

Modal.setAppElement("#root")
function App() {
  const {modal} = useContext(ModalContext)
  return (
    
    <>
     <Notices/>
      <GlobalStyle o={modal? "hidden" : "auto"} mh={modal? "100vh" : "inherit"} />
    
    </>
  );
}
export default App;
