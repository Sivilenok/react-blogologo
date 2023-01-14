import { FunctionComponent, useEffect } from "react";
import BlogItem from "components/BlogItem/BlogItem";
import { useParams } from "react-router";
import { getBlog, useAppDispatch, useAppSelector } from "store";
import { Category, fetchAllBlogEntries } from "store/slices/blogSlice/blogSlice";
import {
  StyledBlog,
  StyledBlogHeader,
  StyledBlogList,
  StyledBlogWrapper,
} from "pages/BlogPage/styles";

interface Props {
  category: Category;
}

export const SearchPage: FunctionComponent<Props> = ({ category }) => {
  const { query } = useParams();

  const { results, isLoading } = useAppSelector(getBlog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBlogEntries({ category, contains: query }));
  }, [dispatch, category, query]);

  return (
    <StyledBlog>
      <StyledBlogHeader>Blog</StyledBlogHeader>
      <StyledBlogWrapper>
        <StyledBlogList>
          {isLoading ? (
            <div>Loading</div>
          ) : (
            results?.map((item) => (
              <BlogItem
                key={item.id}
                item={item}
                linkTo={`/${category}/${item.id}`}
              />
            ))
          )}
        </StyledBlogList>
      </StyledBlogWrapper>
    </StyledBlog>
  );
};
