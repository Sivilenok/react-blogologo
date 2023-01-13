import { FunctionComponent } from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { ROUTE } from "router";
import { SigninPage } from "./SigninPage";
import { SignupPage } from "./SignupPage";
import { StyledAuth, StyledAuthPage } from "./styles";

export const AuthPage: FunctionComponent = () => {
  return (
    <StyledAuthPage>
      <StyledAuth>
        <Routes>
          <Route path={ROUTE.SIGNUP} element={<SignupPage />} />
          <Route path={ROUTE.RESET} element={<div>Not implemented yet</div>} />
          <Route path="*" element={<SigninPage />} />
        </Routes>
      </StyledAuth>
    </StyledAuthPage>
  );
};
