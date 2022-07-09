import axios from "axios";
import { BiTrash } from "react-icons/bi";
import { Container, ThemeDiv } from "./style";

const Card = ({ cadastro }) => {
  console.log(cadastro);
  function remove() {
    axios
      .delete(`https://api-web-school.herokuapp.com/users/${cadastro.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      })
      .then((res) => {
        console.log(res);
        console.log("deu bom");
      })
      .catch((e) => {
        console.log(e);
        console.log("deu ruim");
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
      {console.log(cadastro.type)}
      {cadastro.type === "aluno" && (
        <>
          <p>
            {cadastro.registration} - {cadastro.name}
          </p>
          <ThemeDiv j="space-between" w="36%" p="0px 10px 0px 0px">
            <p>Aluno</p> <BiTrash onClick={remove}/>
          </ThemeDiv>
        </>
      )}
      {cadastro.type === "professor" && (
        <>
          <p>
            {cadastro.matter} - {cadastro.name}
          </p>
          <ThemeDiv j="space-between" w="36%" p="0px 10px 0px 0px">
            <p>Professor</p> <BiTrash onClick={remove}/>
          </ThemeDiv>
        </>
      )}
    </Container>
  );
};

export default Card;
