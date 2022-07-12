import { useEffect, useContext, useState } from "react";
import Footer from "../../../../components/Footer";
import { DashboardPaiContext } from "../../../../contexts/dashboardPai/dashboardPai";
import { api, apiPrivate } from "../../../../services/api";
import HeaderInstitucional from "../../Instituicao/HeaderIntitucional";
import { Container, DivFeedback } from "../styles";

const FeedbacksPai = () => {
  const { users } = useContext(DashboardPaiContext);
  const [id, setId] = useState("");
  const [feedbacks, setFeedbacks] = useState(null);
  const [valueFeedback, setValueFeedback] = useState("");

  useEffect(() => {
    api
      .get(`/users?registration=${users.registration_son}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("@WebSchool:Token")}`,
        },
      })
      .then((res) => res.data)
      .then((res) => setId(res[0].id))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    if (id) {
      api
        .get(`/feedback?userId=${id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("@WebSchool:Token")}`,
          },
        })
        .then((res) => res.data)
        .then((res) => setFeedbacks(res))
        .catch((err) => console.log(err));
    }
  }, [id]);

  function postFeedback(value) {
    const newFeedback = { name: users.name, feedback: value, userId: id };
    apiPrivate.post("/feedback", newFeedback).then((res) => {
      setValueFeedback("");
      setFeedbacks([...feedbacks, res.data]);
    });
  }

  return (
    <>
      {/* Mudar esse header para voltar */}
      <HeaderInstitucional />
      <Container mw="1000px">
        <h2>Olá {users?.name}</h2>
        <div>
          <h3>Feedbacks</h3>
          <ul>
            {feedbacks?.map((feedback) => (
              <li key={feedback.id}>
                <span>- {feedback.name || "Professor"}</span>
                <p>{feedback.feedback}</p>
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

export default FeedbacksPai;
