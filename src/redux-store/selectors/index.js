// @flow

export const getState = (state: IProjectState): IProjectState => state

// User
export const getCurrentUserState = (state: IProjectState): IUserState =>
    getState(state).currentUser
export const getCurrentUserData = (state: IProjectState): IUserState =>
    getCurrentUserState(state).data
export const getCurrentUserIsFetching = (state: IProjectState): IUserState =>
    getCurrentUserState(state).isFetching
