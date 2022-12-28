import styled from "styled-components";
import {
  BlogIcon,
  CrossIcon,
  LogoIcon,
  SearchIcon,
  UserIcon,
  VectorIcon,
} from "assets";
import { Color } from "ui/colors";

const StyledBlogIcon = styled(BlogIcon)`
  width: 123px;
  height: 80px;
  margin: 100px;
`;

const StyledCrossIcon = styled(CrossIcon)`
`;

const StyledLogoIcon = styled(LogoIcon)`
  width: 137px;
  height: 56px;
  margin: 10px 10px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 100%;
  background-color: ${Color.COLOR_MAIN};
`;

const StyledUserIcon = styled(UserIcon)`
  width: 48px;
`;

const StyledVectorIcon = styled(VectorIcon)`
  width: 48px;
`;

export {
  StyledBlogIcon,
  StyledCrossIcon,
  StyledLogoIcon,
  StyledSearchIcon,
  StyledUserIcon,
  StyledVectorIcon,
};
