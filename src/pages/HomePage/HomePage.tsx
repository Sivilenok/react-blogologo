import { Blog, BurgerMenu } from "components";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  // burger menu
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowSize();
  return (
    <StyledHomePage>
      {width < 768 && <BurgerMenu isOpen={isOpen} />}
      <Blog />
    </StyledHomePage>
  );
};
