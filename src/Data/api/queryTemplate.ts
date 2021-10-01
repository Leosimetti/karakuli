type queryProps = {
  URL: string
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  body?: BodyInit
  accessToken?: string
  contentType?: string
  logging?: boolean
  onFail?: (errorMessage: string) => void
}

export async function query({
  URL,
  method,
  body,
  accessToken,
  contentType,
  logging,
  onFail,
}: queryProps) {
  const requestHeaders = new Headers()

  if (accessToken) requestHeaders.append('Authorization', `Bearer ${accessToken}`)

  if (contentType) requestHeaders.append('Content-Type', contentType)

  const response = await fetch(URL, {
    method,
    mode: 'cors',
    body,
    headers: requestHeaders,
  })
  const responseJSON = await response.json()

  if (logging) {
    // eslint-disable-next-line no-console
    console.log(`%cRequest on URL: ${URL} return value:`, 'font:2rem; color:blue')
    // eslint-disable-next-line no-console
    console.log(responseJSON)
  }

  if (onFail && responseJSON.detail) {
    onFail(responseJSON.detail)
  }

  return responseJSON
}
