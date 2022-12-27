import { useState } from "react";
import {
  StyledHeader,
  StyledSearchWrapper,
} from "./styles";
import { StyledSearch } from "../Search/styles";
import { Account } from "components/Account/Account";
import { StyledCrossIcon, StyledLogoIcon, StyledUserIcon, StyledVectorIcon } from "assets/styles";

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <StyledHeader>
      <StyledLogoIcon />
      <StyledSearchWrapper>
        {isActive && <StyledSearch placeholder="Search" />}
        <StyledHeader onClick={() => setIsActive(!isActive)}>
          <StyledVectorIcon />
          <StyledCrossIcon />
          <StyledUserIcon/>
        </StyledHeader>
      </StyledSearchWrapper>
      <Account />
    </StyledHeader>
  );
};
