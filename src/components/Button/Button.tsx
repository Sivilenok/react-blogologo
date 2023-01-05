import { StyledButton } from "./styles";
import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};