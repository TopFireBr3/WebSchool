import { LoginProvider } from "../contexts/login/loginContext.jsx";
import { ModalProvider } from "../contexts/modal/ContextModal.jsx";


const Providers = ({ children }) => {

  
  return <LoginProvider><ModalProvider>{children}</ModalProvider></LoginProvider>;
};

export default Providers;
