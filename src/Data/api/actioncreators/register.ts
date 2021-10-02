import { Dispatch } from 'react'

import { API_URLS } from '../../const/API_URLS'
import { actions } from '../../Slices/userdata'
import { query } from '../queryTemplate'

export type RegisterData = {
  email?: string
  username: string
  password: string
  passwordConfirm?: string
}

export const submitHandle =
  (data: RegisterData, mode: 'login' | 'register') => async (dispatch: Dispatch<unknown>) => {
    dispatch(actions.startLoading())
    const requestBody = getRequestBody(data, mode)

    const authResponse = await query({
      URL: API_URLS[mode],
      method: 'POST',
      body: requestBody,
      contentType: 'application/x-www-form-urlencoded',
    })

    if (authResponse.detail) {
      dispatch(actions.setError({ error: authResponse.detail }))
    }

    if (mode === 'login') {
      dispatch(
        actions.setToken({
          accessToken: authResponse.access_token,
          refreshToken: authResponse.refresh_token,
        }),
      )
      const profileResponse = await query({
        URL: API_URLS.currentUser,
        method: 'GET',
        accessToken: authResponse.access_token,
      })

      dispatch(actions.setUsername({ username: profileResponse.username }))
      dispatch(actions.setCurrentList({ listID: profileResponse.current_list_id }))
    }

    dispatch(actions.endLoading())
  }

function getRequestBody(data: RegisterData, mode: 'login' | 'register') {
  if (mode === 'login') {
    return `username=${data.email}&password=${data.password}`
  }

  return `email=${data.email}&username=${data.username}&password=${data.password}`
}
