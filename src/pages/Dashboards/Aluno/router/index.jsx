
import { Route, Switch } from 'react-router-dom'
import Atividades from '../SubPages/Atividades'
import FeedBack from '../SubPages/FeedBack'
import InfoGerais from '../SubPages/InformacoesGerais'
import Notas from '../SubPages/notas'

const Routess = () => {
  return (
    <Switch>
      <Route exact path="/dashboard/aluno/atividades">
        <Atividades />
      </Route>

      <Route exact path="/dashboard/aluno/feedBack">
        <FeedBack />
      </Route>

      <Route exact path="/dashboard/aluno/infoGerais">
        <InfoGerais />
      </Route>

      <Route exact path="/dashboard/aluno/notas">
        <Notas />
      </Route>

    </Switch>
  )
}

export default Routess;