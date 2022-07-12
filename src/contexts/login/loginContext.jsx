import { createContext } from "react";

import { api } from "../../services/api";

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
<<<<<<< HEAD

    const history = useHistory()

    function Login(formLogin) {
        axios.post(
            "https://api-web-school.herokuapp.com/login",
            formLogin
        )
        .then((response) => {
            localStorage.setItem("Token", response.data.accessToken);
            toast.success("Entrando na aplicação");
            setTimeout(() => history.push(`/dashboard/${response.data.user.type}`) , 3000);
        })   
        .catch((err)=>  toast.error(err.response.data))
=======
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
>>>>>>> 0e0f7600324a40dbc1e145abe8719c872884b3e5
    }

    return (<LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>);
}