import { ModalProvider } from "../contexts/modal/ContextModal.jsx";
import { RegisterInfoProvider } from "../contexts/Register/RegisterInfoContext.jsx";

const Providers = ({ children }) => {
  return (
    <RegisterInfoProvider>
      <ModalProvider>{children}</ModalProvider>
    </RegisterInfoProvider>
  );
};

export default Providers;
