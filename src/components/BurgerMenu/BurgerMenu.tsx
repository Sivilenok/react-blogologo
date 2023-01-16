import { StyledBurgerMenuIcon, StyledCrossIcon } from "assets/styles";
import { useLayoutEffect } from "react";
import { BurgerButton } from "./styles";

interface IProps {
  isOpen: boolean;
  toggleOpenMenu: () => void;
  blockBody: (arg: boolean) => void;
}

export const BurgerMenu = ({ isOpen, toggleOpenMenu, blockBody }: IProps)  => {
  useLayoutEffect(() => {
    blockBody(isOpen);
  });

  return (
    <BurgerButton onClick={toggleOpenMenu}>
      {isOpen ? <StyledCrossIcon /> : <StyledBurgerMenuIcon />}
    </BurgerButton>
  );
};
