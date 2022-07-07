import styled from 'styled-components'





export const Container = styled.div`
text-align: center;
display:flex;
height: 100vh;
flex-direction: column;
align-items: center;
gap: 3rem;

header{
    padding: 20px;

    width: 100%;
    height: 100px;
    background-color: var(--blue-1);
}




`

export const SliderContainer = styled.div`
width:80%
`


export const InfosContainer = styled.div`

display: flex;
flex-direction: column;
gap: 0.8rem;
width: 730px;
height: 710px;
@media (max-width:768px) {
    width: 305px;
    height: 549px;
}



`



export const FooterContainer = styled.div`
background-color: var(--blue-1);
width: 100%;
padding: 15px;
justify-content: space-around;
display: flex;
@media (max-width:768px){
    #contact{
        display: none;
    }
    justify-content: center;


}

`