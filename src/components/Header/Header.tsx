import { FunctionComponent, KeyboardEventHandler, useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { ROUTE } from "router";
import { useAppSelector } from "store";
import { StyledHeader, StyledSearchWrapper, StyledIconWrapper } from "./styles";
import { StyledSearch } from "components/Search/styles";
import { Account } from "components/Account/Account";
import {
  StyledCrossIcon,
  StyledLogoIcon,
  StyledSearchIcon,
} from "assets/styles";

export const Header: FunctionComponent = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleActive = useCallback(() => {
    setIsActive((state) => !state);
  }, []);

  const category = useAppSelector((state) => state.blog.category);

  const navigate = useNavigate();
  const handleSearchQuery: KeyboardEventHandler<HTMLInputElement> = useCallback((event) => {
    // @ts-ignore
    navigate(`/${category}/${ROUTE.SEARCH}/${event.target.value}`);
  }, [navigate, category]);

  return (
    <StyledHeader>
      <StyledLogoIcon />
      <StyledSearchWrapper>
        {isActive && <StyledSearch placeholder="Search" onKeyUp={handleSearchQuery} />}
        <StyledIconWrapper onClick={toggleActive}>
          {isActive ? <StyledCrossIcon /> : <StyledSearchIcon />}
        </StyledIconWrapper>
      </StyledSearchWrapper>

      <Account/>
    </StyledHeader>
  );
};
