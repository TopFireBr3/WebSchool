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
      <Route exact path="/" component={Home} />

      <Route path="/login" component={Login} />

      <Route path="/register" component={Register} />

      <Route path="/registerComplement" component={RegisterComplement} />

      <Route path="/notices">
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

      <Route path="/dashboard/instituicao">
        <Instituicao />
      </Route>
      <Route path="/notices" component={Notices} />

      <Route
        path="/dashboard/instituicao"
        isPrivate
        user="instituicao"
        component={Instituicao}
      />
    </Switch>
  );
};
