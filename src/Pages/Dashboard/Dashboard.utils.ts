import { API_URLS } from '../../Data/const/API_URLS';

export async function getStudyListName(id: number) {
  const authResponse = await fetch(`${API_URLS.studyLists}/${id}`, {
    method: 'GET',
    mode: 'cors',
  });

  return authResponse.json();
}

export type AvailableItems = { lessons: number; reviews: number };

export async function getAvailableItems(userToken: string) {
  const itemsResponse = await fetch(`${API_URLS.dashboard}`, {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      Authorization: `Bearer ${userToken}`,
    }),
  });

  const result = await itemsResponse.json();

  console.log(result);

  return result;
}
