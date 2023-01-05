import { BurgerMenu, Footer, Header, Modal } from "components";
import { FunctionComponent, useState } from "react";
import { Outlet } from "react-router";
import { useWindowSize } from "usehooks-ts";
import { Wrapper } from "wrapper";

export const Layout: FunctionComponent = () => {
  // burger menu
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();
  const handleOpenModal = () => {
    setIsOpen(true);
  };
    
  return (
    <Wrapper>
      {width < 768 && <BurgerMenu isOpen={isOpen} />}
      <button onClick={handleOpenModal}>BurgerMenu</button>
      {isOpen && <Modal />}
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
