import styled from "styled-components";
import {
  BurgerMenuIcon,
  CrossIcon,
  LogoIcon,
  Next,
  Prev,
  SearchIcon,
  UserIcon,
  VectorIcon,
} from "assets";
import { Color } from "ui/colors";
import { BurgerMenu } from "components";

const StyledCrossIcon = styled(CrossIcon)``;

const StyledLogoIcon = styled(LogoIcon)`
  width: 137px;
  height: 56px;
  margin: 10px 10px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 100%;
`;

const StyledUserIcon = styled(UserIcon)`
  width: 48px;
  margin: 0 10px;
`;

const StyledVectorIcon = styled(VectorIcon)`
  width: 48px;
`;

const StyledNext = styled(Next)`
  cursor: pointer;
  & path:hover {
    fill: ${Color.PRIMARY};
  }
`;

const StyledPrev = styled(Prev)`
  cursor: pointer;
  & path:hover {
    fill: ${Color.SELECT};
  }
`;

const StyledBurgerMenuIcon = styled(BurgerMenuIcon)`
  & path {
    fill: ${Color.BTN};
  }
`;

export {
  StyledLogoIcon,
  StyledSearchIcon,
  StyledUserIcon,
  StyledVectorIcon,
  StyledNext,
  StyledPrev,
  StyledCrossIcon,
  StyledBurgerMenuIcon
};
