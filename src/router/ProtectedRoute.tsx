import { FunctionComponent, PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { useTypedSelector } from "store";
import { ROUTE } from "./routes";

export const ProtectedRoute: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const isAuth = useTypedSelector((state) => state.user.isAuth);
  if (!isAuth) {
    return <Navigate to={`/${ROUTE.AUTH}`} replace />;
  }

  return <>{children}</>;
};
