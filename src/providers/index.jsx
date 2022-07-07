import { ModalProvider } from "../contexts/modal/ContextModal.jsx";

const Providers = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default Providers;
