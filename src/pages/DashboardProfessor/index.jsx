import Footer from '../../components/Footer'
import {Container, Content,TurmasContainer,TurmasHeaderContainer,FooterContainer} from './style'
import logoImg from '../../assets/img2.png';
import { useState } from 'react';


const DashboardProfessor = () =>{

    const [activeTurma, setActiveTurma] = useState('');




    return (
        <>
<Container>
        <header>
            <img src={logoImg}/>
            <button>
                Sair
            </button>

        </header>
            <Content>
                <h1>{activeTurma ? '' : 'Olá professor X'}</h1>
                <TurmasContainer>
                    <TurmasHeaderContainer buttonDisplay={!activeTurma}>
                        <h2>{activeTurma || 'Turmas'}</h2>
                        <button onClick={()=>setActiveTurma('')}>X</button>

                       

                    </TurmasHeaderContainer>
                    <ul>
                        
                             <li><button onClick={()=>setActiveTurma('Turma 101')}>{activeTurma? 'Aluno 01' : 'Turma 101'}</button></li>
                       
                        <li><button onClick={()=>setActiveTurma('Turma 102')}>{activeTurma? 'Aluno 02' : 'Turma 102'}</button></li>
                    </ul>

                    <h3>{ activeTurma ? '' : 'Informações gerais'}</h3>
                </TurmasContainer>
            </Content>
            </Container>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
            </>
       
    )
    
}


export default DashboardProfessor


