import { useState } from "react";
import { StyledHeader, StyledSearchWrapper, StyledIconWrapper } from "./styles";
import { StyledSearch } from "../Search/styles";
import { Account } from "components/Account/Account";
import {
  StyledCrossIcon,
  StyledLogoIcon,
  StyledUserIcon,
  StyledSearchIcon,
  StyledVectorIcon,
} from "assets/styles";

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <StyledHeader>
      <StyledLogoIcon />
      <StyledSearchWrapper>
        {isActive && <StyledSearch placeholder="Search" />}
        <StyledIconWrapper onClick={() => setIsActive(!isActive)}>
          {isActive ? <StyledCrossIcon /> : <StyledSearchIcon />}
        </StyledIconWrapper>
      </StyledSearchWrapper>
    
      <Account/>
    </StyledHeader>
  );
};
