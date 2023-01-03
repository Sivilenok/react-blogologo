import { StyledButton } from "./styles";

type ButtonType = any

interface IProps {
  children: string;
  type?: ButtonType;
  buttonWidth?: string;
  bgColor?: string;
  buttonColor?: string;
  brColor?: string;
}

export const Button = (props: IProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};