// @flow

export const fetchCurrentUser = (id: number) => {
    return Promise.resolve(() => {
        return {
            id,
            name: 'Sergey',
            surname: 'Hovakimyan',
            email: 'hovakimyan.serg@gmail.com',
        }
    })
}
