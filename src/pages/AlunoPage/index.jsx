import Footer from '../../components/Footer'
import {Container,Content,ImgContainer,InfosContainer,QuadroContainer,FooterContainer,ModalContainer} from './style'
import logoImg from '../../assets/img2.png';
import { useEffect, useState } from 'react';
import {useForm}from 'react-hook-form'

import axios from 'axios'

const AlunoPage = () =>{

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlByb2Z0ZXN0ZUBlZHVjYWNhby5jb20iLCJpYXQiOjE2NTc2MjgzOTcsImV4cCI6MTY1NzYzMTk5Nywic3ViIjoiOSJ9.Z-L5Y8zrob4OWVzo200iMrI9RpRK_DFSkB2K-qm__IA'
    const [notas,setNotas] = useState([]);
    const [feedbacks,setFeedbacks] = useState([]);
    const [infos,setInfos] = useState([]);
    const [ativs,setAtivs] = useState([]);
    const userId = 2;
    const [option,setOption] = useState('Notas');
    const [modalAddNotas,setModalAddNotas] = useState(false);
    const [modalAddAtivs,setModalAddAtivs] = useState(false);
    const [modalAddInfos,setModalAddInfos] = useState(false);
    const [modalAddFeed,setModalAddFeed] = useState(false);


    const {register, handleSubmit} = useForm()

 
    const onSubmitFunction = (data) => {

        switch (data.option){
            case 'Notas':
                axios.get('https://api-web-school.herokuapp.com/notas?userId=2',{
            headers:{
                'Authorization': 'Bearer ' + token,
            }
        }).then(res=>{
            
            setNotas(res.data)
            setFeedbacks(false);
            setAtivs(false);
            setInfos(false);
        })
            .catch(err=>console.log(err))
            break;

            case 'Feed':
                axios.get('https://api-web-school.herokuapp.com/feedback?userId=2',{
                    headers:{
                        'Authorization': 'Bearer ' + token,
                    }
                }).then(res=>{
                    
                    setNotas(false);
                    setFeedbacks(res.data);
                    setAtivs(false);
                    setInfos(false); 
                })
                    .catch(err=>console.log(err))
                    break;
                
            case 'Atividades':
                axios.get('https://api-web-school.herokuapp.com/atividades?userId=2',{
                    headers:{
                        'Authorization': 'Bearer ' + token,
                    }
                }).then(res=>{
                    setAtivs(res.data);
                    setNotas(false);
                    setFeedbacks(false);
                    setInfos(false);  
                })
                    .catch(err=>console.log(err))

                break;

            case 'Infos Gerais':
                axios.get('https://api-web-school.herokuapp.com/infos',{
                    headers:{
                        'Authorization': 'Bearer ' + token,
                    }
                }).then(res=>{
                    setInfos(res.data); 
                     setAtivs(false);
                    setNotas(false);
                    setFeedbacks(false);
                     
                })
                    .catch(err=>console.log(err))



                break;
            default:
                break;


        }

        

        
    }

    const onSubmitAddNotaFunction = (data) => {
        const objNota = {
            materia:data.materia,
            nota:data.nota,
            userId:Number(data.idNota)
        }

        axios.post('https://api-web-school.herokuapp.com/notas',objNota,{
            headers:{
                'Authorization': 'Bearer ' + token,
            }
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    const onSubmitAddFeedFunction = (data) => {
        console.log(data)
        const objFeed = {
            feedback:data.feedback,
            name:data.name,
            userId:Number(data.idFeed)

        }

        axios.post('https://api-web-school.herokuapp.com/feedback',objFeed,{
            headers:{
                'Authorization': 'Bearer ' + token,
            }
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))

    }

    const onSubmitAddAtivFunction = (data) => {
        console.log(data)
        const objAtiv = {
            url_atividade: data.url_atividade,
            userId:userId
        } 
        axios.post('https://api-web-school.herokuapp.com/atividades',objAtiv,{
            headers:{
                'Authorization': 'Bearer ' + token,
            }
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))


    }

    const onSubmitAddInfoFunction = (data) => {
        const objInfo = {
            message:data.message
        }
        
        axios.post('https://api-web-school.herokuapp.com/infos',objInfo,{
            headers:{
                'Authorization': 'Bearer ' + token,
            }
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))


    }
        
    



    const deleteNota = (id) => {
        axios.delete(`https://api-web-school.herokuapp.com/notas/${id}`,{
            headers:{
                'Authorization': 'Bearer ' + token,
            }
        }).then(res=>{
            console.log(res)
        })
            .catch(err=>console.log(err))

    }

    const deleteFeed = (id) => {
        axios.delete(`https://api-web-school.herokuapp.com/feedback/${id}`,{
            headers:{
                'Authorization': 'Bearer ' + token,
            }
        }).then(res=>{
            console.log(res)
        })
            .catch(err=>console.log(err))


    }

    const deleteAtiv = (id) =>{
        axios.delete(`https://api-web-school.herokuapp.com/atividades/${id}`,{
            headers:{
                'Authorization': 'Bearer ' + token,
            }
        }).then(res=>{
            console.log(res)
        })
            .catch(err=>console.log(err))

    }

    const deleteInfo = (id) =>{
        axios.delete(`https://api-web-school.herokuapp.com/infos/${id}`,{
            headers:{
                'Authorization': 'Bearer ' + token,
            }
        }).then(res=>{
            console.log(res)
        })
            .catch(err=>console.log(err))

    }
    


    const addToAluno = (option) => {
     
        
        switch (option){
            case 'Notas':
                setModalAddNotas(true);
                break;
            case 'Feed':
                setModalAddFeed(true);
                break;
            case 'Atividades':
                setModalAddAtivs(true);
                break;
            case 'Infos Gerais':
                setModalAddInfos(true);
                break;
            default:
                break;
            
        }
    }

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
            <ImgContainer>
                imgteste
            </ImgContainer>
            <InfosContainer>
                <h3>Nome</h3>
                <h3>Turma</h3>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <select {...register('option')} onChange={(e)=>setOption(e.target.value)}>
                    <option>Notas</option>
                    <option>Feed</option>
                    <option>Atividades</option>
                    <option>Infos Gerais</option>
                </select>
                
                <button type='submit'>search</button>
            </form>
            <button onClick={()=>addToAluno(option)}>add</button>
            
            </InfosContainer>
        
        <QuadroContainer>
            
         <ul>{notas && notas.map(nota => <li key={nota.id}><h1>{nota.materia}</h1> <p>{nota.nota}</p> <button>edit</button> <button onClick={()=>deleteNota(nota.id)}>delete</button></li>)}</ul>
         <ul>{feedbacks && feedbacks.map(feed => <li key={feed.id}> <h1>{feed.feedback}</h1><button>edit</button> <button onClick={()=>deleteFeed(feed.id)}>delete</button></li>)}</ul> 
         <ul>{infos && infos.map(info => <li key={info.id}><h1>{info.message}</h1><button onClick={()=>deleteInfo(info.id)}>delete</button></li>)}</ul> 
         <ul>{ativs && ativs.map(ativ => <li key={ativ.id}><h1>Link da atividade:{ativ.url_atividade}</h1><button onClick={()=>deleteAtiv(ativ.id)}>delete</button></li>)}</ul>  
             
            
            
        </QuadroContainer>
            



        </Content>
        
        </Container>
        

        <FooterContainer>
            
        <Footer/>
        </FooterContainer>

        <ModalContainer  modalAddNotas={modalAddNotas} modalAddAtivs={modalAddAtivs} modalAddFeed={modalAddFeed} modalAddInfos={modalAddInfos}>
        
            <div className="modal-add-notas">
            <div className="modal-add-notas-content">
                <button onClick = {()=>setModalAddNotas(false)}>close modal</button>
                <p>Notas</p>
                <form  onSubmit={handleSubmit(onSubmitAddNotaFunction)}>
                    <input type='text' placeholder='materia' {...register('materia')}></input>
                    <input type='text' placeholder='nota'{...register('nota')}></input>
                    <input type='text' placeholder='userId'{...register('idNota')}></input>
                    <button type='submit'>adicionar nota</button>
                </form>
            </div>

            </div>

            <div className="modal-add-feed">
            <div className="modal-add-feed-content">
                <button onClick = {()=>setModalAddFeed(false)}>close modal</button>
                <p>Feed</p>
                <form onSubmit={handleSubmit(onSubmitAddFeedFunction)}>
                    <input type='text' placeholder='feedback' {...register('feedback')}></input>
                    <input type='text' placeholder='nome' {...register('name')}></input>
                    <input type='text' placeholder='userId'{...register('idFeed')}></input>
                    <button type='submit'>adicionar feedback</button>
                </form>
            </div>

            </div>

            <div className="modal-add-ativs">
            <div className="modal-add-ativs-content">
                <button onClick = {()=>setModalAddAtivs(false)}>close modal</button>
                <p>Atividades</p>
                <form onSubmit={handleSubmit(onSubmitAddAtivFunction)}>
                    <input placeholder='url atividade' {...register('url_atividade')}></input>
                    <input placeholder='userId' {...register('idAtiv')}></input>
                    <button type='submit'>adicionar atividade</button>
                </form>
            </div>

            </div>

            <div className="modal-add-infos">
            <div className="modal-add-infos-content">
                <button onClick = {()=>setModalAddInfos(false)}>close modal</button>
                <p>Infos</p>
                <form onSubmit={handleSubmit(onSubmitAddInfoFunction)}>
                <input type='text' placeholder='infos' {...register('message')}></input>
                <button type='submit'>adicionar info</button>
                </form>
            </div>

            </div>


        </ModalContainer>
</>
    )
}

export default AlunoPage;


