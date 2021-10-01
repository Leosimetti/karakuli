const base = 'https://karakuli-backend.herokuapp.com/api/v1'

export const URLmap = {
  login: `${base}/auth/jwt/login`,
  register: `${base}/auth/register`,
  currentUser: `${base}/auth/me`,
  reviews: `${base}/reviews`,
  studyLists: `${base}/lists`,
}
