import { IBlogsAPI } from "../../types/types";
import {
  StyledBlogImg,
  StyledBlogItem,
  StyledDate,
  StyledDescr,
  StyledTitle,
} from "./styles";

export const BlogItem = ({
  imageUrl,
  newsSite,
  publishedAt,
  title,
}: IBlogsAPI) => {
  return (
    <StyledBlogItem>
        <StyledBlogImg src={imageUrl} alt={newsSite} />
        <StyledDescr>
          <StyledDate>{new Date (publishedAt).toLocaleDateString()}</StyledDate>
          <StyledTitle>{title}</StyledTitle>
        </StyledDescr>
    </StyledBlogItem>
  );
};
