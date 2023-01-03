import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice/userSlice";
import articlesReducer from "./slices/articlesSlice/articlesSlice";
import newsReducer from "./slices/newsSlice/newsSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    articles: articlesReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
