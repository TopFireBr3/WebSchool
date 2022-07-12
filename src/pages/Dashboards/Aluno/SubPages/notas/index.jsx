import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../contexts/User/UserContext";
import { apiPrivate } from "../../../../../services/api";

import Footer from "../../../../../components/Footer";
import Header from "../../Header";
import { Container } from "./style";

const Notas = () => {
  const [notas, setNotas] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    apiPrivate
      .get(`/notas?userId=${JSON.parse(localStorage.getItem("UserId"))}`)

      .then((res) => setNotas(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
      <Container mw="700px">
        <h2>Olá, {user.name}</h2>
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
