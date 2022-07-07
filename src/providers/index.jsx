import { ModalProvider } from "../contexts/modal/contextModal.jsx";

const Providers = ({ children }) => {
    return <ModalProvider>{children}</ModalProvider>
};

export default Providers;