import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import DashboardProfessor from "../pages/DashboardProfessor";
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
      <Route>
        <Route path='/dashboard/professor'>
          <DashboardProfessor/>

        </Route>
       
      </Route>
    </Switch>
  );
};
