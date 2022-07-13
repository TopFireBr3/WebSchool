import styled from "styled-components";

export const ThemeMain = styled.main`
  display: flex;
  flex-direction: ${(props) => props.f};

  margin: ${(props) => props.m};

  h1 {
    margin: 100px 0px;
  }
`;

export const ThemeDiv = styled.div`
  display: flex;

  background-color: var(--white);

  padding: 15px;
  border-radius: 10px;

  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.f};
  gap: ${(props) => props.g};

  width: ${(props) => props.w};

  padding: ${(props) => props.p};

  border-radius: ${(props) => props.br};
  background-color: ${(props) => props.bc};
`;
