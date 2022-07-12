import styled from "styled-components";


export const Container = styled.div`


header{
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
height: 400px;
margin-bottom: 50px;

`

export const TurmasContainer = styled.div`
background-color: var(--pink-0);
border-radius: 12px;
padding: 15px;
width: 80%;
height: fit-content;
display: flex;
flex-direction: column;
gap:1.5rem;
ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;

}
li{
    background-color: var(--blue-0);
    border-radius: 12px;
    padding: 15px;
    font-weight: 600;
    button{
        cursor: pointer;
        background:none;
        border: none;
        font-weight: 600;
        width: 100%;
    }

    h3{
        text-align: left;
    }

}


`

export const TurmasHeaderContainer = styled.div`

display: flex;
justify-content: center;

button{
    display: ${props=>props.buttonDisplay ? 'none' : 'block'};
    margin-left: 100px;
    background: none;
    border: none;
}


`

export const FooterContainer = styled.div`
margin-top:200px;
`