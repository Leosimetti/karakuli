import { API_URLS } from '../../Data/const/API_URLS'

export const getLessons = async (userToken: string, amount: number) => {
  const authResponse = await fetch(`${API_URLS.lessons}?n=${amount}`, {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      Authorization: `Bearer ${userToken}`,
    }),
  })

  return authResponse.json()
}
