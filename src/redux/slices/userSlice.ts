import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { IUser, ILoginRequest } from '../types/user'

const initialState: IUser = {
    email: '',
    password: '',
    isLoggedIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<ILoginRequest>) => {
            state.email = action.payload.email
            state.password = action.payload.password
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.email = ''
            state.password = ''
            state.isLoggedIn = false
        },
    },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer