import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { articleAPI } from "services/restBlogsAPI";
import { INewsAPI } from "types/types";

interface INewsState {
  results: INewsAPI[];
  isLoading: boolean;
  error: null | string;
}

export const fetchAllNews = createAsyncThunk<INewsAPI[], undefined, { rejectValue: string }>(
  "news/fetchAll",
  (params, { rejectWithValue }) => {
    return articleAPI.getNews().catch((error: AxiosError) => {
      return rejectWithValue(error.message);
    });
  },
);

const initialState: INewsState = {
  results: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllNews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllNews.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchAllNews.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default newsSlice.reducer;
