import axios from "axios";
import { Key } from "react";
import { IBlogsAPI } from "../types/types";


class restBlogsAPI {
  private readonly BASE_URL = "https://api.spaceflightnewsapi.net/v3/";
  private readonly ENDPOINT = {
    blogs: "blogs",
    articles: "articles",
  };

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });
  id: Key | null | undefined;

  public async getArticles() {

    const { data } = await this.API.get<IBlogsAPI[]>(this.ENDPOINT.articles);

    return data;
  };

  public async getArticlesById(id: number) {

    const { data } = await this.API.get<IBlogsAPI[]>(`${this.ENDPOINT.articles}/${id}`);

    return data;
  }

  public async getBlogs() {

    const { data } = await this.API.get<IBlogsAPI[]>(this.ENDPOINT.blogs);

    return data;
  }

  public async getBlogsById(id: number) {

    const { data } = await this.API.get<IBlogsAPI[]>(`${this.ENDPOINT.blogs}/${id}`);

    return data;
  }
}; 

export const blogsAPI = new restBlogsAPI();