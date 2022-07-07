import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
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
    </Switch>
  );
};
