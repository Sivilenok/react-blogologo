import { Layout } from "components";
import { AuthPage, DescrPage, HomePage, SearchPage } from "pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.AUTH} element={<AuthPage />} />
      <Route path={ROUTE.DESCR} element={<DescrPage />} />
      <Route path={ROUTE.HOME} element={<HomePage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
    </Route>
  ),
);
