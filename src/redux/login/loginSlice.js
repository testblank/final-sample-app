import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    userInfo: null,
    error: null,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logoutRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        logoutSuccess: (state, action) => {
            state.loading = false;
            state.userInfo = null;
        },
        logoutFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;