import React, { useContext, useEffect, useState } from "react";
import Footer from "../../../../../components/Footer";
import { DashboardPaiContext } from "../../../../../contexts/dashboardPai/dashboardPai";
import { api } from "../../../../../services/api";
import Header from "../../Header";
import { Container, DivFeedback } from "./style";


const FeedBackAluno = () => {
  const { users } = useContext(DashboardPaiContext);
  const [id, setId] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);


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
        .get(`/feedback?userId=${JSON.parse(localStorage.getItem("@WebSchool:UserId"))}`, {
          headers: {
            authorization: `Bearer ${JSON.parse(localStorage.getItem("@WebSchool:Token"))}`,
          },
        })
        .then((res) => {setFeedbacks(res)
        console.log(res.data)
        })
        .catch((err) => console.log(err));
    }
  }, [id]);



  return (
    <>
      <Header rota={"/dashboard/aluno"} texto={"Voltar"} />
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

          </DivFeedback>
        </div>
      </Container>
      <Footer />
      <Footer />
    </>
  );
            };

export default FeedBackAluno;
