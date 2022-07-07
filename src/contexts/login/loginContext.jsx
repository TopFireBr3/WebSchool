import { createContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {

    async function Login (formLogin, setLoading, setError, callback){
        try {
            
            const response = await axios.post("https://api-web-school.herokuapp.com/login", formLogin);
            if(callback){
                callback(response);
            }

        } catch (error) {
            setError(error); 
            toast.error('Senha ou E-mail incorretos')
            setTimeout(() => {
                setError(false);
            }, 3000);

        } finally {
            setLoading(false); 
        }
    }

    return(
        <LoginContext.Provider value={{ Login }}>
            {children}
        </LoginContext.Provider>
    )
}