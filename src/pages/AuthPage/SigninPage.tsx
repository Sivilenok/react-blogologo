import { FormFields, SignIn } from "components";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import { ROUTE } from "router";
import { useAppDispatch } from "store";
import { fetchSignIn } from "store/slices/userSlice/userSlice";

export const SigninPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignInUser = (userData: FormFields): Promise<void> => {
    return dispatch(
      fetchSignIn({
        email: userData.email,
        password: userData.password,
      }),
    )
      .unwrap()
      .then(() => navigate(ROUTE.HOME));
  };

  return <SignIn handleSignInUser={handleSignInUser} />;
};
