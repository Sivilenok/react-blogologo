import { FunctionComponent, useCallback, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  BodyForm,
  InputWrapper,
  Label,
  MessageText,
  SignUpLink,
  StyledInput,
} from "./styles";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";
import { ROUTE } from "router";
import { CustomLink } from "pages/AuthPage/styles";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export interface FormFields {
  email: string;
  password: string;
}

interface Props {
  handleSignInUser: (userData: FormFields) => Promise<void>;
}

export const SignIn: FunctionComponent<Props> = ({ handleSignInUser }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormFields>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit: SubmitHandler<FormFields> = useCallback((data) => {
    handleSignInUser(data)
      .catch((err) => {
        let message: string = err;
        if (err === "auth/user-not-found") {
          message = "Unknown login or password.";
        }

        setError("email", { message });
        setModalOpen(true);
      });
  }, [handleSignInUser, setError]);

  const handleFormErrors: SubmitErrorHandler<FormFields> = useCallback(() => {
    setModalOpen(true);
  }, []);

  return (
    <BodyForm onSubmit={handleSubmit(handleFormSubmit, handleFormErrors)}>
      {isModalOpen && (
        <Modal onClick={() => setModalOpen(false)} textButton="OK">
          {errors.email?.message || errors.password?.message}
        </Modal>
      )}

      <InputWrapper>
        <Label>Email</Label>
        <StyledInput
          type="text"
          placeholder="Your email"
          {...register("email")}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Password</Label>
        <StyledInput
          type="password"
          placeholder="Your password"
          {...register("password")}
        />
        <CustomLink to={`/${ROUTE.AUTH}/${ROUTE.RESET}`}>Forgot password?</CustomLink>
        <Button type="submit">Sign In</Button>
        <MessageText>
          Don't have an account?
          <SignUpLink to={`/${ROUTE.AUTH}/${ROUTE.SIGNUP}`}>Sign Up</SignUpLink>
        </MessageText>
      </InputWrapper>
    </BodyForm>
  );
};


