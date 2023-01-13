import { FunctionComponent, useEffect } from "react";
import { StyledBlogIcon } from "assets/styles";
import BlogItem from "components/BlogItem/BlogItem";
import { useParams } from "react-router";
import { getBlog, useAppDispatch, useAppSelector } from "store";
import { Category, fetchAllBlogEntries } from "store/slices/blogSlice/blogSlice";
import {
  StyledBlog,
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
      <StyledBlogIcon />
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
