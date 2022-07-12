
import { Route, Switch } from 'react-router-dom'
import Atividades from '../SubPages/Atividades'
import FeedBack from '../SubPages/FeedBack'
import InfoGerais from '../SubPages/InformacoesGerais'
import Notas from '../SubPages/notas'

const Routes = () => {
  return (
    <Switch>
      <Route  path="/dashboard/aluno/atividades">
        <Atividades />
      </Route>

      <Route path="/dashboard/aluno/feedBack">
        <FeedBack />
      </Route>

      <Route  path="/dashboard/aluno/infoGerais">
        <InfoGerais />
      </Route>

      <Route path="/dashboard/aluno/notas">
        <Notas />
      </Route>

    </Switch>
  )
}

export default Routes