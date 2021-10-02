import { Dispatch } from 'react'

import { API_URLS } from '../../const/API_URLS'
import { actions } from '../../Slices/userdata'
import { query } from '../queryTemplate'

export const chooseList =
  (id: number, userToken: string, callback: () => void) => async (dispatch: Dispatch<unknown>) => {
    const getListResponse = await query({
      URL: `${API_URLS.studyLists}/${id}`,
      method: 'POST',
      accessToken: userToken,
    })

    if (getListResponse === 'All good') {
      dispatch(actions.setCurrentList({ listID: id }))
      callback()
    } else {
      dispatch(actions.reset())
    }
  }
