import {Container,SliderContainer,InfosContainer,FooterContainer} from './styles'

import ImageGallery from 'react-image-gallery';


import axios from 'axios'

import { useState,useEffect } from 'react';

import Header from '../../components/Header'



const Notices = () => {

  const [dataImg,setDataImg] = useState([]);
  const [dataNoticias,setDataNoticias] = useState([]);
  const [indexNoticia,setIndexNoticia] = useState(0);



  useEffect(()=>{
    axios.get('https://api-web-school.herokuapp.com/eventos').then(res=>{
  setDataNoticias(res.data)
  setDataImg(res.data.map(item => {
    return {original:item.img,thumbnail:item.img}
  }))
  
})

  },[dataNoticias])


  function slide(){
    
    if(indexNoticia === dataNoticias.length - 1){
      setIndexNoticia(0)
    }else{
      setIndexNoticia(indexNoticia + 1);
    }
}




    return (
        <Container>

            <header>header</header>
            <SliderContainer>
                
                <ImageGallery items={dataImg} showFullscreenButton={false} showPlayButton={false} originalWidth={'200px'}  onSlide={slide}/>
            </SliderContainer>
            <InfosContainer>
             
                <h1>{dataNoticias[indexNoticia]?.titulo}</h1>
                <p>{dataNoticias[indexNoticia]?.descricao}</p>
            </InfosContainer>

            <FooterContainer>
                <span id='contact'>Email para contato:lucasdeleonpaz@gmail.com</span>
                <span>&copy; Copyright WebSchool 2022</span>
            </FooterContainer>

        </Container>
    )
}

export default Notices