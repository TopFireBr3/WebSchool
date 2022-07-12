import { useContext, useEffect, useState } from "react";
import Footer from "../../../../components/Footer";
import { DashboardPaiContext } from "../../../../contexts/dashboardPai/dashboardPai";
import { api } from "../../../../services/api";
import Header from "../Header";
import { Container } from "../styles";

const NotasPai = () => {
  const { users } = useContext(DashboardPaiContext);
  const [id, setId] = useState("");
  const [notas, setNotas] = useState(null);

  useEffect(() => {
    api
      .get(`/users?registration=${users.registration_son}`, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("@WebSchool:Token"))}`,
        },
      })
      .then((res) => res.data)
      .then((res) => setId(res[0].id))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    if (id) {
      api
        .get(`/notas?UserId=${id}`, {
          headers: {
            authorization: `Bearer ${JSON.parse(localStorage.getItem("@WebSchool:Token"))}`,
          },
        })
        .then((res) => res.data)
        .then((res) => setNotas(res))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <>
      <Header rota="/dashboard/responsavel" texto="Voltar"/>
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

export default NotasPai;
