import { Button } from "components/Button/Button";

interface IProps {
  isOpen: () => void;
}

export const BurgerMenu = ({isOpen}: IProps) => {
  return (
    <Button onClick={isOpen}>
    </Button>
  );
};
