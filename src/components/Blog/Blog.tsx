import { StyledBlog } from "./styles";
import Tabs from "../Tabs/Tabs";
import { StyledBlogIcon } from "assets/styles";

export const Blog = () => {
  return (
        <StyledBlog>
          <StyledBlogIcon />
          <Tabs />
        </StyledBlog>
  );
};
