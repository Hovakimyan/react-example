interface IProjectState {
    currentUser: IUserState
}

interface IUser {
    id: number
    name: string
    surname: string
    email: string
}

interface IUserState {
    data: IUser | null
    isFetching: boolean
}
