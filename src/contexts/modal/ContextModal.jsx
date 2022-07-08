import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(!modal);
  }
  function openModal1() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <ModalContext.Provider value={{ modal, openModal, openModal1, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
