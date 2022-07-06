import styled from "styled-components";

export const ThemeHeader = styled.header`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  overflow-x: ${(props) => props.ox};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};
  border-radius: ${(props) => props.br};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};

  background-color: ${(props) => props.bc};

  * {
    margin: none;
  }
  img {
    width: 200px;
    height: 40px;

    margin-left: 5%;
  }
  .button1 {
    margin-right: 30px;
    display:flex;
  }
  .react-modal {
    background-color: black;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ReactModal__Overlay {
    background-color: var(--grey-1);
  }
  .nav{
      display:none;
  }
  @media (min-width: 768px){
    .button1{
      display:none;
    }
    .nav{
      display:flex;
    }
  }
`;

export const ThemeDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  overflow-x: ${(props) => props.ox};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};
  border-radius: ${(props) => props.br};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};

  background-color: ${(props) => props.bc};

  button {
    background: none;
    border: none;
    font-size: 17px;
  }
  button:hover {
    text-decoration: underline;
    color: var(--pink-2);
  }
`;
