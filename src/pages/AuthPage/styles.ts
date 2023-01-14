import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui/colors";

const StyledAuthPage = styled.div`
  display: flex;
  justify-content: center;
  margin: 200px;
`;

const StyledAuth = styled.div`
  width: 544px;
  margin-bottom: 100px;
  background: ${Color.SECONDARY_BG};
  border-radius: 16px;
  border: none;
`;

const CustomLink = styled(Link)`
  color: ${Color.TEXT};
  margin: 16px 0 48px;
`;

export { StyledAuthPage, StyledAuth, CustomLink };
