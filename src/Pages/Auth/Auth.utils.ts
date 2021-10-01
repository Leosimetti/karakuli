import { URLmap } from '../../Data/const/API_URLS'
import { actions } from '../../Data/Slices/userdata'

export type registerData = {
  email?: string
  username: string
  password: string
  passwordConfirm?: string
}

export const submitHandle =
  (data: registerData, mode: 'login' | 'register') => async (dispatch: any) => {
    const requestBody = getRequestBody(data, mode)
    const authResponse = await fetch(URLmap[mode], {
      method: 'POST',
      mode: 'cors',
      body: requestBody,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    const authResponseJSON = await authResponse.json()

    console.log(authResponseJSON)

    if (mode === 'login') {
      dispatch(
        actions.setToken({
          accessToken: authResponseJSON.access_token,
          refreshToken: authResponseJSON.refresh_token,
        })
      )
      const response = await fetch(URLmap.currentUser, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
          Authorization: `Bearer ${authResponseJSON.access_token}`,
        }),
      })
      const responseJSON = await response.json()

      dispatch(actions.setUsername({ username: responseJSON.username }))
      dispatch(actions.setCurrentList({ listID: responseJSON.current_list_id }))
    }
  }

function getRequestBody(data: registerData, mode: 'login' | 'register') {
  if (mode === 'login') {
    return `username=${data.email}&password=${data.password}`
  }

  return `email=${data.email}&username=${data.username}&password=${data.password}`
}
