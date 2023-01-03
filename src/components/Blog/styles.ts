import styled from "styled-components";
import { Color } from "ui/colors";
import { typography } from "../../ui";

const StyledBlog = styled.div`
  ${typography.h1};
  margin-left: 200px; 
  display: inline-grid;

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
  margin: 30px;
`;

export { StyledBlog, StyledBlogButton, StyledBlogWrapper };
