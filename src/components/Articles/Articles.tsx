import { useEffect, useState } from "react"
import { blogsAPI } from "../../services/restBlogsAPI";
import { IBlogsAPI } from "../../types/types";
import { BlogItem } from "../BlogItem/BlogItem";
import { StyledArticles } from "./styles";

interface IProps {
  articles: IBlogsAPI[];
}

export const Articles = () => {
  const [articles, setArticles] = useState<IBlogsAPI[]>([]);

  useEffect(() => {
    blogsAPI.getArticles().then(setArticles);
  }, []);
  return (
    <StyledArticles>
       {articles?.map((item) => (
        <BlogItem key={item.id} {...item} />
       ))}
    </StyledArticles>
  );
};

