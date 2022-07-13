import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../contexts/User/UserContext";
import { apiPrivate } from "../../../../../services/api";

import Footer from "../../../../../components/Footer";
import Header from "../../Header";
import { Container } from "./style";

const Notas = () => {
  const [notas, setNotas] = useState([]);
  const { userContext } = useContext(UserContext);

  useEffect(() => {
<<<<<<< HEAD
    apiPrivate
      .get(`/notas?userId=${userContext.id}`)
      .then((res) => setNotas(res.data))
      .catch((err) => console.error(err));
=======
    api
    .get(`/notas?userId=${JSON.parse(localStorage.getItem("@WebSchool:UserId"))}`, {
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem("@WebSchool:Token"))}`,
      },
    })

    .then((res) =>{ setNotas(res.data)
      console.log(res)
    })
        .catch((err) => console.log(err));

>>>>>>> 88b767b43c0b1a1847a6fbc03cafd53857a9e593
  }, []);

  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
      <Container mw="700px">
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
