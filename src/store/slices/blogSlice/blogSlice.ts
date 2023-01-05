import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { articleAPI } from "services/restBlogsAPI";
import { IArticleAPI, INewsAPI, RootState } from "types/types";
import { ListOptions } from "services/mappers/listOptionsParams";

type ResultType = IArticleAPI|INewsAPI;
type ResultsType = Array<ResultType>;

interface IArticlesState {
  results: ResultsType;
  isLoading: boolean;
  error: null|string;
}

export enum Category {
    ARTICLES = "articles",
    NEWS = "news",
}

export enum Sort {
    AZ = "az",
    ZA = "za",
}

interface FetchAllOptions {
    category: Category;
    sort?: Sort;
}

// eslint-disable-next-line max-len
export const fetchAllBlogEntries = createAsyncThunk<ResultsType, FetchAllOptions, { rejectValue: string }>(
  "blog/fetchAll",
  ({ category, sort }, { rejectWithValue }) => {
    const params: ListOptions = {
      limit: 12,
    };
    switch (sort) {
      case Sort.AZ:
        params.sort = "title";
        break;
      case Sort.ZA:
        params.sort = "title"; // TODO: how to set sort order?
        break;
    }

    let promise: Promise<ResultsType>;
    if (category === Category.ARTICLES) {
      promise = articleAPI.getArticles(params);
    } else {
      promise = articleAPI.getNews(params);
    }

    return promise.catch((err: AxiosError) => rejectWithValue(err.message));
  },
);

interface FetchByIdOptions {
    category: Category;
    id: number;
}

// eslint-disable-next-line max-len
export const fetchBlogEntryById = createAsyncThunk<ResultType, FetchByIdOptions, { state: RootState, rejectValue: string }>(
  "blogs/fetchSingle",
  ({ category, id }, { getState, rejectWithValue }) => {
    const state = getState();
    const entry = state.blog.results.find((item) => item.id === id);
    if (entry) {
      return entry;
    }

    if (category === Category.ARTICLES) {
      return articleAPI.getArticleById(id);
    } else {
      return articleAPI.getNewsById(id);
    }
  },
);

const initialState: IArticlesState = {
  results: [],
  isLoading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers(builder): void {
    builder.addCase(fetchAllBlogEntries.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllBlogEntries.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchAllBlogEntries.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default blogSlice.reducer;
