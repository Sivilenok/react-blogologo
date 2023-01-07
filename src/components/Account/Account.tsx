import { StyledUserIcon } from "assets/styles";
import { getUser, useAppSelector } from "store";
import { StyledAccount, StyledAccountButton } from "./styles";

export const Account = () => {
  const { name, id, isAuth, email } = useAppSelector(getUser);


  return (
    <StyledAccount>
      <StyledAccountButton>
        <StyledUserIcon />
        <span>{isAuth ? name : "Sign in"}</span>
      </StyledAccountButton>
    </StyledAccount>
  );
};
