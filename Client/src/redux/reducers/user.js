import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isSignUp: false,
    },
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload;
        },
        register: (state, action) => {
            state.currentUser = action.payload;
            state.user.push(action.payload);
        },
        logout: (state) => {
            localStorage.clear();
            state.currentUser = null;
        },
        handleSwith: (state) => {
            state.isSignUp = !state.isSignUp;
        },
        notSignedUp: (state) => {
            state.isSignUp = false;
        }
    }
});


export const {login, register, logout, handleSwith, notSignedUp} = userSlice.actions;

export default userSlice.reducer;