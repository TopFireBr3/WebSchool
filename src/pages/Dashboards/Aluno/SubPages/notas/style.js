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

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 500px;
  overflow:auto;
  margin: 0px 10vw;

  height: 80vh;

  h4 {
    text-align: center;
    background-color: var(--blue-0);
    margin: 5px 10px;
    border-radius: 5px;
    padding: 10px;
  }

  h2 {
    align-self: flex-start;
    width: 80vw;
    min-width: 300px;
    /* max-width: 1000px; */
    max-width: ${(props) => props.mw};
  }

  div {
    background-color: var(--pink-0);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
    width: 80vw;
    min-width: 300px;
    /* max-width: 1000px; */
    max-width: ${(props) => props.mw};
    max-height: 65vh;
  }

  div > ul {
    overflow: auto;
  }

  div > h3 {
    display: flex;
    justify-content: center;
  }

  div > h3,
  div > ul > li,
  button {
    background-color: var(--blue-0);
    margin: 5px 10px;
    border-radius: 5px;
    padding: 10px;
  }

  div > ul > li > p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
  }

  div > ul > li > span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    color: var(--pink-2);
    text-decoration: underline;
  }

  button {
    border: none;
    padding: 10px;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    h2 {
      align-self: center;
    }
  }
`;
