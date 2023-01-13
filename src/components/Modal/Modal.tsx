import { Button } from "components/Button/Button";
import { Portal } from "components/Portal/Portal";
import { FunctionComponent, PropsWithChildren } from "react";
import { TargetPortal } from "types/portal";
import { ModalContainer, ModalText, ModalWrapper } from "./styles";

type Props = PropsWithChildren<{
  textButton: string;
  onClick: () => void;
}>

export const Modal: FunctionComponent<Props> = ({ children, textButton, onClick }) => {
  return (
    <Portal target={TargetPortal.MODAL}>
      <ModalWrapper>
        <ModalContainer>
          <ModalText>{children}</ModalText>
          <Button onClick={onClick}>{textButton}</Button>
        </ModalContainer>
      </ModalWrapper>
    </Portal>
  );
};
