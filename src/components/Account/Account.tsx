import { StyledUserIcon } from "assets/styles";
import { StyledAccount, StyledAccountButton } from "./styles";

export const Account = () => {

  return (
    <StyledAccount>
      <StyledAccountButton>
        <StyledUserIcon />
        <span>Sign in</span>
      </StyledAccountButton>
    </StyledAccount>
  );
};
