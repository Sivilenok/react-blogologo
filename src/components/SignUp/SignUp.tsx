import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { ISignUp } from "types";
import { Modal } from "components/Modal/Modal";
import { Button, Label } from "./styles";
import {
  BodyForm,
  InputWrapper,
  StyledInput,
} from "../SignIn/styles";

interface IProps {
  handleRegisterUser: (userData: ISignUp) => void;
  handleCloseModal: () => void;
  isOpen: boolean;
}

export const SignUp: FunctionComponent<IProps> = ({
  handleRegisterUser,
  handleCloseModal,
  isOpen,
}) => {
  const {
    register,
    handleSubmit
  } = useForm<ISignUp>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <BodyForm onSubmit={handleSubmit(handleRegisterUser)}>
      {isOpen && (
        <Modal onClick={handleCloseModal} textButton="Ok">
          User existing!
        </Modal>
      )}
      <InputWrapper>
        <Label>Name</Label>
        <StyledInput {...register("name")} type="text" placeholder="Your name" />
      </InputWrapper>
      <InputWrapper>
        <Label>Email</Label>
        <StyledInput {...register("email")} type="text" placeholder="Your email" />
      </InputWrapper>
      <InputWrapper>
        <Label>Password</Label>
        <StyledInput {...register("password")} type="password" placeholder="Your password" />
      </InputWrapper>
      <InputWrapper>
        <Label>Confirm password</Label>
        <StyledInput 
          {...register("confirmPassword")}
          type="password" 
          placeholder="Confirm your password"
        />
      </InputWrapper>
      <Button type="submit">Sign Up</Button>
    </BodyForm>
  );
};
