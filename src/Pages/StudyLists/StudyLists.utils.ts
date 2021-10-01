import { API_URLS } from '../../Data/const/API_URLS'

export type studyList = {
  name: string
  description: string
  id: number
  img_url: string
}

export const getLists = async (): Promise<studyList[]> => {
  const getListsResponse = await fetch(API_URLS.studyLists, {
    method: 'GET',
    mode: 'cors',
  })

  return await getListsResponse.json()
}
