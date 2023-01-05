import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice/userSlice";
import blogReducer from "./slices/blogSlice/blogSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
