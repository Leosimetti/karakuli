import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import { AuthPage } from './Pages/Auth/AuthPage'
import { Dashboard } from './Pages/Dashboard/Dashboard'
import ReviewPage from './Pages/Review/ReviewPage'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
  }
`

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Route exact path="/">
        <Redirect to={'/auth'} />
      </Route>
      <Switch>
        <Route path="/auth">{false ? <Redirect to="/auth" /> : <AuthPage />}</Route>
        <Route exact path="/dashboard">
          {false ? <Redirect to="/auth" /> : <Dashboard />}
        </Route>
        <Route exact path="/review">
          {false ? <Redirect to="/auth" /> : <ReviewPage />}
        </Route>
      </Switch>
    </Router>
  )
}

export default hot(App)
