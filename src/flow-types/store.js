// @flow

declare type IProjectState = {
    currentUser: IUserState,
}

declare type IUser = {
    id: number,
    name: string,
    surname: string,
    email: string,
}

declare type IUserState = {
    data: ?IUser,
    isFetching: boolean,
}
