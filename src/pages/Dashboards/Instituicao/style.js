import styled from "styled-components";

export const ThemeMain = styled.main`
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
    color: var(--pink-1);
    border: none;
    width: auto;
    padding: 10px;
    font-size:20px;
    background-color: var(--blue-0);
    border-radius: 10px;
  }

  button:hover {
    background-color: var(--blue-1);
    width: auto;
    padding: 10px;
    border-radius: 10px;
  }
  @media (min-width: 768px){
    flex-direction: column;
    gap:20px;
    margin: 80px 20px 200px 30px;
  }
`;

export const Container = styled.div`
  display: flex;

  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};

  margin: ${(props) => props.m};

  border-radius: ${(props) => props.br};
  background-color: ${(props) => props.bc};

  @media (min-width: 768px){
    flex-direction: column;
    align-items:center;
  }
`;

export const ThemeDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd};
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
  color: ${(props) => props.c};

  @media (min-width: 768px){
    flex-direction: row;
    justify-content: flex-end;
    gap:5px;
    margin: 0px 10% 0px 0px;
  }

`;

export const ThemeUl = styled.div`
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
  color: ${(props) => props.c};

  @media (min-width: 768px){
    padding:20px 0px 0px 20px;
    width:60%;

  }

`;

export const ThemeNav = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd};
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
  color: var(--pink-1);

  @media (min-width: 768px){
    justify-content:flex-start;
    gap:10px;
    margin: 0px 0px 0px 20%;
  }
`;
