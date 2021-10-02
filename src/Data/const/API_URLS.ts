const base = 'https://karakuli-backend.herokuapp.com/api/v1'

export const API_URLS = {
  login: `${base}/auth/jwt/login`,
  register: `${base}/auth/register`,
  currentUser: `${base}/auth/me`,
  reviews: `${base}/reviews`,
  lessons: `${base}/study`,
  studyLists: `${base}/lists`,
  dashboard: `${base}/dashboard`,
}
