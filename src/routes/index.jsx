import { Route, Switch } from "react-router-dom";
import InfosPai from "../pages/Dashboards/Pai/InfosPai";
import NotasPai from "../pages/Dashboards/Pai/NotasPai";
import PagPrincipalPai from "../pages/Dashboards/Pai/PagPrincipalPai";
import FeedbacksPai from "../pages/Dashboards/Pai/FeedbacksPai";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Notices from "../pages/Notices";
import { Register } from "../pages/Register";
import { RegisterComplement } from "../pages/RegisterComplement";

import Instituicao from "../pages/Dashboards/Instituicao";

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

      <Route exact path="/pagPrincipalPai">
        <PagPrincipalPai />
      </Route>
      <Route exact path="/notasPai">
        <NotasPai />
      </Route>
      <Route exact path="/infosPai">
        <InfosPai />
      </Route>
      <Route exact path="/FeedbacksPai">
        <FeedbacksPai />
      </Route>

      <Route path="/dashboard/instituicao">
        <Instituicao />
      </Route>
    </Switch>
  );
};
