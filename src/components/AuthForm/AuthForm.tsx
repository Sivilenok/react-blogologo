import { SignIn } from "components/SignIn/SignIn";
import { SignUp } from "components/SignUp/SignUp";
import { useState } from "react"
import { ButtonForm, HeaderForm, StyledAuthForm } from "./styles";

export const AuthForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleSignUp = () => {
        setIsSignIn(true);
    };

    const handleSignIn = () => {
        setIsSignIn(false);
    };

    return (
        <StyledAuthForm>
            <HeaderForm>
                <ButtonForm>
                    Sign In
                </ButtonForm>
                <ButtonForm>
                    Sign On
                </ButtonForm>
            </HeaderForm>
            {isSignIn ? <SignIn /> : <SignUp />}
        </StyledAuthForm>
    )
}