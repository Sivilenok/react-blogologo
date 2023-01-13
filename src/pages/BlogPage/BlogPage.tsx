import { StyledBlogIcon } from "assets/styles";
import BlogItem from "components/BlogItem/BlogItem";
import { DateButtons } from "components/DateButtons/DateButtons";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Select, { components } from "react-select";
import { getBlog, useAppDispatch, useAppSelector } from "store";
import {
  Category,
  fetchAllBlogEntries, Period, PerPage,
  Sort,
} from "store/slices/blogSlice/blogSlice";
import { Color } from "ui/colors";
import {
  ArticlesLink,
  NewsLink,
  StyledBlog,
  StyledBlogButton,
  StyledBlogList,
  StyledBlogWrapper,
} from "./styles";

const sortOptions: Array<{ value: Sort; label: string }> = [
  { value: Sort.AZ, label: "Title (A-Z)" },
  { value: Sort.ZA, label: "Title (Z-A)" },
];

interface Props {
  category: Category;
}

export const BlogPage: FunctionComponent<Props> = ({ category }) => {
  const { results, totalCount, isLoading } = useAppSelector(getBlog);
  const dispatch = useAppDispatch();

  const [offset, setOffset] = useState<number>(0);
  const [sort, setSort] = useState<Sort>();
  const [period, setPeriod] = useState<Period>();

  const handlePageChange = useCallback(({ selected }: { selected: number }) => {
    setOffset(selected * PerPage);
  }, []);

  useEffect(() => {
    dispatch(fetchAllBlogEntries({ category, sort, offset }));
  }, [dispatch, category, sort, offset]);

  return (
    <StyledBlog>
      <StyledBlogIcon />
      <StyledBlogWrapper>
        <StyledBlogButton>
          <ArticlesLink to={`/${Category.ARTICLES}`}>Articles</ArticlesLink>
        </StyledBlogButton>
        <StyledBlogButton>
          <NewsLink to={`/${Category.NEWS}`}>News</NewsLink>
        </StyledBlogButton>
        <StyledBlogWrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <DateButtons active={period} onClick={setPeriod} />

            <Select
              options={sortOptions}
              defaultValue={sortOptions[0]}
              onChange={(option) => setSort(option?.value)}
              styles={{
                control: (styles) => ({
                  ...styles,
                  backgroundColor: Color.SECONDARY_BG,
                  border: "none",
                  width: 256,
                  height: "56px",
                  fontSize: "16px",
                }),
                valueContainer: (styles) => ({
                  ...styles,
                  height: "56px",
                  lineHeight: "24px",
                }),
                menu: (styles) => ({
                  ...styles,
                  lineHeight: "24px",
                  fontSize: "16px",
                  fontWeight: 500,
                }),
                indicatorsContainer: (styles) => ({
                  ...styles,
                  height: "56px",
                  fontSize: "16px",
                }),
                input: (styles) => ({
                  ...styles,
                  margin: 0,
                }),
                singleValue: (styles) => ({
                  ...styles,
                  color: Color.PRIMARY,
                }),
              }}
              components={{
                SingleValue: ({ children, ...props }) => {
                  return (
                    <components.SingleValue {...props} >
                      <span style={{ color: "#31303780" }}>Sort: </span>
                      {children}
                    </components.SingleValue>
                  );
                },
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </StyledBlogWrapper>

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
          <ReactPaginate 
            pageCount={Math.ceil(totalCount / PerPage)}
            onPageChange={handlePageChange}
          />
        </StyledBlogList>
      </StyledBlogWrapper>
    </StyledBlog>
  );
};
