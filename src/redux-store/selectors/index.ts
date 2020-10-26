export const getState = (state: IProjectState): IProjectState => state

// User
export const getCurrentUserState = (state: IProjectState): IUserState => getState(state).currentUser
export const getCurrentUserData = (state: IProjectState): IUser | null =>
    getCurrentUserState(state).data
export const getCurrentUserIsFetching = (state: IProjectState): boolean =>
    getCurrentUserState(state).isFetching
