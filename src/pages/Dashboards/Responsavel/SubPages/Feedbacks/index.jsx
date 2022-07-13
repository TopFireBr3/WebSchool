import { useEffect, useContext, useState } from "react";
import Footer from "../../../../../components/Footer";
import { apiPrivate } from "../../../../../services/api";
import Header from "../../Header";
import { Container, DivFeedback } from "../../styles";
import { toast } from "react-toastify";
import { UserContext } from "../../../../../contexts/User/UserContext";

const FeedbacksPai = () => {
  const { userContext } = useContext(UserContext);

  const [id, setId] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [valueFeedback, setValueFeedback] = useState([]);

  useEffect(() => {
    apiPrivate
      .get(`/users?registration=${userContext.registration_son}`)
      .then((res) => setId(res.data[0]?.id || []))
      .catch((err) => console.error(err));
  });

  useEffect(() => {
    if (!!id) {
      apiPrivate
        .get(`/feedback?userId=${id}`)
        .then((res) => setFeedbacks(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  function postFeedback(value) {
    const newFeedback = { name: userContext.name, feedback: value, userId: id };
    if (value !== "") {
      apiPrivate.post("/feedback", newFeedback).then((res) => {
        setValueFeedback("");
        setFeedbacks([...feedbacks, res.data]);
      });
    } else {
      toast.error("Digite um texto");
    }
  }

  return (
    <>
      <Header rota="/dashboard/responsavel" texto="Voltar" />
      <Container mw="1000px">
        <h2>Olá, {userContext.name}</h2>
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
            <form
              onSubmit={(event) => {
                event.preventDefault();
                postFeedback(valueFeedback);
              }}
            >
              <div>
                <p>Enviar resposta</p>
                <button type="submit" />
              </div>
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
