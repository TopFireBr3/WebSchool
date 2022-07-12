import { Route, Switch, useParams } from "react-router-dom";

import Home from "../pages/Home";
import DashboardProfessor from "../pages/DashboardProfessor";
import Notices from "../pages/Notices";
import AlunoPage from '../pages/AlunoPage'

export const Routes = () => {


  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/notices">
        <Notices />
      </Route>
      <Route path='/dashboard/professor'>
        <DashboardProfessor/>
        </Route>
         <Route path='/aluno'>
            <AlunoPage/>
         </Route>
       
   
    </Switch>
  );
};
