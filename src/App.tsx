import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './Data/store'
import { RoutingSwitch } from './Routing/RoutingSwitch'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
  }
`

const App = () => (
  <Router>
    <Provider store={store}>
      <GlobalStyle />
      <RoutingSwitch />
    </Provider>
  </Router>
)

export default hot(App)
