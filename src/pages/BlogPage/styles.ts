import styled from "styled-components";
import { Color } from "ui/colors";
import { typography } from "ui";
import { Link } from "react-router-dom";

const StyledBlog = styled.div`
  ${typography.h1};
  margin-left: 200px;
  display: inline-block;
`;

const StyledBlogButton = styled.div`
  ${typography.h3};
  color: ${Color.PRIMARY};
  text-decoration: underline;
  display: inline-block;
  margin: 50px;
  cursor: pointer;
`;

const StyledBlogWrapper = styled.div`
  display: block;
  margin: 30px;
`;

const StyledBlogList = styled.div`
  width: fit-content;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;

const ArticlesLink = styled(Link)`
  color: ${Color.PRIMARY};
`;

const NewsLink = styled(Link)`
  color: ${Color.PRIMARY};
`;

const ButtonForm = styled.button<{
  activeColor?: boolean;
  activeBorder: boolean;
}>`
  width: 50%;
  height: 100%;
  background: none;
  border: none;
  border-bottom: ${({ activeBorder }) =>
    activeBorder ? `2px solid ${Color.PRIMARY}` : `1px solid ${Color.GRAY}`};
  ${typography.h3};
  color: ${({ activeColor }) => (activeColor ? Color.PRIMARY : Color.GRAY)};
  cursor: pointer;
  transition: all 0.3s ease;
`;

export {
  ButtonForm,
  StyledBlog,
  StyledBlogButton,
  StyledBlogWrapper,
  StyledBlogList,
  ArticlesLink,
  NewsLink,
};
