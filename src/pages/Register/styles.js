import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;

  height: 100vh;
`;

export const LeftDiv = styled.div`
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

  background-color: var(--blue-0);

  border-radius: 8px;
  width: 70%;
  padding: 20px;

  box-sizing: border-box;

  h1 {
    font-weight: 400;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    width: 80%;

    h1 {
      margin-bottom: 20px;
    }
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
    width: 100%;
    background-color: var(--pink-0);
    color: var(--body);
    margin-top: 15px;

    &:hover {
      background-color: var(--pink-1);
      transition: 0.3s;
    }

    span {
      position: inherit;
    }
  }

  input {
    height: 6vh;
    padding-left: 15px;
    background-color: var(--grey-0);
    border-radius: 1vh;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .error {
    position: relative;
    color: var(--error);
    font-size: 2.3vh;
    height: 2vh;
    bottom: 8px;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 80%;

    gap: 13px;
  }

  @media (min-width: 1024px) {
    .buttonRegister {
      margin-top: -10px;
    }

    input {
      margin-top: -25px;
    }

    .error {
      bottom: 18px;
    }
  }
`;

export const RightDiv = styled.div`
  background-color: var(--blue-0);

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
