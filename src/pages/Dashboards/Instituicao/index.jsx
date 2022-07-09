import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";

import Card from "./Card/index";
import HeaderInstitucional from "./HeaderIntitucional";
import ModalAluno from "./Modal/Aluno";
import ModalProfessor from "./Modal/Professor";
import { Container, ThemeDiv, ThemeNav, ThemeMain, ThemeUl } from "./style";

const Instituicao = () => {
  const [aluno, setAluno] = useState(false);
  const [professor, setProfessor] = useState(false);

  const [vitrine, setVitrine] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api-web-school.herokuapp.com/users`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      })
      .then((res) => {
        console.log(res);
        setVitrine(res.data);
        console.log("deu bom");
      })
      .catch((e) => {
        console.log(e);
        console.log("deu ruim");
      });
  }, []);
  const [arrayFilter, setArrayFilter] = useState(vitrine);
  function filterClick(value) {
    setArrayFilter(vitrine.filter((e) => e.type === value));
  }
  function openAluno() {
    setAluno(!aluno);
  }

  function openProfessor() {
    setProfessor(!professor);
  }
  const arr = vitrine.filter((e) => e.type === "professor");

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
            onClick={(event) => filterClick(event.target.value)}
            value="professor"
          >
            Professores
          </button>
          <button
            onClick={(event) => filterClick(event.target.value)}
            value="aluno"
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
            {(arrayFilter.length > 0 ? arrayFilter : arr).map((e, index) => (
              <Card key={index} cadastro={e} />
            ))}
          </ThemeUl>
        </Container>
      </ThemeMain>
      <ModalAluno
        dp={aluno ? "flex" : "none"}
        setAluno={openAluno}
        setVitrine={setVitrine}
        arr={arr}
      />
      <ModalProfessor
        dp={professor ? "flex" : "none"}
        setProfessor={openProfessor}
        setVitrine={setVitrine}
      />
      <Footer />
    </>
  );
};

export default Instituicao;
