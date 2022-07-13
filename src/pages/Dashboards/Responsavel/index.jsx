import { useEffect, useState, useContext } from "react";

import { Container } from "./styles";

import { useHistory } from "react-router-dom";

import Header from "./Header";
import Footer from "../../../components/Footer";

import { api } from "../../../services/api";
import { UserContext } from "../../../contexts/User/UserContext";

const PagPrincipalPai = () => {
  const history = useHistory();

  const { setUserContext } = useContext(UserContext);

  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("@WebSchool:UserId"))}`)
      .then((res) => {
        setUser(res.data);
        setUserContext(res.data);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header rota="/" texto="Sair" />

      <Container mw="800px">
        <h2>Olá, {user.name}</h2>
        <div className="dashboardPai">
          <button onClick={() => history.push("/dashboard/responsavel/notas")}>
            NOTAS
          </button>
          <button
            onClick={() => history.push("/dashboard/responsavel/feedbacks")}
          >
            FEEDBACKS
          </button>
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
