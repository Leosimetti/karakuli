import { URLmap } from '../../Data/const/API_URLS'

export type studyList = {
  name: string
  description: string
  id: number
}

export const getLists = async (): Promise<studyList[]> => {
  const getListsResponse = await fetch(URLmap.studyLists, {
    method: 'GET',
    mode: 'cors',
  })

  return await getListsResponse.json()
}

export const handleListClick = async () => {}
export const chooseList = async (id: number): Promise<studyList> => {
  const getListResponse = await fetch(`${URLmap.studyLists}/${id}`, {
    method: 'POST',
    mode: 'cors',
  })

  return await getListResponse.json()
}
