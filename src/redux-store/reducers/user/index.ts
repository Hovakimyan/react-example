import { createSlice } from '@reduxjs/toolkit'
import { apiFetchCurrentUser } from 'api/user'

const initialState: IUserState = {
    data: null,
    isFetching: false,
}

const currentUserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(apiFetchCurrentUser.pending, (state, action) => {
            if (action.payload) {
                state.isFetching = true
            }
        })
        builder.addCase(apiFetchCurrentUser.fulfilled, (state, action) => {
            if (action.payload) {
                state.isFetching = false
                state.data = action.payload
            }
        })
    },
})

export default currentUserSlice.reducer
