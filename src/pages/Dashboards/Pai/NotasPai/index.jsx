import { useContext, useEffect, useState } from "react";
import Footer from "../../../../components/Footer";
import { DashboardPaiContext } from "../../../../contexts/dashboardPai/dashboardPai";
import { api } from "../../../../services/api";
import HeaderInstitucional from "../../Instituicao/HeaderIntitucional";
import { Container } from "../styles";

const NotasPai = () => {
  const { users } = useContext(DashboardPaiContext);
  const [id, setId] = useState("");
  const [notas, setNotas] = useState("");

  useEffect(() => {
    api
      .get(`/users?registration=${users.registration_son}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then((res) => res.data)
      .then((res) => setId(res[0].id))
      .catch((err) => console.log(err));
  });

  if (id) {
    api
      .get(`/notas/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then((res) => res.data)
      .then((res) => setNotas(res.notas))
      .catch((err) => console.log(err));
  }

  return (
    <>
      {/* Mudar esse header para voltar */}
      <HeaderInstitucional />
      <Container mw="500px">
        <h2>Olá {users?.name}</h2>
        <div className="notasPai">
          <h3>Notas</h3>
          <ul>
            {Object.entries(notas)?.map((key) => (
              <li key={key[0]}>
                <p>
                  {key[0]} <span>{key[1]} PONTOS</span>
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
