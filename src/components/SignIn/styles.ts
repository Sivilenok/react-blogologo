import { Link } from "react-router-dom";
import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

const BodyForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const StyledInput = styled.input`
  height: 56px;
  margin-bottom: 5px;
  padding: 10px 20px 10px 20px;
  border: 1px solid ${Color.COLOR_MAIN};
  outline: none;
  border-radius: 4px;
  background: ${Color.SECONDARY_BG};
  &::placeholder {
    color: ${Color.TEXT};
    text-transform: capitalize;
  }
`;

const Label = styled.label`
  padding-bottom: 8px;
  ${typography.s1}
  color: ${Color.PRIMARY_TEXT};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageText = styled.div`
  text-align: center;
  color: ${Color.TEXT};
  margin: 24px 0 0;
`;

const SignUpLink = styled(Link)`
  color: ${Color.PRIMARY};
  padding: 0 5px;
`;

export { BodyForm, StyledInput, Label, InputWrapper, MessageText, SignUpLink };