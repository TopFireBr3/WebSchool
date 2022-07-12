import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Notices from "../pages/Notices";
import { Register } from "../pages/Register";
import { RegisterComplement } from "../pages/RegisterComplement";

import DashboardProfessor from "../pages/DashboardProfessor";

import Instituicao from "../pages/Dashboards/Instituicao";
import Aluno from "../pages/Dashboards/Aluno";

import Notas from "../pages/Dashboards/Aluno/SubPages/notas";
import Atividades from "../pages/Dashboards/Aluno/SubPages/Atividades";
import FeedBackAluno from "../pages/Dashboards/Aluno/SubPages/FeedBack";
import InfoGerais from "../pages/Dashboards/Aluno/SubPages/InformacoesGerais";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login" component={Login}>
        <Home />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/registerComplement">
        <RegisterComplement />
      </Route>

      <Route path="/notices">
        <Notices />
      </Route>

      <Route exact path="/dashboard/aluno">
        <Aluno />
      </Route>

      <Route exact path="/dashboard/aluno/atividades">
        <Atividades />
      </Route>

      <Route exact path="/dashboard/aluno/feedBack">
        <FeedBackAluno />
      </Route>

      <Route exact path="/dashboard/aluno/infoGerais">
        <InfoGerais />
      </Route>

      <Route exact path="/dashboard/aluno/notas">
        <Notas />
      </Route>

      <Route path="/dashboard/instituicao">
        <Instituicao />
      </Route>

      <Route path="/dashboard/professor">
        <DashboardProfessor />
      </Route>
    </Switch>
  );
};
