export type registerData = {
  email?: string
  username: string
  password: string
  passwordConfirm?: string
}

const URLmap = {
  login: 'https://karakuli-backend.herokuapp.com/api/v1/auth/jwt/login',
  register: 'https://karakuli-backend.herokuapp.com/api/v1/auth/register',
}

export async function submitHandle(data: registerData, mode: 'login' | 'register') {
  // console.log(data)
  const requestBody = getRequestBody(data, mode)
  const response = await fetch(URLmap[mode], {
    method: 'POST',
    mode: 'cors',
    body: requestBody,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
  const string = await response.text()

  console.log(JSON.parse(string))
}

function getRequestBody(data: registerData, mode: 'login' | 'register') {
  if (mode === 'login') {
    return `username=${data.email}&password=${data.password}`
  }

  return `email=${data.email}&username=${data.username}&password=${data.password}`
}
