import { useState } from "react";
import { useForm } from "react-hook-form";

import Footer from "../../components/Footer";
import {
  Container,
  Content,
  ImgContainer,
  InfosContainer,
  QuadroContainer,
  FooterContainer,
  ModalContainer,
} from "./style";

import axios from "axios";
import { api } from "../../services/api";

import { toast } from "react-toastify";
import Header from "../Dashboards/Professor/Header";

import imagemAluno from "../../assets/imagemAluno.jpg";
import { useContext } from "react";
import { UserContext } from "../../contexts/User/UserContext";

const AlunoPage = () => {
  const [FeedId, setFeedId] = useState();
  const [notaId, setNotaId] = useState();

  const [notas, setNotas] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [infos, setInfos] = useState([]);
  const [ativs, setAtivs] = useState([]);

  const [option, setOption] = useState("Notas");

  const [modalAddNotas, setModalAddNotas] = useState(false);
  const [modalAddAtivs, setModalAddAtivs] = useState(false);
  const [modalAddInfos, setModalAddInfos] = useState(false);
  const [modalAddFeed, setModalAddFeed] = useState(false);
  const [modalEditNotas, setModalEditNotas] = useState(false);
  const [modalEditFeed, setModalEditFeed] = useState(false);

  const { register, handleSubmit } = useForm();

  const alunoName = localStorage.getItem("@WebSchool:AlunoName");
  const turma = localStorage.getItem("@WebSchool:Turma");

  const { userContext } = useContext(UserContext);

  const onSubmitFunction = (data) => {
    switch (data.option) {
      case "Notas":
        axios
          .get("https://api-web-school.herokuapp.com/notas?userId=2", {
            headers: {
              Authorization:
                "Bearer " +
                JSON.parse(localStorage.getItem("@WebSchool:Token")),
            },
          })
          .then((res) => {
            setNotas(res.data);
            setFeedbacks(false);
            setAtivs(false);
            setInfos(false);
          })
          .catch((err) => console.log(err));
        break;

      case "Feed":
        axios
          .get("https://api-web-school.herokuapp.com/feedback?userId=2", {
            headers: {
              Authorization:
                "Bearer " +
                JSON.parse(localStorage.getItem("@WebSchool:Token")),
            },
          })
          .then((res) => {
            setNotas(false);
            setFeedbacks(res.data);
            setAtivs(false);
            setInfos(false);
          })
          .catch((err) => console.log(err));
        break;

      case "Atividades":
        axios
          .get("https://api-web-school.herokuapp.com/atividades?userId=2", {
            headers: {
              Authorization:
                "Bearer " +
                JSON.parse(localStorage.getItem("@WebSchool:Token")),
            },
          })
          .then((res) => {
            setAtivs(res.data);
            setNotas(false);
            setFeedbacks(false);
            setInfos(false);
          })
          .catch((err) => console.log(err));

        break;

      case "Infos Gerais":
        axios
          .get("https://api-web-school.herokuapp.com/infos", {
            headers: {
              Authorization:
                "Bearer " +
                JSON.parse(localStorage.getItem("@WebSchool:Token")),
            },
          })
          .then((res) => {
            setInfos(res.data);
            setAtivs(false);
            setNotas(false);
            setFeedbacks(false);
          })
          .catch((err) => console.log(err));

        break;
      default:
        break;
    }
  };

  const onSubmitAddNotaFunction = (data) => {
    const objNota = {
      materia: data.materia,
      nota: data.nota,
      userId: localStorage.getItem("@WebSchool:AlunoId"),
    };

    axios
      .post("https://api-web-school.herokuapp.com/notas", objNota, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => toast.success("Nota adicionada!"))
      .catch((err) => console.log(err));
  };

  const onSubmitAddFeedFunction = (data) => {
    const objFeed = {
      feedback: data.feedback,
      name: data.name,
      userId: localStorage.getItem("@WebSchool:AlunoId"),
    };

    axios
      .post("https://api-web-school.herokuapp.com/feedback", objFeed, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => toast.success("Feedback adicionado!"))
      .catch((err) => console.log(err));
  };

  const onSubmitAddAtivFunction = (data) => {
    const objAtiv = {
      name: userContext.name,
      type: userContext.type,
      title: data.nome_atividade,
      url_atividade: data.url_atividade,
      userId: localStorage.getItem("@WebSchool:AlunoId"),
    };

    axios
      .post("https://api-web-school.herokuapp.com/atividades", objAtiv, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => toast.success("Atividade adicionada!"))
      .catch((err) => console.log(err));
  };

  const onSubmitAddInfoFunction = (data) => {
    const objInfo = {
      message: data.message,
    };

    axios
      .post("https://api-web-school.herokuapp.com/infos", objInfo, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => toast.success("Info adicionada!"))
      .catch((err) => console.log(err));
  };

  const deleteNota = (id) => {
    axios
      .delete(`https://api-web-school.herokuapp.com/notas/${id}`, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        toast.success("Nota deletada!");
      })
      .catch((err) => console.log(err));
  };

  const deleteFeed = (id) => {
    axios
      .delete(`https://api-web-school.herokuapp.com/feedback/${id}`, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        toast.success("Feedback deletado!");
      })
      .catch((err) => console.log(err));
  };

  const deleteAtiv = (id) => {
    axios
      .delete(`https://api-web-school.herokuapp.com/atividades/${id}`, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        toast.success("Atividade deletada!");
      })
      .catch((err) => console.log(err));
  };

  const deleteInfo = (id) => {
    axios
      .delete(`https://api-web-school.herokuapp.com/infos/${id}`, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => {
        toast.success("Info deletada!");
      })
      .catch((err) => console.log(err));
  };

  const addToAluno = (option) => {
    switch (option) {
      case "Notas":
        setModalAddNotas(true);
        break;
      case "Feed":
        setModalAddFeed(true);
        break;
      case "Atividades":
        setModalAddAtivs(true);
        break;
      case "Infos Gerais":
        setModalAddInfos(true);
        break;
      default:
        break;
    }
  };

  function editNota(data) {
    const editedNota = {
      materia: data.materiaEditada,
      nota: data.notaEditada,
      userId: localStorage.getItem("@WebSchool:AlunoId"),
    };

    api
      .put(`/notas/${notaId}`, editedNota, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => toast.success("Nota editada com sucesso"))
      .catch((error) => console.log(error));
  }

  function editFeedback(data) {
    const editedFeed = {
      feedback: data.feedbackEditado,
      name: data.nomeEditado,
      userId: localStorage.getItem("@WebSchool:AlunoId"),
    };

    api
      .put(`/feedback/${FeedId}`, editedFeed, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("@WebSchool:Token")),
        },
      })
      .then((res) => toast.success("Feed editado com sucesso"))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Header rota={"/dashboard/professor"} texto={"Voltar"} />
      <Container>
        <Content>
          <InfosContainer>
            <img className="imageAluno" src={imagemAluno} alt="" />
            <div className="infosAtividadeProfessor">
              <div className="infosAluno">
                <div>
                  <h3>Nome</h3>
                  <p>{alunoName}</p>
                </div>
                <div>
                  <h3>Turma</h3>
                  <p>{turma}</p>
                </div>
              </div>
              <div className="optionsProfessor">
                <form
                  className="selectDiv"
                  onSubmit={handleSubmit(onSubmitFunction)}
                >
                  <select
                    {...register("option")}
                    onChange={(e) => setOption(e.target.value)}
                  >
                    <option>Notas</option>
                    <option>Feed</option>
                    <option>Atividades</option>
                    <option>Infos Gerais</option>
                  </select>

                  <button type="submit">Pesquisar</button>
                  <button onClick={() => addToAluno(option)}>Adicionar</button>
                </form>
              </div>
            </div>
          </InfosContainer>

          <QuadroContainer>
            <ul>
              {notas &&
                notas.map((nota) => (
                  <li key={nota.id}>
                    <h1>{nota.materia}</h1> <p>{nota.nota}</p>{" "}
                    <button
                      onClick={() => {
                        setNotaId(nota.id);
                        setModalEditNotas(true);
                      }}
                    >
                      Editar
                    </button>{" "}
                    <button onClick={() => deleteNota(nota.id)}>delete</button>
                  </li>
                ))}
            </ul>
            <ul>
              {feedbacks &&
                feedbacks.map((feed) => (
                  <li key={feed.id}>
                    {" "}
                    <h1>{feed.feedback}</h1>
                    <button
                      onClick={() => {
                        setFeedId(feed.id);
                        setModalEditFeed(true);
                      }}
                    >
                      Editar
                    </button>{" "}
                    <button onClick={() => deleteFeed(feed.id)}>delete</button>
                  </li>
                ))}
            </ul>
            <ul>
              {infos &&
                infos.map((info) => (
                  <li key={info.id}>
                    <h1>{info.message}</h1>
                    <button onClick={() => deleteInfo(info.id)}>delete</button>
                  </li>
                ))}
            </ul>
            <ul>
              {ativs &&
                ativs.map((ativ) => (
                  <li key={ativ.id}>
                    <h2>{ativ.title}</h2>
                    <h2>Link da atividade:{ativ.url_atividade}</h2>
                    <button onClick={() => deleteAtiv(ativ.id)}>delete</button>
                  </li>
                ))}
            </ul>
          </QuadroContainer>
        </Content>
      </Container>

      <Footer />

      <ModalContainer
        modalAddNotas={modalAddNotas}
        modalAddAtivs={modalAddAtivs}
        modalAddFeed={modalAddFeed}
        modalAddInfos={modalAddInfos}
        modalEditNotas={modalEditNotas}
        modalEditFeed={modalEditFeed}
      >
        <div className="modal-add-notas">
          <div className="modal-add-notas-content">
            <button onClick={() => setModalAddNotas(false)}>close modal</button>
            <p>Notas</p>
            <form onSubmit={handleSubmit(onSubmitAddNotaFunction)}>
              <input
                type="text"
                placeholder="materia"
                {...register("materia")}
              ></input>
              <input
                type="text"
                placeholder="nota"
                {...register("nota")}
              ></input>
              <button type="submit">Adicionar nota</button>
            </form>
          </div>
        </div>

        <div className="modal-add-feed">
          <div className="modal-add-feed-content">
            <button onClick={() => setModalAddFeed(false)}>close modal</button>
            <p>Feed</p>
            <form onSubmit={handleSubmit(onSubmitAddFeedFunction)}>
              <input
                type="text"
                placeholder="feedback"
                {...register("feedback")}
              ></input>
              <input
                type="text"
                placeholder="nome"
                {...register("name")}
              ></input>
              <button type="submit">adicionar feedback</button>
            </form>
          </div>
        </div>

        <div className="modal-add-ativs">
          <div className="modal-add-ativs-content">
            <button onClick={() => setModalAddAtivs(false)}>close modal</button>
            <p>Atividades</p>
            <form onSubmit={handleSubmit(onSubmitAddAtivFunction)}>
              <input
                placeholder="Nome da atividade"
                {...register("nome_atividade")}
              ></input>
              <input
                placeholder="Link da atividade"
                {...register("url_atividade")}
              ></input>
              <button type="submit">adicionar atividade</button>
            </form>
          </div>
        </div>

        <div className="modal-add-infos">
          <div className="modal-add-infos-content">
            <button onClick={() => setModalAddInfos(false)}>close modal</button>
            <p>Infos</p>
            <form onSubmit={handleSubmit(onSubmitAddInfoFunction)}>
              <input
                type="text"
                placeholder="infos"
                {...register("message")}
              ></input>
              <button type="submit">adicionar info</button>
            </form>
          </div>
        </div>

        <div className="modal-edit-notas">
          <div className="modal-edit-notas-content">
            <button onClick={() => setModalEditNotas(false)}>
              close modal
            </button>
            <p>Nota</p>
            <form onSubmit={handleSubmit(editNota)}>
              <input
                placeholder="Matéria"
                {...register("materiaEditada")}
              ></input>
              <input placeholder="Nota" {...register("notaEditada")}></input>
              <button type="submit">Editar nota</button>
            </form>
          </div>
        </div>

        <div className="modal-edit-feed">
          <div className="modal-edit-feed-content">
            <button onClick={() => setModalEditFeed(false)}>close modal</button>
            <p>Nota</p>
            <form onSubmit={handleSubmit(editFeedback)}>
              <input
                placeholder="Feedback"
                {...register("feedbackEditado")}
              ></input>
              <input placeholder="Nome" {...register("nomeEditado")}></input>
              <button type="submit">Editar nota</button>
            </form>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default AlunoPage;
