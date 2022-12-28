import { store } from "../store";

export interface IArticleAPI {
    imageUrl: string;
    publishedAt: string;
    title: string;
    id: number;
    url: string;
    newsSite: string,
    summary: string;
    launches: string;
    code: number;
};

export interface IArticle {
    articles: IArticleAPI;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;