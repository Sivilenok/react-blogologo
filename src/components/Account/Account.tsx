import { StyledUserIcon } from "assets/styles";
import { getUser, useAppSelector } from "store";
import { StyledAccount, StyledAccountButton, StyledSpan } from "./styles";

export const Account = () => {
  const { name, isAuth } = useAppSelector(getUser);

  return (
    <StyledAccount>
      <StyledAccountButton>
        <StyledUserIcon />
        <StyledSpan>{isAuth ? name : "Sign in"}</StyledSpan>
      </StyledAccountButton>
    </StyledAccount>
  );
};
