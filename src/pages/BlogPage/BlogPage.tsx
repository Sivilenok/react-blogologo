import { StyledBlogIcon } from "assets/styles";
import BlogItem from "components/BlogItem/BlogItem";
import { DateButtons } from "components/DateButtons/DateButtons";
import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { getBlog, useAppDispatch, useAppSelector } from "store";
import { Category, fetchAllBlogEntries, Sort } from "store/slices/blogSlice/blogSlice";
import { Color } from "ui/colors";
import { StyledBlog, StyledBlogButton, StyledBlogList, StyledBlogWrapper } from "./styles";

const sortOptions: Array<{value: Sort, label: string}> = [
  { value: Sort.AZ, label: "Title (A-Z)" },
  { value: Sort.ZA, label: "Title (Z-A)" },
];

interface Props {
    category: Category;
}

export const BlogPage: FunctionComponent<Props> = ({ category }) => {
  const { results, isLoading } = useAppSelector(getBlog);
  const dispatch = useAppDispatch();

  const [ sort, setSort ] = useState<Sort>();

  useEffect(() => {
    dispatch(fetchAllBlogEntries({ category, sort }));
  }, [dispatch, category, sort]);

  return (
    <StyledBlog>
      <StyledBlogIcon />
      <StyledBlogWrapper>
        <StyledBlogButton>
          <Link to={`/${Category.ARTICLES}`}>
            Articles
          </Link>
        </StyledBlogButton>
        <StyledBlogButton>
          <Link to={`/${Category.NEWS}`}>
            News
          </Link>
        </StyledBlogButton>
        <StyledBlogWrapper>
        <DateButtons />
        <Select
          options={sortOptions}
          onChange={(option) => setSort(option?.value)}
          styles={{
            control: (styles) => ({
              ...styles,
              backgroundColor: Color.SECONDARY_BG,
              border: "none",
              width: 256,
              marginTop: 50,
            }),
          }}
        />
        </StyledBlogWrapper>
        
        <StyledBlogList>
          {isLoading
            ? <div>Loading</div>
            : (
              results?.map((item) => (
                <BlogItem key={item.id} item={item} linkTo={`/${category}/${item.id}`} />
              ))
            )}
        </StyledBlogList>
      </StyledBlogWrapper>
    </StyledBlog>
  );
};
