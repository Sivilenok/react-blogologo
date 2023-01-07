import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { IArticleAPI, INewsAPI } from "types/types";
import {
  StyledBlogImg,
  StyledBlogItem,
  StyledDate,
  StyledDescr,
  StyledTitle,
} from "./styles";

interface Props {
    item: IArticleAPI|INewsAPI;
    linkTo: string;
}

const BlogItem: FunctionComponent<Props> = ({ item, linkTo }) => {
  return (
    <StyledBlogItem>
      <Link to={linkTo}>
        <StyledBlogImg src={item.imageUrl} alt={item.newsSite} />
        <StyledDescr>
          <StyledDate>{new Date(item.publishedAt).toLocaleDateString()}</StyledDate>
          <StyledTitle>{item.title}</StyledTitle>
        </StyledDescr>
      </Link>
    </StyledBlogItem>
  );
};

export default BlogItem;
