
import { InputWrapper, Label, StyledInput } from "./styles";

interface IProps {
  type: string;
  placeholder: string | undefined;
  children: string;
  value: string;
}

export const Input = ({ type, placeholder, children, value }: IProps) => {
  return (
    <InputWrapper>
       <Label>{children}</Label>
       <StyledInput type={type} placeholder={placeholder} value={value}/>;
    </InputWrapper>
   
  );
 
};