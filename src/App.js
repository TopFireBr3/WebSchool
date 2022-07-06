import Modal from "react-modal"
import GlobalStyle from "./styles/global"
import {  Router } from "./routes/index";
import { useState } from "react";

Modal.setAppElement("#root")
function App() {
  const [modal, setModal] = useState(false);
  return (
    
    <>
      <GlobalStyle o={modal? "hidden" : "auto"} mh={modal? "100vh" : "inherit"} />
      <Router modal={modal} setModal={setModal}/>
    </>
  );
}
export default App;
