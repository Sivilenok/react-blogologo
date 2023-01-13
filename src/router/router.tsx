/* eslint-disable max-len */
import { Layout } from "components";
import { AuthPage, BlogEntryPage, BlogPage, SearchPage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { Category } from "store/slices/blogSlice/blogSlice";
import { ProtectedRoute } from "./ProtectedRoute";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={`/${ROUTE.AUTH}/*`} element={<AuthPage />} />
      <Route path={`/${Category.ARTICLES}/:id`} element={<ProtectedRoute><BlogEntryPage category={Category.ARTICLES} /></ProtectedRoute>} />
      <Route path={`/${Category.NEWS}/:id`} element={<ProtectedRoute><BlogEntryPage category={Category.NEWS} /></ProtectedRoute>} />
      <Route path={`/${Category.ARTICLES}/${ROUTE.SEARCH}/:query`} element={<ProtectedRoute><SearchPage category={Category.ARTICLES} /></ProtectedRoute>} />
      <Route path={`/${Category.NEWS}/${ROUTE.SEARCH}/:query`} element={<ProtectedRoute><SearchPage category={Category.NEWS} /></ProtectedRoute>} />
      <Route path={`/${Category.ARTICLES}`} element={<ProtectedRoute><BlogPage category={Category.ARTICLES} /></ProtectedRoute>} />
      <Route path={`/${Category.NEWS}`} element={<ProtectedRoute><BlogPage category={Category.NEWS} /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to={`/${Category.ARTICLES}`} replace />} />
    </Route>
  ),
);
