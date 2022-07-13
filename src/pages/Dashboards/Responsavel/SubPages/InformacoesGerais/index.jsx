import { useEffect, useContext, useState } from "react";
import Footer from "../../../../../components/Footer";
import { UserContext } from "../../../../../contexts/User/UserContext";
import { apiPrivate } from "../../../../../services/api";
import Header from "../../Header";
import { Container } from "../../styles";

const InfosPai = () => {
  const { userContext } = useContext(UserContext);

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    apiPrivate.get("/infos").then((res) => setInfos(res.data));
  });

  return (
    <>
      <Header rota="/dashboard/responsavel" texto="Voltar" />
      <Container mw="1000px">
        <h2>Olá {userContext.name}</h2>
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
