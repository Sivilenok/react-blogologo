import { ArticleItem } from "components/ArticleItem/ArticleItem";
import { FunctionComponent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { fetchAllArticles } from "store/slices/articlesSlice/articlesSlice";
import { StyledArticles } from "./styles";

export const Articles: FunctionComponent = () => {
  const { results: articles, isLoading } = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  return (
    <StyledArticles>
      {isLoading
        ? <div>Loading</div>
        : (
          articles?.map((item) => (
            <ArticleItem key={item.id} article={item} />
          ))
        )}
    </StyledArticles>
  );
};
