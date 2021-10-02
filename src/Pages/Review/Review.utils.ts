import { API_URLS } from '../../Data/const/API_URLS'

export const getReviews = async (userToken: string) => {
  const authResponse = await fetch(API_URLS.reviews, {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      Authorization: `Bearer ${userToken}`,
    }),
  })

  return authResponse.json()
}

export const doReview = async (userToken: string, lesson_id: number, lesson_type: string) => {
  const authResponse = await fetch(`${API_URLS.reviews}/${lesson_id}`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      incorrect_answers: 0,
      review_type: lesson_type,
    }),
    headers: new Headers({
      Authorization: `Bearer ${userToken}`,
    }),
  })

  return authResponse.json()
}
