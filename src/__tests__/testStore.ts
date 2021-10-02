import { reducer as userdataReducer } from '../Data/Slices/userdata'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

const getTestStore = () =>
  configureStore({
    reducer: combineReducers({
      userdata: userdataReducer,
    }),
  })

export default getTestStore
