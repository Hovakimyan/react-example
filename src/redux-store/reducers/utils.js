// @flow
export const execReducer = (
    reducersMap: Object,
    type: string,
    ...rest: any
): void => {
    const handler = reducersMap[type]
    if (!handler) return
    if (typeof handler === 'function') {
        reducersMap[type](...rest)
    } else {
        handler.forEach((method) => method(...rest))
    }
}
