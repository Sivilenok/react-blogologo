import styled from "styled-components";
import { typography } from "../../ui";
import { Color } from "../../ui/colors";

export const StyledFooter = styled.div`
  width: 100%;
  height: 76px;
  background-color: ${Color.FOOTER};
`;

export const StyledText = styled.div`
  ${typography.b2};
  color: ${Color.GRAY};
  height: 24px;
  margin: 20px;
`;

export const StyledRectangle = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Color.FOOTER};
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`
