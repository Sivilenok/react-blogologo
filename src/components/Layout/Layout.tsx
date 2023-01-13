import { Footer, Header } from "components";
import { Outlet } from "react-router";
import { Wrapper } from "wrapper";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
