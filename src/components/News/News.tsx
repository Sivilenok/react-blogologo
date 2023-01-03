import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { fetchAllNews } from "store/slices/newsSlice/newsSlice";
import { NewsItem } from "../NewsItem/NewsItem";
import { StyledNews } from "./styles";

export const News = () => {
  const news = useAppSelector((state) => state.news.results);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllNews());
  }, [dispatch]);

  return (
    <StyledNews>
      {news?.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </StyledNews>
  );
};
