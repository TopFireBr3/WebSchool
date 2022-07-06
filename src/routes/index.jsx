import { Route, Switch } from "react-router-dom"
import Home from "../pages/Home"

export const Router = ({modal, setModal})=> {

    return(
        <Switch>
            <Route exact path="/">
                <Home modal={modal} setModal={setModal}/>
            </Route>
        </Switch>
    )
}