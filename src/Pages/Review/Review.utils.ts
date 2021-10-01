import { URLmap } from '../../Data/const/API_URLS'

export const getReviews = async (userToken: string) => {
  const authResponse = await fetch(URLmap.reviews, {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      Authorization: `Bearer ${userToken}`,
    }),
  })

  return await authResponse.json()
}
