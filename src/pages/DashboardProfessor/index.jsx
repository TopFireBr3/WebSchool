import Footer from "../../components/Footer";
import {
  Container,
  Content,
  TurmasContainer,
  TurmasHeaderContainer,
  FooterContainer,
} from "./style";
import logoImg from "../../assets/img2.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import Header from "../Dashboards/Professor/Header";
import { api } from "../../services/api";
import { UserContext } from "../../contexts/User/UserContext";

const DashboardProfessor = () => {
  const token = JSON.parse(localStorage.getItem("@WebSchool:Token"));
  const [activeTurma, setActiveTurma] = useState("");
  const nomeProf = "Teste";
  const [turmas, setTurmas] = useState([]);
  const [alunos, setAlunos] = useState([]);

  const { setUserContext } = useContext(UserContext);

  useEffect(() => {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("@WebSchool:UserId"))}`)
      .then((res) => {
        setUserContext(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://api-web-school.herokuapp.com/users?type=professor", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setTurmas(res.data[1].gang);
      })
      .catch((err) => console.log(err));
  }, []);

  function getAlunosTurma(gang) {
    axios
      .get("https://api-web-school.herokuapp.com/users?type=aluno", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setAlunos(res.data.filter((aluno) => +aluno.gang === gang));
      })
      .catch((err) => console.log(err));
  }

  function setAlunoIDLocalStorage(id) {
    localStorage.setItem("@WebSchool:AlunoId", id);
  }

  function setAlunoNameLocalStorage(name) {
    localStorage.setItem("@WebSchool:AlunoName", name);
  }

  function setTurmaNumberLocalStorage(item) {
    localStorage.setItem("@WebSchool:Turma", item);
  }

  return (
    <>
      <Header rota={"/"} texto={"Sair"} />
      <Container>
        <Content>
          <h1>{activeTurma ? "" : `Olá, Professor ${nomeProf}`}</h1>
          <TurmasContainer>
            <TurmasHeaderContainer buttonDisplay={!activeTurma}>
              <h2>{`Turma ${activeTurma}` || "Turmas"}</h2>
              <button onClick={() => setActiveTurma("")}>X</button>
            </TurmasHeaderContainer>
            {activeTurma ? (
              <ul>
                {alunos.map((aluno) => (
                  <li key={aluno.id}>
                    <button
                      onClick={() => {
                        setAlunoNameLocalStorage(aluno.name);
                        setAlunoIDLocalStorage(aluno.id);
                      }}
                    >
                      <Link to={`/dashboard/professor/aluno`}>
                        {aluno.name}
                      </Link>
                    </button>
                  </li>
                ))}
              </ul>
            ) : typeof turmas != "string" ? (
              <ul>
                {turmas.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        setTurmaNumberLocalStorage(item);
                        setActiveTurma(item);
                        getAlunosTurma(item);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </TurmasContainer>
        </Content>
      </Container>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default DashboardProfessor;
