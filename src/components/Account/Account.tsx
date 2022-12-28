import { StyledUserIcon, StyledVectorIcon } from "assets/styles";
import { StyledAccount } from "./styles";

export const Account = () => {

  return (
    <StyledAccount>
      <StyledVectorIcon />
      <button style={{display: "flex", alignItems: "center"}}>
        <StyledUserIcon />
        <span style={{whiteSpace: "nowrap", padding: "0 20px"}}>Sign in</span>
      </button>
    </StyledAccount>
  );
};
