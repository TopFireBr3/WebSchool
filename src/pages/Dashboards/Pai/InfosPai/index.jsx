import { useEffect, useContext, useState } from "react";
import Footer from "../../../../components/Footer";
import { DashboardPaiContext } from "../../../../contexts/dashboardPai/dashboardPai";
import { api } from "../../../../services/api";
import HeaderInstitucional from "../../Instituicao/HeaderIntitucional";
import { Container } from "../styles";

const InfosPai = () => {
  const { users } = useContext(DashboardPaiContext);
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    api
      .get("/infos", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then((res) => res.data)
      .then((res) => setInfos(res));
  });

  return (
    <>
      {/* Mudar esse header para voltar */}
      <HeaderInstitucional />
      <Container mw="1000px">
        <h2>Olá {users?.name}</h2>
        <div className="infosPai">
          <h3>INFORMAÇÕES GERAIS</h3>
          <ul>
            {infos?.map((info, index) => (
              <li key={index}>
                <p>{info.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default InfosPai;
