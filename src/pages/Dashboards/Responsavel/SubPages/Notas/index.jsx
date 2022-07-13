import { useContext, useEffect, useState } from "react";

import Header from "../../Header";
import Footer from "../../../../../components/Footer";

import { Container } from "../../styles";

import { apiPrivate } from "../../../../../services/api";
import { UserContext } from "../../../../../contexts/User/UserContext";

const NotasPai = () => {
  const { userContext } = useContext(UserContext);

  const [id, setId] = useState("");
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    apiPrivate
      .get(`/users?registration=${userContext.registration_son}`)
      .then((res) => {
        setId(res.data[0].id);
      })
      .catch((err) => console.error(err));
  });

  useEffect(() => {
    if (!!id) {
      apiPrivate
        .get(`/notas?UserId=${id}`)
        .then((res) => setNotas(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  return (
    <>
      <Header rota="/dashboard/responsavel" texto="Voltar" />
      <Container mw="500px">
        <h2>Olá, {userContext.name}</h2>

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

export default NotasPai;
