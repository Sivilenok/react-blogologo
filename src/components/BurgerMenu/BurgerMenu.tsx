import { FunctionComponent } from "react";

interface Props {
    isOpen: boolean;
}

export const BurgerMenu: FunctionComponent<Props> = ({ isOpen }) => {
  return (
    <button>BurgerMenu</button>
  );
};
