import { Switch, Route } from "react-router-dom";
import { Register } from "../Pages/Register";
import { RegisterComplement } from "../Pages/RegisterComplement";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/registerComplement">
        <RegisterComplement />
      </Route>
    </Switch>
  );
};
