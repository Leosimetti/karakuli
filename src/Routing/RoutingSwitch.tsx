import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import { selectors } from '../Data/Slices/userdata'
import { AuthPage } from '../Pages/Auth/AuthPage'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import ReviewPage from '../Pages/Review/ReviewPage'
import { StudyLists } from '../Pages/StudyLists/StudyLists'

import { URLs } from './urls'

export const RoutingSwitch = () => {
  const userToken = useSelector(selectors.accessToken)

  return (
    <Switch>
      {userToken || (
        <>
          <Route path={URLs.auth}>
            <AuthPage />
          </Route>
          <Route>
            <Redirect to={URLs.auth} />
          </Route>
        </>
      )}
      {userToken && (
        <>
          <Route exact path={URLs.dashboard}>
            <Dashboard />
          </Route>
          <Route exact path={URLs.review}>
            <ReviewPage />
          </Route>
          <Route exact path={URLs.studyLists}>
            <StudyLists />
          </Route>
          {/* <Route exact path={URLs.progress}> */}
          {/*  <NavBar /> */}
          {/* </Route> */}
          <Route>
            <Redirect to={URLs.dashboard} />
          </Route>
        </>
      )}
    </Switch>
  )
}
