import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

export const StyledBlogImg = styled.img`
  width: 100%;
  height: 208px;
  background-color: black;
  /* border-radius: 16px 16px 0 0; */
`;

export const StyledBlogItem = styled.div`
  width: 352px;
  height: 388px;
  margin: 50px;
  border-radius: 16px;
  background: ${Color.SECONDARY_BG};
  overflow: hidden;
`;

export const StyledDescr = styled.div`
  padding: 32px;
`;

export const StyledDate = styled.div`
  ${typography.b2};
  color: ${Color.PRIMARY_TEXT};
`;

export const StyledTitle = styled.div`
  color: ${Color.PRIMARY_TEXT};
  ${typography.h3}
  align-items: center;
  padding: 8px 0;
`;
