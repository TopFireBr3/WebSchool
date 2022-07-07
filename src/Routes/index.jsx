import { Switch, Route } from "react-router-dom";
import { Register } from "../Pages/Register";
import { RegisterComplement } from "../Pages/RegisterComplement";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/registerComplement">
        <RegisterComplement />
      </Route>
    </Switch>
  );
};
