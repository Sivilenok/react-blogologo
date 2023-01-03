import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { articleAPI } from "services/restBlogsAPI";
import { IArticleAPI } from "types/types";

interface IArticlesState {
  results: IArticleAPI[];
  isLoading: boolean;
  error: null | string;
}

export const fetchAllArticles = createAsyncThunk<IArticleAPI[], undefined, { rejectValue: string }>(
  "articles/fetchAll",
  (params, { rejectWithValue }) => {
    return articleAPI.getArticles().catch((err: AxiosError) => {
      return rejectWithValue(err.message);
    });
  },
);

const initialState: IArticlesState = {
  results: [],
  isLoading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchAllArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articlesSlice.reducer;
