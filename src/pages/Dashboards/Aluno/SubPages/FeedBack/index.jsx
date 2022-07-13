import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import Footer from "../../../../../components/Footer";
import { UserContext } from "../../../../../contexts/User/UserContext";
import { apiPrivate } from "../../../../../services/api";
import Header from "../../Header";
import { Container, DivFeedback } from "./style";

const FeedBackAluno = () => {
  const { userContext } = useContext(UserContext);

  const [id, setId] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    apiPrivate
      .get(`/users?registration=${userContext.registration_son}`)
      .then((res) => {
        setId(res.data[0]?.id || []);
      })
      .catch((err) => console.error(err));
  });

  useEffect(() => {
    if (!!id) {
      apiPrivate
        .get(`/feedback?userId=${id}`)
        .then((res) => {
          setFeedbacks(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);
=======

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
>>>>>>> 10e1ac9d98eac13cda25fbe8bdf0e871adf8072e

  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
<<<<<<< HEAD
      <Container mw="100%">
=======
      <Container mw="1000px">
>>>>>>> 10e1ac9d98eac13cda25fbe8bdf0e871adf8072e
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
<<<<<<< HEAD
          <DivFeedback>
            <div></div>
          </DivFeedback>
=======
>>>>>>> 10e1ac9d98eac13cda25fbe8bdf0e871adf8072e
        </div>
      </Container>
      <Footer />
      <Footer />
    </>
  );
};

export default FeedBackAluno;
