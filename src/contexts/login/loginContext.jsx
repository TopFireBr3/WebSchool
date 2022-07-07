import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  async function Login(formLogin) {
    try {
      const response = await axios.post(
        "https://api-web-school.herokuapp.com/login",
        formLogin
      );

      localStorage.setItem("Token", response.data.accessToken);

      toast.success("Entrando na aplicação");
    } catch (_) {
      toast.error("E-mail ou Senha incorretos");
    }
  }

  return (
    <LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>
  );
};
