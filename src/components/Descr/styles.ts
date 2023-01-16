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

const LinkButton = styled.button`
  background-color: ${Color.TEXT};
  width: 180px;
  text-align: center;
  margin: auto;
  padding: 15px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Link = styled.a`
  ${typography.b2};
  color: ${Color.SELECT};
`;

export {
  StyledDescrImg,
  StyledDescrText,
  StyledDescrWrapper,
  StyledDescr,
  StyledDescrTitle,
  LinkButton, Link
};
