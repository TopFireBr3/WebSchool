import { Container, ThemeDiv } from "./style";

import { BiTrash } from "react-icons/bi";

import { apiPrivate } from "../../../../services/api";
import { toast } from "react-toastify";

const Card = ({ cadastro, setVitrine, setType}) => {
  function remove() {
    apiPrivate.delete(`/users/${cadastro.id}`)
    .then(toast.success("Usuário deletado"))

    apiPrivate
    .get("/users?type=professor")
    .then((res) => {
      setType("professor");
      setVitrine(res.data);
    })
    .catch((err) => {console.error(err)
      toast.error("Ops, algo deu errado!")
    });

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
