import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

const Label = styled.label`
  padding-bottom: 8px;
  ${typography.s1}
  color: ${Color.BLACK};
  margin: 10px 0;
`;

const Button = styled.button`
  outline: none;
  border: none;
  height: 54px;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  cursor: pointer;
  border-radius: 4px;
  ${typography.b2}
  margin: 20px 0 0;
`;

export { Label, Button };

