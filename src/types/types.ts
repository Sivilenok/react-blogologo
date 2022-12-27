import { store } from "../store";

export interface IBlogsAPI {
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

export interface IBlogs {
    articles: IBlogsAPI[];
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;