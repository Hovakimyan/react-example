// @flow

const fetching = (state: IUserState): void => {
    state.isFetching = true
}

const fetch = (state: IUserState, action: ICurrentUserFetch): void => {
    state.data = action.payload
    state.isFetching = false
}

const failed = (state: IUserState): void => {
    state.data = null
    state.isFetching = false
}

export default { fetching, fetch, failed }
