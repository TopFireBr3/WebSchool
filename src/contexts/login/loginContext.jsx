import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

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
            setTimeout(() => history.push(`/dash-${response.data.user.type}`) , 3000);
        })   
        .catch((err)=>  toast.error(err.response.data))
    }

    return (<LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>);
}