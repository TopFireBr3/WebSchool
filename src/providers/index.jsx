import { LoginProvider } from "../contexts/login/loginContext.jsx";
import { RegisterInfoProvider } from "../contexts/register/RegisterInfoContext.jsx";
import { ModalProvider } from "../contexts/modal/ContextModal.jsx";

const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterInfoProvider>
        <ModalProvider>{children}</ModalProvider>
      </RegisterInfoProvider>
    </LoginProvider>
  );
};

export default Providers;
