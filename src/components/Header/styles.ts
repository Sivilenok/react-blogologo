import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 76px;
  background-color: ${Color.WHITE};
  margin: 0;
  outline-color: ${Color.SECONDARY};
`;

const StyledSearchWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: space-between;

`;

const StyledIconWrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
`;


export {
  StyledHeader,
  StyledSearchWrapper,
  StyledIconWrapper,
};
