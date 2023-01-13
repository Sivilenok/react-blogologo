import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

export const StyledButton = styled.button`
  outline: none;
  border: none;
  height: 54px;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  cursor: pointer;
  border-radius: 4px;
  ${typography.b2}
`;
