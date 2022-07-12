import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../../../components/Footer";
import { DashboardPaiContext } from "../../../../contexts/dashboardPai/dashboardPai";
import { api } from "../../../../services/api";
import HeaderInstitucional from "../../Instituicao/HeaderIntitucional";
import { Container } from "../styles";

const PagPrincipalPai = () => {
  /* Mudar ID, ficar variavel */
  const { users, setUsers } = useContext(DashboardPaiContext);

  const history = useHistory();

  useEffect(() => {
    api
      .get("/users/5", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("@WebSchool:Token")}`,
        },
      })
      .then((res) => res.data)
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  });

  return (
    <>
      {/* Mudar esse header para voltar */}
      <HeaderInstitucional />

      <Container mw="800px">
        <h2>Olá {users.name}</h2>
        <div className="dashboardPai">
          <button onClick={() => history.push("/notasPai")}>NOTAS</button>
          <button onClick={() => history.push("/FeedbacksPai")}>
            FEEDBACKS
          </button>
          <button onClick={() => history.push("/infosPai")}>
            INFORMAÇÕES GERAIS
          </button>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default PagPrincipalPai;
