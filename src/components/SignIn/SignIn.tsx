import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAppDispatch } from "store";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "store/slices/userSlice/userSlice";
import { BodyForm } from "./styles";
import { InputWrapper, Label, StyledInput } from "components/Input/styles";
import { Button } from "components/Button/Button";

interface ISignIn {
  email: string;
  password: string;
}

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = ({ email, password }: ISignIn) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          name: user.displayName,
          isAuth: true,
        })
      );
    });
  };

  return (
    <BodyForm onSubmit={handleSubmit(handleSignIn)}>
      <InputWrapper>
        <Label>email</Label>
        <StyledInput type="text" placeholder="Your email" />
      </InputWrapper>
      <InputWrapper>
        <Label>password</Label>
        <StyledInput type="password" placeholder="Your password" />
        <Button type="submit">Sign In</Button>
      </InputWrapper>
    </BodyForm>
  );
};
