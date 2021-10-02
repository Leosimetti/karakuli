import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as userdataReducer } from '../Data/Slices/userdata'

const getTestStore = () =>
  configureStore({
    reducer: combineReducers({
      userdata: userdataReducer,
    }),
  })

export default getTestStore
