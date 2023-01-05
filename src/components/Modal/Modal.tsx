import { Portal, TargetPortal } from "components/Portal/Portal";
import { StyledModal } from "./styles";

export const Modal = () => {
  return (
    <Portal target={TargetPortal.MODAL}>
      <StyledModal />
    </Portal>
  );
};
