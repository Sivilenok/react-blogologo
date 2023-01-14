import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

const StyledDateButton = styled.button<{active: boolean}>`
  ${typography.h3};
  color: ${(props) => props.active ? Color.WHITE : Color.SELECT };
  background-color: ${(props) => props.active ? Color.SELECT : Color.BTN};
  margin: 10px;
  width: 123px;
  height: 56px;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: ${Color.PRIMARY};
    color: ${Color.WHITE};
  }
`;

export { StyledDateButton };
