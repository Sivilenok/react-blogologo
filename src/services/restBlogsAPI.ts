import axios from "axios";
import { IArticleAPI, INewsAPI } from "types/types";

class restArticleAPI {
  private readonly BASE_URL = "https://api.spaceflightnewsapi.net/v3/";
  private readonly ENDPOINT = {
    blogs: "blogs",
    articles: "articles",
    limit: "_limit",
    title: "title_contains",
  };

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getArticles() {

    const { data } = await this.API.get<IArticleAPI[]>(this.ENDPOINT.articles);

    return data;
  };

  public async getArticlesById(id: string) {
    const { data } = await this.API.get<IArticleAPI>(`${this.ENDPOINT.articles}/${id}`);

    return data;
  };

  public async getNews() {

    const { data } = await this.API.get<INewsAPI[]>(this.ENDPOINT.blogs);

    return data;
  };

  public async getNewsById(id: number) {

    const { data } = await this.API.get<IArticleAPI>(`${this.ENDPOINT.blogs}/${id}`);

    return data;
  }
}

export const articleAPI = new restArticleAPI();
