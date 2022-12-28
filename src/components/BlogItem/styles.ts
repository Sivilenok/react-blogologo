import styled from "styled-components";
import { typography } from "../../ui";
import { Color } from "../../ui/colors";

const StyledBlogImg = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 16px 16px 0 0;
`;

const StyledBlogItem = styled.div`
  width: 352px;
  height: 388px;
  margin: 50px;
  border-radius: 16px;
  background: ${Color.WHITE};
`;

const StyledDescr = styled.div`
  padding: 32px;
`;

const StyledDate = styled.div`
  ${typography.b2};
  color: ${Color.GRAY};
`;

const StyledTitle = styled.div`
  color: ${Color.PRIMARY};
  ${typography.h3}
  align-items: center;
  padding: 8px 0;
`;

export {
  StyledDescr,
  StyledBlogItem,
  StyledBlogImg,
  StyledDate,
  StyledTitle,
};
