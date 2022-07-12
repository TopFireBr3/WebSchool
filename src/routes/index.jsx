import { Route as RouterDom } from "react-router-dom";
import InfosPai from "../pages/Dashboards/Pai/InfosPai";
import NotasPai from "../pages/Dashboards/Pai/NotasPai";
import PagPrincipalPai from "../pages/Dashboards/Pai/PagPrincipalPai";
import FeedbacksPai from "../pages/Dashboards/Pai/FeedbacksPai";
import { Switch} from "react-router-dom";
import Route from "./routes";

import Home from "../pages/Home";
import Login from "../pages/Login"
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
import AlunoPage from '../pages/AlunoPage'

export const Routes = () => {


  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/login" component={Login} />

      <Route path="/register" component={Register} />

      <Route path="/registerComplement" component={RegisterComplement} />


      <RouterDom exact path="/pagPrincipalPai">
        <PagPrincipalPai />
      </RouterDom>
      
      <RouterDom exact path="/notasPai">
        <NotasPai />
      </RouterDom>

      <RouterDom exact path="/infosPai">
        <InfosPai />
      </RouterDom>

      <RouterDom exact path="/FeedbacksPai">
        <FeedbacksPai />
      </RouterDom>

      <RouterDom exact path="/dashboard/aluno">
        <Aluno />
      </RouterDom>

      <RouterDom exact path="/dashboard/aluno/atividades">
        <Atividades />
      </RouterDom>

      <RouterDom exact path="/dashboard/aluno/feedBack">
        <FeedBackAluno />
      </RouterDom>

      <RouterDom exact path="/dashboard/aluno/infoGerais">
        <InfoGerais />
      </RouterDom>

      <RouterDom exact path="/dashboard/aluno/notas">
        <Notas />
      </RouterDom>
      <Route path="/notices" component={Notices} />

      <Route
        path="/dashboard/instituicao"
        isPrivate
        user="instituicao"
        component={Instituicao}
      />

      <Route path='/dashboard/professor'>
        <DashboardProfessor/>
        </Route>
         <Route path='/aluno'>
            <AlunoPage/>
         </Route>
       
   
    </Switch>
  );
};
