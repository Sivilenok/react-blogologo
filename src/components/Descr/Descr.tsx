import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { IArticleAPI, INewsAPI } from "types/types";
import {
  Link,
  LinkButton,
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
  const { title, imageUrl, summary, url } = item;

  return (
    <StyledDescrWrapper>
      <StyledDescrTitle>{title}</StyledDescrTitle>
      <StyledDescr>
        <StyledDescrImg src={imageUrl} />
      </StyledDescr>
      <StyledDescrText>{summary}</StyledDescrText>
      <LinkButton
        as={motion.div}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <Link href={url}>Link to the article</Link>
      </LinkButton>
    </StyledDescrWrapper>
  );
};
