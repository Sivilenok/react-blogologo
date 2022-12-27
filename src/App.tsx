import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./wrapper";
import { Blog } from "./components/Blog/Blog";
import { Articles } from "./components/Articles/Articles";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Blog />
      <Articles />
      <Footer />
    </Wrapper>
  );
};


