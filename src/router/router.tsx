/* eslint-disable max-len */
import { Layout } from "components";
import { AuthPage, BlogEntryPage, BlogPage, SearchPage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { Category } from "store/slices/blogSlice/blogSlice";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={ROUTE.AUTH} element={<AuthPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={`/${Category.ARTICLES}/:id`} element={<BlogEntryPage category={Category.ARTICLES} />} />
      <Route path={`/${Category.NEWS}/:id`} element={<BlogEntryPage category={Category.NEWS} />} />
      <Route path={`/${Category.ARTICLES}`} element={<BlogPage category={Category.ARTICLES} />} />
      <Route path={`/${Category.NEWS}`} element={<BlogPage category={Category.NEWS} />} />
      <Route path="*" element={<Navigate to={`/${Category.ARTICLES}`} />} />
    </Route>
  ),
);
