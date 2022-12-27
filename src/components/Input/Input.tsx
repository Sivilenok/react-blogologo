
import { InputWrapper, Label, StyledInput } from "./styles";

interface IProps {
  type: string;
  placeholder: string;
  children: string;
}

export const Input = ({ type, placeholder, children }: IProps) => {
  return (
    <InputWrapper>
       <Label>{children}</Label>
       <StyledInput type={type} placeholder={placeholder} />;
    </InputWrapper>
   
  );
 
};