import Home from "./pages/Home";
import Modal from "react-modal"
import GlobalStyle from "./styles/global"

Modal.setAppElement("#root")
function App() {
  return (
    
    <>
      <GlobalStyle/>
      <Home />
    </>
  );
}
export default App;
