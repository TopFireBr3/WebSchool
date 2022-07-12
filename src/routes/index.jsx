import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Notices from "../pages/Notices";
import { Register } from "../pages/Register";
import { RegisterComplement } from "../pages/RegisterComplement";

import Instituicao from "../pages/Dashboards/Instituicao";
import Aluno from "../pages/Dashboards/Aluno";
import InfoGerais from "../pages/Dashboards/Aluno/InformacoesGerais";
import FeedBack from "../pages/Dashboards/Aluno/FeedBack";
import Atividades from "../pages/Dashboards/Aluno/Atividades";
import Notas from "../pages/Dashboards/Aluno/notas";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route exact path="/registerComplement">
        <RegisterComplement />
      </Route>

      <Route path="/notices">
        <Notices />
      </Route>

      <Route path="/dashboard/instituicao">
        <Instituicao />
      </Route>

      <Route exact path="/dashboard/aluno">
        <Aluno />
      </Route>

      <Route exact path="/dashboard/aluno/atividades">
        <Atividades />
      </Route>

      <Route exact path="/dashboard/aluno/feedBack">
        <FeedBack />
      </Route>

      <Route exact path="/dashboard/aluno/infoGerais">
        <InfoGerais />
      </Route>

      <Route exact path="/dashboard/aluno/notas">
        <Notas />
      </Route>

    </Switch>
  );
};
