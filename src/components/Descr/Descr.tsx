import { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import { IArticleAPI, INewsAPI } from "types/types";
import {
  StyledDescr,
  StyledDescrImg,
  StyledDescrText,
  StyledDescrTitle,
  StyledDescrWrapper,
} from "./styles";

interface Props {
  item: IArticleAPI | INewsAPI;
}

export const Descr: FunctionComponent<Props> = ({ item }) => {
  const navigate = useNavigate();
  const { title, imageUrl, summary } = item;

  return (
    <StyledDescrWrapper>
      <StyledDescrTitle>{title}</StyledDescrTitle>
      <StyledDescr>
        <StyledDescrImg src={imageUrl} />
      </StyledDescr>
      <StyledDescrText>{summary}</StyledDescrText>
    </StyledDescrWrapper>
  );
};
