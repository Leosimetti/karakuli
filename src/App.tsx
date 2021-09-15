import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Router, Switch } from 'react-router-dom'

import { AuthPage } from './Pages/Auth/AuthPage'

import { createBrowserHistory } from 'history'
import { createGlobalStyle } from 'styled-components'

const history = createBrowserHistory()

const GlobalStyle = createGlobalStyle`
    html,body,#app {
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }
`

const App = () => {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Switch>
        <Route exact path={'/'}>
          <AuthPage />
        </Route>
        <Route path={'/dashboard'}>BIBA</Route>
      </Switch>
    </Router>
  )
}

export default hot(App)
