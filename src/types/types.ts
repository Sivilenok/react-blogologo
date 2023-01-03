import { store } from "../store";

export interface IArticleAPI {
  imageUrl: string;
  publishedAt: string;
  title: string;
  id: string;
  url: string;
  newsSite: string;
  summary: string;
};

export interface IArticle {
  articles: IArticleAPI;
};

export interface INewsAPI {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  newsSite: string;
  summary: string;
};

export interface INews {
  news: INewsAPI;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
