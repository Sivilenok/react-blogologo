import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    email: string;
    isAuth?: boolean;
    error?: string;
};

const initialState: UserState = {
    name: "",
    email: "",
    isAuth: undefined,
    error: undefined
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggleAuth: (state) => {
            state.isAuth = !state.isAuth;
        },
        setUserName: (state, { payload }: PayloadAction<string>) => {
            state.name =  payload;
        },
    },
});

export default userSlice.reducer;
export const { toggleAuth, setUserName } = userSlice.actions;