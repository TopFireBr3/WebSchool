import styled from "styled-components";

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--blue-0);

  border-radius: 8px;
  width: 60%;
  padding: 20px;

  box-sizing: border-box;

  h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 2vh;
  }
`;
