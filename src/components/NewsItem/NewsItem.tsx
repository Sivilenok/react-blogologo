import {
  StyledDate,
  StyledDescr,
  StyledTitle,
} from "components/ArticleItem/styles";
import { FunctionComponent } from "react";
import { INewsAPI } from "types/types";
import { StyledNewsImg, StyledNewsItem } from "./styles";

interface Props {
  item: INewsAPI;
}

export const NewsItem: FunctionComponent<Props> = ({ item }) => {
  const { imageUrl, newsSite, publishedAt, title } = item;
  return (
    <StyledNewsItem>
      <StyledNewsImg src={imageUrl} alt={newsSite} />
      <StyledDescr>
        <StyledDate>{new Date(publishedAt).toLocaleDateString()}</StyledDate>
        <StyledTitle>{title}</StyledTitle>
      </StyledDescr>
    </StyledNewsItem>
  );
};
