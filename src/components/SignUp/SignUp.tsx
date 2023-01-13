import { Button } from "components/Button/Button";
import { InputWrapper, Label, StyledInput } from "components/Input/styles";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { BodyForm } from "./styles";
import { ISignUp } from "types";
import { Modal } from "components/Modal/Modal";

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
    handleSubmit,
    watch,
    formState: { errors },
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
        <Label>name</Label>
        <StyledInput {...register("name")} type="text" placeholder="Your name" />
      </InputWrapper>
      <InputWrapper>
        <Label>email</Label>
        <StyledInput {...register("email")} type="text" placeholder="Your email" />
      </InputWrapper>
      <InputWrapper>
        <Label>password</Label>
        <StyledInput {...register("password")} type="password" placeholder="Your password" />
      </InputWrapper>
      <InputWrapper>
        <Label>confirm password</Label>
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
