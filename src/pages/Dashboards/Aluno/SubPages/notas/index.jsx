import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../contexts/User/UserContext";
import { api } from "../../../../../services/api";

import Footer from "../../../../../components/Footer";
import Header from "../../Header";
import { Container } from "./style";

const Notas = () => {
  const [notas, setNotas] = useState([]);
  const {user}= useContext(UserContext)
  
  console.log(user.id)
  useEffect(() => {
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

  }, []);
  return (
    <>
      {/* Mudar esse header para voltar */}
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
      <Container mw="700px" >
        <h2>Olá, {user.name}</h2>
        <div>
          <h3>Notas</h3>
          <ul>
            {notas.length === 0 ? <h4>Nenhuma nota cadastrada</h4> :notas.map((nota) => (
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
