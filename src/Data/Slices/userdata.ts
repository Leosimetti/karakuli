import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserDataState = {
  accessToken?: string
  refreshToken?: string
  username?: string
  listID?: number
  loading: boolean
  error?: string
}
const initialState: UserDataState = {
  accessToken: undefined,
  refreshToken: undefined,
  username: undefined,
  listID: undefined,
  loading: false,
  error: undefined,
}

const userdataSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true
    },
    endLoading: (state) => {
      state.loading = false
    },
    setToken: (
      state,
      { payload }: PayloadAction<{ accessToken: string; refreshToken: string }>,
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
    reset: (_state) => initialState,
    setError: (state, { payload }: PayloadAction<{ error: string }>) => {
      state.error = payload.error
    },
    clearError: (state) => {
      state.error = undefined
    },
  },
})

const rootRegisterSelector = (state: { userdata: UserDataState }) => state.userdata
const loginSelectors = {
  username: createSelector(rootRegisterSelector, (state) => state.username),
  accessToken: createSelector(rootRegisterSelector, (state) => state.accessToken),
  refreshToken: createSelector(rootRegisterSelector, (state) => state.refreshToken),
  listID: createSelector(rootRegisterSelector, (state) => state.listID),
  isLoading: createSelector(rootRegisterSelector, (state) => state.loading),
}

export const { actions } = userdataSlice
export const { reducer } = userdataSlice
export const selectors = loginSelectors
