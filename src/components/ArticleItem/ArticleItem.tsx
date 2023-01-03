import { FunctionComponent } from "react";
import { IArticleAPI } from "../../types/types";
import {
  StyledArticleImg,
  StyledArticleItem,
  StyledDate,
  StyledDescr,
  StyledTitle,
} from "./styles";

interface Props {
    article: IArticleAPI;
}

export const ArticleItem: FunctionComponent<Props> = ({ article }) => {
  return (
    <StyledArticleItem>
      <StyledArticleImg src={article.imageUrl} alt={article.newsSite} />
      <StyledDescr>
        <StyledDate>{new Date(article.publishedAt).toLocaleDateString()}</StyledDate>
        <StyledTitle>{article.title}</StyledTitle>
      </StyledDescr>
    </StyledArticleItem>
  );
};
