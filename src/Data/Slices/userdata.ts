import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

type userdataState = {
  accessToken?: string
  refreshToken?: string
  username?: string
  listID?: number
}
const initialState: userdataState = {
  accessToken: undefined,
  refreshToken: undefined,
  username: undefined,
  listID: undefined,
}

const userdataSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    setToken: (
      state,
      { payload }: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
    },
    setUsername: (state, { payload }: PayloadAction<{ username: string }>) => {
      state.username = payload.username
    },
    setCurrentList: (state, { payload }: PayloadAction<{ listID: number }>) => {
      state.listID = payload.listID
    },
  },
})

const rootRegisterSelector = (state: { userdata: userdataState }) => state.userdata
const loginSelectors = {
  username: createSelector(rootRegisterSelector, (state) => state.username),
  accessToken: createSelector(rootRegisterSelector, (state) => state.accessToken),
  refreshToken: createSelector(rootRegisterSelector, (state) => state.refreshToken),
  listID: createSelector(rootRegisterSelector, (state) => state.listID),
}

export const actions = userdataSlice.actions
export const reducer = userdataSlice.reducer
export const selectors = loginSelectors
