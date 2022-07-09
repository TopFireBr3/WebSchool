import { Route, Switch } from "react-router-dom";
import Instituicao from "../pages/Dashboards/Instituicao";

import Home from "../pages/Home";
import Login from "../pages/Login";

import Notices from "../pages/Notices";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/notices">
        <Notices />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/dashboard/instituicao">
        <Instituicao/>
      </Route>
    </Switch>
  );
};
