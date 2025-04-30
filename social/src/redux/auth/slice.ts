import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunk";
import { getToken, removeToken, storeToken } from "@/utility/local.utility";

export interface AuthState {
    loading: boolean,
    error: object | null,
    data: unknown | null,
    isAuthenticate: boolean
}

const initialState : AuthState = {
    loading: false,
    error: null,
    data: null,
    isAuthenticate: getToken() ? true : false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            removeToken()
            state.isAuthenticate = false
        }
    },
    extraReducers(builder) {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.token
            storeToken(action.payload.data.token)
            state.isAuthenticate = true
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error
        })
    },
})

export const { logout } = authSlice.actions
export default authSlice.reducer