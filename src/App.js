import { useContext } from "react";

import GlobalStyle from "./styles/global";

import { ModalContext } from "./contexts/modal/contextModal";

import { Routes } from "./Routes";

import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const { modal } = useContext(ModalContext);

  return (
    <>
      <GlobalStyle
        o={modal ? "hidden" : "auto"}
        mh={modal ? "100vh" : "inherit"}
      />
      <Routes />
    </>
  );
}
export default App;
