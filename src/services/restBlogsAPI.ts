import axios from "axios";
import { IArticleAPI, INewsAPI } from "types/types";
import mapToRequestParams, { ListOptions } from "./mappers/listOptionsParams";

class RestArticleAPI {
  private readonly BASE_URL = "https://api.spaceflightnewsapi.net/v3/";
  private readonly ENDPOINT = {
    blogs: "blogs",
    articles: "articles",
  };

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getArticles(params: ListOptions = {}): Promise<Array<IArticleAPI>> {
    const { data } = await this.API.get<IArticleAPI[]>(this.ENDPOINT.articles, {
      params: mapToRequestParams(params),
    });

    return data;
  };

  public async getArticleById(id: number) {
    const { data } = await this.API.get<IArticleAPI>(`${this.ENDPOINT.articles}/${id}`);

    return data;
  };

  public async getNews(params: ListOptions = {}): Promise<Array<INewsAPI>> {
    const { data } = await this.API.get<INewsAPI[]>(this.ENDPOINT.blogs, {
      params: mapToRequestParams(params),
    });

    return data;
  };

  public async getNewsById(id: number) {
    const { data } = await this.API.get<IArticleAPI>(`${this.ENDPOINT.blogs}/${id}`);

    return data;
  }
}

export const articleAPI = new RestArticleAPI();
