import { createContext } from "react";

import axios from 'axios'

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {


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
      }
    return (<LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>);
}