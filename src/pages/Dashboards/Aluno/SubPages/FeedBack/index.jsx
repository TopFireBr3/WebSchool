import React, { useContext, useEffect, useState } from "react";
import Footer from "../../../../../components/Footer";
import { UserContext } from "../../../../../contexts/User/UserContext";
<<<<<<< HEAD
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
import { api } from "../../../../../services/api";
import Header from "../../Header";
import { Container } from "./style";

const FeedBackAluno = () => {

  const [feedbacks, setFeedbacks] = useState([]);

  const {user}= useContext(UserContext)

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
      .then((res) => {
        setFeedbacks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
>>>>>>> 88b767b43c0b1a1847a6fbc03cafd53857a9e593

  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
      <Container mw="1000px">
<<<<<<< HEAD
        <h2>Olá, {userContext.name}</h2>
=======
        <h2>Olá {user.name}</h2>
>>>>>>> 88b767b43c0b1a1847a6fbc03cafd53857a9e593
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
>>>>>>> 88b767b43c0b1a1847a6fbc03cafd53857a9e593
        </div>
      </Container>
      <Footer />
      <Footer />
    </>
  );
};

export default FeedBackAluno;
