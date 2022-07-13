import React, { useContext, useEffect, useState } from "react";
import Footer from "../../../../../components/Footer";
import { DashboardPaiContext } from "../../../../../contexts/dashboardPai/dashboardPai";
import { UserContext } from "../../../../../contexts/User/UserContext";
import { api } from "../../../../../services/api";
import Header from "../../Header";
import { Container } from "./style";

const InfoGerais = () => {
  const {user}= useContext(UserContext)
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    api
      .get("/infos", {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("@WebSchool:Token"))}`,
        },
      })
      .then((res) => setInfos(res.data));
  });
  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
      {/* Mudar esse header para voltar */}

      <Container mw="1000px">
        <h2>Olá, {user.name}</h2>
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

export default InfoGerais;
