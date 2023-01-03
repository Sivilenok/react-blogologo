import styled from "styled-components";
import { Color } from "ui/colors";

const StyledNewsItem = styled.div`
  width: 352px;
  height: 388px;
  margin: 50px;
  border-radius: 16px;
  background: ${Color.WHITE};
`;

const StyledNewsImg = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 16px 16px 0 0;
`;

export { StyledNewsItem, StyledNewsImg };
