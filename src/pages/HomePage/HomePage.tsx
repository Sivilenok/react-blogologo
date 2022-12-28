import { Blog, BlogItem, Footer, Header } from "components";
import { Articles } from "components/Articles/Articles";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Articles />
    </StyledHomePage>
  );
};
