import styled  from "styled-components";
import { Color } from "ui/colors";
import { typography } from "ui";

export const StyledBlog = styled.div`
  ${typography.h1};
  margin-left: 200px; 
  display: inline-block;

`;

export const StyledBlogButton = styled.div`
  ${typography.h3};
  color: ${Color.PRIMARY_TEXT};
  text-decoration: underline;
  display: inline-block;
  margin: 50px;
  cursor: pointer;
`;

export const StyledBlogWrapper = styled.div`
  display: block;
  margin: 30px;
`;

export const StyledBlogList = styled.div`
  width: fit-content;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;
