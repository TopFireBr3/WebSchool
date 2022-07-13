import React, { useContext, useEffect, useState } from "react";
import Footer from "../../../../../components/Footer";
import { UserContext } from "../../../../../contexts/User/UserContext";
import { apiPrivate } from "../../../../../services/api";
import Header from "../../Header";
import { Container } from "./style";

const FeedBackAluno = () => {
  const { userContext } = useContext(UserContext);

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    apiPrivate
      .get(`/feedback?userId=${userContext.id}`)
      .then((res) => {
        setFeedbacks(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(feedbacks);

  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
      <Container mw="100%">
        <h2>Olá, {userContext.name}</h2>
        <div>
          <h3>Feedbacks</h3>
          <ul>
            {feedbacks?.map((feedback) => (
              <li key={feedback.id}>
                <span>{feedback.name}</span>
                <p>{feedback.feedback}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default FeedBackAluno;
