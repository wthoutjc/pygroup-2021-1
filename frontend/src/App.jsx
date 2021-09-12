import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routes from './routes/routes'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={() => <route.component name={route.name} />}
              />
            )
          })}
        </Switch>
      </Router>
    </>
  )
}

export default App
