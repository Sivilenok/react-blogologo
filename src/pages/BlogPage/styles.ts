import styled from "styled-components";
import { Color } from "ui/colors";
import { typography } from "ui";
import { Link } from "react-router-dom";

const StyledBlogHeader = styled.h1`
  margin: 70px;
  color: ${Color.SELECT};
  ${typography.h1};
`;

const StyledBlog = styled.div`
  ${typography.h1};
  margin-left: 200px;
  display: inline-block;
`;

const StyledBlogButton = styled.div<{active: boolean}>`
  ${typography.h3};
  display: inline-block;
  margin: 50px;
  cursor: pointer;
  padding: 40px 40px 24px 40px;
  border-bottom: ${({ active }) =>
  active ? `2px solid ${Color.SELECT}` : `2px solid ${Color.BORDER}`};
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
  color: ${Color.SELECT};

`;

const NewsLink = styled(Link)`
  color: ${Color.SELECT};

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
  StyledBlogHeader
};
