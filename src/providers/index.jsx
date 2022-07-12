import { LoginProvider } from "../contexts/login/loginContext.jsx";
import { RegisterInfoProvider } from "../contexts/register/RegisterInfoContext.jsx";
import { ModalProvider } from "../contexts/modal/ContextModal.jsx";
import { DashboardPaiProvider } from "../contexts/dashboardPai/dashboardPai.jsx";
import { UserProvider } from "../contexts/User/UserContext.jsx";

const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <UserProvider>
        <RegisterInfoProvider>
          <DashboardPaiProvider>
            <ModalProvider>{children}</ModalProvider>
          </DashboardPaiProvider>
        </RegisterInfoProvider>
      </UserProvider>
    </LoginProvider>
  );
};

export default Providers;
