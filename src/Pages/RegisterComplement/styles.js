import styled from "styled-components";

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #c8fcfa;

  border-radius: 8px;
  width: 60%;
  padding: 20px;

  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 2vh;
  }
`;
