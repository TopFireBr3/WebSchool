import { Switch } from "react-router-dom";
import Route from "./routes";

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
