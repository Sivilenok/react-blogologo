import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-items: center;
  background-color: ${Color.WHITE};
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-self: center;
  padding: 30px;
  width: 400px;
  height: 200px;
  border: 1px solid ${Color.COLOR_MAIN};
  border-radius: 5px;
  text-align: center;
  background: ${Color.GRAY};
`;

const ModalText = styled.div`
  ${typography.h3};
  color: ${Color.PRIMARY};
`;

export { ModalWrapper, ModalContainer, ModalText };