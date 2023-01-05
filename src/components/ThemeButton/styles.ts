import styled from "styled-components";
import { typography } from "ui";
import { Color } from "ui/colors";

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 35px;
  height: 20px;
  background: ${Color.PRIMARY_TEXT};
  position: relative;
  cursor: pointer;
  border-radius: 1.6rem;
  &::after {
    content: "";
    position: absolute;
    left: 3px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${Color.WHITE};
    transition: all 0.4s ease;
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: ${Color.PRIMARY};
    opacity: 0;
    transition: all 0.4s ease;
  }
`;

export const StyledText = styled.div`
  color: ${Color.PRIMARY_TEXT};
  ${typography.b1}
`;

export const StyledTheme = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
`;

export const StyledSwitch = styled.div`
  justify-self: end;
  input {
    display: none;
  }
  & input:checked {
    & ~ label {
      &::before {
        opacity: 1;
      }
      &::after {
        left: 45%;
      }
    }
  }
`;
