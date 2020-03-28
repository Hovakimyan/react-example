// @flow

import produce from 'immer'
import { combineReducers } from 'redux'

import user from './user'

const reducers = {
    user,
}

function produceState(reducer) {
    const initialState = reducer(undefined, {})
    return function (state: IProjectState = initialState, action: IAnyAction) {
        return produce(state, (draft) => reducer(draft, action))
    }
}

export default produceState(combineReducers(reducers))
