import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

const StyledDateButtons = styled.button`
  ${typography.h3};
  color: ${Color.PRIMARY_TEXT};
  background-color: ${Color.SECONDARY_BG};
  margin: 10px;
  width: 123px;
  height: 56px;
  border-radius: 4px;
`;

export { StyledDateButtons };
