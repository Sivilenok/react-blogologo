import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { articleAPI } from "services/restBlogsAPI";
import { IArticleAPI, INewsAPI, RootState } from "types/types";
import { ListOptions } from "services/mappers/listOptionsParams";

type ResultType = IArticleAPI|INewsAPI;
type ResultsType = Array<ResultType>;

interface IArticlesState {
  category: Category;
  results: ResultsType;
  totalCount: number;
  isLoading: boolean;
  error: null|string;
}

export const PerPage: number = 12;

export enum Category {
  ARTICLES = "articles",
  NEWS = "news",
}

export enum Sort {
  AZ = "az",
  ZA = "za",
}

export enum Period {
  DAY,
  WEEK,
  MONTH,
  YEAR,
}

interface FetchAllOptions {
  category: Category;
  sort?: Sort;
  offset?: number;
  contains?: string;
}

interface FetchAllBlogEntriesResult {
  category: Category;
  items: ResultsType;
  totalCount: number;
}

// eslint-disable-next-line max-len
export const fetchAllBlogEntries = createAsyncThunk<FetchAllBlogEntriesResult, FetchAllOptions, { rejectValue: string }>(
  "blog/fetchAll",
  ({ category, sort, offset, contains }, { rejectWithValue }) => {
    const params: ListOptions = {
      limit: PerPage,
      offset,
      contains,
    };
    switch (sort) {
      case Sort.AZ:
        params.sort = "title";
        break;
      case Sort.ZA:
        params.sort = "title"; // TODO: how to set sort order?
        break;
    }

    let itemsPromise: Promise<ResultsType>;
    let countPromise: Promise<number>;
    if (category === Category.ARTICLES) {
      itemsPromise = articleAPI.getArticles(params);
      countPromise = articleAPI.getArticlesCount();
    } else {
      itemsPromise = articleAPI.getNews(params);
      countPromise = articleAPI.getNewsCount();
    }

    return Promise.all([itemsPromise, countPromise])
      .then(([items, totalCount]) => ({
        category,
        items,
        totalCount,
      }))
      .catch((err: AxiosError) => rejectWithValue(err.message));
  },
);

interface FetchByIdOptions {
  category: Category;
  id: number;
}

// eslint-disable-next-line max-len
export const fetchBlogEntryById = createAsyncThunk<ResultType, FetchByIdOptions, { state: RootState, rejectValue: string }>(
  "blogs/fetchSingle",
  ({ category, id }, { getState }) => {
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
  category: Category.ARTICLES,
  results: [],
  totalCount: 0,
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
      state.category = payload.category;
      state.results = payload.items;
      state.totalCount = payload.totalCount;
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
