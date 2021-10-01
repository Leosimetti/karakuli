import { reducer as userdataReducer } from './Slices/userdata'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: combineReducers({
    userdata: userdataReducer,
  }),
});

export default store;
