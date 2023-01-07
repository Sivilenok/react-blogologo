import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  email: string;
  id: string;
  isAuth: boolean;
}

const initialState: IUser = {
  name: "",
  email: "",
  id: "",
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isAuth = true;
    },
    removeUser: (state) => {
      state.email = "";
      state.id = "";
      state.name = "";
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
