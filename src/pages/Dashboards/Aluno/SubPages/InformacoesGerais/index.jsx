import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import Footer from "../../../../../components/Footer";
//import { DashboardPaiContext } from "../../../../../contexts/dashboardPai/dashboardPai";
import { UserContext } from "../../../../../contexts/User/UserContext";
import { api } from "../../../../../services/api";
import Header from "../../Header";
=======

>>>>>>> 10e1ac9d98eac13cda25fbe8bdf0e871adf8072e
import { Container } from "./style";

import Header from "../../Header";
import Footer from "../../../../../components/Footer";

import { api } from "../../../../../services/api";

import { UserContext } from "../../../../../contexts/User/UserContext";

const InfoGerais = () => {
  const { userContext } = useContext(UserContext);

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    api
      .get("/infos", {
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@WebSchool:Token")
          )}`,
        },
      })
      .then((res) => setInfos(res.data));
<<<<<<< HEAD
  });
=======
  }, []);
>>>>>>> 10e1ac9d98eac13cda25fbe8bdf0e871adf8072e

  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />

<<<<<<< HEAD
      <Container mw="100%">
        <h2>Olá, {user.name}</h2>
=======
      <Container mw="1000px">
        <h2>Olá, {userContext.name}</h2>
>>>>>>> 10e1ac9d98eac13cda25fbe8bdf0e871adf8072e
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
