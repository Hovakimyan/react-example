// @flow

import { execReducer } from '../utils'
import { userActions } from 'reduxStore/actions/user'

const handlers = {
    [userActions.fetching]: '',
    [userActions.fetch]: '',
    [userActions.failed]: '',
}

const initialState = null

const userReducer = (
    draft: IProjectState = initialState,
    action: ICurrentUserActions
) => {
    execReducer(handlers, action.type, draft, action)
    return draft
}

export default userReducer
