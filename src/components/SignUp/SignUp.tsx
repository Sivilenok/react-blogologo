import { Button } from "components/Button/Button";
import { InputWrapper, Label, StyledInput } from "components/Input/styles";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAppDispatch } from "store";
import { setUser } from "store/slices/userSlice/userSlice";
import { BodyForm } from "./styles";
import { auth } from "../../firebase";

interface ISignUp {
  email: string;
  password: string;
  name: string;
}

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSignIn = (userData: ISignUp) => {
    const { email, password, name } = userData;
    console.log(userData);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(
          setUser({
            email: email,
            name: name,
            isAuth: true,
          })
        );
      })
      .then(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
          updateProfile(currentUser, {
            displayName: name,
          });
        }
      });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <BodyForm onSubmit={handleSubmit(handleSignIn)}>
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
