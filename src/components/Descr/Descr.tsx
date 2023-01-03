import { ArrowButton } from "components/ArrowButton/ArrowButton";
import { StyledArticleImg, StyledDescr, StyledTitle } from "components/ArticleItem/styles";
import { useNavigate } from "react-router";
import { IArticleAPI } from "types/types";
import { StyledDescrText } from "./styles";

interface IProps {
  article: IArticleAPI;
}

export const Descr = ({ article }: IProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { title, imageUrl, summary, url} = article;

  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescr>
        <StyledArticleImg src={imageUrl} />
        <StyledDescrText>{summary}</StyledDescrText>

        {/*<Link href={url} />*/}

    </StyledDescr>
    <ArrowButton />
    </div>
  );
};
