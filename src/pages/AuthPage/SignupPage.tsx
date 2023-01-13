import { SignUp } from "components";
import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router";
import { ROUTE } from "router";
import { useAppDispatch } from "store";
import { fetchRegisterUser } from "store/slices/userSlice/userSlice";
import { ISignUp } from "types";

export const SignupPage: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRegisterUser = (userData: ISignUp) => {
    dispatch(
      fetchRegisterUser({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    )
      .unwrap()
      .then(() => navigate(ROUTE.HOME))
      .catch(() => setIsOpen(true));
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <SignUp
      handleRegisterUser={handleRegisterUser}
      handleCloseModal={handleCloseModal}
      isOpen={isOpen}
    />
  );
};
