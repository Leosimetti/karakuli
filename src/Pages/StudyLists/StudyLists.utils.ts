import { API_URLS } from '../../Data/const/API_URLS'

export type StudyList = {
  name: string
  description: string
  id: number
  img_url: string
}

export const getLists = async (): Promise<StudyList[]> => {
  const getListsResponse = await fetch(API_URLS.studyLists, {
    method: 'GET',
    mode: 'cors',
  })

  return getListsResponse.json()
}
