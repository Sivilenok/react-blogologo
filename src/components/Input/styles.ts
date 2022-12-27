import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledInput = styled.input`
  width: 70%;
  height: 10px;
  padding: 16px;
  padding-left: 20px;
  background-color: ${Color.WHITE};
  border: 2px solid transparent;
  border-radius: 10px;
  color: ${Color.WHITE};
  outline: none;
  &::placeholder {
    color: ${Color.PRIMARY};
    text-transform: capitalize;
  }
  &:focus {
    border-color: ${Color.PRIMARY};
  }
  &:disabled {
    background-color: ${Color.WHITE};
    &::placeholder {
      color: ${Color.PRIMARY};
    }
  }
`;

const Label = styled.label`
  padding-bottom: 10px;
  color: ${Color.BLACK};
  text-transform: uppercase;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { StyledInput, InputWrapper, Label };