import { Container, ThemeDiv } from "./style";

import { BiTrash } from "react-icons/bi";

import { apiPrivate } from "../../../../services/api";

const Card = ({ cadastro }) => {
  function remove() {
    apiPrivate.delete(`/users/${cadastro.id}`);
  }

  return (
    <Container
      bc="var(--blue-0)"
      br="8px"
      w="96%"
      h="40px"
      a="center"
      j="space-between"
      p="0px 0px 0px 20px"
    >
      {cadastro.type === "aluno" && (
        <>
          <p>
            {cadastro.registration} - {cadastro.name}
          </p>
          <ThemeDiv j="space-between" w="36%" p="0px 10px 0px 0px">
            <p>Aluno</p> <BiTrash onClick={remove} />
          </ThemeDiv>
        </>
      )}

      {cadastro.type === "professor" && (
        <>
          <p>
            {cadastro.matter} - {cadastro.name}
          </p>
          <ThemeDiv j="space-between" w="36%" p="0px 10px 0px 0px">
            <p>Professor</p> <BiTrash onClick={remove} />
          </ThemeDiv>
        </>
      )}
    </Container>
  );
};

export default Card;
