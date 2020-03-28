// @flow

export const apiFetchCurrentUser = (id: number) => {
    return Promise.resolve(() => {
        return {
            status: 200,
            data: {
                id,
                name: 'Sergey',
                surname: 'Hovakimyan',
                email: 'hovakimyan.serg@gmail.com',
            },
        }
    })
}
