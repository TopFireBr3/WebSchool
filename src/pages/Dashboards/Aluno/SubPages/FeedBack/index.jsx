import React, { useContext, useEffect, useState } from "react";

import { Container } from "./style";

import Header from "../../Header";
import Footer from "../../../../../components/Footer";

import { api } from "../../../../../services/api";

import { UserContext } from "../../../../../contexts/User/UserContext";

const FeedBackAluno = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const { userContext } = useContext(UserContext);

  useEffect(() => {
    api
      .get(
        `/feedback?userId=${JSON.parse(
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
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
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
        </div>
      </Container>
      <Footer />
      <Footer />
    </>
  );
};

export default FeedBackAluno;
