import { StyledBlog, StyledBlogButton, StyledBlogWrapper } from "./styles";
import { StyledBlogIcon } from "assets/styles";
import { FunctionComponent, useState } from "react";
import { News } from "components/News/News";
import { Articles } from "components/Articles/Articles";

export const Blog: FunctionComponent = () => {
  const [state, setState] = useState("articles");

  return (
    <StyledBlog>
      <StyledBlogIcon />
      <StyledBlogWrapper>
        <StyledBlogButton onClick={() => setState("articles")}>
          Articles
        </StyledBlogButton>
        <StyledBlogButton onClick={() => setState("news")}>
          News
        </StyledBlogButton>
        {state === "articles" ? <Articles /> : <News />}
      </StyledBlogWrapper>
    </StyledBlog>
  );
};
