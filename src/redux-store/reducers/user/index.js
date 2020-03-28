// @flow

import { execReducer } from '../utils'
import { userActions } from 'reduxStore/actions/user'
import updaters from './updaters'

const handlers = {
    [userActions.fetching]: updaters.fetching,
    [userActions.fetch]: updaters.fetch,
    [userActions.failed]: updaters.failed,
}

const initialState: IUserState = {
    data: null,
    isFetching: false,
}

const userReducer = (
    draft: IProjectState = initialState,
    action: ICurrentUserActions
) => {
    execReducer(handlers, action.type, draft, action)
    return draft
}

export default userReducer
