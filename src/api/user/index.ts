import { createAsyncThunk } from '@reduxjs/toolkit'

export const apiFetchCurrentUser = createAsyncThunk('CURRENT_USER', async () => {
    const response = await fetch(`https://reqres.in/api/users/1`)
    // Inferred return type: Promise<MyData>
    return (await response.json()) as IUser
})
