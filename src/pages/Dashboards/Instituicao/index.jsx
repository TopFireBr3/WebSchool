import React, { useEffect, useState } from "react";

import { Container, ThemeDiv, ThemeNav, ThemeMain, ThemeUl } from "./style";

import { apiPrivate } from "../../../services/api";

import Card from "./Card/index";
import ModalAluno from "./Modal/Aluno";
import ModalProfessor from "./Modal/Professor";
import Footer from "../../../components/Footer";
import HeaderInstitucional from "./HeaderIntitucional";

const Instituicao = () => {
  const [aluno, setAluno] = useState(false);
  const [professor, setProfessor] = useState(false);
  const [vitrine, setVitrine] = useState([]);
  const [type, setType] = useState("professor");

  useEffect(() => {
    apiPrivate
      .get(`/users?type=${type}`)
      .then((res) => {
        setVitrine(res.data);
      })
      .catch((err) => console.error(err));
  }, [type]);

  function openAluno() {
    setAluno(!aluno);
  }

  function openProfessor() {
    setProfessor(!professor);
  }

  return (
    <>
      <HeaderInstitucional />
      <ThemeMain f="column" g="20px" m="80px 10px 200px 10px">
        <ThemeDiv fd="column" j="center" g="5px">
          <button
            onClick={() => {
              openProfessor();
            }}
          >
            Adicionar professor
          </button>
          <button
            onClick={() => {
              openAluno();
            }}
          >
            Adicionar aluno
          </button>
        </ThemeDiv>

        <ThemeNav g="10px" j="center">
          <button
            onClick={() => setType("professor")}
            style={{ background: type === "professor" && "var(--blue-1)" }}
          >
            Professores
          </button>
          <button
            onClick={() => setType("aluno")}
            style={{ background: type === "aluno" && "var(--blue-1)" }}
          >
            Alunos
          </button>
        </ThemeNav>
        <Container f="column" a="center">
          <ThemeUl
            oy="auto"
            p="20px 0px 0px 20px"
            f="column"
            g="10px"
            bc="var(--pink-1)"
            w="100%"
            h="600px"
            br="15px"
          >
            {vitrine.length === 0 ? (
              <p>Nenhum resultado foi encontrado!</p>
            ) : (
              <>
                {vitrine.map((e, index) => (
                  <Card key={index} cadastro={e} setVitrine={setVitrine} setType={setType}/>
                ))}
              </>
            )}
          </ThemeUl>
        </Container>
      </ThemeMain>

      <ModalAluno
        dp={aluno ? "flex" : "none"}
        setAluno={openAluno}
        setVitrine={setVitrine}
        setType={setType}
      />

      <ModalProfessor
        dp={professor ? "flex" : "none"}
        setProfessor={openProfessor}
        setVitrine={setVitrine}
        setType={setType}
      />
      <Footer />
    </>
  );
};

export default Instituicao;
