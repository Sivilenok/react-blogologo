import { ArrowButton } from "components/ArrowButton/ArrowButton";
import { StyledBlogImg, StyledDescr, StyledTitle } from "components/BlogItem/styles";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import { IArticleAPI, INewsAPI } from "types/types";
import { StyledDescrText } from "./styles";

interface Props {
  item: IArticleAPI|INewsAPI;
}

export const Descr: FunctionComponent<Props> = ({ item }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { title, imageUrl, summary, url} = item;

  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescr>
        <StyledBlogImg src={imageUrl} />
        <StyledDescrText>{summary}</StyledDescrText>

        {/*<Link href={url} />*/}

      </StyledDescr>
      <ArrowButton />
    </div>
  );
};
