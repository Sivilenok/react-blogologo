import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

const StyledDescrImg = styled.img`
  width: 1120px;
  height: 518px;
`;

const StyledDescrText = styled.div`
  width: 920px;
  ${typography.b1};
  color: ${Color.TEXT};
`;

const StyledDescrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 48px;
`;

const StyledDescr = styled.div`
  border-radius: 16px;
  background: ${Color.SECONDARY_BG};
  overflow: hidden;
`;

const StyledDescrTitle = styled.div`
  ${typography.h1};
  padding: 0px;
  margin: 56px 0 0;
  display: inline-block;
  word-wrap: break-word;
  width: 1120px;
`;

export {
  StyledDescrImg,
  StyledDescrText,
  StyledDescrWrapper,
  StyledDescr,
  StyledDescrTitle,
};
