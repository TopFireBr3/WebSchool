import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  height: 500px;
  margin: 0px 10vw;
  min-height: 80vh;
  padding-top: 50px;

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
