import { createContext } from "react";

import { api } from "../../services/api";

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const history = useHistory();

  async function Login(formLogin) {
    try {
      const response = await api.post("/login", formLogin);

      localStorage.setItem("@WebSchool:Token", response.data.accessToken);

      toast.success("Entrando na aplicação");

      setInterval(() => {
        history.push("/dashboard/instituicao");
      }, 2500);
    } catch (_) {
      toast.error("E-mail ou Senha incorretos");
    }
  }

  return (
    <LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>
  );
};
