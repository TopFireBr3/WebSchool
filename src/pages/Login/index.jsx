import learning from '../../assets/Learning.gif'

import { useForm } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState, useContext } from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button, Link } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LoginContext } from '../../providers/loginContext';

import { FormLogin, MainLogin, MainLoginDiv } from "./styled"



const Login = ()=> {

    const history = useHistory()

    const { Login } = useContext(LoginContext)
    
    const [ showPassword, setShowPassword ] = useState('password')
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ sucess, setSucess ] = useState(false)
    
    const schemaForm = yup.object().shape({
        email: yup.string().required('Digite seu e-mail').email('Digite um e-mail válido'),
        password: yup.string().required('Digite sua senha').min(6, 'Sua senha deve ter no mínimo 6 caracteres'),
    })

    const onHandleSubmit = (formLogin) => Login(formLogin, setLoading, setError, (res) => {
        setSucess(res)
        localStorage.setItem('Token', res.data.accessToken)        
        toast.success('Entrando na aplicação', {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
    })

    console.log(loading, error, sucess)

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schemaForm)
    })

    
    return (

        <main>
            <MainLogin>
                <MainLoginDiv bc='var(--blue-0)' className='MainLoginDiv'>
                    <img alt='Gif Imagem garoto estudando' src={learning}/>
                </MainLoginDiv>
                <MainLoginDiv className='MainLoginForm'>
                    <FormLogin onSubmit={handleSubmit(onHandleSubmit)} className='form'>
                        <h2>Login</h2>
                        <Input className='Input' placeholder='Digite seu e-mail' {...register('email')}/>
                        {errors.email && <span className='errorMessage1'>{errors.email.message}</span>}
                        <Input className='Input' type={showPassword} placeholder='Senha' {...register('password')}/>
                        {errors.password && <span className='errorMessage'>{errors.password.message}</span>}
                        {showPassword === 'password' ? <AiOutlineEye className='showPassword' onClick={()=> setShowPassword('text')}/> : <AiOutlineEyeInvisible className='showPassword' onClick={()=> setShowPassword('password')}/>}
                        <Button variant="contained" type='submit'>Entrar</Button>
                        <Link className='Link' onClick={() => history.push('/')}>voltar para a página inicial</Link>
                    </FormLogin>
                    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/> 
                </MainLoginDiv>
            </MainLogin>
        </main>

    )

}

export default Login