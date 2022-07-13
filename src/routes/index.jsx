import { Switch } from "react-router-dom";
import Route from "./routes";

import Home from "../pages/Home";
import DashboardProfessor from "../pages/DashboardProfessor";
import Notices from "../pages/Notices";
import { Register } from "../pages/Register";
import { RegisterComplement } from "../pages/RegisterComplement";

import Instituicao from "../pages/Dashboards/Instituicao";
import AlunoPage from "../pages/AlunoPage";
import Login from "../pages/Login";

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
      <Route path="/notices">
        <Notices />
      </Route>
      <Route path="/dashboard/professor">
        <DashboardProfessor />
      </Route>
      <Route path="/aluno">
        <AlunoPage />
      </Route>
    </Switch>
  );
};
