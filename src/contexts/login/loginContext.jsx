import { createContext } from "react";

import { api } from "../../services/api";

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const history = useHistory();

  function Login(formLogin) {
    api
      .post("/login", formLogin)
      .then((response) => {
        localStorage.setItem(
          "@WebSchool:Token",
          JSON.stringify(response.data.accessToken)
        );

        localStorage.setItem(
          "@WebSchool:UserId",
          JSON.stringify(response.data.user.id)
        );
        toast.success("Entrando na aplicação");

        setInterval(() => {
          history.push(`/dashboard/${response.data.user.type}`);
        }, 2500);
      })
      .catch((_) => toast.error("E-mail ou Senha incorretos"));
  }

  return (
    <LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>
  );
};
