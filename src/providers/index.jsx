import { LoginProvider } from "../contexts/login/loginContext.jsx";
import { RegisterInfoProvider } from "../contexts/register/RegisterInfoContext.jsx";
import { ModalProvider } from "../contexts/modal/ContextModal.jsx";
import { DashboardPaiProvider } from "../contexts/dashboardPai/dashboardPai.jsx";

const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterInfoProvider>
        <DashboardPaiProvider>
          <ModalProvider>{children}</ModalProvider>
        </DashboardPaiProvider>
      </RegisterInfoProvider>
    </LoginProvider>
  );
};

export default Providers;
