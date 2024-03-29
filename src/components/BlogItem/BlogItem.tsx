import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { IArticleAPI, INewsAPI } from "types/types";
import {
  BlogImg,
  StyledBlogDescr,
  StyledBlogImg,
  StyledBlogItem,
  StyledBlogTitle,
  StyledDate,
} from "./styles";

interface Props {
    item: IArticleAPI|INewsAPI;
    linkTo: string;
}

const BlogItem: FunctionComponent<Props> = ({ item, linkTo }) => {
  return (
    <StyledBlogItem>
      <Link to={linkTo}>
      <BlogImg>
        <StyledBlogImg src={item.imageUrl} alt={item.newsSite} />
      </BlogImg>
        <StyledBlogDescr>
          <StyledDate>{new Date(item.publishedAt).toLocaleDateString()}</StyledDate>
          <StyledBlogTitle>{item.title}</StyledBlogTitle>
        </StyledBlogDescr>
      </Link>
    </StyledBlogItem>
  );
};

export default BlogItem;
