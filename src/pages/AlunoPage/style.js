import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  flex-direction: column;

  margin-top: 58px;

  margin-bottom: 90px;
`;

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  gap: 1.5rem;
  height: fit-content;
  margin-bottom: 50px;
  background-color: var(--pink-0);
  border-radius: 12px;
  width: 80%;

  padding: 30px;

  .imageAluno {
    width: 20vh;
    height: 20vh;

    box-sizing: border-box;

    border-radius: 100%;
  }

  .infosAtividadeProfessor {
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5vh;
  }

  .infosAluno {
    display: flex;
    flex-direction: column;

    gap: 10px;
  }

  .infosAluno > div {
    background-color: var(--blue-0);

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 10px;
    border-radius: 10px;

    gap: 5vh;
  }

  .optionsProfessor > form {
    background-color: var(--blue-0);

    display: flex;
    flex-direction: column;
    width: 35vh;

    gap: 5px;

    border-radius: 8px;
    padding: 10px;

    select,
    button {
      border: none;
      padding: 10px;
    }

    button {
      background-color: var(--pink-1);
      font-weight: 500;
      color: var(--body);
    }
  }

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;

    gap: 10px;
  }
`;

export const QuadroContainer = styled.div`
  width: 100%;
  height: fit-content;
  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    li {
      display: flex;
      width: 100%;
      padding: 15px;
      justify-content: space-between;
      height: 140px;
      color: black;
      align-items: center;
      background-color: var(--blue-1);
      h1 {
        font-size: 15px;
        width: 90px;
        height: 100px;
      }
    }
  }
`;

export const FooterContainer = styled.div`
  margin-top: 200px;
`;

export const ModalContainer = styled.div`
  .modal-add-notas {
    display: ${(props) =>
      props.modalAddNotas ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-add-notas-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .modal-add-ativs {
    display: ${(props) =>
      props.modalAddAtivs ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-add-ativs-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .modal-add-feed {
    display: ${(props) =>
      props.modalAddFeed ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-add-feed-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .modal-add-infos {
    display: ${(props) =>
      props.modalAddInfos ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: var(--black); /* Fallback color */
    background-color: var(--bg-modal); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-add-infos-content {
    background-color: var(--grey-0);
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid var(--grey-1);
    width: 80%;
  }

  .modal-edit-notas {
    display: ${(props) =>
      props.modalEditNotas ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: var(--black); /* Fallback color */
    background-color: var(--bg-modal); /* Black w/ opacity */
  }

  .modal-edit-notas-content {
    background-color: var(--grey-0);
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid var(--grey-1);
    width: 80%;
  }

  .modal-edit-feed {
    display: ${(props) =>
      props.modalEditFeed ? "flex" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: var(--black); /* Fallback color */
    background-color: var(--bg-modal); /* Black w/ opacity */
  }

  .modal-edit-feed-content {
    background-color: var(--grey-0);
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid var(--grey-1);
    width: 80%;
  }
`;
