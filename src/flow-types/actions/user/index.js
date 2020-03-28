// @flow

declare type ICurrentUserTypes = 'FETCHING_USER' | 'FETCH_USER' | 'FAILED_USER'

declare type ICurrentUserFetching = {
    type: 'FETCHING_USER',
}

declare type ICurrentUserFetch = {
    type: 'FETCH_USER',
    payload: IUser,
}

declare type ICurrentUserFailed = {
    type: 'FAILED_USER',
}

declare type ICurrentUserActions =
    | ICurrentUserFetching
    | ICurrentUserFetch
    | ICurrentUserFailed
