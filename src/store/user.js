import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
    user: null,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;