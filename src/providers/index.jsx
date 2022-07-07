import { LoginProvider } from "../contexts/login/loginContext.jsx";
import { ModalProvider } from "../contexts/modal/ContextModal.jsx";

const Providers = ({ children }) => {
  return (
    <ModalProvider>
      <LoginProvider>{children}</LoginProvider>
    </ModalProvider>
  );
};

export default Providers;
