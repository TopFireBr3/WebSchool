import React, { useEffect, useState } from "react";
import Footer from "../../../../../components/Footer";
import { api } from "../../../../../services/api";

import Header from "../../Header";
import { Container } from "./style";

const Notas = () => {
  const [notas, setNotas] = useState(null);

  useEffect(() => {

      api
        .get(`/notas?userId=${id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("@WebSchool:Token")}`,
          },
        })
        .then((res) => res.data)
        .then((res) => setNotas(res))
        .catch((err) => console.log(err));

  }, []);
  return (
    <>
      {/* Mudar esse header para voltar */}
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
      <Container mw="500px">
        <h2>Olá {users?.name}</h2>
        <div>
          <h3>Notas</h3>
          <ul>
            {notas?.map((nota) => (
              <li key={nota.id}>
                <p>
                  {nota.materia} <span>{nota.nota} PONTOS</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Notas;
