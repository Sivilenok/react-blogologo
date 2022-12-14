import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

export const StyledFooter = styled.div`
  background-color: ${Color.SECONDARY_BG};
  border-top: 1px solid ${Color.BORDER};
`;

export const StyledText = styled.div`
  ${typography.b2};
  color: ${Color.PRIMARY_TEXT};
  height: 24px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 33px 0;
`;
