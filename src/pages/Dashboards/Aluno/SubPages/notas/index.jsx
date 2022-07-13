import React, { useContext, useEffect, useState } from "react";

import { Container } from "./style";

import { UserContext } from "../../../../../contexts/User/UserContext";

import { apiPrivate } from "../../../../../services/api";

import Footer from "../../../../../components/Footer";
import Header from "../../Header";

const Notas = () => {
  const [notas, setNotas] = useState([]);
  const { userContext } = useContext(UserContext);

  useEffect(() => {
    apiPrivate
      .get(`/notas?userId=${userContext.id}`)
      .then((res) => setNotas(res.data))
      .catch((err) => console.error(err));
<<<<<<< HEAD
=======
    // eslint-disable-next-line react-hooks/exhaustive-deps
>>>>>>> 10e1ac9d98eac13cda25fbe8bdf0e871adf8072e
  }, []);

  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
      <Container mw="100%">
        <h2>Olá, {userContext.name}</h2>
        <div>
          <h3>Notas</h3>
          <ul>
            {notas.length === 0 ? (
              <h4>Nenhuma nota cadastrada</h4>
            ) : (
              notas.map((nota) => (
                <li key={nota.id}>
                  <p>
                    {nota.materia} <span>{nota.nota} PONTOS</span>
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Notas;
