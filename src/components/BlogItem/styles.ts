import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

const StyledBlogImg = styled.img`
  width: 100%;
  height: 208px;
  background-color: black;
`;

const StyledBlogItem = styled.div`
  width: 352px;
  height: 388px;
  margin: 50px;
  border-radius: 16px;
  background: ${Color.SECONDARY_BG};
  overflow: hidden;
`;

const StyledBlogDescr = styled.div`
  padding: 32px;
`;

const StyledDate = styled.div`
  ${typography.b2};
  color: ${Color.PRIMARY_TEXT};
`;

const StyledBlogTitle = styled.div`
  color: ${Color.PRIMARY};
  ${typography.h3}
  align-items: center;
  padding: 8px 0;
`;

export { StyledBlogDescr, StyledBlogTitle, StyledDate, StyledBlogItem, StyledBlogImg };
