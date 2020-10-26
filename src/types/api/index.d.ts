interface APIReturnType<T> {
    status: number
    data: T
}

interface DispatchType<T> {
    type: 'string'
    payload: T
}
