import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../../../components/Footer";
import { DashboardPaiContext } from "../../../../contexts/dashboardPai/dashboardPai";
import { api } from "../../../../services/api";
import Header from "../Header";
import { Container } from "../styles";

const PagPrincipalPai = () => {
  /* Mudar ID, ficar variavel */
  const { users, setUsers } = useContext(DashboardPaiContext);

  const history = useHistory();

  useEffect(() => {

    api
      .get(`/users/${JSON.parse(localStorage.getItem("@WebSchool:UserId"))}`, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("@WebSchool:Token"))}`,
        },
      })
      .then((res) => res.data)
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  });

 

  return (
    <>
      <Header rota="/" texto="Sair"/>

      <Container mw="800px">
        <h2>Olá {users?.name}</h2>
        <div className="dashboardPai">
          <button onClick={() => history.push("/dashboard/responsavel/notas")}>NOTAS</button>
          <button onClick={() => history.push("/dashboard/responsavel/feedbacks")}>FEEDBACKS</button>
          <button onClick={() => history.push("/dashboard/responsavel/infos")}>
            INFORMAÇÕES GERAIS
          </button>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default PagPrincipalPai;
