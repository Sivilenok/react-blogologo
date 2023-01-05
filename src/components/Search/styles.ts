import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledSearch = styled.input`
  padding: 5px;
  width: 100%;
  background: none;
  ::placeholder {
    color: ${Color.PRIMARY_TEXT};
  }

  &:focus {
    border-color: ${Color.PRIMARY};
    box-shadow: 0 0 5px 0 ${Color.PRIMARY};
  }
`;
