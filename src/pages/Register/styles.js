import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;

  height: 100vh;
`;

export const LeftDiv = styled.div`
  background-color: #fdf0e7;

  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #c8fcfa;

  border-radius: 8px;
  width: 40%;
  padding: 20px;

  box-sizing: border-box;

  h1 {
    font-weight: 400;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 25px;
  width: 80%;

  box-sizing: border-box;

  .buttonRegister {
    background-color: #e08692;
    color: #fff;

    border: none;
    border-radius: 8px;

    width: 100%;
    height: 40px;

    font-size: 20px;
  }

  input {
    background-color: #fdf0e7;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  label {
    background-color: #fdf0e7;
  }

  a {
    color: #000;
  }

  @media (max-width: 768px) {
    width: 80%;

    gap: 13px;
  }
`;

export const RightDiv = styled.div`
  background-color: #c8fcfa;

  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    height: 80vh;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
