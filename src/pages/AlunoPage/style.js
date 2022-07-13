import styled from "styled-components";


export const Container = styled.div`
display: flex;
align-items: center;
height: fit-content;
flex-direction: column;

header{
    width: 100%;
    background-color: var(--blue-1);
    display: flex;
    justify-content: space-between;
    padding: 15px;

    @media (max-width:380px) {
        img{
            width: 210px;
        }
        
    }

    button{
        padding:10px;
        border: none;
        font-weight: 700;
        border: 1px solid #222;
        border-radius: 10px;
        cursor: pointer;
        background-color: var(--pink-0);
    }

}

`


export const Content = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15px;
gap:1.5rem;
height: fit-content;
margin-bottom: 50px;
background-color: var(--pink-0);
border-radius: 12px;
padding: 15px;
width: 80%;

`

export const ImgContainer = styled.div`

`

export const InfosContainer = styled.div`

`

export const QuadroContainer = styled.div`
width: 100%;
height: fit-content;
ul{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    li{
        display: flex;
        width: 100%;
        padding: 15px;
        justify-content: space-between;
        height: 140px;
        color: black;
        align-items: center;
        background-color: var(--blue-1);
        h1{
            font-size: 15px;
            width: 90px;
            height: 100px;

        }
        
    }
}

`


export const FooterContainer = styled.div`
margin-top:200px;


`

export const ModalContainer = styled.div`

.modal-add-notas {
  display:${props=>props.modalAddNotas ? 'flex' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-add-notas-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal-add-ativs {
  display:${props=>props.modalAddAtivs ? 'flex' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-add-ativs-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal-add-feed {
  display:${props=>props.modalAddFeed ? 'flex' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-add-feed-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal-add-infos {
  display:${props=>props.modalAddInfos? 'flex' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-add-infos-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}




`