import { Descr } from "components/Descr/Descr";
import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch } from "store";
import { Category, fetchBlogEntryById } from "store/slices/blogSlice/blogSlice";
import { IArticleAPI, INewsAPI } from "types/types";

interface Props {
    category: Category;
}

export const BlogEntryPage: FunctionComponent<Props> = ({ category }) => {
  const { id } = useParams(); // TODO: force always have id
  const dispatch = useAppDispatch();
  const [entry, setEntry] = useState<IArticleAPI|INewsAPI>();

  useEffect(() => {
    dispatch(fetchBlogEntryById({ category, id: parseInt(id!) }))
      .then(({ payload }) => {
        // @ts-ignore
        setEntry(payload);
      });
  }, [dispatch, category, id]);

  if (!entry) {
    return <div>It's still loading</div>;
  }

  return (
    <Descr item={entry}/>
  );
};
