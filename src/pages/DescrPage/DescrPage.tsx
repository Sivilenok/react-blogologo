import { Descr } from "components/Descr/Descr";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getArticlesById, useAppDispatch, useAppSelector } from "store";
import { fetchArticleById } from "store/slices/getArticleSlice/getArticleSlice";
import { IArticleAPI } from "../../types/types";

export const DescrPage = () => {
  const { id = "" } = useParams();
  // const { results, isLoading, error } = useAppSelector(getArticlesById);
  const results: IArticleAPI = {
      imageUrl: "",
      publishedAt: "123",
      title: "Привет мир",
      id: "123",
      url: "",
      newsSite: "",
      summary: "",
  };
  const isLoading = false;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);
  return (
    <div>{isLoading && <Descr article={results}/>}</div>
  );
};
