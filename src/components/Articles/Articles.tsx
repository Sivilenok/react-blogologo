import { useEffect, useState } from "react"
import { IArticleAPI } from "types/types";
import { articleAPI } from "../../services/restBlogsAPI";
import { BlogItem } from "../BlogItem/BlogItem";
import { StyledArticles } from "./styles";

interface IProps {
  articles: IArticleAPI[];
}

export const Articles = () => {
  const [articles, setArticles] = useState<IArticleAPI[]>([]);

  useEffect(() => {
    articleAPI.getArticles().then(setArticles);
  }, []);
  return (
    <StyledArticles>
       {articles?.map((item) => (
        <BlogItem key={item.id} {...item} />
       ))}
    </StyledArticles>
  );
};

