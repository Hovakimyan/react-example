// @flow

import { PREFIX } from 'constants/redux'
import { apiFetchCurrentUser } from 'api/user'
import type { Dispatch } from 'redux'

const SUFFIX = 'USER'

export const userActions = {
    fetching: `${PREFIX.FETCHING}_${SUFFIX}`,
    fetch: `${PREFIX.FETCH}_${SUFFIX}`,
    failed: `${PREFIX.FAILED}_${SUFFIX}`,
}

export const fetchCurrentUser = () => (dispatch: Dispatch) => {
    dispatch({
        type: userActions.fetching,
    })
    return apiFetchCurrentUser()
        .then((action: APIReturnType<IUser>) => {
            dispatch({
                type: userActions.fetch,
                payload: action.data,
            })
        })
        .catch(() =>
            dispatch({
                type: userActions.failed,
            })
        )
}
