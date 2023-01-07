import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

const StyledDateButtons = styled.button`
  ${typography.h3};
  color: ${Color.PRIMARY};
  background-color: ${Color.COLOR_MAIN};
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
  
export { StyledDateButtons };
