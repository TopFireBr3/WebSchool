import {  Route, Switch } from "react-router-dom";

import InfosPai from "../pages/Dashboards/Pai/InfosPai";
import NotasPai from "../pages/Dashboards/Pai/NotasPai";
import PagPrincipalPai from "../pages/Dashboards/Pai/PagPrincipalPai";
import FeedbacksPai from "../pages/Dashboards/Pai/FeedbacksPai";

import Home from "../pages/Home";
import Login from "../pages/Login";
import DashboardProfessor from "../pages/DashboardProfessor";
import Notices from "../pages/Notices";
import { Register } from "../pages/Register";
import { RegisterComplement } from "../pages/RegisterComplement";

import Instituicao from "../pages/Dashboards/Instituicao";
import Aluno from "../pages/Dashboards/Aluno";

import Atividades from "../pages/Dashboards/Aluno/SubPages/Atividades";
import FeedBackAluno from "../pages/Dashboards/Aluno/SubPages/FeedBack";
import InfoGerais from "../pages/Dashboards/Aluno/SubPages/InformacoesGerais";
import Notas from "../pages/Dashboards/Aluno/SubPages/notas";
import AlunoPage from "../pages/AlunoPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/register" component={Register} />

      <Route exact path="/registerComplement" component={RegisterComplement} />

      <Route exact path="/notices">
        <Notices />
      </Route>

      <Route exact path="/dashboard/responsavel">
        <PagPrincipalPai />
      </Route>

      <Route exact path="/dashboard/responsavel/notas">
        <NotasPai />
      </Route>

      <Route exact path="/dashboard/responsavel/infos">
        <InfosPai />
      </Route>

      <Route exact path="/dashboard/responsavel/feedbacks">
        <FeedbacksPai />
      </Route>

      <Route exact path="/dashboard/instituicao">
        <Instituicao />
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

      <Route exact path="/notices" component={Notices} />

      <Route
        path="/dashboard/instituicao"
        isPrivate
        user="instituicao"
        component={Instituicao}
      />

      <Route exact path="/dashboard/professor">
        <DashboardProfessor />
      </Route>

      <Route exact path="/aluno">
        <AlunoPage />
      </Route>
    </Switch>
  );
};
