import { Container } from "@mui/system";
import { useContext, useEffect } from "react";
import Footer from "../../../../../components/Footer";
import { api, apiPrivate } from "../../../../../services/api";
import { DivFeedback } from "./style";
import Header from "../../Header";
import { DashboardPaiContext } from "../../../../../contexts/dashboardPai/dashboardPai";
import { useState } from "react";
import { UserContext } from "../../../../../contexts/User/UserContext";
import { Link } from "react-router-dom";

const Atividades = () => {
  const { users } = useContext(DashboardPaiContext);

  const [atividades, setAtividades] = useState(null);
  const [valueFeedback, setValueFeedback] = useState("");

  useEffect(() => {
    console.log("oiii," + JSON.parse(
      localStorage.getItem("@WebSchool:UserId")))
    api
      .get(
        `/atividades?userId=${JSON.parse(
          localStorage.getItem("@WebSchool:UserId")
        )}`,
        {
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("@WebSchool:Token")
            )}`,
          },
        }
      )
      .then((res) => {
        setAtividades(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function postFeedback(value) {
    const newFeedback = {
      name: users.name,
      feedback: value,
      userId: JSON.parse(localStorage.getItem("@WebSchool:UserId")),
    };
    apiPrivate.post("/atividades", newFeedback).then((res) => {
      setValueFeedback("");
      setAtividades([...atividades, res.data]);
    });
  }
  const {user} = useContext(UserContext)
console.log(atividades)
  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
      <Container mw="1000px">
        <h2>Olá, {user.name}</h2>
        <div>
          <h3>atividades</h3>
          <ul>
            {atividades === [] ? <p>Nenhuma ativivade no momento</p> : atividades?.map((feed) => (
              <li key={feed.id}>
                <p>{feed.type}-{feed.name}</p>
                
                <h4>{feed.title}</h4>
                <a  href={feed.url_atividade} target="_blank">atividade</a>
              </li>
            ))}
          </ul>
          <DivFeedback>
            <div></div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                postFeedback(valueFeedback);
              }}
            >
              <p>Enviar resposta</p>
              <button type="submit">Env</button>
              <textarea
                placeholder="Responda aos feedbacks"
                onChange={(event) => setValueFeedback(event.target.value)}
                value={valueFeedback}
              />
            </form>
          </DivFeedback>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Atividades;
