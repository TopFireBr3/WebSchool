import Footer from "../../components/Footer";
import {
  Container,
  Content,
  TurmasContainer,
  TurmasHeaderContainer,
  FooterContainer,
} from "./style";
import logoImg from "../../assets/img2.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DashboardProfessor = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlByb2Z0ZXN0ZUBlZHVjYWNhby5jb20iLCJpYXQiOjE2NTc2MjgzOTcsImV4cCI6MTY1NzYzMTk5Nywic3ViIjoiOSJ9.Z-L5Y8zrob4OWVzo200iMrI9RpRK_DFSkB2K-qm__IA";
  const [activeTurma, setActiveTurma] = useState("");
  const nomeProf = "Teste";
  const [turmas, setTurmas] = useState([]);
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-web-school.herokuapp.com/users?type=professor", {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setTurmas(
          res.data[1].gang.slice(1, res.data[1].gang.length - 1).split(",")
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const getAlunosTurma = (gang) => {
    axios
      .get("https://api-web-school.herokuapp.com/users?type=aluno", {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        setAlunos(res.data.filter((aluno) => aluno.gang === gang));
      })
      .catch((err) => console.log(err));
  };

  const redirectPage = (id) => {
    return;
  };

  return (
    <>
      <Container>
        <header>
          <img src={logoImg} />
          <button>Sair</button>
        </header>
        <Content>
          <h1>{activeTurma ? "" : `Olá Professor ${nomeProf}`}</h1>
          <TurmasContainer>
            <TurmasHeaderContainer buttonDisplay={!activeTurma}>
              <h2>{activeTurma || "Turmas"}</h2>
              <button onClick={() => setActiveTurma("")}>X</button>
            </TurmasHeaderContainer>
            {activeTurma ? (
              <ul>
                {alunos.map((aluno) => (
                  <li key={aluno.id}>
                    <button onClick={() => redirectPage(aluno.id)}>
                      <Link to={`/aluno`}>{aluno.name}</Link>
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

            <h3>{activeTurma ? "" : "Informações gerais"}</h3>
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
