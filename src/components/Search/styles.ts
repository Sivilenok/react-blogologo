import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledSearch = styled.input`
  padding: 5px;
  width: 100%;
    ::placeholder {
      color: ${Color.SECONDARY};
    }
    &:focus {
    border-color: ${Color.PRIMARY};
    box-shadow: 0px 0px 5px 0 ${Color.PRIMARY};
  }
`;
