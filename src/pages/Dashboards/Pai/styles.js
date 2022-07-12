import styled from "styled-components";

import book from "../../../assets/book.png"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10vw;
  gap: 15px;
  height: 80vh;
  /* background-image: url(${book}); */

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

export const DivFeedback = styled.div`
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  form > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  form > div > p {
    display: flex;
    width: fit-content;
    background-color: var(--blue-0);
    margin: 5px 10px;
    border-radius: 5px;
    padding: 10px;
    font-weight: 700;
  }

  form > div > button {
    display: flex;
    width: 40px;
    background-image: url(${book});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--blue-0);
    margin: 5px 10px;
    border-radius: 5px;
    padding: 10px;
  }

  img {
    width: 100px;
    height: 100px;
  }

  form > textarea {
    margin: 5px 10px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    min-height: 70px;
  }
`;
