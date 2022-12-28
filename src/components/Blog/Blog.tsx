import { StyledBlog } from "./styles";
import { StyledBlogIcon } from "assets/styles";
import Tabs from "components/Tabs/Tabs";

export const Blog = () => {
  return (
        <StyledBlog>
          <StyledBlogIcon />
          <Tabs />
        </StyledBlog>
  );
};
