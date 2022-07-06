import { useForm } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button, Link } from '@mui/material';

import { FormLogin, MainLogin, MainLoginDiv } from "./styled"
import learning from '../../assets/Learning.gif'
import { useHistory } from 'react-router-dom';

const Login = ()=> {

    const history = useHistory()

    const [ showPassword, setShowPassword ] = useState('password')

    const schemaForm = yup.object().shape({
        email: yup.string().required('Digite seu matrícula'),
        password: yup.string().required('Digite sua senha').min(6, 'Sua senha deve ter no mínimo 6 caracteres'),
    })

    const onHandleSubmit = (data) => console.log(data)

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
                        <Input className='Input' placeholder='Número de matrícula' {...register('email')}/>
                        {errors.email && <span className='errorMessage1'>{errors.email.message}</span>}
                        <Input className='Input' type={showPassword} placeholder='Senha' {...register('password')}/>
                        {errors.password && <span className='errorMessage'>{errors.password.message}</span>}
                        {showPassword === 'password' ? <AiOutlineEye className='showPassword' onClick={()=> setShowPassword('text')}/> : <AiOutlineEyeInvisible className='showPassword' onClick={()=> setShowPassword('password')}/>}
                        <Button variant="contained" type='submit'>Entrar</Button>
                        <Link className='Link' onClick={() => history.push('/')}>voltar para a página inicial</Link>
                    </FormLogin>
                </MainLoginDiv>
            </MainLogin>
        </main>

    )

}

export default Login