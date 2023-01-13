import { store } from "../store";

export interface IArticleAPI {
  imageUrl: string;
  publishedAt: string;
  title: string;
  id: number;
  url: string;
  newsSite: string;
  summary: string;
}

export interface IArticle {
  articles: IArticleAPI;
}

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

export interface IUserData {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmNewPassword: string;
};

export interface ISignUp {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
