import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

const StyledAccount = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  border-left: 1px solid ${Color.BORDER};
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  margin: 0 32px;
`;

const StyledSpan = styled.span`
  width: max-content;
  padding-left: 16px;
  ${typography.s1};
  color: ${Color.PRIMARY_TEXT};
`;

const StyledAccountButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  color: ${Color.PRIMARY_TEXT};
`;

const StyledUserIcon = styled.span`
  && { 
    white-space: nowrap;
    padding: 10px 20px;
  }
`;

export {
  StyledAccount,
  StyledButton,
  StyledSpan,
  StyledAccountButton,
  StyledUserIcon,
};
